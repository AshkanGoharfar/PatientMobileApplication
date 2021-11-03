import React, { Component } from 'react'
import { StyleSheet,TextInput,View, Text, TouchableHighlight, FlatList ,Button} from 'react-native'
import {Picker} from '@react-native-picker/picker'
import DateTimePicker from '@react-native-community/datetimepicker';
import {GlobalStyles} from '../Style/Global';
class  RecordsScreen extends Component {
   constructor(props){
     super(props);
   }
   render()
   {
    return (
      <View style={{flex:1 , justifyContent: 'center' , alignItems: 'center'}}>
<Text>Records </Text>
      </View>
    );
  }
}

class AddPatientRecords extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      FirstName:props.FirstName,
      LastName:props.LastName,
      Age:props.Age,
      Address:props.Address,
      DateOfBirth:props.DateOfBirth,
      PatientId: props.PatientId,
      date: new Date(Date.now()),
      isPickerShow: false
    };
  }
   showPicker = () => {
     this.setState({isPickerShow:true});
   }
   onChange = (event, value) => {
   this.setState({date:value});
   if (Platform.OS === 'android') {
      this.setState({isPickerShow:false});
   }
  }
  handleDate=(text)=>
  {
    this.setState({date:text});

  }
  handleFistName=(text)=>
  {
    this.setState({FirstName:text});

  }
  handleLastName=(text)=>{
    this.setState({LastName:text});
  }
  handleAge=(text)=>{
    this.setState({Age:text});
  }
  handleAddress=(text)=>{
    this.setState({Address:text});
  }
  handleDateOfBirth=(text)=>{
    this.setState({DateOfBirth:text});
  }

  render()
  {
    return (
   <View style={GlobalStyles.container}>
    <View style={[GlobalStyles.contentflex, {flex:3 ,backgroundColor: 'silver' ,
    justifyContent:'flex-start' ,marginVertical:8}]} >
     <View style={{flex: 4, flexDirection: 'row' }}>
     <Text style={[GlobalStyles.titleText, {flex: 2 ,flexDirection:'column' }]}>First Name:</Text>
     <Text style={[GlobalStyles.titleText , {flex: 1 ,flexDirection:'column'}]}>{this.state.FirstName}</Text>
    </View>
    <View style={{flex: 4, flexDirection: 'row' }}>
    <Text style={[GlobalStyles.titleText, {flex: 1 ,flexDirection:'column' }]}>LastName:</Text>
    <Text style={[GlobalStyles.titleText , {flex: 1 ,flexDirection:'column'}]}>{this.state.LastName}</Text>
     </View>
     <View style={{flex: 4, flexDirection: 'row' }}>
     <Text style={[GlobalStyles.titleText, {flex: 1 ,flexDirection:'column' }]}>Address:</Text>
     <Text style={[GlobalStyles.titleText , {flex: 1 ,flexDirection:'column'}]}>{this.state.Address}</Text>
    </View>
    <View style={{flex: 4, flexDirection: 'row' }}>
    <Text style={[GlobalStyles.titleText, {flex: 2 ,flexDirection:'column' }]}>Date Of Birth:</Text>
    <Text style={[GlobalStyles.titleText , {flex: 1 ,flexDirection:'column' }]}>{this.state.DateOfBirth}</Text>
    </View>
    <View style={{flex: 4, flexDirection: 'row' }}>
    <Text style={[GlobalStyles.titleText, {flex: 2 ,flexDirection:'column' }]}>Age:</Text>
    <Text style={[GlobalStyles.titleText , {flex: 1 ,flexDirection:'column' }]}>{this.state.Age}</Text>
    </View>
    </View>

    <View style={[GlobalStyles.contentflex , {flex: 4 }]} >
    <View style={{flex: 1, flexDirection: 'row' }}>
      <Text  >{this.date}</Text>
      {!this.state.isPickerShow && (
          <Button title="Date/Time" color="purple" onPress={this.showPicker} />
      )}
      {this.state.isPickerShow && (
       <DateTimePicker
         value={this.state.date}
         mode={'date'}
         display={Platform.OS === 'ios' ? 'spinner' : 'default'}
         is24Hour={true}
         onChange={this.onChange}
         style={GlobalStyles.datePicker}
       />
     )}
    </View>
    <View style={{flex: 1, flexDirection: 'row' }}>
    <Text style={[GlobalStyles.titleText, {flex: 1 ,flexDirection:'column' }]}>Type Of Data:</Text>
    <Picker style={{ height: 50, width: 150 ,flex: 2 ,flexDirection: 'column'}} >
         <Picker.Item label="Java" value="java" />
         <Picker.Item label="JavaScript" value="js" />
       </Picker>
    </View>
    <View style={{flex: 1, flexDirection: 'row' }}>
    <Text style={[GlobalStyles.titleText]}>Reading/Value:</Text>
    <TextInput
         style={GlobalStyles.textInputStyles}
       />
    </View>
    <View style={{flex: 1 , flexDirection: 'row' }}>
    <TouchableHighlight
       style = {[GlobalStyles.appButtonContainer ,  {flex: 1 ,flexDirection:'column' }]}>
       <Text style = {GlobalStyles.appButtonText}> Add</Text>
    </TouchableHighlight>
    <TouchableHighlight style = {[GlobalStyles.appButtonContainer ,  {flex: 1 ,flexDirection:'column' }]}>

       <Text style = {GlobalStyles.appButtonText}> Cancel</Text>
    </TouchableHighlight>
    </View>
    </View>
      <View style={[GlobalStyles.contentflex , {flex: 3 ,backgroundColor: 'white'}]} >
      </View>
</View>


    );
  }
}

export default AddPatientRecords;

const styles=StyleSheet.create(
  {
    titleText:{
      fontSize: 20,
      fontWeight: 'bold',
    }

  }
)
