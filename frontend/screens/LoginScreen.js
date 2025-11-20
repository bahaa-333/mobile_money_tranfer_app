import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native'
import React from 'react'

const LoginScreen = () => {
    //variables to hold username and password
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  return (
    <View style={styles.loginContainer}>
    {/*app logo and welcome text*/}
      <View style={styles.glowWrapper}>
        <Image style={styles.logo} source={require('./assets/login_logo.png')} />
      </View>
      <Text style={styles.welcomeText}>Welcome back!</Text>

    {/*input fields*/}
      <TextInput style={styles.input} placeholder= "Email or Phone number" value={username} onChangeText={setUsername} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} value={password} onChangeText={setPassword} />
    
    {/*pressable links to redirect for other pages*/}
      <View style={styles.links}>
        <View style={{flexDirection: 'row'}}>
            <Text style={styles.txt}>New here?</Text>
            <Pressable onPress={() => {}} ><Text style={styles.linkButton}> Sign Up</Text></Pressable>
        </View>
        <Pressable>
            <Text style={styles.linkButton}>Forgot Password</Text>
        </Pressable>
      </View>

    {/*submit button*/}
      <Pressable style={styles.loginButton} onPress={() => {}}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Login</Text>
      </Pressable>
    </View>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
  logo:{
    width: 140,
    height: 140,
    marginBottom: 20,
    borderRadius: 25,
  },
  glowWrapper: {
    shadowColor: '#efefefdb', 
    shadowOpacity: 0.7,
    shadowRadius: 50, 
    elevation: 40, 
    backgroundColor: 'transparent', 
  },
    loginContainer: {
      marginTop: -35,
      backgroundColor: '#050419',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcomeText:{
      color: '#ffffff',
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
        width: '76%',
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingHorizontal: 10,
        marginVertical: 10,
        paddingLeft: 18,
    },
    loginButton: {
        height: 40,
        justifyContent: 'center',
        marginTop: 20,
        color: '#fff',
        backgroundColor: '#7c05a3ff',
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 20,
    },
    links: {
        width: '67%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    linkButton: {
        color: '#4c8ccbff',
    },
    txt:{
      color: '#ffffff',
    }
})