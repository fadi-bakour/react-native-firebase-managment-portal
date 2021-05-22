import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity, ScrollView
} from 'react-native';
import apis from '../../apis/apis'

import TextInput from '../../components/TextInput';
import ImageInput from '../../components/ImageInput';
import ToastService from '../../services/ToastService';


const ProfileScreen = ({ navigation }) => {

  function updateData(data) {

    if (data.name.trim() != '' && data.userName.trim() != '' && data.address.trim() != '' && data.postcode.trim() != '' && data.city.trim() != '' && data.country.trim() != '' && data.email.trim() != '' && data.photo != null && data.photo.trim() != '' && data.path != '') {
      apis.UpdateUserData(data);
    } else {
      ToastService('error', 'please fill all required information');
    }


  }


  useEffect(() => {
    apis.userData().then((res) => {
      setData(res);
      setName(res.name);
      setUserName(res.userName);
      setAddress(res.address);
      setPostcode(res.postcode);
      setCity(res.city);
      setCountry(res.country);
      setEmail(res.email);
      setPhoto(res.photo);
      setPath(res.path);
    });
  }, []);

  const [data, setData] = useState({
    name: '',
    userName: '',
    address: '',
    postcode: '',
    city: '',
    country: '',
    email: '',
    photo: '/',
    path: ''
  });

  const [name, setName] = useState();
  const [email, setEmail] = useState()
  const [userName, setUserName] = useState()
  const [address, setAddress] = useState()
  const [postcode, setPostcode] = useState()
  const [city, setCity] = useState()
  const [country, setCountry] = useState()
  const [photo, setPhoto] = useState()
  const [path, setPath] = useState()

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.Title}>
          Edit your information and click save
      </Text>
        <TextInput placeholder="Full Name" onChange={setName} defaultValue={data.name} value={name} icon={{ type: 'font-awesome', name: 'user', color: 'black' }} secureTextEntry={false} />
        <TextInput placeholder="Email" onChange={setEmail} defaultValue={data.email} value={email} icon={{ type: 'font-awesome', name: 'envelope', color: 'black' }} secureTextEntry={false} />
        <TextInput placeholder="User Name" onChange={setUserName} defaultValue={data.userName} value={userName} icon={{ type: 'font-awesome', name: 'user', color: 'black' }} secureTextEntry={false} />
        <TextInput placeholder="Address" onChange={setAddress} defaultValue={data.address} value={address} icon={{ type: 'font-awesome', name: 'address-card', color: 'black' }} secureTextEntry={false} />
        <TextInput placeholder="Postcode" onChange={setPostcode} defaultValue={data.postcode} value={postcode} icon={{ type: 'font-awesome', name: 'location-arrow', color: 'black' }} secureTextEntry={false} />
        <TextInput placeholder="City" onChange={setCity} defaultValue={city} value={data.city} icon={{ type: 'font-awesome', name: 'map-marker', color: 'black' }} secureTextEntry={false} />
        <TextInput placeholder="Country" onChange={setCountry} defaultValue={data.country} value={country} icon={{ type: 'font-awesome', name: 'envelope', color: 'black' }} secureTextEntry={false} />
        <ImageInput photo={photo} setPhoto={setPhoto} />

        <TouchableOpacity style={styles.btnDiv}
          onPress={() => {
            updateData({ name, userName, address, postcode, city, country, email, photo, path })
          }}>
          <Text style={styles.btn}>Save</Text>
        </TouchableOpacity>
      </ScrollView >
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
  Title: { color: 'black', alignSelf: 'center', fontSize: 20 },
  SubTitle: { color: 'black', alignSelf: 'center', fontSize: 15 },
  btnDiv: { width: '90%', alignItems: 'center', backgroundColor: '#041e42', alignSelf: 'center', height: 50, justifyContent: 'center', marginTop: '10%', borderRadius: 5 },
  btn: { color: 'white', fontSize: 22, fontWeight: '500' },
  SignUpDiv: { alignSelf: 'center', marginTop: '5%' },
  SignUp: { color: 'black', alignSelf: "center" }
});

export default ProfileScreen;

