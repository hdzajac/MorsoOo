import React from 'react';
import {View} from 'react-native';

export const PageLayout = props => {
  return (
    <View style={{flex: 1, backgroundColor: 'powderblue'}}>
      {props.children}
    </View>
  );
};

export default PageLayout;
