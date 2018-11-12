// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React, { Component } from 'react';
// import { Container, Tab, Tabs, TabHeading, Header, Icon, Text, Platform, StyleSheet, View } from 'native-base';
// // import Camera from 'react-native-camera';
// import { StatusBar, Image } from 'react-native';
// import Chats from './Chats'
// import Status from './Status'
// import Calls from './Calls'
// import search from './images/search.png'
// import menu from './images/more.png'


// export default class FirstScreen extends Component {
//   // takePicture() { this.camera.capture() .then((data) => console.log(data)) .catch(err => console.error(err)); }
//   // static navigationOptions = {
//   //   title: "Watsapp",
//   // }
//   render() {
//     return (

//       <Container style={{ backgroundColor: "white" }}>
//         {/* <View style={{height:60,width:"100%",backgroundColor:"#075e54",display:"flex",flexDirection:"row"}}>

//       <Text style={{paddingLeft:10,paddingTop:15,fontSize:17,width:"80%",fontWeight:"bold",color:"white"}}>WhatsApp</Text>


//       <View style={{height:40,width:90,paddingTop:15,paddingRight:100}}>
//       <Image style={{height:22,width:22,paddingRight:20,marginTop:3}} source={search}></Image> 
//       <Image style={{height:18,width:18,marginTop:18,position:"absolute",marginLeft:45}} source={menu}></Image> 
//       </View>
//       </View> */}

//         <View style={{
//           backgroundColor: "#075e54",
//           flexDirection: 'row',
//           elevation: 0,
//           justifyContent: 'space-between',
//         }}>
//           {/* <View style={{width: 150, height: 50, backgroundColor: 'powderblue'}}></View> */}
//           <View style={{ width: 150, height: 53, backgroundColor: '#075e54', elevation: 0 }}>
//             <Text style={{ paddingLeft: 10, paddingTop: 15, fontSize: 18, width: "80%", fontWeight: "200", color: "white" }}>WhatsApp</Text>

//           </View>

//           <View style={{ width: 80, height: 50, backgroundColor: '#075e54' }}>
//             <View style={{ height: 40, width: 80, paddingTop: 15, paddingRight: 10 }}>
//               <Image style={{ height: 22, width: 22, paddingRight: 20, marginTop: 2 }} source={search}></Image>
//               <Image style={{ height: 18, width: 18, marginTop: 18, position: "absolute", marginLeft: 50 }} source={menu}></Image>
//             </View>
//           </View>
//         </View>

//         {/* <Header leftComponent={{ text: "helo",backgroundColor:"#075e54", }} hasTabs  />  */}

//         <Tabs style={{ flex: 1, elevation: 0, color: "#5CA7A2", borderBottomColor: "blue" }} tabContainerStyle={{ elevation: 0 }} >

//           <Tab heading="CHATS" tabStyle={{ backgroundColor: '#075e54', borderRightColor: "red", shadowOpacity: 0 }} textStyle={{ color: '#5CA7A2', fontSize: 14, fontWeight: 'bold', fontFamily: "HelveticaNeue", }} activeTabStyle={{ backgroundColor: '#075e54' }} activeTextStyle={{ color: '#fff', fontWeight: 'bold', fontSize: 14, fontFamily: "HelveticaNeue", }}>
//             <Chats></Chats>
//           </Tab>
//           <Tab heading="STATUS" tabStyle={{ backgroundColor: '#075e54' }} textStyle={{ color: '#5CA7A2', fontSize: 14, fontWeight: 'bold', fontFamily: "HelveticaNeue", }} activeTabStyle={{ backgroundColor: '#075e54' }} activeTextStyle={{ color: '#fff', fontWeight: 'bold', fontSize: 14, fontFamily: "HelveticaNeue", }}>
//             <Status></Status>
//           </Tab>
//           <Tab heading="CALLS" tabStyle={{ backgroundColor: '#075e54' }} textStyle={{ color: '#5CA7A2', fontSize: 14, fontWeight: 'bold', fontFamily: "HelveticaNeue", }} activeTabStyle={{ backgroundColor: '#075e54' }} activeTextStyle={{ color: '#fff', fontWeight: 'bold', fontSize: 14, fontFamily: "HelveticaNeue", }}>
//             <Calls></Calls>
//           </Tab>
//         </Tabs>
//       </Container>

