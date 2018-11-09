/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Container, Tab, Tabs, TabHeading, Header, Icon, Text, Platform, StyleSheet, View, Form } from 'native-base';
// import Camera from 'react-native-camera';
import { StatusBar, Image } from 'react-native';
import Chats from './Chats'
import { fromLeft } from 'react-navigation-transitions';
import { flipX } from 'react-navigation-transitions';
// import { fromLeft } from 'react-navigation-transitions';

// import ContactScreen from './ContactScreen'
import Status from './Status'
import Calls from './Calls'
import search from './images/search.png'
import menu from './images/more.png'
import ChatboxScreen from './ChatboxScreen';
import FirstScreen from './FirstScreen';
import {createStackNavigator} from 'react-navigation';
import StackViewStyleInterpolator from "react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator";

const RootStack = createStackNavigator(
  {
      Home: { screen: FirstScreen, navigationOptions: { header: null } },
      
      Chatbox: { screen: ChatboxScreen, navigationOptions: { header: null },  transitionConfig: () => fromLeft() }
  },
  {
      initialRouteName: 'Home',
      // transitionConfig: () => fromLeft(450),
      transitionConfig: ()=> {
        return {
          transitionSpec: { duration: 250 },
          screenInterpolator: StackViewStyleInterpolator.forHorizontal}
        }
  }
);

export default class App extends Component {
  // takePicture() { this.camera.capture() .then((data) => console.log(data)) .catch(err => console.error(err)); }
  // static navigationOptions = {
  //   title: "Watsapp",
  // }
  render() {
    return (

    <RootStack />
    );
        
  }
}

