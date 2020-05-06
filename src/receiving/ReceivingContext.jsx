import React, {createContext, useMemo} from 'react';

export const ReceivingContext = createContext({});

export const ReceivingContextProvider = props => {
  const receivingContext = useMemo(() => ({}), []);

  return (
    <ReceivingContext.Provider value={receivingContext}>
      {props.children}
    </ReceivingContext.Provider>
  );
};