//       // <View style={styles.container}>
//       //   <Text style={styles.welcome}>Welcome to React Native!</Text>
//       //   <Text style={styles.instructions}>To get started, edit App.js</Text>
//       //   <Text style={styles.instructions}>{instructions}</Text>
//       // </View>
//     );
//   }
// }

import React, { Component } from "react";
import { Animated, Dimensions, Platform, Text, View, Image, ScrollView } from 'react-native';
import { Body, Header, List, ListItem as Item, ScrollableTab, Tab, Tabs, Title, Button, } from "native-base";

import search from './images/search.png'
import menu from './images/more.png'

import Chats from './Chats'
import Status from './Status'
import Calls from './Calls'
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Icon5 from 'react-native-vector-icons/dist/Entypo';


import { withNavigation } from 'react-navigation';
import Icon2 from 'react-native-vector-icons/dist/FontAwesome';
import Icon3 from 'react-native-vector-icons/dist/FontAwesome5';
import { Container, TabHeading, Footer, FooterTab, Row } from 'native-base';
import dhonidp from './images/dhonidp.jpeg'
import adbdp from './images/adbdp.jpeg'
import viratdp from './images/viratdp.jpeg'
import salmandp from './images/salmandp.jpeg'
import maheshdp from './images/maheshdp.jpeg'
import addmessage from './images/addmessage.png'
import smiley from './images/smiley3.png'
import ticks from './images/2ticks.png'
import blueticks from './images/whatsapp-blue-ticks.png'
import { StyleSheet, ImageBackground, TouchableOpacity, FlatList, Alert, TouchableWithoutFeedback, TouchableNativeFeedback, Modal, TouchableHighlight, TextInput } from 'react-native';
const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    width: 55,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 18,
    backgroundColor: '#25D366',
    borderRadius: 30,
    zIndex: 5,
    elevation: 20
  },
  fabIcon: {
    fontSize: 40,
    color: 'white'
  }
});
const NAVBAR_HEIGHT = 56;
const COLOR = "#075e54";
const TAB_PROPS = {
  tabStyle: { width: "100%", backgroundColor: COLOR },
  activeTabStyle: { width: "100%", backgroundColor: COLOR },
  textStyle: { color: "white" },
  activeTextStyle: { color: "white" }
};
var spd=50,spdvisible="WhatsApp",spdicon=0;
export default class FirstScreen extends Component {
  scroll = new Animated.Value(0);
  headerY;

