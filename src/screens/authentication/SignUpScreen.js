import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { Input } from 'react-native-elements';

const SignUpScreen = ({ navigation }) => {

  const [name, setName] = useState('')
  const [userName, setUserName] = useState('')
  const [address, setAddress] = useState('')
  const [postcode, setPostcode] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [c_password, setC_Password] = useState('')

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.Title}>
          Welcome to our application
      </Text>
        <Text style={styles.SubTitle} >
          Sign up to join our community
      </Text>
        <View style={styles.input}>
          <Input
            placeholder="Full Name"
            leftIcon={{ type: 'font-awesome', name: 'user', color: 'black' }}
            onChange={setName}
            inputContainerStyle={{ borderBottomWidth: 0 }}
          />
        </View>
        <View style={styles.input}>
          <Input
            placeholder="User Name"
            leftIcon={{ type: 'font-awesome', name: 'user', color: 'black' }}
            onChange={setUserName}
            inputContainerStyle={{ borderBottomWidth: 0 }}
          />
        </View>
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
            placeholder="Address"
            leftIcon={{ type: 'font-awesome', name: 'address-card', color: 'black' }}
            onChange={setAddress}
            inputContainerStyle={{ borderBottomWidth: 0 }}
          />
        </View>
        <View style={styles.input}>
          <Input
            placeholder="Postcode"
            leftIcon={{ type: 'font-awesome', name: 'location-arrow', color: 'black' }}
            onChange={setPostcode}
            inputContainerStyle={{ borderBottomWidth: 0 }}
          />
        </View>
        <View style={styles.input}>
          <Input
            placeholder="City"
            leftIcon={{ type: 'font-awesome', name: 'map-marker', color: 'black' }}
            onChange={setCity}
            inputContainerStyle={{ borderBottomWidth: 0 }}
          />
        </View>
        <View style={styles.input}>
          <Input
            placeholder="Country"
            leftIcon={{ type: 'font-awesome', name: 'globe', color: 'black' }}
            onChange={setCountry}
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
        <View style={styles.input}>
          <Input
            placeholder="Conform Password"
            leftIcon={{ type: 'font-awesome', name: 'key', color: 'black' }}
            onChange={setC_Password}
            secureTextEntry={true}
            inputContainerStyle={{ borderBottomWidth: 0 }}
          />
        </View>
        <View style={styles.imageUpload}>
          <Text>image</Text>
        </View>
        <TouchableOpacity style={styles.btnDiv} 
        onPress={() => navigation.navigate('PreviewSignupInfo', {
          name,
          userName,
          address,
          postcode,
          city,
          country,
          email,
          password,
          c_password
        })}>
          <Text style={styles.btn}>Preview before submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.SignUpDiv} onPress={() => navigation.navigate('SignInScreen')}>
          <Text style={styles.SignUp} >
            Already have account? Sign in
        </Text>
        </TouchableOpacity>
      </ScrollView >
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: '10%',
    paddingBottom: '10%',
    flex: 1
  },
  Title: { color: 'black', alignSelf: 'center', fontSize: 20 },
  SubTitle: { color: 'black', alignSelf: 'center', fontSize: 15 },
  input: { height: 50, width: '90%', alignSelf: 'center', marginTop: '5%', borderRadius: 5, borderWidth: 1 },
  imageUpload: { height: 50, width: '90%', alignSelf: 'center', marginTop: '5%' },
  btnDiv: { width: '90%', alignItems: 'center', backgroundColor: '#041e42', alignSelf: 'center', height: 50, justifyContent: 'center', marginTop: '10%', borderRadius: 5 },
  btn: { color: 'white', fontSize: 22, fontWeight: '500' },
  SignUpDiv: { alignSelf: 'center', marginTop: '5%' },
  SignUp: { color: 'black', alignSelf: "center" }
});



export default SignUpScreen;

