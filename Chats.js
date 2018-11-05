
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Icon5 from 'react-native-vector-icons/dist/Entypo';


import { withNavigation } from 'react-navigation';
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
import chatbox from './images/chatbox.png'
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
class ChatScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalvisible: false,
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
    getContacts(displaypic, displayname) {

        const { navigate } = this.props.navigation;
        navigate('Chatbox', { pic: displaypic, name: displayname });
        // navigate('ViewStudent', { id: id, sname: name, sage: age, semail: email });


    }
    onBackPress() {
        this.setState({ modalvisible: false });
    }


    ////////////////////////////////
    // takePicture() { this.camera.capture() .then((data) => console.log(data)) .catch(err => console.error(err)); }
    static navigationOptions = {
        title: "Watsapp"
    }
    render() {
        return (
            <Container style={{}}>
                <View>
                    {/* <Modal style={{ height: 60, width: 60, backgroundColor: "red" }}
                        animationType="fade"
                        visible={this.state.modalvisible}
                        transparent={true}
                        onRequestClose={() => {
                            this.setState({ modalvisible: false })

                        }}>


                        <TouchableHighlight
                            onPress={() => {
                                this.setState({ modalvisible: false });
                            }}>
                            <View style={{ marginTop: 0, backgroundColor: "", alignItems: "center" }}>
                                <View>

                                    <View style={{ height: "100%", width: "100%" }}>
                                        <Image style={{ marginTop: 10, height: 250, width: 265 }} source={this.state.modalimage}></Image>
                                        <View></View>
                                        <View style={{ height: "100%", width: "100%", backgroundColor: "" }}></View>
                                    </View>


                                </View>
                            </View>
                        </TouchableHighlight>
                    </Modal> */}
                    <FlatList

                        data={this.state.a}
                        
                        renderItem={({ item }) =>
                        
                            <View style={{ marginTop: 10,marginRight:5 }}>
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
                                                <Text style={{ fontFamily:"HelveticaNeue",fontWeight: "bold",color:"#3A3A3A", marginTop: 4 }}> {item.contactName}</Text>
                                            </View>
                                            <View style={{ backgroundColor: "white", height: "45%", width: "35%", marginLeft: "65%", position: "absolute" }}>
                                                <Text style={{ fontFamily:"HelveticaNeue",fontWeight: "normal", fontSize: 12, marginTop: 3, textAlign: "right", opacity: 0.5, paddingTop: 5 }}> {item.time}</Text>
                                            </View>
                                            <View style={{ backgroundColor: "white", height: "55%", width: "100%", position: "absolute", position: "relative",paddingTop:2 }}>
                                                <View style={{backgroundColor:"white",height:25,width:20}}><Image style={{width:17,height:15,marginTop:4,opacity:0.5,marginLeft:8}} source={ticks} /></View>
                                                <Text style={{ position:"absolute",fontFamily:"HelveticaNeue",fontWeight: "normal", opacity: 0.5,marginLeft:25 }}> bye {item.contactName}</Text>
                                            </View>

                                        </View>
                                    </TouchableNativeFeedback>
                                </View>
                            </View>



                        } />
                    <TouchableOpacity style={styles.fab}>
                        {/* <Image style={{ width: 55, height: 55,borderRadius:100 }} source={{ uri: 'data:image/jpeg;base64,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'}}></Image> */}
                        <Icon name="message-text" size={25} color="#FFF" />
                        {/* <Icon
                            name="ios-add"
                            color="#ccc"
                            size={25}
                        /> */}
                    </TouchableOpacity>
                </View>

            </Container>

            // <View style={styles.container}>
            //   <Text style={styles.welcome}>Welcome to React Native!</Text>
            //   <Text style={styles.instructions}>To get started, edit App.js</Text>
            //   <Text style={styles.instructions}>{instructions}</Text>
            // </View>
        );
    }
}
// class ContactScreen extends Component {
//     constructor(props) {
//         super(props);
//         const { navigation } = this.props;
//         const pic = navigation.getParam('pic', 'NO-ID');
//         const name = navigation.getParam('name', 'NO-ID');

