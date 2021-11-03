import React, { Component } from 'react'
import { StyleSheet,TextInput,View, Text, TouchableHighlight,Button,Alert,TouchableOpacity} from 'react-native'
import {GlobalStyles} from '../Style/Global';
 class ViewPatientsScreen extends Component {
   constructor(props){
     super(props);
   }
   render(){
     return (
    <View style={[GlobalStyles.container, {flexDirection: "column"}]}>
      <View style={{ flex: 1, backgroundColor: "white" }}/>

      <View style={GlobalStyles.contentflex}>
      <TouchableOpacity onPress={()=>Alert.alert('Add New Patients')} style={GlobalStyles.appButtonContainer}>
          <Text style={GlobalStyles.appButtonText}>Add New Patients</Text>
        </TouchableOpacity>

       </View>
      <View style={GlobalStyles.contentflex} >
      <TouchableOpacity onPress={()=>Alert.alert('Add New Patients')} style={GlobalStyles.appButtonContainer}>
          <Text style={GlobalStyles.appButtonText}>View Patients</Text>
        </TouchableOpacity>
      </View>
       <View style={GlobalStyles.contentflex}>
       <TouchableOpacity onPress={()=>Alert.alert('Add New Patients')} style={GlobalStyles.appButtonContainer}>
           <Text style={GlobalStyles.appButtonText}>List All Patients</Text>
         </TouchableOpacity>
       </View>
        <View style={{ flex: 1, backgroundColor:"white"}}/>
    </View>
  );
  }
}
export default ViewPatientsScreen;