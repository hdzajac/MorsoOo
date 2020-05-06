import React, {createContext, useState, useMemo} from 'react';

export const PAGES = {
  MODE_DECISION: 'mode decision',
  RECEIVING: 'receiving',
  TRANSMITTING: 'transmitting',
};

export const StateContext = createContext({
  page: PAGES.MODE_DECISION,
});

export const StateContextProvider = props => {
  const [page, setPage] = useState(PAGES.MODE_DECISION);

  const stateContext = useMemo(
    () => ({
      page,
      setPage,
    }),
    [page, setPage]
  );

  return (
    <StateContext.Provider value={stateContext}>
      {props.children}
    </StateContext.Provider>
  );
};
