import React from 'react';
import {PageLayout} from '../layout/PageLayout';
import {Text} from 'react-native';

const ReceiverView = () => {
  return (
    <PageLayout>
      <Text>Witam</Text>
    </PageLayout>
  );
};

ReceiverView.options = {
  topBar: {
    title: {
      text: 'Receiver',
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
};

export default ReceiverView;
