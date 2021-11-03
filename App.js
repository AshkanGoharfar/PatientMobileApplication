import React, { Component } from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import PatientsScreen from './Screens/PatientsScreen';
import RecordsScreen from './Screens/RecordsScreen';
import Icon  from 'react-native-vector-icons/Ionicons';
import  HomeScreen from './Screens/HomeScreen';
import { StyleSheet,TextInput,View, Text, TouchableHighlight,Button,Alert,TouchableOpacity} from 'react-native'

Icon.loadFont()

const Tab=createMaterialTopTabNavigator();

function App ()
{
  return (
    <View style={[styles.container, {flexDirection: "column"}]}>

  <NavigationContainer>
  <Tab.Navigator
  screenOptions=
  {{

    tabBarLabelStyle: { fontSize: 40 },
    tabBarItemStyle: { width: 100 },
    tabBarStyle: { backgroundColor: 'powderblue' }},

    ({route})=>({
    tabBarIcon : ({focused,size,color}) => {
      let iconName;
      if(route.name=== 'Patients'){
        iconName="people";
        size= focused? 25 :20;
      }
      else if (route.name==='Records')
      {
        iconName="list";
            size= focused? 25 :20;
      }
      else if (route.name==='Home')
      {
        iconName="home";
            size= focused? 25 :20;
      }
      return (
            <Icon  size={size} name={iconName}/>
        );
    }
    })
  }
    >
    <Tab.Screen
      name ="Home"
      component={HomeScreen}
    />
  <Tab.Screen
    name ="Patients"
    component={PatientsScreen}
  />
  <Tab.Screen
    name ="Records"
    component={RecordsScreen}
/>
  </Tab.Navigator>
  </NavigationContainer>
  </View>
);
}

export default App;
const styles=StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
      marginHorizontal: 5,
      marginVertical: 40
  }
});
