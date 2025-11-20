import { StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from 'react'

const Drawer = createDrawerNavigator();
const DrawerScreen = () => {
  return (
    <Drawer.Navigator>
        {/*component={}*/}
      <Drawer.Screen name="Home" />
      <Drawer.Screen name="Profile" />
      <Drawer.Screen name="Transactions" />
      <Drawer.Screen name="Support" />
      <Drawer.Screen name="Settings" />
    </Drawer.Navigator>
  )
}

export default DrawerScreen

const styles = StyleSheet.create({})