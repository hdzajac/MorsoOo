import React, {createContext, useState, useMemo} from 'react';

export const StyleContext = createContext({
  text: {},
});

export const StyleContextProvider = props => {
  const [text, _setText] = useState(null);

  const styleContext = useMemo(
    () => ({
      text,
    }),
    [text]
  );

  return (
    <StyleContext.Provider value={styleContext}>
      {props.children}
    </StyleContext.Provider>
  );
};
