import React from 'react';
import { hawk, hawkeye, useHawkState, useHawkSetState } from 'react-hawk';

const counterState = hawk({
  key: 'counter',
  default: 0
});

const isEvenState = hawkeye({
  key: 'isEven',
  get: ({ get }) => {
    const count = get(counterState)
    return Boolean(count % 2) ? 'odd' : 'even'
  }
})

const useIncrease = () => {
  const setCounter = useHawkSetState(counterState)
  const increase = (n = 1) => {
    setCounter(count => count + n)
  }
  return increase
}

const useDecrease = () => {
  const setCounter = useHawkSetState(counterState)
  const decrease = (n = 1) => {
    setCounter(count => count - n)
  }
  return decrease
}

export const Counter = () => {
  const count = useHawkState(counterState)
  const even = useHawkState(isEvenState)
  const decrease = useDecrease()
  const increase = useIncrease()
  return (
    <>
      <button onClick={() => decrease()}>-</button>
      {count} is {even}
      <button onClick={() => increase()}>+</button>
    </>
  )
}