import React, {Component, useState} from 'react';
import {PageLayout} from '../layout/PageLayout';
import {Form, Label, Textarea} from 'native-base';

const TransmitterView = () => {
  const [message, setMessage] = useState('');

  return (
    <PageLayout>
      <Form>
        <Label>Write whatever</Label>
        <Textarea
          rowSpan={5}
          bordered
          onChangeText={text => setMessage(text)}
          value={message}
        />
      </Form>
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
