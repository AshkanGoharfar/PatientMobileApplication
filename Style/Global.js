import {StyleSheet} from 'react-native';

export const GlobalStyles=StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  contentflex: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ABD3EC',
      borderRadius: 10,
  },
  appButtonContainer: {
    elevation: 1,
    backgroundColor: "#60839C",
    borderRadius: 10,
    paddingVertical: 13,
   marginHorizontal: 20,
   height: 45,
  },
  appButtonText: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  recordContainer: {
    paddingTop:30,
    justifyContent: 'space-around',
    marginHorizontal: 16,
  },
  patientData: {
    padding: 20,
    backgroundColor: '#ABD3EC',
    fontSize: 10,
    fontWeight: "bold",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  recordRow: {
    fontSize: 10,
    fontWeight: "bold",
  },
  datePicker: {
    width: 320,
    height: 260,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  pickedDateContainer: {
  padding: 20,
  backgroundColor: '#eee',
  borderRadius: 10,
},
pickedDate: {
  fontSize: 18,
  color: 'black',
},
btnContainer: {
    padding: 30,
  },
  textInputStyles: {
   height: 40,
   margin: 10,
   borderWidth: 1,
   padding: 0,
   width: 200,
 },
 titleText :
 {
   fontWeight: 'bold',
   paddingHorizontal: 10,
   paddingVertical: 12,
 },
 pickerStyle :
 {
   flex: 1,
   paddingTop: 40,
   alignItems: "center",
   width: 100,
   height: 100,
 },
});
