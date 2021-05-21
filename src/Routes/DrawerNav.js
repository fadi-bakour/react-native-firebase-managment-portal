import React from 'react'
import { View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';

import ProductsScreen from '../screens/profile/ProductsScreen';
import ProfileScreen from '../screens/profile/ProfileScreen'
import MyProductsScreen from '../screens/profile/MyProductsScreen'
import CustomSidebarMenu from "../components/CustomSidebarMenu";


const Drawer = createDrawerNavigator();
const DrawerNav = () => {
    return (
        <Drawer.Navigator initialRouteName="Products" drawerContent={(props) => <CustomSidebarMenu {...props} />}>
            <Drawer.Screen name="ProductsScreen" component={ProductsScreen} />
            <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
            <Drawer.Screen name="MyProductsScreen" component={MyProductsScreen} />
        </Drawer.Navigator>
    )
}

export default DrawerNav