  constructor(props) {
    super(props);
    this.state = {
      fabicon1: "message-text",
      fabicon2: "pencil",
      modalvisible: false,
      whatsappheight: 50,
      modalimage: "",
      a: [{
        contactName: "Dhoni",
        message: "Hi Nikhil Watsapp",
        time: "12:45 PM",
        id: 1,
        number: 9700911060,
        displayPic: dhonidp,
      },
      {
        contactName: "Virat",
        message: "Hi Nikhil ",
        time: "27/10/18",
        number: 8374151515,
        id: 2,
        displayPic: viratdp,
      },
      {
        contactName: "Mahesh",
        message: "Hi Nikhil ",
        time: "10:45 PM",
        number: 9059514901,
        id: 3,
        displayPic: maheshdp,
      },
      {
        contactName: "Salman",
        message: "hii ",
        time: "1:45 PM",
        id: 4,
        number: 9491903177,
        displayPic: salmandp,
      },
      {
        contactName: "ABD",
        message: "Hey...",
        time: "YESTERDAY",
        number: 9948434361,
        id: 5,
        displayPic: adbdp,
      },
      {
        contactName: "Dhoni",
        message: "Hi Nikhil Watsapp",
        time: "12:45 PM",
        id: 1,
        number: 9700911060,
        displayPic: dhonidp,
      },
      {
        contactName: "Virat",
        message: "Hi Nikhil ",
        time: "27/10/18",
        number: 8374151515,
        id: 2,
        displayPic: viratdp,
      },
      {
        contactName: "Mahesh",
        message: "Hi Nikhil ",
        time: "10:45 PM",
        number: 9059514901,
        id: 3,
        displayPic: maheshdp,
      },
      {
        contactName: "Salman",
        message: "hii ",
        time: "1:45 PM",
        id: 4,
        number: 9491903177,
        displayPic: salmandp,
      },
      {
        contactName: "ABD",
        message: "Hey...",
        time: "YESTERDAY",
        number: 9948434361,
        id: 5,
        displayPic: adbdp,
      },
      {
        contactName: "Dhoni",
        message: "Hi Nikhil Watsapp",
        time: "12:45 PM",
        id: 1,
        number: 9700911060,
        displayPic: dhonidp,
      },
      {
        contactName: "Virat",
        message: "Hi Nikhil ",
        time: "27/10/18",
        number: 8374151515,
        id: 2,
        displayPic: viratdp,
      },
      {
        contactName: "Mahesh",
        message: "Hi Nikhil ",
        time: "10:45 PM",
        number: 9059514901,
        id: 3,
        displayPic: maheshdp,
      },
      {
        contactName: "Salman",
        message: "hii ",
        time: "1:45 PM",
        id: 4,
        number: 9491903177,
        displayPic: salmandp,
      },
      {
        contactName: "ABD",
        message: "Hey...",
        time: "YESTERDAY",
        number: 9948434361,
        id: 5,
        displayPic: adbdp,
      },
      {
        contactName: "Dhoni",
        message: "Hi Nikhil Watsapp",
        time: "12:45 PM",
        id: 1,
        number: 9700911060,
        displayPic: dhonidp,
      },
      {
        contactName: "Virat",
        message: "Hi Nikhil ",
        time: "27/10/18",
        number: 8374151515,
        id: 2,
        displayPic: viratdp,
      },
      {
        contactName: "Mahesh",
        message: "Hi Nikhil ",
        time: "10:45 PM",
        number: 9059514901,
        id: 3,
        displayPic: maheshdp,
      },
      ]
    }



    this.imageview = this.imageview.bind(this);
    this.tabchangeEventHandler = this.tabchangeEventHandler.bind(this);
    // const { navigation } = this.props;
    // const chatscroll = navigation.getParam('y1', 'NO-ID');
    // this.scroll= chatscroll;
    // console.log(chatscroll);
    // console.log(this.scroll)
    // this.headerY = Animated.multiply(Animated.diffClamp(this.scroll, 0, NAVBAR_HEIGHT), -1);
  }
  componentWillMount() {
    const { navigation } = this.props;
    const main_up_down = navigation.getParam('up_down', 'NO-ID');

    // const chatscroll = navigation.getParam('y1', 'NO-ID');
    // // this.scroll= chatscroll;
    // console.log(chatscroll);
    // console.log(this.scroll)
    // alert(main_up_down);
    this.headerY = Animated.multiply(Animated.diffClamp(this.scroll, 0, NAVBAR_HEIGHT), -1);
  }
  setModalVisible(visible) {
    this.setState({
      modalvisible: visible,
    })
  }
  imageview(imagesrc, e) {
    this.setState({ modalvisible: true, modalimage: imagesrc });
  }
  getContacts(displaypic, displayname) {

    const { navigate } = this.props.navigation;
    navigate('Chatbox', { pic: displaypic, name: displayname });
    // navigate('ViewStudent', { id: id, sname: name, sage: age, semail: email });


  }
  onBackPress() {
    this.setState({ modalvisible: false });
  }
  tabchangeEventHandler(i) {
    alert(i.i);
  }

