import React, {
  createContext,
  useContext,
  useState,
  FC,
  Dispatch,
  SetStateAction,
} from "react";
import Counter from "../Components/Counter";

const CounterContext = createContext<{
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}>({
  value: 0,
  setValue: (n = 1) => console.warn("CounterProvider not supplied"),
});

const useCounterValue = () => {
  const { value } = useContext(CounterContext);
  return value;
};

const useCounterIsEven = () => {
  const { value } = useContext(CounterContext);
  return value % 2 ? "odd" : "even";
};

const useDecrease = () => {
  const { setValue } = useContext(CounterContext);
  const decrease = (n = 1) => {
    setValue((v) => v - n);
  };
  return decrease;
};

const useIncrease = () => {
  const { setValue } = useContext(CounterContext);
  const increase = (n = 1) => {
    setValue((v) => v + n);
  };
  return increase;
};

export const CounterProvider: FC = ({ children }) => {
  const [value, setValue] = useState(0);
  return (
    <CounterContext.Provider value={{ value, setValue }}>
      {children}
    </CounterContext.Provider>
  );
};

export const ContextCounter = () => {
  const count = useCounterValue();
  const even = useCounterIsEven();
  const decrease = useDecrease();
  const increase = useIncrease();
  return (
    <Counter
      title="Context Counter"
      value={count}
      helperText={`${count} is ${even}`}
      onIncrease={() => increase(1)}
      onDecrease={() => decrease(1)}
    />
  );
};

export default ContextCounter
