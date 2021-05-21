import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from '../screens/authentication/SignInScreen';
import SignUpScreen from '../screens/authentication/SignUpScreen';
import PreviewSignupInfo from '../screens/authentication/PreviewSignupInfo'
import OTPScreen from '../screens/authentication/OTPScreen'

import DrawerNav from './DrawerNav';

import { connect } from 'react-redux';



const Stack = createStackNavigator();

const Routes = ({ Token }) => {
    return (
        <NavigationContainer>
            {Token == null ?
                (
                    <Stack.Navigator headerMode="none">
                        <Stack.Screen name="SignInScreen" component={SignInScreen} />
                        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
                        <Stack.Screen name="PreviewSignupInfo" component={PreviewSignupInfo} />
                        <Stack.Screen name="OTPScreen" component={OTPScreen} />

                    </Stack.Navigator>

                ) : (
                    <DrawerNav />
                )
            }
        </NavigationContainer >
    );
};

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
    // Redux Store --> Component
    return {
        Token: state.authReducer.Token,
    };
};

export default connect(mapStateToProps)(Routes);
