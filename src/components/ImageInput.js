import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

function ImageInput({ photo, setPhoto }) {
    return (
        <View>
            {photo == null ? (
                <TouchableOpacity style={styles.imageUpload} onPress={() => ImagePicker.openPicker({
                    cropping: false
                }).then(image => {
                    if (image.mime == 'image/jpeg' || image.mime == 'image/png' || image.mime == 'image/jpg') {
                        setPhoto(image.path)
                    } else {
                        ToastService('error', 'please choose and image with type jpg, jpeg or png');
                    }
                })
                }>
                    <Text>Click here to Upload Image</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity style={styles.imageUpload} onPress={() => ImagePicker.openPicker({
                    cropping: false
                }).then(image => {
                    if (image.mime == 'image/jpeg' || image.mime == 'image/png' || image.mime == 'image/jpg') {
                        setPhoto(image.path)
                    } else {
                        ToastService('error', 'please choose images with type jpeg or png');
                    }
                })
                }>
                    <Text>Select Different Image</Text>
                    <Image
                        source={{ uri: photo }}
                        style={styles.previewImage}
                    />
                </TouchableOpacity>
            )
            }
        </View>

    )
}

const styles = StyleSheet.create({
    imageUpload: { height: 50, marginTop: '5%', marginLeft: '5%' },
    previewImage: { height: 50, resizeMode: 'contain', width: 100, maxHeight: '100%', marginTop: '5%' }
})

export default ImageInput
