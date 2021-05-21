import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';

const TextInput = ({ placeholder, icon, onChange, secureTextEntry }) => {
    return (
        <View style={styles.input}>
            <Input
                placeholder={placeholder}
                leftIcon={icon}
                onChangeText={onChange}
                inputContainerStyle={{ borderBottomWidth: 0 }}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: { height: 50, width: '90%', alignSelf: 'center', marginTop: '5%', borderRadius: 5, borderWidth: 1 },
});

export default TextInput;