  ////////////////////////////////
  // takePicture() { this.camera.capture() .then((data) => console.log(data)) .catch(err => console.error(err)); }
  static navigationOptions = {
    title: "Watsapp"
  }
  checkscroll(y) {
    // alert("check " + y);
    if (y === "down") {
      // this.setState({ whatsappheight: 50 });
      spd=50;
      spdvisible="WhatsApp";
      spdicon=0;
    }
    if (y === "up") {
      // this.setState({ whatsappheight: 0 });
      spd=0;
      spdvisible="";
      spdicon=22;
    }
  }
  xyz(scrollcheck) {
    console.log(scrollcheck + " hello");
  //  alert(scrollcheck + " hello");
  }
  calldummy() {
    console.log("chats screen called-------------------------------");
  }
  render() {
    // const tabContent = (
    //   // <List>{new Array(20).fill(null).map((_, i) => <Item
    //   //   key={i}><Text> {i}</Text></Item>)}</List>

    // );
    const tabContent2 = (
      <List>{new Array(40).fill(null).map((_, i) => <Item
        key={i}><Text> {i}</Text></Item>)}</List>


    );
    const tabY = Animated.add(this.scroll, this.headerY);
    return (
      <View style={{ width: "100%", height: "100%" }}>
        {Platform.OS === "ios" &&
          <View style={{ backgroundColor: COLOR, height: 20, width: "100%", position: "absolute", zIndex: 2 }} />}
        <Animated.View style={{
          width: "100%",
          position: "absolute",
          transform: [{
            translateY: this.headerY
          }],
          elevation: 0,
          flex: 1,
          zIndex: 1,
          backgroundColor: COLOR
        }}>
          <Header style={{ backgroundColor: "transparent" ,height:spd}} hasTabs>
            <Body>

              <View style={{
                backgroundColor: "#075e54",
                flexDirection: 'row',
                elevation: 0,
                height:spd,
                width: "100%",
                justifyContent: 'space-between',
              }}>
                {/* <View style={{width: 150, height: 50, backgroundColor: 'powderblue'}}></View> */}
                <View style={{ width: 150, height: spd, backgroundColor: '#075e54', elevation: 0 }}>
                  <Text style={{ paddingLeft: 10, paddingTop: 15, fontSize: 18, width: "80%", fontWeight: "200",visible:false, color: "white" }}>{spdvisible}</Text>

                </View>

                <View style={{ width: 80, height: spd, backgroundColor: '#075e54' }}>
                  <View style={{ height: 40, width: 80, paddingTop: 15, paddingRight: 10 }}>
                    <Image style={{ height: 22-spdicon, width: 22-spdicon, paddingRight: 20, marginTop: 2 ,visible:spdvisible}} source={search}></Image>
                    <Image style={{ height: 18-spdicon, width: 18-spdicon, marginTop: 18, position: "absolute", marginLeft: 50,visible:spdvisible }} source={menu} ></Image>
                  </View>
                </View>
              </View>

            </Body>
          </Header>

        </Animated.View>
        {/* <View style={{backgroundColor:"red",width:"100%",height:100}}></View> */}

        <Tabs onChangeTab={(i) => this.tabchangeEventHandler(i)} style={{ flex: 1, elevation: 0, color: "#5CA7A2", borderBottomColor: "blue", paddingTop: spd }} tabContainerStyle={{ elevation: 0 }} >

          <Tab heading="CHATS" tabStyle={{ backgroundColor: '#075e54', borderRightColor: "red", shadowOpacity: 0 }} textStyle={{ color: '#5CA7A2', fontSize: 14, fontWeight: 'bold', fontFamily: "HelveticaNeue", }} activeTabStyle={{ backgroundColor: '#075e54' }} activeTextStyle={{ color: '#fff', fontWeight: 'bold', fontSize: 14, fontFamily: "HelveticaNeue", }}>
            <Chats xyz={this.checkscroll}></Chats>
          </Tab>
          <Tab heading="STATUS" tabStyle={{ backgroundColor: '#075e54' }} textStyle={{ color: '#5CA7A2', fontSize: 14, fontWeight: 'bold', fontFamily: "HelveticaNeue", }} activeTabStyle={{ backgroundColor: '#075e54' }} activeTextStyle={{ color: '#fff', fontWeight: 'bold', fontSize: 14, fontFamily: "HelveticaNeue", }}>
            <Status xyz={this.checkscroll}></Status>
          </Tab>
          <Tab heading="CALLS" tabStyle={{ backgroundColor: '#075e54' }} textStyle={{ color: '#5CA7A2', fontSize: 14, fontWeight: 'bold', fontFamily: "HelveticaNeue", }} activeTabStyle={{ backgroundColor: '#075e54' }} activeTextStyle={{ color: '#fff', fontWeight: 'bold', fontSize: 14, fontFamily: "HelveticaNeue", }}>
            <Calls xyz={this.checkscroll}></Calls>
          </Tab>
        </Tabs>

        {/* <Animated.ScrollView
          scrollEventThrottle={1}
          bounces={false}
          showsVerticalScrollIndicator={true}
          style={{ zIndex: 0, elevation: -1,height:200 }}
          contentContainerStyle={{ paddingTop: NAVBAR_HEIGHT }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.scroll } } }],
            { useNativeDriver: true },
          )}
          overScrollMode="auto">

          <Tabs renderTabBar={(props) =>
            <Animated.View
              style={[{
                transform: [{ translateY: tabY }],
                zIndex: 1,
                width: "100%",
                position:"absolute",
                backgroundColor: "#075e54",

              }]}>
              
              <ScrollableTab {...props} underlineStyle={{ backgroundColor: "#fff" }} />


            </Animated.View>
 

          }>
            {/* <View style={{backgroundColor:"blue",height:100,width:"100%"}}></View> */}
        {/* <Tab heading="CHATS" tabStyle={{ backgroundColor: '#075e54', borderRightColor: "red", width: "33%", shadowOpacity: 0 }} textStyle={{ color: '#5CA7A2', fontSize: 14, fontWeight: 'bold', fontFamily: "HelveticaNeue", }} activeTabStyle={{ backgroundColor: '#075e54', width: "33%", }} activeTextStyle={{ color: '#fff', fontWeight: 'bold', fontSize: 14, fontFamily: "HelveticaNeue", }} > */}

        {/* {this.setState({ fabicon1: "message-text" })} 
            {<TabHeading ><Button onClick={this.checkscroll.bind(this,"tab1")}><Text>Tab 1</Text></Button></TabHeading>}  
            */}

        {/* <View>
               
                <FlatList

                  data={this.state.a}

                  renderItem={({ item }) =>

                    <View style={{ marginTop: 10, marginRight: 5, zIndex: -1 }}>
                      <TouchableNativeFeedback onPress={(e) => this.imageview(item.displayPic, e)} >


                        <View style={{ width: 80, backgroundColor: "white", height: 67 }}><View >
                          <Image style={{
                            borderWidth: 1,
                            borderColor: '#F4F0F0',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 55,
                            marginLeft: 10,

                            height: 55,
                            marginTop: 5,

                            borderRadius: 100,
                          }}
                            source={item.displayPic}
                            // source=
                            // {{
                            //     uri: item.displayPic
                            // }} 
                            alt="please wait" />
                        </View></View>
                      </TouchableNativeFeedback>
                      <View style={{

                        flex: 1, flexDirection: "row",
                        // width: "80%",
                        marginRight: 10,

                        marginLeft: 80,
                        float: "left",
                        position: "absolute",
                        height: 70,
                        backgroundColor: '#F4F0F0',



                      }}>
                        <TouchableNativeFeedback onPress={this.getContacts.bind(this, item.displayPic, item.contactName)} style={{ width: "100%" }} >

                          <View style={{ height: "98%", width: "100%" }}>
                            <View style={{ backgroundColor: "white", width: "65%", height: "45%" }}>
                              <Text style={{ fontFamily: "HelveticaNeue", fontWeight: "bold", color: "#3A3A3A", marginTop: 4 }}> {item.contactName}</Text>
                            </View>
                            <View style={{ backgroundColor: "white", height: "45%", width: "35%", marginLeft: "65%", position: "absolute" }}>
                              <Text style={{ fontFamily: "HelveticaNeue", fontWeight: "normal", fontSize: 12, marginTop: 3, textAlign: "right", opacity: 0.5, paddingTop: 5 }}> {item.time}</Text>
                            </View>
                            <View style={{ backgroundColor: "white", height: "55%", width: "100%", position: "absolute", position: "relative", paddingTop: 2 }}>
                              <View style={{ backgroundColor: "white", height: 25, width: 20 }}><Image style={{ width: 17, height: 15, marginTop: 4, opacity: 0.5, marginLeft: 8 }} source={ticks} /></View>
                              <Text style={{ position: "absolute", fontFamily: "HelveticaNeue", fontWeight: "normal", opacity: 0.5, marginLeft: 25 }}> bye {item.contactName}</Text>
                            </View>

                          </View>
                        </TouchableNativeFeedback>
                      </View>

                    </View>



                  } />



              </View>

              {this.calldummy.bind(this)}

            </Tab>
            <Tab heading="STATUS" tabStyle={{ backgroundColor: '#075e54', borderRightColor: "red", width: "34%", shadowOpacity: 0 }} textStyle={{ color: '#5CA7A2', fontSize: 14, fontWeight: 'bold', fontFamily: "HelveticaNeue", }} activeTabStyle={{ backgroundColor: '#075e54', width: "34%" }} activeTextStyle={{ color: '#fff', fontWeight: 'bold', fontSize: 14, fontFamily: "HelveticaNeue", }} >
               {tabContent2} 
             
              <Status></Status>
          
    
            </Tab>
            
            <Tab  onClick={() => this.setState({fabicon1:"camera"})}  heading="CALLS" tabStyle={{ backgroundColor: '#075e54', borderRightColor: "red", width: "33%", shadowOpacity: 0 }} textStyle={{ color: '#5CA7A2', fontSize: 14, fontWeight: 'bold', fontFamily: "HelveticaNeue", }} activeTabStyle={{ backgroundColor: '#075e54', width: "33%" }} activeTextStyle={{ color: '#fff', fontWeight: 'bold', fontSize: 14, fontFamily: "HelveticaNeue", }} >
             
              <Calls ></Calls>
            </Tab>
          
          </Tabs>

        </Animated.ScrollView>
        <TouchableOpacity style={styles.fab}>
          <Icon name={this.state.fabicon1} size={25} color="#FFF" />
        */}
        {/* </TouchableOpacity> */}
      </View>
    );
  }
}