//         this.state = {
//             modalvisible: true,
//             modalimage: "",
//             displayname: name,
//             displaypic: pic,
//             newmessage: "",
//             time: "10:04",
//             keyboardicon: "microphone",

//             chats: [
//                 {
//                     message: "hey whatsapp",
//                     backcolor: "white",
//                     viewalign: "flex-start",
//                     imgticks: " ",
//                     time: "9:45 PM",
//                     tickswidth: 0,

//                 },
//                 {
//                     message: "hi ,after a long time....! how are you  ?",
//                     backcolor: "#dcf8c6",
//                     viewalign: "flex-end",
//                     imgticks: blueticks,
//                     tickswidth: 15,
//                     time: "9:45 PM"

//                 },
//                 {
//                     message: "Iam fine, how are you??",
//                     backcolor: "white",
//                     viewalign: "flex-start",
//                     tickswidth: 0,
//                     time: "9:45 PM"

//                 },
//                 {
//                     message: "Iam fine too, shall we go for a movie  ??",
//                     backcolor: "#dcf8c6",
//                     viewalign: "flex-end",
//                     imgticks: blueticks,
//                     tickswidth: 15,
//                     time: "9:46 PM"
//                 },
//                 {
//                     message: "Yeah, Which one and when ?",
//                     backcolor: "white",
//                     viewalign: "flex-start",
//                     tickswidth: 0,
//                     time: "9:46 PM"
//                 },
//                 {
//                     message: "******* movie,if you are free we will go tomorrow. I have seen the reviews, it got some good rating..!",
//                     backcolor: "#dcf8c6",
//                     viewalign: "flex-end",
//                     imgticks: blueticks,
//                     tickswidth: 15,
//                     time: "9:47 PM"
//                 },
//                 {
//                     message: "ok, will meet you tomorrow, bye ",
//                     backcolor: "white",
//                     viewalign: "flex-start",
//                     tickswidth: 0,
//                     time: "9:47 PM"
//                 },
//                 {
//                     message: "bye " + name,
//                     backcolor: "#dcf8c6",
//                     viewalign: "flex-end",
//                     imgticks: ticks,
//                     tickswidth: 15,
//                     time: "9:47 PM"
//                 },
//             ]
//         }

//         this.imageview = this.imageview.bind(this);
//     }
//     setModalVisible(visible) {
//         this.setState({
//             modalvisible: visible,
//         })
//     }
//     imageview(imagesrc, e) {
//         this.setState({ modalvisible: true, modalimage: imagesrc });
//     }
//     getContacts() {

//         const { navigate } = this.props.navigation;
//         navigate('Contacts');

//     }
//     messageread() {
//         return "hello";
//     }
//     backtochat() {
//         this.setState({ modalvisible: false })
//         this.props.navigation.goBack();
//     }
//     sendmessage(){
//         //  let x= this.state.newmessage.length ;
//         //  if(x===0)
//         //  this.setState({keyboardicon:"microphone"})
//        var x= this.state.newmessage;
//     //    if(x==null)
//     //    {
//     //     this.setState({ keyboardicon: "microphone" });
//     //    }
//     //    else
//            this.setState({ keyboardicon: "send" });
                                           
//     }
//     ////////////////////////////////
//     // takePicture() { this.camera.capture() .then((data) => console.log(data)) .catch(err => console.error(err)); }
//     static navigationOptions = {
//         title: "Watsapp"
//     }
//     render() {
//         return (

//             <Modal style={{ height: "100%", width: "100%", backgroundColor: "red", flex: 1 }}
//                 animationType="fade"
//                 visible={this.state.modalvisible}
//                 transparent={true}
//                 onRequestClose={() => {
//                     // Alert.alert("choose to close modal");
//                     this.setState({ modalvisible: false })
//                     this.props.navigation.goBack();

