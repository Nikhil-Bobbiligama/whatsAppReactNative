
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Icon2 from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { Container, Header, Tab, Tabs, TabHeading, Text, Platform, View, Row } from 'native-base';
import dhonidp from './images/dhonidp.jpeg'
import adbdp from './images/adbdp.jpeg'
import viratdp from './images/viratdp.jpeg'
import salmandp from './images/salmandp.jpeg'
import maheshdp from './images/maheshdp.jpeg'
import cameraicon from './images/camera.jpeg'
import pencilicon from './images/pencil.png'
import recentupdate1 from './images/recentupdate1.jpeg'
import recentupdate2 from './images/recentupdate2.jpeg'
import recentupdate3 from './images/recentupdate3.jpeg'
import viewedupdate1 from './images/viewedupdate1.jpeg'
import viewedupdate2 from './images/viewedupdate2.jpeg'
import viewedupdate3 from './images/viewedupdate3.jpeg'
import mutedupdate1 from './images/mutedupdate1.jpeg'
import mutedupdate2 from './images/mutedupdate2.jpeg'
import mutedupdate3 from './images/mutedupdate3.jpeg'
import { withNavigation } from 'react-navigation';





import { Image, ScrollView, StyleSheet, TouchableOpacity, TouchableNativeFeedback, FlatList } from 'react-native';
const myIcon = (<Icon name="rocket" size={30} color="#900" />)
const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        left: 45,
        top: 40,
        backgroundColor: '#25D366',
        borderRadius: 30,
        elevation: 8
    },
    fab2: {
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
    fabIcon: {
        fontSize: 20,
        color: 'white'
    }
});
const a = [
    {
        contactName: "MSD",
        message: "Hi Nikhil Watsapp",
        time: "Today, 11:11 AM",
        id: 1,
        number: 9700911060,
        displayPic: viewedupdate1,
    },
    {
        contactName: "Virat Kohli",
        message: "Hi Nikhil ",
        time: "Today, 9:26 AM",
        number: 8374151515,
        id: 2,
        displayPic: viewedupdate2,
    },
    {
        contactName: "Mahesh Babu",
        message: "Hi Nikhil ",
        time: "Today, 7:19 AM",
        number: 9059514901,
        id: 3,
        displayPic: viewedupdate3,
    },
    {
        contactName: "MSD",
        message: "Hi Nikhil Watsapp",
        time: "Today, 11:11 AM",
        id: 1,
        number: 9700911060,
        displayPic: viewedupdate1,
    },
    {
        contactName: "Virat Kohli",
        message: "Hi Nikhil ",
        time: "Today, 9:26 AM",
        number: 8374151515,
        id: 2,
        displayPic: viewedupdate2,
    },
    {
        contactName: "Mahesh Babu",
        message: "Hi Nikhil ",
        time: "Today, 7:19 AM",
        number: 9059514901,
        id: 3,
        displayPic: viewedupdate3,
    }
];
const mutedUpdates = [
    {
        contactName: "Mahi",
        message: "Hi Nikhil Watsapp",
        time: "Today, 5:30 PM",
        id: 1,
        number: 9700911060,
        displayPic: mutedupdate1,
    },

    {
        contactName: "Salman",
        message: "Hi Nikhil ",
        time: "Today, 4:00 PM",
        number: 9059514901,
        id: 3,
        displayPic: mutedupdate2,
    },
    {
        contactName: "Kohli",
        message: "Hi Nikhil ",
        time: "Today, 3:25 PM",
        number: 8374151515,
        id: 2,
        displayPic: mutedupdate3,
    },
];
const recentUpdates = [
    {
        contactName: "Dhoni",
        message: "Hi Nikhil Watsapp",
        time: "Today, 5:11 PM",
        id: 1,
        number: 9700911060,
        displayPic: recentupdate1,
    },

    {
        contactName: "Mahesh",
        message: "Hi Nikhil ",
        time: "Today, 4:30 PM",
        number: 9059514901,
        id: 3,
        displayPic: recentupdate2,
    },
    {
        contactName: "Virat",
        message: "Hi Nikhil ",
        time: "Today, 3:16 PM",
        number: 8374151515,
        id: 2,
        displayPic: recentupdate3,
    },
    {
        contactName: "Dhoni",
        message: "Hi Nikhil Watsapp",
        time: "Today, 5:11 PM",
        id: 1,
        number: 9700911060,
        displayPic: recentupdate1,
    },

    {
        contactName: "Mahesh",
        message: "Hi Nikhil ",
        time: "Today, 4:30 PM",
        number: 9059514901,
        id: 3,
        displayPic: recentupdate2,
    },
    {
        contactName: "Virat",
        message: "Hi Nikhil ",
        time: "Today, 3:16 PM",
        number: 8374151515,
        id: 2,
        displayPic: recentupdate3,
    },

];
var checkscroll=0;
 class Status extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recentUpdates: recentUpdates,
            mutedUpdates: mutedUpdates,
            up_down:"",
            a: a
        }

        this.handleScroll.bind(this);
    }
    static navigationOptions = {
        title: "Watsapp"
    }
    openCamera() {
        alert("hekllo");
    }
    
    handleScroll(event) {
        // console.log(event.nativeEvent.contentOffset.y);
        // console.log("heyyyyyyyyyyyyy");
        
        if(checkscroll<event.nativeEvent.contentOffset.y){
            if(checkscroll<0){
                alert("moving down");
                checkscroll=event.nativeEvent.contentOffset.y;
                this.setState({up_down:"down"});
            }
            else
            {
            alert("moving up pres val"+event.nativeEvent.contentOffset.y+" prev :"+checkscroll);
            this.setState({up_down:"up"});
            checkscroll=event.nativeEvent.contentOffset.y;
        }}
        else{
            this.setState({up_down:"down"});
            alert("moving down pres val"+event.nativeEvent.contentOffset.y+" prev :"+checkscroll);
            checkscroll=event.nativeEvent.contentOffset.y;
        }
      
        const { navigate } = this.props.navigation;
        navigate('Home', { up_down: this.state.up_down });
        //this.props.navigation.state.params.xyz(this.state.up_down);
        this.props.xyz(this.state.up_down);
    }
    render() {
        return (
            <Container style={{ backgroundColor: "white" }}>
                <ScrollView onScroll={(event) => this.handleScroll(event)}
                 scrollEventThrottle={1}
                 bounces={true}
                >
                    <View>
                        {/* <View><Icon name="rocket" size={30} color="#900" /></View> */}
                        <TouchableNativeFeedback onPress={() => alert('add status')} >
                            <View style={{ marginTop: 10 }}>

                                <View style={{ width: 80, backgroundColor: "white", height: 70 }}><View >
                                    <View>
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
                                            source={adbdp}

                                            alt="please wait" />
                                    </View>
                                </View></View>
                                <View style={{

                                    flex: 1, flexDirection: "row",
                                    marginRight: 10,

                                    marginLeft: 80,
                                    float: "left",
                                    position: "absolute",
                                    height: 70,
                                    backgroundColor: 'grey',



                                }}>
                                    <View style={{ height: "100%", width: "100%" }}>
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
                                <TouchableOpacity onPress={() => alert('FAB clicked')} style={styles.fab}>
                                    <Text style={styles.fabIcon}>+</Text>
                                </TouchableOpacity>
                                {/* #EEECEC */}
                            </View>
                        </TouchableNativeFeedback>
                        <View style={{ backgroundColor: "#F4F0F0", height: 35, width: "100%" }}>
                            <Text style={{ color: "#128C7E", margin: 10, fontSize: 14, marginLeft: 15, marginTop: 5 }}>Recent updates</Text>
                        </View>
                        <FlatList

                            data={this.state.recentUpdates}
                            renderItem={({ item }) =>
                                <View style={{ marginTop: 10 }}>

                                    <View style={{ width: 80, backgroundColor: "white", height: 70 }}><View style={{
                                        borderWidth: 2,
                                        borderColor: '#19BE9C',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: 60,
                                        marginLeft: 10,

                                        height: 60,
                                        marginTop: 5,

                                        borderRadius: 100,
                                    }} >
                                        <Image style={{
                                            borderWidth: 1,
                                            borderColor: '#F4F0F0',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: 55,


                                            height: 55,


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
                                            <View style={{ backgroundColor: "white", height: "45%", width: "35%", marginLeft: "65%", position: "absolute" }}>
                                                <Text style={{ fontWeight: "normal", fontSize: 13, marginTop: 3, textAlign: "right", opacity: 0.5, paddingTop: 5 }}> </Text>
                                            </View>
                                            <View style={{ backgroundColor: "white", height: "55%", width: "100%", position: "absolute", position: "relative" }}>
                                                <Text style={{ fontWeight: "normal", opacity: 0.5 }}>  {item.time}</Text>
                                            </View>

                                        </View>

                                    </View>
                                </View>



                            } />
                        <View style={{ backgroundColor: "#F4F0F0", height: 35, width: "100%", paddingTop: -5 }}>
                            <Text style={{ color: "#128C7E", margin: 10, fontSize: 14, marginLeft: 15, marginTop: 5 }}>Viewed updates</Text>
                        </View>
                        <FlatList
                            data={this.state.a}
                            renderItem={({ item }) =>
                                <View style={{ marginTop: 10 }}>

                                    <View style={{ width: 80, backgroundColor: "white", height: 70 }}><View >
                                        <View style={{
                                            borderWidth: 2,
                                            borderColor: '#D3D3D3',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: 60,
                                            marginLeft: 10,

                                            height: 60,
                                            marginTop: 5,

                                            borderRadius: 100,
                                        }} >
                                            <Image style={{
                                                borderWidth: 1,
                                                borderColor: '#F4F0F0',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: 55,


                                                height: 55,


                                                borderRadius: 100,
                                            }}
                                                source={item.displayPic}
                                               
                                                alt="please wait" />
                                        </View>
                                    </View></View>
                                    <View style={{

                                        flex: 1, flexDirection: "row",
                                        // width: "80%",
                                        marginRight: 10,

                                        marginLeft: 80,
                                        float: "left",
                                        position: "absolute",
                                        height: 70,
                                        backgroundColor: '#EEECEC',



                                    }}>
                                        <View style={{ height: "99%", width: "100%" }}>
                                            <View style={{ backgroundColor: "white", width: "65%", height: "45%" }}>
                                                <Text style={{ fontWeight: "bold", marginTop: 4 }}> {item.contactName}</Text>
                                            </View>
                                            <View style={{ backgroundColor: "white", height: "45%", width: "35%", marginLeft: "65%", position: "absolute" }}>
                                                <Text style={{ fontWeight: "normal", fontSize: 13, marginTop: 3, textAlign: "right", opacity: 0.5, paddingTop: 5 }}> </Text>
                                            </View>
                                            <View style={{ backgroundColor: "white", height: "55%", width: "100%", position: "absolute", position: "relative" }}>
                                                <Text style={{ fontWeight: "normal", opacity: 0.5 }}>  {item.time}</Text>
                                            </View>

                                        </View>

                                    </View>
                                </View>



                            } />
                        <View style={{ backgroundColor: "#F4F0F0", height: 35, width: "100%", paddingTop: -5 }}>
                            <Text style={{ color: "#128C7E", margin: 10, fontSize: 14, marginLeft: 15, marginTop: 5 }}>Muted updates</Text>
                        </View>
                        <FlatList
                            data={this.state.mutedUpdates}
                            renderItem={({ item }) =>
                                <View style={{ marginTop: 10 }}>

                                    <View style={{ width: 80, backgroundColor: "white", height: 70, opacity: .5 }}><View style={{
                                        borderWidth: 5,
                                        borderColor: 'white',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: 60,
                                        marginLeft: 10,

                                        height: 60,
                                        marginTop: 5,

                                        borderRadius: 100,
                                    }} >
                                        <Image style={{
                                            borderWidth: 1,
                                            borderColor: '#F4F0F0',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: 55,


                                            height: 55,


                                            borderRadius: 100,
                                        }}
                                            source={item.displayPic}
                                          
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
                                        backgroundColor: '#EEECEC',



                                    }}>
                                        <View style={{ height: "99%", width: "100%" }}>
                                            <View style={{ backgroundColor: "white", width: "65%", height: "45%" }}>
                                                <Text style={{ fontWeight: "bold", marginTop: 4, opacity: .5 }}> {item.contactName}</Text>
                                            </View>
                                            <View style={{ backgroundColor: "white", height: "45%", width: "35%", marginLeft: "65%", position: "absolute" }}>
                                                <Text style={{ fontWeight: "normal", fontSize: 13, marginTop: 3, textAlign: "right", opacity: 0.5, paddingTop: 5 }}> </Text>
                                            </View>
                                            <View style={{ backgroundColor: "white", height: "55%", width: "100%", position: "absolute", position: "relative" }}>
                                                <Text style={{ fontWeight: "normal", opacity: 0.5 }}>  {item.time}</Text>
                                            </View>

                                        </View>

                                    </View>
                                </View>



                            } />

                    </View>
                </ScrollView>

           
            </Container>

      
        );
    }
}

export default withNavigation(Status)