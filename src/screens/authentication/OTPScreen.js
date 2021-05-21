import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import apis from '../../apis/apis'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            reduxSignUp: (number, OTP, UserData) =>
                apis.signUpAuth(number, OTP, UserData),
        },
        dispatch,
    );

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
    // Redux Store --> Component
    return {
        OTP: state.otpReducer.OTP,
    };
};


const OTPScreen = ({ reduxSignUp, OTP, route }) => {
    const UserData = route.params;
    const [number, onChangeNumber] = useState();

    return (
        <View style={styles.container}>
            <Text style={styles.title}> Enter Your OTP</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                placeholder="Otp"
                keyboardType="numeric"
            />
            <Text style={styles.text}>Since we don't have an email service, please input the number this generated number: {OTP} </Text>
            <TouchableOpacity style={styles.btnDiv} onPress={() => reduxSignUp({ number, OTP, UserData })}>
                <Text style={styles.btn}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    input: { height: 50, width: '90%', alignSelf: 'center', marginTop: '5%', borderRadius: 5, borderWidth: 1 },
    title: { textAlign: 'center', fontSize: 30, width: '100%', color: 'black' },
    text: { marginLeft: '5%', marginTop: '2%' },
    btnDiv: { width: '90%', alignItems: 'center', backgroundColor: '#041e42', alignSelf: 'center', height: 50, justifyContent: 'center', marginTop: '10%', borderRadius: 5 },
    btn: { color: 'white', fontSize: 22, fontWeight: '500' },
})

export default connect(mapStateToProps, mapDispatchToProps)(OTPScreen);
