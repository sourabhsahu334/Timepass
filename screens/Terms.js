import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'

const Terms = () => {
    const navigation = useNavigation();
    const goto = () => {
        navigation.navigate('Register');
    }

    return (
        <LinearGradient
            colors={['rgba(200,115,156,1)', 'rgba(146,123,198,1)']}
            style={styles.container}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}

        >
            <Image style={[styles.image]} source={require("../assets/images/Group.png")} />
            <Text style={styles.heading}>SELECT YOUR GENDER</Text>
            <Text style={styles.text}>Gender Reminder: Choose your gender carefully as it cannot be altered later. Incorrect registration may impact your experience and eligibility.</Text>

            <View style={styles.gender}>
                <View >
                    <Image style={{ width: 80, height: 80, marginBottom: 10 }} source={require("../assets/images/female.png")} />
                    <View style={styles.button}>

                        <TouchableOpacity>
                            <Text style={styles.text1}>Female</Text>
                        </TouchableOpacity>
                    </View></View>
                <View>

                    <Image style={{ width: 80, height: 80, marginBottom: 10 }} source={require("../assets/images/male.png")} />
                    <View style={styles.button1}><TouchableOpacity><Text style={styles.text1}>Male</Text></TouchableOpacity></View>

                </View></View>
            <View style={styles.doneButton}><TouchableOpacity onPress={goto}><Text style={{ fontSize: 22, fontWeight: "bold", color: "white" }}>Done</Text></TouchableOpacity></View>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: 'center', alignItems: "center" }}><Text style={{ color: "white" }}>You are agreeing to our </Text><Text style={{ color: "blue" }}>Terms & Privacy Policy</Text></View>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    text1: {
        color: "white",

    },
    image: {
        marginTop: 30,
        width: "80%",

    },
    gender: {
        marginTop: 30,
        flex: 1,
        flexDirection: "row",
        width: "70%",
        justifyContent: "space-between",
        alignItems: "center",

    },
    frame: {
        marginTop: 30
    },
    basic: {
        marginLeft: "auto",
        marginRight: "auto",
    },
    button: {
        backgroundColor: "#efa0c7",
        borderWidth: .1,
        borderColor: "black",
        width: 70,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center"

    },
    button1: {
        backgroundColor: "#88b7fb",
        borderWidth: .1,
        borderRadius: 5,
        borderColor: "black",
        width: 70,

        justifyContent: "center",
        alignItems: "center"

    },
    doneButton: {
        height: 50,
        width: "60%",
        backgroundColor: "#2e63e8",
        marginTop: 60,
        justifyContent: "center",
        alignItems: "center",

        borderRadius: 20

    },
    heading: {
        marginTop: 30,

        fontSize: 19,
        color: "white"
    },
    text: {
        color: "white",
        marginTop: 10,

    },
    container: {
        backgroundColor: "#927cc8",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Terms