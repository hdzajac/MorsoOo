import React from 'react';
import {PageLayout} from '../layout/PageLayout';
import {Text} from 'react-native';

const TransmitterView = () => {
  return (
    <PageLayout>
      <Text>Witam</Text>
    </PageLayout>
  );
};

TransmitterView.options = {
  topBar: {
    title: {
      text: 'Transmitter',
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
};

export default TransmitterView;
