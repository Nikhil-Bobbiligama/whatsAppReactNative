
import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Platform, View, Row } from 'native-base';
import dhonidp from './images/dhonidp.jpeg'
import adbdp from './images/adbdp.jpeg'
import viratdp from './images/viratdp.jpeg'
import salmandp from './images/salmandp.jpeg'
import maheshdp from './images/maheshdp.jpeg'
import voiceCall from './images/voiceCallicon2.png'
import receivedCall from './images/receivedcall.jpeg'
import dailedCall from './images/dailedcall.jpeg'
import missedCall  from './images/missed.png'
import videoCall from './images/videocall.png'
import callAdd from './images/calladd.png'

import { withNavigation } from 'react-navigation';

import { Image, ScrollView, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        width: 55,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        right: 20,
        bottom: 20,
        backgroundColor: '#25D366',
        borderRadius: 30,
        elevation: 8
    },
    fabIcon: {
        fontSize: 40,
        color: 'white'
    }
});

var checkscroll=0;
 class Chats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a: [{
                contactName: "Dhoni",
                callicon: voiceCall,
                time: "42 minutes ago",
                id: 1,
                number: 9700911060,
                displayPic: dhonidp,
                calltype:receivedCall,
            },
            { 
                contactName: "Virat", 
                callicon: videoCall,
                time: "15 October, 10:05 AM",
                number: 8374151515,
                id: 2,
                displayPic: viratdp,
                calltype:missedCall,
            },
            {
                contactName: "Salman",
                callicon: voiceCall,
                time: "15 September, 9:05 AM",
                id: 4,
                number: 9491903177,
                displayPic: salmandp,
                calltype:receivedCall,
            },
            { 
                contactName: "Mahesh", 
                callicon: videoCall,
                time: "25 July, 10:05 PM",
                number: 9059514901,
                id: 3,
                displayPic: maheshdp,
                calltype:missedCall,
            },
            { 
                contactName: "ABD", 
                callicon: videoCall,
                time: "20 July, 8:05 AM",
                number: 9059514901,
                number: 9948434361,
                id: 5,
                displayPic: adbdp,
                calltype:dailedCall,
            },
            {
                contactName: "Dhoni",
                callicon: voiceCall,
                time: "42 minutes ago",
                id: 1,
                number: 9700911060,
                displayPic: dhonidp,
                calltype:receivedCall,
            },
            { 
                contactName: "Virat", 
                callicon: videoCall,
                time: "15 October, 10:05 AM",
                number: 8374151515,
                id: 2,
                displayPic: viratdp,
                calltype:missedCall,
            },
            {
                contactName: "Salman",
                callicon: voiceCall,
                time: "15 September, 9:05 AM",
                id: 4,
                number: 9491903177,
                displayPic: salmandp,
                calltype:receivedCall,
            },
            {
                contactName: "Dhoni",
                callicon: voiceCall,
                time: "42 minutes ago",
                id: 1,
                number: 9700911060,
                displayPic: dhonidp,
                calltype:receivedCall,
            },
            { 
                contactName: "Virat", 
                callicon: videoCall,
                time: "15 October, 10:05 AM",
                number: 8374151515,
                id: 2,
                displayPic: viratdp,
                calltype:missedCall,
            },
            {
                contactName: "Salman",
                callicon: voiceCall,
                time: "15 September, 9:05 AM",
                id: 4,
                number: 9491903177,
                displayPic: salmandp,
                calltype:receivedCall,
            },
            { 
                contactName: "Mahesh", 
                callicon: videoCall,
                time: "25 July, 10:05 PM",
                number: 9059514901,
                id: 3,
                displayPic: maheshdp,
                calltype:missedCall,
            },
            { 
                contactName: "ABD", 
                callicon: videoCall,
                time: "20 July, 8:05 AM",
                number: 9059514901,
                number: 9948434361,
                id: 5,
                displayPic: adbdp,
                calltype:dailedCall,
            },
            { 
                contactName: "Mahesh", 
                callicon: videoCall,
                time: "25 July, 10:05 PM",
                number: 9059514901,
                id: 3,
                displayPic: maheshdp,
                calltype:missedCall,
            },
            { 
                contactName: "ABD", 
                callicon: videoCall,
                time: "20 July, 8:05 AM",
                number: 9059514901,
                number: 9948434361,
                id: 5,
                displayPic: adbdp,
                calltype:dailedCall,
            },
            {
                contactName: "Dhoni",
                callicon: voiceCall,
                time: "42 minutes ago",
                id: 1,
                number: 9700911060,
                displayPic: dhonidp,
                calltype:receivedCall,
            },

            ],
            up_down:"",

        }


    }
    // takePicture() { this.camera.capture() .then((data) => console.log(data)) .catch(err => console.error(err)); }
    static navigationOptions = {
        title: "Watsapp"
    }
    handleScroll(event) {
        // console.log(event.nativeEvent.contentOffset.y);
        // console.log("heyyyyyyyyyyyyy");
        
        if(checkscroll<event.nativeEvent.contentOffset.y){
            if(checkscroll<0){
                //  alert("moving down");
                checkscroll=event.nativeEvent.contentOffset.y;
                this.setState({up_down:"down"});
            }
            else
            {
            //  alert("moving up pres val"+event.nativeEvent.contentOffset.y+" prev :"+checkscroll);
            this.setState({up_down:"up"});
            checkscroll=event.nativeEvent.contentOffset.y;
        }}
        else{
            this.setState({up_down:"down"});
            //  alert("moving down pres val"+event.nativeEvent.contentOffset.y+" prev :"+checkscroll);
            checkscroll=event.nativeEvent.contentOffset.y;
        }
      
        // const { navigate } = this.props.navigation;
        // navigate('Home', { up_down: this.state.up_down });
        //this.props.navigation.state.params.xyz(this.state.up_down);
        const { navigate } = this.props.navigation;
        navigate('Home', { up_down: this.state.up_down });
        this.props.xyz(this.state.up_down);
    }
    render() {
        return (
            <Container style={{ backgroundColor: "white" }}>
                <View>
                    <FlatList
                      onScroll={(event) => this.handleScroll(event)}
                      scrollEventThrottle={1}
                      bounces={true}
                        data={this.state.a}
                        renderItem={({ item }) =>
                            <View style={{ marginTop: 10 }}>

                                <View style={{ width: 80, backgroundColor: "white", height: 70 }}><View >
                                    <Image style={{
                                        borderWidth: 1,
                                        borderColor: 'rgba(0,0,0,0.2)',
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
                                    <View style={{ height: "99%", width: "100%" }}>
                                        <View style={{ backgroundColor: "white", width: "65%", height: "45%" }}>
                                            <Text style={{ fontWeight: "bold", marginTop: 4 }}> {item.contactName}</Text>
                                        </View>
                                        <View style={{ backgroundColor: "white", height: "45%", width: "35%", marginLeft: "65%", position: "absolute",backgroundColor:"white",alignItems:"flex-end",paddingTop:10,paddingRight:10 }}>
                                            <Image style={{ width: 25, height: 25 }} source={item.callicon}></Image> 
                                        </View>
                                        <View style={{ backgroundColor: "white", height: "55%", width: "100%", position: "absolute", position: "relative" }}>
                                            <View style={{height:35,width:30,paddingTop:5,backgroundColor:"white"}}> 
                                            <Image style={{height:20,width:20,paddingLeft:15}} source= {item.calltype} ></Image>
                                            </View>
                                            <Text style={{ fontWeight: "normal", opacity: 0.5,position:"absolute",marginLeft:20 }}> {item.time}</Text>
                                        </View>

                                    </View>

                                </View>
                            </View>



                        } />
                    <TouchableOpacity onPress={() => alert('FAB clicked')} style={styles.fab}>
                        <Image style={{ width: 25, height: 25, borderRadius: 100,opacity:0.4 }} source={ callAdd }></Image>
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

export default withNavigation(Chats)