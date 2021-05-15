import { createContext, useState } from 'react';

export const CounterContext = createContext();

export const CounterContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [diff, setDiff] = useState(0);

  const onIncrement = () => setCount((prevCount) => prevCount + (diff || 1));
  const onDecrement = () => setCount((prevCount) => prevCount - (diff || 1));
  const onReset = () => setCount(0);

  const handleDiff = ({ target }) => setDiff(target.valueAsNumber);

  return (
    <CounterContext.Provider
      value={{
        count,
        diff,
        setCount,
        setDiff,
        onDecrement,
        onIncrement,
        onReset,
        handleDiff,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};
