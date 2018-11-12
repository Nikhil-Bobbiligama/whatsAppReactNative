
import React, { Component } from "react";
import { Animated, Dimensions, Platform, Text, View, Image, ScrollView, StatusBar } from 'react-native';
import { Body, Header, List, ListItem as Item, ScrollableTab, Tab, Tabs, Title, } from "native-base";

import search from './images/search.png'
import menu from './images/more.png'

import Chats from './Chats'
import Status from './Status'
import Calls from './Calls'
import { createStackNavigator } from 'react-navigation';

import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Icon6 from 'react-native-vector-icons/dist/Feather';
import Icon5 from 'react-native-vector-icons/dist/Entypo';
import Ripple from 'react-native-material-ripple';

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
import { StyleSheet, ImageBackground, TouchableOpacity, TouchableWithoutFeedback,TouchableHighlightComponent,FlatList, Alert, FontAwesome, TouchableNativeFeedback, Modal, TouchableHighlight, TextInput } from 'react-native';
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
        zIndex: 3,
        elevation: 20
    },
    fabIcon: {
        fontSize: 40,
        color: 'white'
    },
    fab3: {
        position: 'absolute',
        width: 45,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        right: 25,
        bottom: 90,
        backgroundColor: '#FFF',
        borderRadius: 30,
        elevation: 8
    },
});
const NAVBAR_HEIGHT = 56;
const { width: SCREEN_WIDTH } = Dimensions.get("window");
const COLOR = "#075e54";
const TAB_PROPS = {
    tabStyle: { width: SCREEN_WIDTH / 1, backgroundColor: COLOR },
    activeTabStyle: { width: SCREEN_WIDTH / 1, backgroundColor: COLOR },
    textStyle: { color: "white" },
    activeTextStyle: { color: "white" }
};

export default class FirstScreen extends Component {
    scroll = new Animated.Value(0);
    headerY;

