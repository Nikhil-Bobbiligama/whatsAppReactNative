
import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Platform, View, Row } from 'native-base';
import dhonidp from './images/dhonidp.jpeg'
import adbdp from './images/adbdp.jpeg'
import viratdp from './images/viratdp.jpeg'
import salmandp from './images/salmandp.jpeg'
import maheshdp from './images/maheshdp.jpeg'
import statusadd from './images/statusadd.png'
import { Image, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
const styles = StyleSheet.create({
    fab: {

        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        // left: 40,
        // top: 40,
        backgroundColor: '#25D366',
        borderRadius: 30,
        // elevation: 0,

    },
    fabIcon: {
        fontSize: 20,
        color: 'white'
    }

});
export default class Status extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a: [
                {
                    contactName: "My Status",
                    message: "Tap to add status update",
                    time: " ",
                    id: 0,
                    number: 9700911060,
                    displayPic: statusadd,
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
                    time: "1:45 Pm",
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
                    time: "1:45 Pm",
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
                    time: "1:45 Pm",
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
                    time: "1:45 Pm",
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
                    time: "1:45 Pm",
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

            ],
            b: [
                {
                    contactName: "M Status",
                    message: "Tap to add status update",
                    time: " ",
                    id: 0,
                    number: 9700911060,
                    displayPic: statusadd,
                },
                {
                    contactName: "honi",
                    message: "Hi Nikhil Watsapp",
                    time: "12:45 PM",
                    id: 1,
                    number: 9700911060,
                    displayPic: dhonidp,
                },

                {
                    contactName: "irat",
                    message: "Hi Nikhil ",
                    time: "27/10/18",
                    number: 8374151515,
                    id: 2,
                    displayPic: viratdp,
                },
                {
                    contactName: "ahesh",
                    message: "Hi Nikhil ",
                    time: "10:45 PM",
                    number: 9059514901,
                    id: 3,
                    displayPic: maheshdp,
                },
                {
                    contactName: "alman",
                    message: "hii ",
                    time: "1:45 Pm",
                    id: 4,
                    number: 9491903177,
                    displayPic: salmandp,
                },
                {
                    contactName: "BD",
                    message: "Hey...",
                    time: "YESTERDAY",
                    number: 9948434361,
                    id: 5,
                    displayPic: adbdp,
                },
                {
                    contactName: "honi",
                    message: "Hi Nikhil Watsapp",
                    time: "12:45 PM",
                    id: 1,
                    number: 9700911060,
                    displayPic: dhonidp,
                },
                {
                    contactName: "irat",
                    message: "Hi Nikhil ",
                    time: "27/10/18",
                    number: 8374151515,
                    id: 2,
                    displayPic: viratdp,
                },
                {
                    contactName: "ahesh",
                    message: "Hi Nikhil ",
                    time: "10:45 PM",
                    number: 9059514901,
                    id: 3,
                    displayPic: maheshdp,
                },
                {
                    contactName: "alman",
                    message: "hii ",
                    time: "1:45 Pm",
                    id: 4,
                    number: 9491903177,
                    displayPic: salmandp,
                },
                {
                    contactName: "BD",
                    message: "Hey...",
                    time: "YESTERDAY",
                    number: 9948434361,
                    id: 5,
                    displayPic: adbdp,
                },
                {
                    contactName: "honi",
                    message: "Hi Nikhil Watsapp",
                    time: "12:45 PM",
                    id: 1,
                    number: 9700911060,
                    displayPic: dhonidp,
                },
                {
                    contactName: "irat",
                    message: "Hi Nikhil ",
                    time: "27/10/18",
                    number: 8374151515,
                    id: 2,
                    displayPic: viratdp,
                },
                {
                    contactName: "ahesh",
                    message: "Hi Nikhil ",
                    time: "10:45 PM",
                    number: 9059514901,
                    id: 3,
                    displayPic: maheshdp,
                },
                {
                    contactName: "alman",
                    message: "hii ",
                    time: "1:45 Pm",
                    id: 4,
                    number: 9491903177,
                    displayPic: salmandp,
                },
                {
                    contactName: "BD",
                    message: "Hey...",
                    time: "YESTERDAY",
                    number: 9948434361,
                    id: 5,
                    displayPic: adbdp,
                },
                {
                    contactName: "honi",
                    message: "Hi Nikhil Watsapp",
                    time: "12:45 PM",
                    id: 1,
                    number: 9700911060,
                    displayPic: dhonidp,
                },
                {
                    contactName: "irat",
                    message: "Hi Nikhil ",
                    time: "27/10/18",
                    number: 8374151515,
                    id: 2,
                    displayPic: viratdp,
                },
                {
                    contactName: "ahesh",
                    message: "Hi Nikhil ",
                    time: "10:45 PM",
                    number: 9059514901,
                    id: 3,
                    displayPic: maheshdp,
                },
                {
                    contactName: "alman",
                    message: "hii ",
                    time: "1:45 Pm",
                    id: 4,
                    number: 9491903177,
                    displayPic: salmandp,
                },
                {
                    contactName: "BD",
                    message: "Hey...",
                    time: "YESTERDAY",
                    number: 9948434361,
                    id: 5,
                    displayPic: adbdp,
                },
                {
                    contactName: "honi",
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
                    time: "1:45 Pm",
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


    }
    // takePicture() { this.camera.capture() .then((data) => console.log(data)) .catch(err => console.error(err)); }
    static navigationOptions = {
        title: "Watsapp"
    }
    render() {
        return (
            <Container style={{ backgroundColor: "white" }}>
                <View>
                    {/* <View style={{ marginTop: 10 }}>

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
                                source={this.state.a[0].displayPic}
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
                            backgroundColor: 'grey',



                        }}>
                            <View style={{ height: "99%", width: "100%" }}>
                                <View style={{ backgroundColor: "white", width: "65%", height: "45%" }}>
                                    <Text style={{ fontWeight: "bold", marginTop: 4 }}> My Status</Text>
                                </View>
                                <View style={{ backgroundColor: "white", height: "45%", width: "35%", marginLeft: "65%", position: "absolute" }}>
                                    <Text style={{ fontWeight: "normal", fontSize: 13, marginTop: 3, textAlign: "right", opacity: 0.5, paddingTop: 5 }}> </Text>
                                </View>
                                <View style={{ backgroundColor: "white", height: "55%", width: "100%", position: "absolute", position: "relative" }}>
                                    <Text style={{ fontWeight: "normal", opacity: 0.5 }}> Tap to add status update</Text>
                                </View>

                            </View>

                        </View>
                       
                    </View> */}
                    <ScrollView>
                        <FlatList
                            data={this.state.a}
                            renderItem={({ item }) =>
                                <View style={{ marginTop: 10 }}>

                                    <View style={{ width: 80, backgroundColor: "white", height: 70 }}>
                                        <View >
                                            <Image style={{

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
                                            <View ></View>
                                        </View>
                                    </View>
                                    <View style={{

                                        flex: 1, flexDirection: "row",
                                        // width: "80%",
                                        marginRight: 10,

                                        marginLeft: 80,
                                        float: "left",
                                        position: "absolute",
                                        height: 70,
                                        backgroundColor: 'grey',



                                    }}>
                                        <View style={{ height: "99%", width: "100%" }}>
                                            <View style={{ backgroundColor: "white", width: "65%", height: "45%" }}>
                                                <Text style={{ fontWeight: "bold", marginTop: 4 }}> {item.contactName}</Text>
                                            </View>
                                            <View style={{ backgroundColor: "white", height: "45%", width: "35%", marginLeft: "65%", position: "absolute" }}>
                                                <Text style={{ fontWeight: "normal", fontSize: 13, marginTop: 3, textAlign: "right", opacity: 0.5, paddingTop: 5 }}> {item.time}</Text>
                                            </View>
                                            <View style={{ backgroundColor: "white", height: "55%", width: "100%", position: "absolute", position: "relative" }}>
                                                <Text style={{ fontWeight: "normal", opacity: 0.5 }}>  {item.message}</Text>
                                            </View>

                                        </View>

                                    </View>
                                </View>



                            } />
                            <View style={{backgroundColor:"red",height:50,width:"100%"}}></View>
                        <FlatList
                            data={this.state.b}
                            renderItem={({ item }) =>
                                <View style={{ marginTop: 10 }}>

                                    <View style={{ width: 80, backgroundColor: "white", height: 70 }}>
                                        <View >
                                            <Image style={{

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
                                            <View ></View>
                                        </View>
                                    </View>
                                    <View style={{

                                        flex: 1, flexDirection: "row",
                                        // width: "80%",
                                        marginRight: 10,

                                        marginLeft: 80,
                                        float: "left",
                                        position: "absolute",
                                        height: 70,
                                        backgroundColor: 'grey',



                                    }}>
                                        <View style={{ height: "99%", width: "100%" }}>
                                            <View style={{ backgroundColor: "white", width: "65%", height: "45%" }}>
                                                <Text style={{ fontWeight: "bold", marginTop: 4 }}> {item.contactName}</Text>
                                            </View>
                                            <View style={{ backgroundColor: "white", height: "45%", width: "35%", marginLeft: "65%", position: "absolute" }}>
                                                <Text style={{ fontWeight: "normal", fontSize: 13, marginTop: 3, textAlign: "right", opacity: 0.5, paddingTop: 5 }}> {item.time}</Text>
                                            </View>
                                            <View style={{ backgroundColor: "white", height: "55%", width: "100%", position: "absolute", position: "relative" }}>
                                                <Text style={{ fontWeight: "normal", opacity: 0.5 }}>  {item.message}</Text>
                                            </View>

                                        </View>

                                    </View>
                                </View>



                            } />
                    </ScrollView>
                    <TouchableOpacity onPress={() => alert('FAB clicked')} style={styles.fab}>
                        <Text style={styles.fabIcon}>+</Text>
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

