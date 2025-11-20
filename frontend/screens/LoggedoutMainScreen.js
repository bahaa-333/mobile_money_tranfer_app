import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Custombutton from '../modules/Custombutton'

const LoggedoutMainScreen = () => {
  return (
    <View style={styles.container}>
        {/*navig/ hamburger menu*/}
        <NavigationContainer />
        {/*logo + intro message*/}
        <Image source={require('../assets/logo.png')} style={styles.logoImg} />
        <Text style={styles.intro}>Welcome to <Text style={styles.highlight}>Swift Send.</Text> </Text>
        <Text style={styles.intro}>Experience secure, instant P2P money transfers designed to keep your transactions fast, safe, and effortless.</Text>

        {/* buttons to login/signup in a row setting */}
        <View style={styles.buttonRow}>
            <Custombutton text="Login" onPress={() => console.log('Login pressed')} />
            <Custombutton text="Sign Up" onPress={() => console.log('Sign Up pressed')} />
        </View>
    </View>
  )
}

export default LoggedoutMainScreen

const styles = StyleSheet.create({
    container: {},
    logoImg: {},
    intro: {},
    highlight: {},

})