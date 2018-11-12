
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Icon5 from 'react-native-vector-icons/dist/Entypo';

import Icon2 from 'react-native-vector-icons/dist/FontAwesome';
import Icon3 from 'react-native-vector-icons/dist/FontAwesome5';
import { Container, Header, Tab, Tabs, TabHeading, Text, Footer, FooterTab, Platform, View, Row } from 'native-base';
import dhonidp from './images/dhonidp.jpeg'
import adbdp from './images/adbdp.jpeg'
import viratdp from './images/viratdp.jpeg'
import salmandp from './images/salmandp.jpeg'
import maheshdp from './images/maheshdp.jpeg'
import addmessage from './images/addmessage.png'
import smiley from './images/smiley3.png'
import chatbox from './images/chatboximage.jpeg'
import ticks from './images/2ticks.png'
import blueticks from './images/whatsapp-blue-ticks.png'
import search from './images/search.png'
import menu from './images/more.png'
import { createStackNavigator } from 'react-navigation';

import { Image, ScrollView, StyleSheet, ImageBackground, TouchableOpacity, FlatList, Alert, TouchableWithoutFeedback, TouchableNativeFeedback, Modal, TouchableHighlight, TextInput } from 'react-native';
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
        elevation: 8
    },
    fabIcon: {
        fontSize: 40,
        color: 'white'
    }
});
export default class ContactScreen extends Component {
    constructor(props) {
        super(props);
        const { navigation } = this.props;
        const pic = navigation.getParam('pic', 'NO-ID');
        const name = navigation.getParam('name', 'NO-ID');

        this.state = {
            modalvisible: true,
            modalimage: "",
            displayname: name,
            displaypic: pic,
            newmessage: "",
            time: "10:04",
            keyboardicon: "microphone",

            chats: [
                {
                    message: "hey whatsapp",
                    backcolor: "white",
                    viewalign: "flex-start",
                    imgticks: " ",
                    time: "9:45 PM",
                    tickswidth: 0,

                },
                {
                    message: "hi ,after a long time....! how are you  ?",
                    backcolor: "#dcf8c6",
                    viewalign: "flex-end",
                    imgticks: blueticks,
                    tickswidth: 15,
                    time: "9:45 PM"

                },
                {
                    message: "Iam fine, how are you??",
                    backcolor: "white",
                    viewalign: "flex-start",
                    tickswidth: 0,
                    time: "9:45 PM"

                },
                {
                    message: "Iam fine too, shall we go for a movie  ??",
                    backcolor: "#dcf8c6",
                    viewalign: "flex-end",
                    imgticks: blueticks,
                    tickswidth: 15,
                    time: "9:46 PM"
                },
                {
                    message: "Yeah, Which one and when ?",
                    backcolor: "white",
                    viewalign: "flex-start",
                    tickswidth: 0,
                    time: "9:46 PM"
                },
                {
                    message: "******* movie,if you are free we will go tomorrow. I have seen the reviews, it got some good rating..!",
                    backcolor: "#dcf8c6",
                    viewalign: "flex-end",
                    imgticks: blueticks,
                    tickswidth: 15,
                    time: "9:47 PM"
                },
                {
                    message: "ok, will meet you tomorrow, bye ",
                    backcolor: "white",
                    viewalign: "flex-start",
                    tickswidth: 0,
                    time: "9:47 PM"
                },
                {
                    message: "bye " + name,
                    backcolor: "#dcf8c6",
                    viewalign: "flex-end",
                    imgticks: ticks,
                    tickswidth: 15,
                    time: "9:47 PM"
                },
            ]
        }

        this.imageview = this.imageview.bind(this);
    }
    setModalVisible(visible) {
        this.setState({
            modalvisible: visible,
        })
    }
    imageview(imagesrc, e) {
        this.setState({ modalvisible: true, modalimage: imagesrc });
    }
    getContacts() {

        const { navigate } = this.props.navigation;
        navigate('Contacts');

    }
    messageread() {
        return "hello";
    }
    backtochat() {
        this.setState({ modalvisible: false })
        this.props.navigation.goBack();
    }
    sendmessage(){
        //  let x= this.state.newmessage.length ;
        //  if(x===0)
        //  this.setState({keyboardicon:"microphone"})
       var x= this.state.newmessage;
    //    if(x==null)
    //    {
    //     this.setState({ keyboardicon: "microphone" });
    //    }
    //    else
           this.setState({ keyboardicon: "send" });
                                           
    }
    ////////////////////////////////
    // takePicture() { this.camera.capture() .then((data) => console.log(data)) .catch(err => console.error(err)); }
    static navigationOptions = {
        title: "Watsapp"
    }
    render() {
        return (

            // <Modal style={{ height: "100%", width: "100%", backgroundColor: "red", flex: 1 }}
            //     animationType="fade"
            //     visible={this.state.modalvisible}
            //     transparent={true}
            //     onRequestClose={() => {
            //         // Alert.alert("choose to close modal");
            //         this.setState({ modalvisible: false })
            //         this.props.navigation.goBack();

            //     }}>



                <View style={{ height: "100%", width: "100%", backgroundColor: "white" }}>

                    <View style={{
                        backgroundColor: "#075e54",
                        flexDirection: 'row',
                        width: "100%",
                        justifyContent: 'space-between',
                    }}>
                        {/* <View style={{width: 150, height: 50, backgroundColor: 'powderblue'}}></View> */}
                        <View style={{ width: 150, height: 50, backgroundColor: '#075e54' }}>
                            <TouchableNativeFeedback onPress={this.backtochat.bind(this)}><Icon style={{ marginTop: 10 }} name="keyboard-backspace" size={27} color="#FFF" /></TouchableNativeFeedback>
                            <Image style={{
                                borderWidth: 0,
                                borderColor: '#F4F0F0',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 37,
                                marginLeft: 10,

                                height: 37,
                                marginTop: 7,
                                marginLeft: 30,
                                position: "absolute",
                                borderRadius: 100,
                            }}
                                source={this.state.displaypic}
                                // source=
                                // {{
                                //     uri: item.displayPic
                                // }} 
                                alt="please wait" />
                            <Text style={{ fontFamily:"HelveticaNeue", marginLeft: 80, paddingTop: 10, fontSize: 16, width: "60%", fontWeight: "bold", color: "white", position: "absolute" }}>{this.state.displayname}</Text>

                        </View>


                        <View style={{ width: 140, height: 50, backgroundColor: '#075e54' }}>
                            <View style={{ height: 40, width: 100, paddingTop: 12, paddingRight: 10 }}>
                                <Icon style={{ height: 30, width: 30, paddingRight: 2, marginTop: 0 }} name="video" size={30} color="#FFF"></Icon>
                                <Icon style={{ height: 27, width: 27, marginTop: 13, position: "absolute", marginLeft: 55 }} name="phone" size={27} color="#FFF" ></Icon>
                                <Image style={{ height: 22, width: 22, position: "absolute", marginTop: 16, marginLeft: 105 }} source={menu}></Image>

                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <ImageBackground
                            resizeMode={'stretch'} // or cover
                            style={{ flex: 1 }} // must be passed from the parent, the number may vary depending upon your screen size
                            source={chatbox}
                        >

                            <FlatList
                                data={this.state.chats}
                                renderItem={({ item }) =>
                                    <View style={{ marginTop: 1 }}>

                                        <View style={{ width: "80%", height: "auto", backgroundColor: "#00000000", alignSelf: item.viewalign }}>
                                            <View style={{ margin: 10, backgroundColor: "", alignSelf: item.viewalign, marginTop: 6, marginBottom: 1 }}>
                                                <View style={{ paddingLeft: 5, backgroundColor: item.backcolor, paddingRight: 10, alignSelf: "flex-start", borderRadius: 8 }}>
                                                    <Text style={{ fontFamily:"HelveticaNeue", margin: 5 ,opacity:0.9}} >{item.message}
                                                    </Text>

                                                    <Text style={{ fontFamily:"HelveticaNeue", alignSelf: "flex-end", fontSize: 11, opacity: 0.3, paddingRight: (1.2*item.tickswidth) }}>{item.time}</Text>
                                                    <View style={{ marginLeft: 5, backgroundColor: "", height: 20, position: "relative", marginTop: -20, alignSelf: "flex-end" }}>
                                                        <Image style={{paddingLeft:3, marginLeft: 4, marginTop: 3, height: 15, width: item.tickswidth , opacity: 0.5, }} source={item.imgticks} />
                                                        {/* <Icon3 style={{ marginLeft: 4,marginTop:3, }} name="check-double" color={"white"} size={item.tickswidth} /> */}
                                                    </View>
                                                </View></View>
                                        </View>
                                    </View>



                                } />




                            {/* <View style={{ width: "70%", height: "auto",alignSelf:this.state.viewalign }}><View style={{ margin: 10, backgroundColor: "#00000000" , alignSelf:this.state.viewalign}}>
                                    <View style={{ paddingLeft: 2, backgroundColor:this.state.backcolor, paddingRight: 10, alignSelf: "flex-start", borderRadius: 10 }}>
                                        <Text >yyyy {this.state.time}
                                </Text></View></View>
                                </View>
                                <View style={{ width: "70%", height: "auto", alignSelf: "flex-end" }}><View style={{ margin: 10, backgroundColor: "#00000000", alignSelf: "flex-end" }}>
                                    <View style={{ paddingLeft: 2, backgroundColor: this.state.backcolor, paddingRight: 40, alignSelf: "flex-start", borderRadius: 10 }}>
                                        <Text >hcfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff {this.state.time}
                                </Text></View></View>
                               
                                </View> */}


                            {/* <View style={{backgroundColor:"red",   right: 20,bottom: 20,elevation:8, borderRadius: 20,width:"100%",height:20}}></View>> */}


                            <Footer style={{ backgroundColor: "#00000000", marginBottom: 3 }} >
                                <FooterTab style={{ backgroundColor: "#00000000", marginLeft: 10, marginRight: 55 }}>
                                    <View style={{ backgroundColor: "white", width: "100%", borderRadius: 25, alignSelf: "center", height: "90%" }}>
                                        <View style={{ backgroundColor: "white", width: 25, height: 25, marginLeft: 10, marginTop: 3, borderRadius: 10, alignContent: "center" }}>
                                            <Image style={{ height: 25, width: 25, marginTop: 8, position: "absolute", alignSelf: "center", opacity: 0.5 }} source={smiley} /></View>
                                        <TextInput
                                            style={{ height: "90%", width: "70%", backgroundColor: "", marginLeft: 40, position: "absolute", marginTop: 3, fontSize: 18 }}
                                            placeholder="Type a message"

                                             onChangeText={(newmessage) => this.setState({ keyboardicon: "send",newmessage }) }
                                            onChangeText={this.sendmessage.bind(this)}
                                        />
                                        <View style={{ width: 40, height: 30, margin: 20, marginLeft: 5, backgroundColor: "", position: "absolute", alignSelf: "flex-end", marginTop: 13, marginRight: 160 }}><Icon5 name="attachment" color={"#A9A9A9"}  size={22}  /></View>
                                    </View>
                                    <View style={{ backgroundColor: "#128C7E", marginTop: 5, marginLeft: 4, alignItems: "center", borderRadius: 100, width: 45, height: 45 }}><Icon style={{ paddingTop: 10, paddingRight: 0 }} name={this.state.keyboardicon} size={25} color={"#FFF"} /></View>
                                </FooterTab>


                            </Footer>
                        </ImageBackground>
                    </View>
                </View>

            // </Modal>



            // <View style={styles.container}>
            //   <Text style={stfontFamily:"HelveticaNeue", yles.welcome}>Welcome to React Native!</Text>
            //   <Text style={styles.instructions}>To get started, edit App.js</Text>
            //   <Text style={styles.instructions}>{instructions}</Text>
            // </View>
        );
    }
}