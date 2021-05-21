import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import TextInput from '../../components/TextInput';
import ImageInput from '../../components/ImageInput';

const SignUpScreen = ({ navigation }) => {
  const [photo, setPhoto] = useState(null);
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

        <TextInput placeholder="Full Name" onChange={setName} icon={{ type: 'font-awesome', name: 'user', color: 'black' }} secureTextEntry={false} />
        <TextInput placeholder="User Name" onChange={setUserName} icon={{ type: 'font-awesome', name: 'user', color: 'black' }} secureTextEntry={false} />
        <TextInput placeholder="Address" onChange={setAddress} icon={{ type: 'font-awesome', name: 'address-card', color: 'black' }} secureTextEntry={false} />
        <TextInput placeholder="Postcode" onChange={setPostcode} icon={{ type: 'font-awesome', name: 'location-arrow', color: 'black' }} secureTextEntry={false} />
        <TextInput placeholder="City" onChange={setCity} icon={{ type: 'font-awesome', name: 'map-marker', color: 'black' }} secureTextEntry={false} />
        <TextInput placeholder="Country" onChange={setCountry} icon={{ type: 'font-awesome', name: 'envelope', color: 'black' }} secureTextEntry={false} />
        <TextInput placeholder="Password" onChange={setPassword} icon={{ type: 'font-awesome', name: 'key', color: 'black' }} secureTextEntry={true} />
        <TextInput placeholder="Conform Password" onChange={setC_Password} icon={{ type: 'font-awesome', name: 'key', color: 'black' }} secureTextEntry={true} />
        <TextInput placeholder="Email" onChange={setEmail} icon={{ type: 'font-awesome', name: 'envelope', color: 'black' }} secureTextEntry={false} />
        <ImageInput photo={photo} setPhoto={setPhoto} />

        <TouchableOpacity style={styles.btnDiv}
          onPress={() => navigation.navigate('PreviewSignupInfo', { name, userName, address, postcode, city, country, email, password, c_password, photo })}>
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
  btnDiv: { width: '90%', alignItems: 'center', backgroundColor: '#041e42', alignSelf: 'center', height: 50, justifyContent: 'center', marginTop: '10%', borderRadius: 5 },
  btn: { color: 'white', fontSize: 22, fontWeight: '500' },
  SignUpDiv: { alignSelf: 'center', marginTop: '5%' },
  SignUp: { color: 'black', alignSelf: "center" }
});



export default SignUpScreen;

