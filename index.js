/**
 * @format
 */

import { Navigation } from "react-native-navigation";
import HomeView from './src/main/HomeView';
import ReceiverView from "./src/receiving/ReceiverView";
import TransmitterView from "./src/transmitting/TransmitterView";

Navigation.registerComponent('Home', () => HomeView);
Navigation.registerComponent('Receiver', () => ReceiverView);
Navigation.registerComponent('Transmitter', () => TransmitterView);
Navigation.events().registerAppLaunchedListener(() => {
   Navigation.setRoot({
     root: {
       stack: {
         children: [
           {
             component: {
               name: 'Home'
             }
           } 
         ]
       }
     }
  });
});