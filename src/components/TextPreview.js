import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

function TextPreview({ label, text }) {
    return (
        <View style={styles.inputPreviewDiv}>
            <Text style={styles.inputPreviewTitle}>{label}</Text>
            <Text style={styles.inputPreview}>{text}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    inputPreviewDiv: { flexDirection: 'row', marginTop: '5%',borderBottomWidth:1,padding:'2%' },
    inputPreviewTitle: { fontSize: 18, flex: 0.5 },
    inputPreview: { alignSelf: 'center', fontSize: 18, flex: 0.5 },
})
export default TextPreview
