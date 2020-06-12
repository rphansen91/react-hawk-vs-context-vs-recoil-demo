import { useState, useEffect } from "react"

type IListener<V = any> = (v: V) => any
type IHawkOpts<V> = {
  key: string
  default: V
}
type IHawkState<V> = {
  key: string
  default: V
}
type IHawkEyeOpts<V> = {
  key: string
  get: (d: { get: <A>(s: IHawkState<A>) => A }) => V
}
type IHawkEyeState<V> = {
  key: string
  get: (d: { get: <A>(s: IHawkState<A>) => A }) => V
}

function hawkStore () {
  const previousValues: { [key: string]: any } = {}
  const currentValues: { [key: string]: any } = {}
  const listeners: { [key: string]: IListener[] } = {}
  function subscribe<V> (hawk: IHawkState<V>|IHawkEyeState<V>, listener: IListener<V>) {
    if (!listeners[hawk.key]) listeners[hawk.key] = []
    listeners[hawk.key].push(listener)
    console.log('Subscribe to', hawk.key, listeners[hawk.key].length)
    return () => unsubscribe(hawk, listener)
  }
  function unsubscribe<V> (hawk: IHawkState<V>|IHawkEyeState<V>, listener: IListener<V>) {
    if (listeners[hawk.key]) {
      console.log('Unsubscribe from', hawk.key, listeners[hawk.key].length)
      listeners[hawk.key] = listeners[hawk.key].filter(l => l !== listener)
    }
  }
  function dispatch<V> (hawk: IHawkState<V>|IHawkEyeState<V>, value: V) {
    previousValues[hawk.key] = currentValues[hawk.key]
    currentValues[hawk.key] = value
    console.log('Dispatch', hawk.key, value)
    if (listeners[hawk.key]) {
      listeners[hawk.key].forEach(l => l(value))
    }
  }
  function previousValue<V>(hawk: IHawkState<V>|IHawkEyeState<V>) {
    return previousValues[hawk.key] as V|undefined
  }
  function currentValue<V>(hawk: IHawkState<V>|IHawkEyeState<V>) {
    return currentValues[hawk.key] as V
  }
  return {
    subscribe,
    unsubscribe,
    dispatch,
    previousValue,
    currentValue
  }
}

const store = hawkStore()
export function hawk<V>(opts: IHawkOpts<V>): IHawkState<V> {
  store.dispatch(opts, opts.default)
  return {
    ...opts
  }
}

export function hawkeye<V>(opts: IHawkEyeOpts<V>): IHawkEyeState<V> {
  const subscriptions: { [key: string]: (v: IHawkEyeState<V>) => any } = {}
  function dispatch () {
    const nextValue = opts.get({ get })
    store.dispatch(opts, nextValue)
  }
  function get <A>(state: IHawkState<A>) {
    if (!subscriptions[state.key]) {
      subscriptions[state.key] = store.subscribe(state, dispatch)
    }
    return store.currentValue(state)
  }
  const initial = opts.get({ get })
  store.dispatch(opts, initial)
  return {
    ...opts
  }
}

export function useHawkState<V>(hawkState: IHawkState<V>|IHawkEyeState<V>) {
  const [state, setState] = useState(store.currentValue(hawkState))
  useEffect(() => store.subscribe(hawkState, setState), [])
  return state
}

type Setter<V> = ((v: V) => V)

export function useHawkSetState<V>(hawkState: IHawkState<V>) {
  return (setter: V | Setter<V>) => {
    if (typeof setter !== 'function') {
      store.dispatch(hawkState, setter)
    } else {
      const currValue = store.currentValue(hawkState)
      const nextValue = typeof setter === 'function' ? (setter as Setter<V>)(currValue) : setter
      store.dispatch(hawkState, nextValue)
    }
  }
}