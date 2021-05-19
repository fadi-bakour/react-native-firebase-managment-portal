import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { Input } from 'react-native-elements';

const SignInScreen = ({ navigation, reduxLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.Title}>
          Welcome to our application
      </Text>
        <Text style={styles.SubTitle} >
          Log in
      </Text>
        <View style={styles.input}>
          <Input
            placeholder="Email"
            leftIcon={{ type: 'font-awesome', name: 'envelope', color: 'black' }}
            onChange={setEmail}
            inputContainerStyle={{ borderBottomWidth: 0 }}
          />
        </View>
        <View style={styles.input}>
          <Input
            placeholder="Password"
            leftIcon={{ type: 'font-awesome', name: 'key', color: 'black' }}
            onChange={setPassword}
            secureTextEntry={true}
            inputContainerStyle={{ borderBottomWidth: 0 }}
          />
        </View>
        <TouchableOpacity style={styles.btnDiv} onPress={() => {console.log('login')}}>
          <Text style={styles.btn}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.SignUpDiv} onPress={() => navigation.navigate('SignUpScreen')}>
          <Text style={styles.SignUp} >
            New User? Sign Up
        </Text>
        </TouchableOpacity>
      </ScrollView>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: '10%',
    paddingBottom: '10%',
    flex: 1
  },
  Title: { color: 'black', alignSelf: 'center', fontSize: 20, marginTop: '10%' },
  SubTitle: { color: 'black', alignSelf: 'center', fontSize: 15 },
  input: { height: 50, width: '90%', alignSelf: 'center', marginTop: '5%', borderRadius: 5, borderWidth: 1 },
  btnDiv: { width: '90%', alignItems: 'center', backgroundColor: '#041e42', alignSelf: 'center', height: 50, justifyContent: 'center', marginTop: '10%', borderRadius: 5 },
  btn: { color: 'white', fontSize: 22, fontWeight: '500' },
  SignUpDiv: { alignSelf: 'center', marginTop: '5%' },
  SignUp: { color: 'black', alignSelf: "center" }
});

export default SignInScreen;

