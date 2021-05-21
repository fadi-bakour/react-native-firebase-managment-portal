import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import ToastService from '../services/ToastService'

const ProductImage = ({ photo, setPhoto }) => {
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
                    <Image
                        source={require('../assets/placeholder-image.png')}
                        style={styles.previewImage}
                    />
                    <Text style={styles.imageText}>Click here to Upload Image</Text>
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
                    <Image
                        source={{ uri: photo }}
                        style={styles.previewImage}
                    />
                    <Text style={styles.imageText}>click to select different image</Text>

                </TouchableOpacity>
            )
            }
        </View>

    )
}

const styles = StyleSheet.create({
    imageUpload: { width: '100%' },
    previewImage: { height: 250, resizeMode: 'contain', width: '100%', marginTop: '5%' },
    imageText: { textAlign: 'center', marginTop: '1%' }
})

export default ProductImage