// import React, {Component} from "react";
// import {Animated, Dimensions, Platform, Text, View} from 'react-native';
// import {Body, Header, List, ListItem as Item, ScrollableTab, Tab, Tabs, Title} from "native-base";
// import { withNavigation } from 'react-navigation';
//  import { createStackNavigator } from 'react-navigation';

// const NAVBAR_HEIGHT = 56;
// const COLOR = "rgb(45,181,102)";

// export class FirstScreen extends Component {
//   scroll = new Animated.Value(0);
//   headerY;

//   constructor(props) {
//     super(props);
//     this.headerY = Animated.multiply(Animated.diffClamp(this.scroll, 0, NAVBAR_HEIGHT), -1);
//   }

//   render() {
//     const tabContent = (
//       <List>{new Array(20).fill(null).map((_, i) => <Item
//         key={i}><Text>Item {i}</Text></Item>)}</List>);
//     const tabY = Animated.add(this.scroll, this.headerY);
//     return (
//       <View>
//         {Platform.OS === "ios" &&
//         <View style={{backgroundColor: COLOR, height: 20, width: "100%", position: "absolute", zIndex: 2}}/>}
//         <Animated.View style={{
//           width: "100%",
//           position: "absolute",
//           transform: [{
//             translateY: this.headerY
//           }],
//           elevation: 0,
//           flex: 1,
//           zIndex: 1,
//           backgroundColor: COLOR
//         }}>
//           <Header style={{backgroundColor: "transparent"}} hasTabs>
//             <Body>
//             <Title>
//               <Text style={{color: "white"}}>
//                 Collapsing Navbar
//               </Text>
//             </Title>
//             </Body>
//           </Header>
//         </Animated.View>
//         <Animated.ScrollView
//           scrollEventThrottle={1}
//           bounces={false}
//           showsVerticalScrollIndicator={false}
//           style={{zIndex: 0, height: "100%", elevation: -1}}
//           contentContainerStyle={{paddingTop: NAVBAR_HEIGHT}}
//           onScroll={Animated.event(
//             [{nativeEvent: {contentOffset: {y: this.scroll}}}],
//             {useNativeDriver: true},
//           )}
//           overScrollMode="never">
//           <Tabs renderTabBar={(props) => <Animated.View
//             style={[{
//               transform: [{translateY: tabY}],
//               zIndex: 1,
//               width: "100%",
//               backgroundColor: COLOR
//             }, Platform.OS === "ios" ? {paddingTop: 20} : null]}>
//             <ScrollableTab {...props} underlineStyle={{backgroundColor: "white"}}/>
//           </Animated.View>
//           }>
//             <Tab heading="Tab 1" style={{backgroundColor:"red"}}>
//               {tabContent}
//             </Tab>
//             <Tab heading="Tab 2" style= {{backgroundColor:"green"}}>
//               {tabContent}
//             </Tab>
//           </Tabs>
//         </Animated.ScrollView>
//       </View>
//     );
//   }
// }