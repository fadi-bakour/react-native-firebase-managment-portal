import React from 'react'
import { View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';

import ProductsScreen from '../screens/profile/ProductsScreen';
import ProfileScreen from '../screens/profile/ProfileScreen'
import MyProductsScreen from '../screens/profile/MyProductsScreen'
import CreateProductScreen from '../screens/profile/CreateProductScreen'


import CustomSidebarMenu from "../components/CustomSidebarMenu";


const Drawer = createDrawerNavigator();
const DrawerNav = () => {
    return (
        <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <CustomSidebarMenu {...props} />}>
            <Drawer.Screen name="Home" component={ProductsScreen} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
            <Drawer.Screen name="MyProducts" component={MyProductsScreen} />
            <Drawer.Screen name="CreateProduct" component={CreateProductScreen} />
        </Drawer.Navigator>
    )
}

export default DrawerNav
