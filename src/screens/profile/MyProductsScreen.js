import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import apis from '../../apis/apis'
import Product from '../../components/Product';
import { useIsFocused } from '@react-navigation/native';

const MyProductsScreen = () => {
    const [item, setItems] = useState()
    const isFocused = useIsFocused();

    let array = [];
    useEffect(() => {
        apis.getMyProducts().then((res) => {
            let firstLayer = Object.keys(res).length;
            for (let i = 0; i < firstLayer; i++) {
                const Keys = res[Object.keys(res)[i]];
                array.push(Keys);
            }
            setItems(array);

        })
    }, [isFocused]);

    return (
        <View style={styles.container}>
            <Text style={styles.Title}>My Products</Text>
            <FlatList
                nestedScrollEnabled
                data={item}
                keyExtractor={item => item.title}
                renderItem={({ item }) => {
                    return (
                        <Product item={item} />
                    )
                }
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: '5%' },
    Title: { color: 'black', alignSelf: 'center', fontSize: 30, paddingBottom: '5%' },
})

export default MyProductsScreen