//                 }}>



//                 <View style={{ height: "100%", width: "100%", backgroundColor: "white" }}>

//                     <View style={{
//                         backgroundColor: "#075e54",
//                         flexDirection: 'row',
//                         width: "100%",
//                         justifyContent: 'space-between',
//                     }}>
//                         {/* <View style={{width: 150, height: 50, backgroundColor: 'powderblue'}}></View> */}
//                         <View style={{ width: 150, height: 50, backgroundColor: '#075e54' }}>
//                             <TouchableNativeFeedback onPress={this.backtochat.bind(this)}><Icon style={{ marginTop: 10 }} name="keyboard-backspace" size={27} color="#FFF" /></TouchableNativeFeedback>
//                             <Image style={{
//                                 borderWidth: 0,
//                                 borderColor: '#F4F0F0',
//                                 alignItems: 'center',
//                                 justifyContent: 'center',
//                                 width: 37,
//                                 marginLeft: 10,

//                                 height: 37,
//                                 marginTop: 7,
//                                 marginLeft: 27,
//                                 position: "absolute",
//                                 borderRadius: 100,
//                             }}
//                                 source={this.state.displaypic}
//                                 // source=
//                                 // {{
//                                 //     uri: item.displayPic
//                                 // }} 
//                                 alt="please wait" />
//                             <Text style={{ fontFamily:"HelveticaNeue", marginLeft: 75, paddingTop: 10, fontSize: 16, width: "60%", fontWeight: "bold", color: "white", position: "absolute" }}>{this.state.displayname}</Text>

//                         </View>


//                         <View style={{ width: 140, height: 50, backgroundColor: '#075e54' }}>
//                             <View style={{ height: 40, width: 100, paddingTop: 12, paddingRight: 10 }}>
//                                 <Icon style={{ height: 30, width: 30, paddingRight: 2, marginTop: 0 }} name="video" size={30} color="#FFF"></Icon>
//                                 <Icon style={{ height: 27, width: 27, marginTop: 13, position: "absolute", marginLeft: 55 }} name="phone" size={27} color="#FFF" ></Icon>
//                                 <Image style={{ height: 22, width: 22, position: "absolute", marginTop: 16, marginLeft: 105 }} source={menu}></Image>

//                             </View>
//                         </View>
//                     </View>
//                     <View style={{ flex: 1 }}>
//                         <ImageBackground
//                             resizeMode={'stretch'} // or cover
//                             style={{ flex: 1 }} // must be passed from the parent, the number may vary depending upon your screen size
//                             source={chatbox}
//                         >

//                             <FlatList
//                                 data={this.state.chats}
//                                 renderItem={({ item }) =>
//                                     <View style={{ marginTop: 1 }}>

//                                         <View style={{ width: "80%", height: "auto", backgroundColor: "#00000000", alignSelf: item.viewalign }}>
//                                             <View style={{ margin: 10, backgroundColor: "", alignSelf: item.viewalign, marginTop: 6, marginBottom: 1 }}>
//                                                 <View style={{ paddingLeft: 5, backgroundColor: item.backcolor, paddingRight: 10, alignSelf: "flex-start", borderRadius: 8 }}>
//                                                     <Text style={{ fontFamily:"HelveticaNeue", margin: 5 ,opacity:0.9}} >{item.message}
//                                                     </Text>

//                                                     <Text style={{ fontFamily:"HelveticaNeue", alignSelf: "flex-end", fontSize: 11, opacity: 0.3, paddingRight: (1.2*item.tickswidth) }}>{item.time}</Text>
//                                                     <View style={{ marginLeft: 5, backgroundColor: "", height: 20, position: "relative", marginTop: -20, alignSelf: "flex-end" }}>
//                                                         <Image style={{paddingLeft:3, marginLeft: 4, marginTop: 3, height: 15, width: item.tickswidth , opacity: 0.5, }} source={item.imgticks} />
//                                                         {/* <Icon3 style={{ marginLeft: 4,marginTop:3, }} name="check-double" color={"white"} size={item.tickswidth} /> */}
//                                                     </View>
//                                                 </View></View>
//                                         </View>
//                                     </View>



