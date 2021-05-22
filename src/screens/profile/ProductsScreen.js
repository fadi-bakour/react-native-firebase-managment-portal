import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import apis from '../../apis/apis'
import Product from '../../components/Product';
import { useIsFocused } from '@react-navigation/native';
import Header from '../../components/Header';

const ProductsScreen = ({ navigation }) => {
    const [item, setItems] = useState()
    const isFocused = useIsFocused();

    let array = [];
    useEffect(() => {
        apis.getAllProducts().then((res) => {
            let firstLayer = Object.keys(res).length;
            for (let i = 0; i < firstLayer; i++) {
                const Keys = res[Object.keys(res)[i]];
                let secondLayer = Object.keys(Keys).length;
                for (let j = 0; j < secondLayer; j++) {
                    let obj = Keys[Object.keys(Keys)[j]];
                    array.push(obj);
                }
            }
            setItems(array);
        })
    }, [isFocused]);


    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <Text style={styles.Title}>All Users Products</Text>
            {item ? <FlatList
                nestedScrollEnabled
                data={item}
                keyExtractor={item => item.title}
                renderItem={({ item }) => {
                    return (
                        <Product item={item} />
                    )
                }
                }
            /> :
                <Text style={styles.Title}>No Products, please add from drawer</Text>
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: '10%',
        paddingBottom: '10%',
    },
    Title: { color: 'black', alignSelf: 'center', fontSize: 30, paddingBottom: '5%' },
})

export default ProductsScreen