    constructor(props) {
        super(props);
        this.state = {
            modalvisible: false,
            modalimage: "",
            fabIcon: "message-text",
            fabIcon2size: 0,
            fabIcon2: "pencil",
            fabicon2h: 0,
            backcolor:"white",
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

    }
    componentWillMount() {
        const { navigation } = this.props;
        const chatscroll = navigation.getParam('y1', 'NO-ID');

        console.log(chatscroll);
        console.log(this.scroll)
        this.headerY = Animated.multiply(Animated.diffClamp(this.scroll, 0, NAVBAR_HEIGHT), -1);

    }
    setModalVisible(visible) {
        this.setState({
            modalvisible: visible,
        })
    }
    tabchangeEventHandler(i) {
        // alert(i.i);
        var j = i.i;
        if (j === 1) {
            this.setState({ fabIcon: "camera", fabIcon2size: 25, fabicon2h: 45 });
        }
        else if (j === 2) {
            this.setState({ fabIcon: "phone" });
            this.setState({ fabIcon2size: 0, fabicon2h: 0 });
        }
        else {
            this.setState({ fabIcon: "message-text" });
            this.setState({ fabIcon2size: 0, fabicon2h: 0 });
        }
    }
    imageview(imagesrc, e) {
        this.setState({ modalvisible: true, modalimage: imagesrc });
    }
    getContacts(displaypic, displayname) {
          this.setState({backcolor:"grey"});
        const { navigate } = this.props.navigation;
        navigate('Chatbox', { pic: displaypic, name: displayname });
        // navigate('ViewStudent', { id: id, sname: name, sage: age, semail: email });
         

    }
    onBackPress() {
        this.setState({ modalvisible: false });
    }

    static navigationOptions = {
        title: "Watsapp"
    }
    checkscroll() {
        const { navigate } = this.props.navigation;
        navigate('Home', { y1: this.scroll });
    }
    render() {
        StatusBar.setBackgroundColor("#04413A")
        StatusBar.setBarStyle("light-content")
        const tabContent = (
            <View>
                <FlatList

                    data={this.state.a}

                    renderItem={({ item }) =>
                    <TouchableNativeFeedback  >
                  
                        <View style={{ }}>
                        <Ripple  rippleDuration={600} rippleColor="grey" rippleOpacity={0.5} onPress={this.getContacts.bind(this, item.displayPic, item.contactName)} style={{ width: "100%",marginTop: 10, marginRight: 5, zIndex: 2  }}>

      
                                <View>
                                    {/* <TouchableNativeFeedback onPress={(e) => this.imageview(item.displayPic, e)} > */}


                                    <View style={{ width: 80, backgroundColor: this.state.backcolor, height: 67 }}><View >
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

                                            alt="please wait" />
                                    </View></View>
                                    {/* </TouchableNativeFeedback> */}
                                    <View style={{

                                        flex: 1, flexDirection: "row",
                                        marginRight: 10,

                                        marginLeft: 80,
                                        float: "left",
                                        position: "absolute",
                                        height: 70,
                                         backgroundColor: '#F4F0F0',
                                        // backgroundColor:this.state.backcolor,



                                    }}>

                                        <View style={{ height: "98%", width: "100%" }}>
                                            <View style={{    backgroundColor:this.state.backcolor, width: "65%", height: "45%" }}>
                                                <Text style={{ fontFamily: "HelveticaNeue", fontWeight: "500", color: "#3A3A3A", marginTop: 4, fontSize: 16 }}> {item.contactName}</Text>
                                            </View>
                                            <View style={{    backgroundColor:this.state.backcolor, height: "45%", width: "35%", marginLeft: "65%", position: "absolute" }}>
                                                <Text style={{ fontFamily: "HelveticaNeue", fontWeight: "normal", fontSize: 12, marginTop: 3, textAlign: "right", opacity: 0.5, paddingTop: 5 }}> {item.time}</Text>
                                            </View>
                                            <View style={{    backgroundColor:this.state.backcolor, height: "55%", width: "100%", position: "absolute", position: "relative", paddingTop: 2 }}>
                                                <View style={{    backgroundColor:this.state.backcolor, height: 25, width: 20 }}><Image style={{ width: 17, height: 15, marginTop: 4, opacity: 0.5, marginLeft: 8 }} source={ticks} /></View>
                                                <Text style={{ position: "absolute", fontFamily: "HelveticaNeue", fontWeight: "normal", opacity: 0.5, marginLeft: 25, marginTop: 3 }}> bye {item.contactName}</Text>
                                            </View>

                                        </View>

                                    </View>
                                </View>
                                </Ripple>

                                </View>

                            </TouchableNativeFeedback>
                        


                    } />



            </View>
        );
        const tabContent2 = (
            <List>{new Array(40).fill(null).map((_, i) => <Item
                key={i}><Text> {i}</Text></Item>)}</List>


        );
        const tabY = Animated.add(this.scroll, this.headerY);
        return (
            <View>

                {Platform.OS === "ios" &&
                    <View style={{ backgroundColor: COLOR, height: 20, width: "100%", position: "absolute", zIndex: 2 }} />}
                <StatusBar backgroundColor="#000" barStyle="light-content" />
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
                    <Header style={{ backgroundColor: "transparent" }} hasTabs>
                        <Body>

                            <View style={{
                                backgroundColor: "#075e54",
                                flexDirection: 'row',
                                elevation: 0,
                                width: "100%",
                                justifyContent: 'space-between',
                            }}>
                                <View style={{ width: 150, height: 53, backgroundColor: '#075e54', elevation: 0 }}>
                                    <Text style={{ paddingLeft: 10, paddingTop: 15, fontSize: 17, width: "80%", fontWeight: "500", fontFamily: "HelveticaNeue", color: "white" }}>WhatsApp</Text>

                                </View>

                                <View style={{ width: 80, height: 53, backgroundColor: '#075e54' }}>
                                    <View style={{ height: 40, width: 80, paddingTop: 15, paddingRight: 10 }}>
                                        <Icon2 style={{ paddingRight: 5, marginTop: 2, marginLeft: 18 }} size={18} fontWeight={5} name="search" color={"#fff"} />
                                        <Image style={{ height: 16, width: 16, marginTop: 18.5, position: "absolute", marginLeft: 58 }} source={menu} ></Image>
                                    </View>
                                </View>
                            </View>

                        </Body>
                    </Header>

                </Animated.View>
                <Animated.ScrollView
                    scrollEventThrottle={1}
                    bounces={false}
                    showsVerticalScrollIndicator={true}
                    style={{ zIndex: 0, elevation: -1 }}
                    contentContainerStyle={{ paddingTop: NAVBAR_HEIGHT }}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: this.scroll } } }],
                        { useNativeDriver: true },
                    )}
                    overScrollMode="auto">

                    <Tabs onChangeTab={(i) => this.tabchangeEventHandler(i)} renderTabBar={(props) =>
                        <Animated.View
                            style={[{
                                transform: [{ translateY: tabY }],
                                zIndex: 1,
                                width: "100%",
                                backgroundColor: "#075e54",

                            }]}>

                            <ScrollableTab {...props} underlineStyle={{ backgroundColor: "#FFF" }} />


                        </Animated.View>


                    }>
                        <Tab heading="CHATS" tabStyle={{ backgroundColor: '#075e54', borderRightColor: "red", width: "33%", shadowOpacity: 0 }} textStyle={{ color: '#5CA7A2', fontSize: 14, fontWeight: 'bold', fontFamily: "HelveticaNeue", }} activeTabStyle={{ backgroundColor: '#075e54', width: "33%", }} activeTextStyle={{ color: '#fff', fontWeight: 'bold', fontSize: 14, fontFamily: "HelveticaNeue", }} >


                            {tabContent}



                        </Tab>
                        <Tab heading="STATUS" tabStyle={{ backgroundColor: '#075e54', borderRightColor: "red", width: "34%", shadowOpacity: 0 }} textStyle={{ color: '#5CA7A2', fontSize: 14, fontWeight: 'bold', fontFamily: "HelveticaNeue", }} activeTabStyle={{ backgroundColor: '#075e54', width: "34%" }} activeTextStyle={{ color: '#fff', fontWeight: 'bold', fontSize: 14, fontFamily: "HelveticaNeue", }} >

                            <Status></Status>
                        </Tab>
                        <Tab heading="CALLS" tabStyle={{ backgroundColor: '#075e54', borderRightColor: "red", width: "33%", shadowOpacity: 0 }} textStyle={{ color: '#5CA7A2', fontSize: 14, fontWeight: 'bold', fontFamily: "HelveticaNeue", }} activeTabStyle={{ backgroundColor: '#075e54', width: "33%" }} activeTextStyle={{ color: '#fff', fontWeight: 'bold', fontSize: 14, fontFamily: "HelveticaNeue", }} >

                            <Calls ></Calls>
                        </Tab>

                    </Tabs>

                </Animated.ScrollView>
                <TouchableOpacity style={styles.fab}>
                    <Icon name={this.state.fabIcon} size={25} color="#FFF" />

                </TouchableOpacity>
                <TouchableOpacity style={{
                    position: 'absolute',
                    width: this.state.fabicon2h,
                    height: this.state.fabicon2h,
                    alignItems: 'center',
                    justifyContent: 'center',
                    right: 25,
                    bottom: 90,
                    backgroundColor: '#FFF',
                    borderRadius: 30,
                    elevation: 8
                }}>
                    <Icon name={this.state.fabIcon2} size={this.state.fabIcon2size} color="grey" />

                </TouchableOpacity>
            </View>
        );
    }
}