//                                 } />




//                             {/* <View style={{ width: "70%", height: "auto",alignSelf:this.state.viewalign }}><View style={{ margin: 10, backgroundColor: "#00000000" , alignSelf:this.state.viewalign}}>
//                                     <View style={{ paddingLeft: 2, backgroundColor:this.state.backcolor, paddingRight: 10, alignSelf: "flex-start", borderRadius: 10 }}>
//                                         <Text >yyyy {this.state.time}
//                                 </Text></View></View>
//                                 </View>
//                                 <View style={{ width: "70%", height: "auto", alignSelf: "flex-end" }}><View style={{ margin: 10, backgroundColor: "#00000000", alignSelf: "flex-end" }}>
//                                     <View style={{ paddingLeft: 2, backgroundColor: this.state.backcolor, paddingRight: 40, alignSelf: "flex-start", borderRadius: 10 }}>
//                                         <Text >hcfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff {this.state.time}
//                                 </Text></View></View>
                               
//                                 </View> */}


//                             {/* <View style={{backgroundColor:"red",   right: 20,bottom: 20,elevation:8, borderRadius: 20,width:"100%",height:20}}></View>> */}


//                             <Footer style={{ backgroundColor: "#00000000", marginBottom: 3 }} >
//                                 <FooterTab style={{ backgroundColor: "#00000000", marginLeft: 10, marginRight: 55 }}>
//                                     <View style={{ backgroundColor: "white", width: "100%", borderRadius: 25, alignSelf: "center", height: "90%" }}>
//                                         <View style={{ backgroundColor: "white", width: 25, height: 25, marginLeft: 10, marginTop: 3, borderRadius: 10, alignContent: "center" }}>
//                                             <Image style={{ height: 25, width: 25, marginTop: 8, position: "absolute", alignSelf: "center", opacity: 0.5 }} source={smiley} /></View>
//                                         <TextInput
//                                             style={{ height: "90%", width: "70%", backgroundColor: "", marginLeft: 40, position: "absolute", marginTop: 3, fontSize: 18 }}
//                                             placeholder="Type a message"

//                                              onChangeText={(newmessage) => this.setState({ keyboardicon: "send",newmessage }) }
//                                             onChangeText={this.sendmessage.bind(this)}
//                                         />
//                                         <View style={{ width: 40, height: 30, margin: 20, marginLeft: 5, backgroundColor: "", position: "absolute", alignSelf: "flex-end", marginTop: 13, marginRight: 160 }}><Icon5 name="attachment" color={"#A9A9A9"}  size={22}  /></View>
//                                     </View>
//                                     <View style={{ backgroundColor: "#128C7E", marginTop: 5, marginLeft: 4, alignItems: "center", borderRadius: 100, width: 45, height: 45 }}><Icon style={{ paddingTop: 10, paddingRight: 0 }} name={this.state.keyboardicon} size={25} color={"#FFF"} /></View>
//                                 </FooterTab>


//                             </Footer>
//                         </ImageBackground>
//                     </View>
//                 </View>

//             </Modal>



//             // <View style={styles.container}>
//             //   <Text style={stfontFamily:"HelveticaNeue", yles.welcome}>Welcome to React Native!</Text>
//             //   <Text style={styles.instructions}>To get started, edit App.js</Text>
//             //   <Text style={styles.instructions}>{instructions}</Text>
//             // </View>
//         );
//     }
// }

// const RootStack = createStackNavigator(
//     {
//         Home: { screen: ChatScreen, navigationOptions: { header: null } },

//         Contacts: { screen: ContactScreen, navigationOptions: { header: null } }
//     },
//     {
//         initialRouteName: 'Home',
//     }
// );

export default withNavigation(ChatScreen)
   

