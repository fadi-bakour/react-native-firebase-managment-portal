import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';

const TextInput = ({ placeholder, icon = false, onChange, secureTextEntry, value, defaultValue }) => {
    return (
        <View style={styles.input}>
            <Input
                placeholder={placeholder}
                leftIcon={icon}
                onChangeText={(value) => { onChange(value) }}
                inputContainerStyle={{ borderBottomWidth: 0 }}
                secureTextEntry={secureTextEntry}
                value={value}
                defaultValue={defaultValue}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: { height: 50, width: '90%', alignSelf: 'center', marginTop: '5%', borderRadius: 5, borderWidth: 1 },
});

export default TextInput;

