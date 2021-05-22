import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import apis from '../../apis/apis'

import TextInput from '../../components/TextInput';
import ProductImage from '../../components/ProductImage';
import { useIsFocused } from '@react-navigation/native';
import ToastService from '../../services/ToastService';
import Header from '../../components/Header';

const CreateProductScreen = ({ navigation }) => {
    const isFocused = useIsFocused();

    useEffect(() => {
        setTitle('');
        setDescription('');
        setPhoto(null);
    }, [isFocused]);

    function CreateProduct(data) {

        if (data.title.trim() != '' && data.description.trim() != '' && data.photo != null && data.photo.trim() != '') {
            apis.CreateUserProduct(data);
        } else {
            ToastService('error', 'please fill all required information');
        }

    }

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const [photo, setPhoto] = useState(null);

    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <ScrollView>
                <Text style={styles.Title}>
                    Create New Product
                </Text>

                <ProductImage photo={photo} setPhoto={setPhoto} />

                <TextInput placeholder="Product Name" onChange={setTitle} defaultValue={title} value={title} secureTextEntry={false} />
                <TextInput placeholder="Product description" onChange={setDescription} defaultValue={description} value={description} secureTextEntry={false} />


                <TouchableOpacity style={styles.btnDiv}
                    onPress={() => CreateProduct({ title, description, photo })}>
                    <Text style={styles.btn}>Create Product</Text>
                </TouchableOpacity>

            </ScrollView >
        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: '10%',
        paddingBottom: '10%',
        flex: 1,
    },
    Title: { color: 'black', alignSelf: 'center', fontSize: 20 },
    SubTitle: { color: 'black', alignSelf: 'center', fontSize: 15 },
    btnDiv: { width: '90%', alignItems: 'center', backgroundColor: '#041e42', alignSelf: 'center', height: 50, justifyContent: 'center', marginTop: '10%', borderRadius: 5 },
    btn: { color: 'white', fontSize: 22, fontWeight: '500' },
    SignUpDiv: { alignSelf: 'center', marginTop: '5%' },
    SignUp: { color: 'black', alignSelf: "center" }
});

export default CreateProductScreen
