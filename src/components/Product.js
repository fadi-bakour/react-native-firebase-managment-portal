import React from 'react'
import { View, Text } from 'react-native'
import { Card } from 'react-native-elements'

const Product = ({ item }) => {
    return (
        <Card>
            <Card.Title>{item.title}</Card.Title>
            <Card.Divider />
            <Card.Image source={{ uri: item.Url }} />
            <Text style={{ marginTop: 10 }}>
                {item.description}
            </Text>
        </Card>
    )
}

export default Product
