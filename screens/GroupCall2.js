import { View, Text, Image, StyleSheet, Dimensions, ScrollView, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import backgroundimage from "../assets/images/backgorund.jpg"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { useNavigation } from '@react-navigation/native';

const GroupCall2 = () => {
    const navigation = useNavigation()
    const data = {

    }
    const goto=()=>{
   navigation.navigate("VideoCall");
    }
    const goto1=()=>{
        navigation.navigate("Profile");
         }

    return (
      

<ImageBackground  source={require("../assets/images/backgroundcristmas.png")}  style={{width:"100%",height:"100%"}}>           
 <View style={{alignItems:"center",backgroundColor: 'rgba(0,0,0,0.5)',flex:1}}>
 <View style={[styles.flex,{justifyContent:"space-between"}]}>    
   <TouchableOpacity onPress={goto1} style={{width:70,height:70,borderRadius:35,backgroundColor:"white",justifyContent:"center",alignItems:"center",margin:10}}>
     
     <Image style={{width:45,height:45}} source={require("../assets/images/avatar.png")}/>

     </TouchableOpacity>

                <View style={{ width: 40, height: 40, backgroundColor: "white", borderRadius: 15, justifyContent: "center", alignItems: "center", marginRight: 20, marginTop: 15 }}>
                    <Text style={{ fontSize: 30, marginBottom: 10, fontWeight: "bold", color: "blue" }}>+</Text></View>
            </View>
            <View style={[styles.flex, { marginTop: 30 }]}><Text style={{ color: "yellow", fontSize: 22, color: "yellow",fontWeight:"bold",marginLeft:"20%" }}> Make New Friends</Text><View style={{ marginRight: 30 }}>
</View></View>
      
           <ScrollView>
           <View style={styles.box}>
                <View style={{ height: 80, width: 80, backgroundColor: "white", borderRadius: 45, justifyContent: "center", alignItems: "center", marginTop: 5, marginLeft: 10 }}><Image style={{ height: 70, width: 70, marginBottom: 10 }} source={require("../assets/images/avatar2.png")} />
                </View>
                <View style={{ padding: 20, flexDirection: "column", justifyContent: "space-between" }}>
                    <Text style={styles.text}>Mahi Reddy</Text>
                    <View style={styles.flex}>
                    <ImageBackground source={require("../assets/images/hritik.jpg")} style={styles.circle}></ImageBackground>
                    <ImageBackground source={require("../assets/images/hritik.jpg")} style={styles.circle}></ImageBackground>
                    <ImageBackground source={require("../assets/images/hritik.jpg")} style={styles.circle}></ImageBackground>
                    </View>
                  </View>
                    <View style={styles.box3}>
                    <TouchableOpacity onPress={goto}>
                   <Text style={styles.text}>Join Room</Text>
                    </TouchableOpacity>
                </View>
            </View>
           <View style={styles.box}>
                <View style={{ height: 80, width: 80, backgroundColor: "white", borderRadius: 45, justifyContent: "center", alignItems: "center", marginTop: 5, marginLeft: 10 }}><Image style={{ height: 65, width: 55, marginBottom: 10 }} source={require("../assets/images/avatar2.png")} />
                </View>
                <View style={{ padding: 20, flexDirection: "column", justifyContent: "space-between" }}>
                    <Text style={styles.text}>Mahi Reddy</Text>
                    <View style={styles.flex}>
                    <ImageBackground source={require("../assets/images/hritik.jpg")} style={styles.circle}></ImageBackground>
                    <ImageBackground source={require("../assets/images/hritik.jpg")} style={styles.circle}></ImageBackground>
                    <ImageBackground source={require("../assets/images/hritik.jpg")} style={styles.circle}></ImageBackground>
                    </View>
                 </View>
                    <View style={styles.box3}>
                    <TouchableOpacity onPress={goto}>
                   <Text style={styles.text}>Join Room</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.box}>
                <View style={{ height: 80, width: 80, backgroundColor: "white", borderRadius: 45, justifyContent: "center", alignItems: "center", marginTop: 5, marginLeft: 10 }}><Image style={{ height: 65, width: 55, marginBottom: 10 }} source={require("../assets/images/avatar2.png")} />
                </View>
                <View style={{ padding: 20, flexDirection: "column", justifyContent: "space-between" }}>
                    <Text style={styles.text}>Mahi Reddy</Text>
                    <View style={styles.flex}>
                    <ImageBackground source={require("../assets/images/hritik.jpg")} style={styles.circle}></ImageBackground>
                    <ImageBackground source={require("../assets/images/hritik.jpg")} style={styles.circle}></ImageBackground>
                    <ImageBackground source={require("../assets/images/hritik.jpg")} style={styles.circle}></ImageBackground>
                    </View>
            </View>
                <View style={styles.box3}>
                <TouchableOpacity onPress={goto}>
                   <Text style={styles.text}>Join Room</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.box}>
                <View style={{ height: 80, width: 80, backgroundColor: "white", borderRadius: 45, justifyContent: "center", alignItems: "center", marginTop: 5, marginLeft: 10 }}><Image style={{ height: 65, width: 55, marginBottom: 10 }} source={require("../assets/images/avatar2.png")} />
                </View>
                <View style={{ padding: 20, flexDirection: "column", justifyContent: "space-between" }}>
                    <Text style={styles.text}>Mahi Reddy</Text>
                    <View style={styles.flex}>
                    <ImageBackground source={require("../assets/images/hritik.jpg")} style={styles.circle}></ImageBackground>
                    <ImageBackground source={require("../assets/images/hritik.jpg")} style={styles.circle}></ImageBackground>
                    <ImageBackground source={require("../assets/images/hritik.jpg")} style={styles.circle}></ImageBackground>
                    </View>
                  </View>
                    <View style={styles.box3}>
                    <TouchableOpacity onPress={goto}>
                   <Text style={styles.text}>Join Room</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.box}>
                <View style={{ height: 80, width: 80, backgroundColor: "white", borderRadius: 45, justifyContent: "center", alignItems: "center", marginTop: 5, marginLeft: 10 }}><Image style={{ height: 65, width: 55, marginBottom: 10 }} source={require("../assets/images/avatar2.png")} />
                </View>
                <View style={{ padding: 20, flexDirection: "column", justifyContent: "space-between" }}>
                    <Text style={styles.text}>Mahi Reddy</Text>
                    <View style={styles.flex}>
                    <ImageBackground source={require("../assets/images/hritik.jpg")} style={styles.circle}></ImageBackground>
                    <ImageBackground source={require("../assets/images/hritik.jpg")} style={styles.circle}></ImageBackground>
                    <ImageBackground source={require("../assets/images/hritik.jpg")} style={styles.circle}></ImageBackground>
                    </View>
                  
                    </View>
                    <View style={styles.box3}>
                    <TouchableOpacity onPress={goto}>
                   <Text style={styles.text}>Join Room</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.box}>
                <View style={{ height: 80, width: 80, backgroundColor: "white", borderRadius: 45, justifyContent: "center", alignItems: "center", marginTop: 5, marginLeft: 10 }}><Image style={{ height: 65, width: 55, marginBottom: 10 }} source={require("../assets/images/avatar2.png")} />
                </View>
                <View style={{ padding: 20, flexDirection: "column", justifyContent: "space-between" }}>
                    <Text style={styles.text}>Mahi Reddy</Text>
                    <View style={styles.flex}>
                    <ImageBackground source={require("../assets/images/hritik.jpg")} style={styles.circle}></ImageBackground>
                    <ImageBackground source={require("../assets/images/hritik.jpg")} style={styles.circle}></ImageBackground>
                    <ImageBackground source={require("../assets/images/hritik.jpg")} style={styles.circle}></ImageBackground>
                    </View>
                  </View>
                    <View style={styles.box3}>
                    <TouchableOpacity onPress={goto}>
                   <Text style={styles.text}>Join Room</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.box}>
                <View style={{ height: 80, width: 80, backgroundColor: "white", borderRadius: 45, justifyContent: "center", alignItems: "center", marginTop: 5, marginLeft: 10 }}><Image style={{ height: 65, width: 55, marginBottom: 10 }} source={require("../assets/images/avatar2.png")} />
                </View>
                <View style={{ padding: 20, flexDirection: "column", justifyContent: "space-between" }}>
                    <Text style={styles.text}>Mahi Reddy</Text>
                    <View style={styles.flex}>
                    <ImageBackground source={require("../assets/images/hritik.jpg")} style={styles.circle}></ImageBackground>
                    <ImageBackground source={require("../assets/images/hritik.jpg")} style={styles.circle}></ImageBackground>
                    <ImageBackground source={require("../assets/images/hritik.jpg")} style={styles.circle}></ImageBackground>
                    </View>
                  </View>
                    <View style={styles.box3}>
                    <TouchableOpacity onPress={goto}>
                   <Text style={styles.text}>Join Room</Text>
                    </TouchableOpacity>
                </View>
            </View>
           </ScrollView>
 </View>
 </ImageBackground>

       
    )
}
const styles = StyleSheet.create({
    circle:{
        width:20,height:20,borderRadius:10,
        marginLeft:-5,
      
        overflow:"hidden"
    },
    box2: {

        width: 60,
        marginTop: 10,
        height: 35,
        borderRadius: 17,
        flexDirection: "row",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {

        fontsize: 19,
        color: "white",
        fontWeight: "bold"
    },
    text2: {
        color: "white",
        fontSize: 11,
        opacity: .8
    },
    box: {
        width: windowWidth - 20,
        height: 94,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',

        borderRadius: 15,
        flexDirection: "row",

        marginTop: 20
    },
    flex: {
        width: "100%",
        flexDirection: "row",
       


    },
    box3:{
        width:100,
        alignItems:"center",
        height:40,
        borderRadius:20,
        backgroundColor:"blue",
       marginLeft:"auto",
       marginRight:10,
       opacity:.7,
        marginTop:30,justifyContent:"center"
    }
     
})

export default GroupCall2