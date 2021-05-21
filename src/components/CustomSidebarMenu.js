// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
} from "react-native";

import {
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { Icon } from "react-native-elements";
import apis from '../apis/apis'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { cos } from "react-native-reanimated";


const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      reduxLogOut: () =>
        apis.logOutAuth(),
    },
    dispatch,
  );


const CustomSidebarMenu = ({ reduxLogOut, navigation }) => {
  return (
    <SafeAreaView
      style={styles.safeArea}
    >
      <DrawerContentScrollView>
        <Text style={styles.title}>
          Main
        </Text>
        <View style={styles.tabView}>
          <Icon
            name="home"
            type="font-awesome"
            color="white"
            style={styles.iconStyle}
          />

          <DrawerItem
            label="home"
            onPress={() => navigation.navigate("Home")}
            labelStyle={styles.labelStyle}
            style={styles.itemStyle}
          />
        </View>

        <View style={{ flexDirection: "row" }}>
          <Icon
            name="user-circle"
            type="font-awesome"
            color="white"
            style={styles.iconStyle}
          />
          <DrawerItem
            label="Profile"
            onPress={() => navigation.navigate("Profile")}
            labelStyle={styles.labelStyle}
            style={styles.itemStyle}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Icon
            name="product-hunt"
            type="font-awesome"
            color="white"
            style={styles.iconStyle}
          />
          <DrawerItem
            label="MyProducts"
            onPress={() => navigation.navigate("MyProducts")}
            labelStyle={styles.labelStyle}
            style={styles.itemStyle}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Icon
            name="sign-out"
            type="font-awesome"
            color="white"
            style={styles.iconStyle}
          />
          <DrawerItem
            label="Log Out"
            onPress={() => reduxLogOut()}
            labelStyle={styles.labelStyle}
            style={styles.itemStyle}
          />
        </View>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  iconStyle: { marginLeft: 17, marginTop: 15 },
  customItem: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    color: "white",
  },
  customItem2: {
    color: "white",
  },
  safeArea: { flex: 1, backgroundColor: "#13355a", color: "white" },
  title: { marginLeft: 8, color: "silver", marginTop: 20 },
  tabView: { flexDirection: "row" },
  itemStyle: { flex: 1, marginLeft: 1 },
  labelStyle: { color: "#ffffff" }
});

export default connect(null, mapDispatchToProps)(CustomSidebarMenu);
