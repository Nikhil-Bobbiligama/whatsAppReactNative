/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Container, Tab, Tabs, TabHeading, Header, Icon, Text, Platform, StyleSheet, View } from 'native-base';
// import Camera from 'react-native-camera';
import { StatusBar, Image } from 'react-native';
import Chats from './Chats'
import Status from './Status'
import Calls from './Calls'
import search from './images/search.png'
import menu from './images/more.png'


export default class FirstScreen extends Component {
  // takePicture() { this.camera.capture() .then((data) => console.log(data)) .catch(err => console.error(err)); }
  // static navigationOptions = {
  //   title: "Watsapp",
  // }
  render() {
    return (

      <Container style={{ backgroundColor: "white" }}>
        {/* <View style={{height:60,width:"100%",backgroundColor:"#075e54",display:"flex",flexDirection:"row"}}>
     
      <Text style={{paddingLeft:10,paddingTop:15,fontSize:17,width:"80%",fontWeight:"bold",color:"white"}}>WhatsApp</Text>
     
     
      <View style={{height:40,width:90,paddingTop:15,paddingRight:100}}>
      <Image style={{height:22,width:22,paddingRight:20,marginTop:3}} source={search}></Image> 
      <Image style={{height:18,width:18,marginTop:18,position:"absolute",marginLeft:45}} source={menu}></Image> 
      </View>
      </View> */}

        <View style={{
          backgroundColor: "#075e54",
          flexDirection: 'row',
          elevation:0,
          justifyContent: 'space-between',
        }}>
          {/* <View style={{width: 150, height: 50, backgroundColor: 'powderblue'}}></View> */}
          <View style={{ width: 150, height: 53, backgroundColor: '#075e54', elevation: 0 }}>
            <Text style={{ paddingLeft: 10, paddingTop: 15, fontSize: 18, width: "80%", fontWeight: "200", color: "white" }}>WhatsApp</Text>

          </View>

          <View style={{ width: 80, height: 50, backgroundColor: '#075e54' }}>
            <View style={{ height: 40, width: 80, paddingTop: 15, paddingRight: 10 }}>
              <Image style={{ height: 22, width: 22, paddingRight: 20, marginTop: 2 }} source={search}></Image>
              <Image style={{ height: 18, width: 18, marginTop: 18, position: "absolute", marginLeft: 50 }} source={menu}></Image>
            </View>
          </View>
        </View>

        {/* <Header leftComponent={{ text: "helo",backgroundColor:"#075e54", }} hasTabs  />  */}

        <Tabs style={{ flex: 1,elevation:0, color: "#5CA7A2",borderBottomColor:"blue"}} tabContainerStyle = {{elevation: 0}} >

          <Tab heading="CHATS" tabStyle={{ backgroundColor: '#075e54', borderRightColor: "red", shadowOpacity: 0 }} textStyle={{ color: '#5CA7A2', fontSize: 14, fontWeight: 'bold', fontFamily: "HelveticaNeue", }} activeTabStyle={{ backgroundColor: '#075e54' }} activeTextStyle={{ color: '#fff', fontWeight: 'bold', fontSize: 14, fontFamily: "HelveticaNeue", }}>
            <Chats></Chats>
          </Tab>
          <Tab heading="STATUS" tabStyle={{ backgroundColor: '#075e54' }} textStyle={{ color: '#5CA7A2', fontSize: 14, fontWeight: 'bold', fontFamily: "HelveticaNeue", }} activeTabStyle={{ backgroundColor: '#075e54' }} activeTextStyle={{ color: '#fff', fontWeight: 'bold', fontSize: 14, fontFamily: "HelveticaNeue", }}>
            <Status></Status>
          </Tab>
          <Tab heading="CALLS" tabStyle={{ backgroundColor: '#075e54' }} textStyle={{ color: '#5CA7A2', fontSize: 14, fontWeight: 'bold', fontFamily: "HelveticaNeue", }} activeTabStyle={{ backgroundColor: '#075e54' }} activeTextStyle={{ color: '#fff', fontWeight: 'bold', fontSize: 14, fontFamily: "HelveticaNeue", }}>
            <Calls></Calls>
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

