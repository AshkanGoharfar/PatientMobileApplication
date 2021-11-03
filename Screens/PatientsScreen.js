import React, { Component } from 'react'
import { StyleSheet,TextInput,View, Text, TouchableHighlight,Button,Alert,TouchableOpacity} from 'react-native'
import {GlobalStyles} from '../Style/Global';


import {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import {createNativeStackNavigator} from 'react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DatePicker from 'react-native-neat-date-picker'

const Stack = createNativeStackNavigator();

const App = ()=>{
  return(
      // <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
      name = "Patients"
      component={PatientsScreen}
      />
      <Stack.Screen
      name = "AddNewPatient"
      component ={AddNewPatientScreen}
      options={{title: 'Add New Patient'}}
      />
      </Stack.Navigator>
      // </NavigationContainer>
  );
};


 class PatientsScreen extends Component {
   constructor(props){
     super(props);
   }
   render(){
     return (
    <View style={[GlobalStyles.container, {flexDirection: "column"}]}>
      <View style={{ flex: 1, backgroundColor: "white" }}/>

      <View style={GlobalStyles.contentflex}>
      <TouchableOpacity onPress={()=>{
      this.props.navigation.navigate('AddNewPatient', {msg: 'This is my message'} )
    }} style={GlobalStyles.appButtonContainer}>
          <Text style={GlobalStyles.appButtonText}>Add New Patient</Text>
        </TouchableOpacity>
       </View>
      <View style={GlobalStyles.contentflex} >
      <TouchableOpacity onPress={()=>Alert.alert('View Patients')} style={GlobalStyles.appButtonContainer}>
          <Text style={GlobalStyles.appButtonText}>View Patients</Text>
        </TouchableOpacity>
      </View>
       <View style={GlobalStyles.contentflex}>
       <TouchableOpacity onPress={()=>Alert.alert('List All Patients')} style={GlobalStyles.appButtonContainer}>
           <Text style={GlobalStyles.appButtonText}>List All Patients</Text>
         </TouchableOpacity>
       </View>
        <View style={{ flex: 1, backgroundColor:"white"}}/>
    </View>
  );
  }
}

const AddNewPatientScreen = ({navigation, route})=>{
  const [firstName, onChangeText] = React.useState('');
  const [lastName, onChangeText2] = React.useState('');
  const [healthId, onChangeText3] = React.useState('');
  const [age, onChangeText4] = React.useState('');
  const [dateOfBirth, onChangeText5] = React.useState('');
  const [address, onChangeText6] = React.useState('');
  const [count, setCount] = React.useState(0);
  const onPress = () => setCount(prevCount => lastName / (firstName/100) / (firstName/ 100));
    const [showDatePicker, setShowDatePicker] = useState(false)

  const openDatePicker = () => {
    setShowDatePicker(true)
  }

  const onCancel = () => {
    // You should close the modal in here
    setShowDatePicker(false)
  }

  const onConfirm = ( date ) => {
    // You should close the modal in here
    setShowDatePicker(false)
    
    // The parameter 'date' is a Date object so that you can use any Date prototype method.
    console.log(date.getDate())
  }
  return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{flex: 1,
        justifyContent: 'space-evenly',
        flexDirection: "row",
        marginTop:50,
        marginBottom:25}}>
        <Text>First Name:        </Text>
        <TextInput
          style={{ height: 20, alignItems: 'flex-end',  borderColor: 'gray', borderWidth: 1, width: 150, color: "black"}}
          placeholder="Enter your first name"
          placeholderTextColor="gray"
          onChangeText={text => onChangeText(text)}
          value={firstName}
        />
      </View>
      <View style={{flex: 1,
        justifyContent: 'space-evenly',
        flexDirection: "row",
        marginBottom:25}}>
        <Text>Last Name:        </Text>
        <TextInput
          style={{ height: 20, alignItems: 'flex-end', borderColor: 'gray', borderWidth: 1, width: 150, color: "black" }}
          placeholder="Enter your last name"
          placeholderTextColor="gray"
          onChangeText={text => onChangeText2(text)}
          value={lastName}
        />
      </View>
      <View style={{flex: 1,
        justifyContent: 'space-evenly',
        flexDirection: "row",
        marginBottom:25}}>
        <Text>Health Id:          </Text>
        <TextInput
          style={{ height: 20, alignItems: 'flex-end', borderColor: 'gray', borderWidth: 1, width: 150, color: "black" }}
          placeholder="Enter your health id"
          placeholderTextColor="gray"
          onChangeText={text => onChangeText3(text)}
          value={healthId}
        />
      </View>
      <View style={{flex: 1,
        justifyContent: 'space-evenly',
        flexDirection: "row",
        marginBottom:25}}>
        <Text>Age:                  </Text>
        <TextInput
          style={{ height: 20, alignItems: 'flex-end', borderColor: 'gray', borderWidth: 1, width: 150, color: "black" }}
          placeholder="Enter your age"
          placeholderTextColor="gray"
          onChangeText={text => onChangeText4(text)}
          value={age}
        />
      </View>
      <View style={{flex: 1,
        justifyContent: 'space-evenly',
        flexDirection: "row",
        marginBottom:25}}>
        <Text>Date Of Birth:    </Text>
        <TextInput
          style={{ height: 20, alignItems: 'flex-end', borderColor: 'gray', borderWidth: 1, width: 110, color: "black" }}
          placeholder="         /        /         "
          placeholderTextColor="gray"
          onChangeText={text => onChangeText5(text)}
          value={dateOfBirth}
        />
                      <View style={{width:"12%",
        backgroundColor:"orange",
        height:15,
        alignItems:"center",
        justifyContent:"center",
        margin: 5}}>
        
        <TouchableOpacity onPress={openDatePicker}>

          <Text>Pick</Text>
              <DatePicker
        isVisible={showDatePicker}
        mode={'single'}
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
        </TouchableOpacity>


            </View>
      </View>
      <View style={{flex: 1,
        justifyContent: 'space-evenly',
        flexDirection: "row",
        marginBottom:25}}>
        <Text>Address:         </Text>
        <TextInput
          style={{ height: 20, alignItems: 'flex-end', borderColor: 'gray', borderWidth: 1, width: 150, color: "black" }}
          placeholder="Enter your address"
          placeholderTextColor="gray"
          onChangeText={text => onChangeText6(text)}
          value={address}
        />
      </View>

      <View style={{flex: 1,
        justifyContent: 'space-evenly',
        flexDirection: "row",
        marginBottom:25}}>
              <View style={{width:"45%",
        backgroundColor:"lightblue",
        height:30,
        alignItems:"center",
        justifyContent:"center",
        marginTop:10,
        marginBottom:5,
        margin: 6,
        marginLeft: 10}}>
        <TouchableOpacity
          onPress={onPress}
        >
          <Text>Add</Text>
        </TouchableOpacity>
        </View>

              <View style={{width:"60%",
        backgroundColor:"lightgreen",
        height:30,
        alignItems:"center",
        justifyContent:"center",
        marginTop:10,
        marginBottom:10,
        margin: 50,
        marginRight: 10}}>
        

                  <TouchableOpacity onPress={()=>{
      navigation.navigate('Patients', {msg: 'This is my message'})
    }}>
          <Text>Cancel</Text>
        </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}


export default App;


// export default PatientsScreen;