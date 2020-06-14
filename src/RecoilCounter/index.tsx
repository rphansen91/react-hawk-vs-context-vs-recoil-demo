
import React from 'react';
import { atom, selector, useRecoilValue, useSetRecoilState } from 'recoil';
import Counter from '../Components/Counter'

const counterState = atom({
  key: 'counter',
  default: 0
});

const isEvenState = selector({
  key: 'isEven',
  get: ({ get }) => {
    const count = get(counterState)
    return count % 2 ? 'odd' : 'even'
  }
})

const useIncrease = () => {
  const setCounter = useSetRecoilState(counterState)
  const increase = (n = 1) => {
    setCounter(count => count + n)
  }
  return increase
}

const useDecrease = () => {
  const setCounter = useSetRecoilState(counterState)
  const decrease = (n = 1) => {
    setCounter(count => count - n)
  }
  return decrease
}

export const RecoilCounter = () => {
  const count = useRecoilValue(counterState)
  const even = useRecoilValue(isEvenState)
  const decrease = useDecrease()
  const increase = useIncrease()
  return (
    <Counter
      title="Recoil Counter"
      value={count}
      helperText={`${count} is ${even}`}
      onIncrease={() => increase(1)}
      onDecrease={() => decrease(1)}
    />
  );
}