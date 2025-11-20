import { useState, React } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';

const SignupScreen = () => {
    //variables to hold name, email, phone numbr and password
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const RegisterHandler = () =>{

    };

  return (
    <View style={styles.loginContainer}>
    {/*app logo and welcome text*/}
      <View style={styles.glowWrapper}>
        <Image style={styles.logo} source={require('./assets/login_logo.png')} />
      </View>
      <Text style={styles.welcomeText}>Register to Swift Send</Text>

    {/*input fields*/}
      <TextInput style={styles.input} placeholder= "Full Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder= "Email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder= "Phone Number" value={phoneNumber} onChangeText={setPhoneNumber} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} value={password} onChangeText={setPassword} />
      <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry={true} value={confirmPassword} onChangeText={setConfirmPassword} />
    
    {/*pressable links to redirect for other pages*/}
      <View style={{flexDirection: 'row', marginTop: 5}}>
            <Text style={styles.txt}>Alredy a member?</Text>
            <Pressable onPress={() => {}} ><Text style={styles.linkButton}> Log In</Text></Pressable>
      </View>

    {/*submit button*/}
      <Pressable style={styles.loginButton} onPress={() => RegisterHandler()}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Register</Text>
      </Pressable>
    </View>
  )
}

export default SignupScreen;

const styles = StyleSheet.create({
  logo:{
    width: 140,
    height: 140,
    marginBottom: 20,
    borderRadius: 25,
  },
  glowWrapper: {
    shadowColor: '#efefefdb', 
    shadowOpacity: 0.8,
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
    linkButton: {
        color: '#4c8ccbff',
    },
    txt:{
      color: '#ffffff',
    }
})