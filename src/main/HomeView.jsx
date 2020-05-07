import React from 'react';
import {Navigation} from 'react-native-navigation';
import {PageLayout} from '../layout/PageLayout';
import {Text, Button} from 'react-native';

const HomeView = props => {
  return (
    <PageLayout>
      <Button
        title="Receiver"
        onPress={() => {
          Navigation.push(props.componentId, {
            component: {
              name: 'Receiver', // Push the screen registered with the 'Settings' key
              options: {
                // Optional options object to configure the screen
                topBar: {
                  title: {
                    text: 'Listening', // Set the TopBar title of the new Screen
                  },
                },
              },
            },
          });
        }}
      />
      <Button
        title="Transmitter"
        onPress={() => {
          Navigation.push(props.componentId, {
            component: {
              name: 'Transmitter', // Push the screen registered with the 'Settings' key
              options: {
                // Optional options object to configure the screen
                topBar: {
                  title: {
                    text: 'Say something', // Set the TopBar title of the new Screen
                  },
                },
              },
            },
          });
        }}
      />
    </PageLayout>
  );
};

HomeView.options = {
  topBar: {
    title: {
      text: 'Home',
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
};

export default HomeView;
