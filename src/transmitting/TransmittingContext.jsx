import React, {createContext, useMemo} from 'react';

export const TransmittingContext = createContext({});

export const TransmittingContextProvider = props => {
  const transmittingContext = useMemo(() => ({}), []);

  return (
    <TransmittingContext.Provider value={transmittingContext}>
      {props.children}
    </TransmittingContext.Provider>
  );
};
