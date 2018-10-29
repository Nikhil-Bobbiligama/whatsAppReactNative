/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Container, Tab, Tabs, TabHeading,Header, Icon, Text, Platform, StyleSheet, View } from 'native-base';
// import Camera from 'react-native-camera';
import { StatusBar } from 'react-native';
import Chats from './Chats'
import Status from './Status'


export default class App extends Component {
  // takePicture() { this.camera.capture() .then((data) => console.log(data)) .catch(err => console.error(err)); }
  // static navigationOptions = {
  //   title: "Watsapp",
  // }
  render() {
    return (

      <Container style={{ backgroundColor: "white" }}>
      <View style={{height:60,width:"100%",backgroundColor:"#075e54",}}>
      <View style={{height:60,width:"60%"}}>
      <Text style={{paddingLeft:10,paddingTop:15,fontSize:17,fontWeight:"bold",color:"white"}}>WhatsApp</Text>
      </View>
      <View style={{height:60,float:"right",backgroundColor:"red"}}>
      <Text style={{paddingLeft:10,paddingTop:15,fontSize:17,fontWeight:"bold",color:"white"}}>WhatsApp</Text>
      </View>
      </View>
        {/* <Header leftComponent={{ text: "helo",backgroundColor:"#075e54", }} hasTabs  />  */}

        <Tabs style={{ flex: 1 }}>

          <Tab heading={<TabHeading style={{ backgroundColor: "#075e54", alignItems: "center" }} ><Text style={{ textAlign: "center" }}>CHATS</Text></TabHeading>}>
            <Chats></Chats>
          </Tab>
          <Tab heading={<TabHeading style={{ backgroundColor: "#075e54", alignItems: "center" }}><Text style={{ textAlign: "center" }}> STATUS</Text></TabHeading>}>
            <Status></Status>
          </Tab>
          <Tab heading={<TabHeading style={{ backgroundColor: "#075e54", alignItems: "center" }} ><Text style={{ textAlign: "center" }}> CALLS</Text></TabHeading>}>

          </Tab>
        </Tabs>
      </Container>

      // <View style={styles.container}>
      //   <Text style={styles.welcome}>Welcome to React Native!</Text>
      //   <Text style={styles.instructions}>To get started, edit App.js</Text>
      //   <Text style={styles.instructions}>{instructions}</Text>
      // </View>
    );
  }
}

