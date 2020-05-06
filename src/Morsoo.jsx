import React from 'react';
import {View} from 'react-native';
import {StyleContextProvider} from './helpers';
import {StateContextProvider} from './helpers/StateContext';
import {ModeDecision} from './main';

export const Morsooo = () => (
  <StateContextProvider>
    <StyleContextProvider>
      <ModeDecision />
    </StyleContextProvider>
  </StateContextProvider>
);

export default Morsooo;
