import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = () => {
  const navigation = useNavigation();
  const goto = () => {
    navigation.navigate('Tabs');
  }


  return (
    <>
      <LinearGradient colors={['rgba(200,115,156,1)', 'rgba(146,123,198,1)']}
        style={styles.container}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}>
        <Image style={styles.saly} source={require("../assets/images/saly.png")} />
        <Image style={styles.saly} source={require("../assets/images/shadow.png")} />

        <View style={styles.container1}>
          <TouchableOpacity style={styles.button} onPress={goto}>
            <Text style={styles.buttonText1}>{<Icon2 name="google" color={"black"} size={20} />}Login with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.facebookButton]} onPress={goto}>
            <Text style={[styles.buttonText,]}>{<Icon2 name="facebook" color={"white"} size={25} />}Login with Facebook</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", marginTop: 50, marginBottom: 30, justifyContent: "center", alignItems: "center" }}>
          <View style={styles.dividerLine} />
          <Text style={[styles.orText]}>OR</Text>
          <View style={styles.dividerLine} /></View>
        <TouchableOpacity onPress={goto} style={styles.iconContainer}>
          <Icon name="mobile-phone" size={35} color="white" />
          <Text style={[styles.orText]}>Login with phone</Text>
        </TouchableOpacity>
        <View style={{ flex: 1, flexDirection: "row", justifyContent: 'center', alignItems: "center" }}><Text style={{ color: "white" }}>You are agreeing to our </Text><Text style={{ color: "blue" }}>Terms & Privacy Policy</Text></View>
      </LinearGradient>
    </>
  )
}
const styles = StyleSheet.create({
  iconContainer: {
    width: 180,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  dividerLine: {

    width: 100,
    height: 1,
    backgroundColor: 'white',
  },
  orText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginHorizontal: 10,
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 250,
    borderRadius: 20,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText1: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  facebookButton: {
    backgroundColor: '#3b5998',
  },
  facebookButtonText: {
    fontSize: 14,
  },

  saly: {
    marginTop: 30,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 5,

  },
  container: {
    backgroundColor: "#927cc8",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
export default Login