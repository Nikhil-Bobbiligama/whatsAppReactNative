
import React, { Component } from 'react';
import { Container, Tab, Tabs, TabHeading, Header, Icon, Text, Platform, StyleSheet, View, Form } from 'native-base';
import { StatusBar, Image } from 'react-native';
import Chats from './Chats'
import { fromLeft } from 'react-navigation-transitions';
import { flipX } from 'react-navigation-transitions';
import Status from './Status'
import Calls from './Calls'
import search from './images/search.png'
import menu from './images/more.png'
import ChatboxScreen from './ChatboxScreen';
import FirstScreen from './Firstscrn';
import {createStackNavigator} from 'react-navigation';
import StackViewStyleInterpolator from "react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator";

const RootStack = createStackNavigator(
  {
      Home: { screen: FirstScreen, navigationOptions: { header: null } },
      
      Chatbox: { screen: ChatboxScreen, navigationOptions: { header: null },  transitionConfig: () => fromLeft() }
  },
  {
      initialRouteName: 'Home',
     
      transitionConfig: ()=> {
        return {
          transitionSpec: { duration: 270 },
          screenInterpolator: StackViewStyleInterpolator.forHorizontal}
        }
  }
);

export default class App extends Component {
  render() {
    StatusBar.setBackgroundColor("#04413A")
    StatusBar.setBarStyle("light-content")
    return (
     

    <RootStack />
    );
        
  }
}

