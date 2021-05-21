import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

const ImagePreview = ({ photo }) => {
    return (
        <View style={styles.imageDiv}>
            <Image
                source={{ uri: photo }}
                style={styles.image}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    image: { height: 200, resizeMode: 'contain', width: '100%' },
    imageDiv:{margin:'5%'}
});

export default ImagePreview
