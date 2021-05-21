import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import TextPreview from '../../components/TextPreview';
import ImagePreview from '../../components/ImagePreview';

const PreviewSignupInfo = ({ navigation, route }) => {

  const UserData = route.params;
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.infoDiv}>
          <View>
            <Text style={styles.title}>Preview before signup </Text>
          </View>
          <TextPreview label={"Full Name"} text={UserData.name} />
          <TextPreview label={"Email"} text={UserData.email} />
          <TextPreview label={"UserName"} text={UserData.userName} />
          <TextPreview label={"Address"} text={UserData.address} />
          <TextPreview label={"Postal Code"} text={UserData.postcode} />
          <TextPreview label={"City"} text={UserData.city} />
          <TextPreview label={"Country"} text={UserData.country} />
          <ImagePreview label={"photo"} photo={UserData.photo} />


        </View>
        <View style={styles.btnDiv}>
          <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')} style={styles.backBtn}>
            <Text style={styles.backBtnText}>
              Back to Sign up
        </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')} style={styles.signUpBtn}>
            <Text style={styles.signUpBtnText}>
              Sign Up
        </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: '5%'
  },
  infoDiv: { borderWidth: 1, borderRadius: 10 },

  btnDiv: { flexDirection: 'row' },
  backBtn: { flex: 0.5, borderWidth: 1, padding: '2%', fontSize: 18, margin: '5%', alignSelf: 'center', backgroundColor: '#8E1600', borderRadius: 5 },
  backBtnText: { textAlign: 'center', color: 'white' },
  signUpBtn: { flex: 0.5, borderWidth: 1, padding: '2%', fontSize: 18, margin: '5%', alignSelf: 'center', backgroundColor: '#041e42', borderRadius: 5 },
  signUpBtnText: { textAlign: 'center', color: 'white' },
  title: { textAlign: 'center', fontSize: 30, backgroundColor: '#041e42', padding: '5%', color: 'white', width: '100%', borderTopLeftRadius: 10, borderTopRightRadius: 10 }
});

export default PreviewSignupInfo;


