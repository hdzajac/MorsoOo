import React from 'react';
import {StyleContextProvider} from './helpers';
import {View, Text} from 'react-native';

export const Morsooo = () => (
  <StyleContextProvider>
    <View>
      <Text>Hello World!</Text>
    </View>
  </StyleContextProvider>
);

export default Morsooo;
