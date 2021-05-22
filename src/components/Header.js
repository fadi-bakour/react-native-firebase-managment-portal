import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Icon } from "react-native-elements";

const Header = ({ navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.container}>
            <Icon
                name="bars"
                type="font-awesome"
                color="#041e42"
                size={45}
            />
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        marginRight: 'auto',
    }
});


export default Header
