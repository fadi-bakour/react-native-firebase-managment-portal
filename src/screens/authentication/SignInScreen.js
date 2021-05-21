import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import TextInput from '../../components/TextInput';
import apis from '../../apis/apis'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      reduxSignIn: (email, password) =>
        apis.loginAuth(email, password),
    },
    dispatch,
  );

const SignInScreen = ({ navigation, reduxSignIn }) => {
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
        <TextInput placeholder="Email" onChange={setEmail} defaultValue={email} value={email} icon={{ type: 'font-awesome', name: 'envelope', color: 'black' }} secureTextEntry={false} />
        <TextInput placeholder="Password" onChange={setPassword} defaultValue={password} value={password} icon={{ type: 'font-awesome', name: 'key', color: 'black' }} secureTextEntry={true} />
        <TouchableOpacity style={styles.btnDiv} onPress={() => { reduxSignIn(email, password) }}>
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
  btnDiv: { width: '90%', alignItems: 'center', backgroundColor: '#041e42', alignSelf: 'center', height: 50, justifyContent: 'center', marginTop: '10%', borderRadius: 5 },
  btn: { color: 'white', fontSize: 22, fontWeight: '500' },
  SignUpDiv: { alignSelf: 'center', marginTop: '5%' },
  SignUp: { color: 'black', alignSelf: "center" }
});

export default connect(null, mapDispatchToProps)(SignInScreen);

