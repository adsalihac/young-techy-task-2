import { StyleSheet, Text, TouchableOpacity, View , Image } from 'react-native'
import React, {useState}  from 'react'

const App = () => {

  // state hook
  const [enable, setEnable] = useState(false) // Boolean state hook

  // const [firstName, setFirstName] = useState('') // String state hook

  // const [lastName, setLastName] = useState('') // String state hook

  // const [phoneNumber, setPhoneNumber] = useState(0) // Number state hook

  // const [user, setUser] = useState({}) // Object state hook

  // const [userList, setUserList] = useState([]) // Array state hook



  // var enable = false; // default value false
  // console.log(enable); // false
  // enable = true; // update enable variable
  // console.log(enable); // true

    // Function
  // function is used to multiple times use.

  // Arrow Function - multiple times use

  // const onClickMe = () => { 
  //   console.log('clicked')
  // }

  // Normal Function

  // function onClickMe() {
  //   console.log('clicked')
  // }

  // Anonymous Function - 1 time use

  // () => {
  //   console.log('clicked');
  // }


  const onClickMe = () => { // switch board , function declaration
    console.log(enable, 'clicked');
    setEnable(!enable); // update enable variable
  }



  // Data types
  // 1. String // 'Hello World' 
  // 2. Number // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  // 3. Boolean // true, false - 1, 0 
  // 4. Array // ['Hello', 'World', 'Hello', 'World']

  // JavasScript variable declare
  // var, const , let


  // variable 
  // datatype
  // function



  return (
    <View style={{
      flex:1,
      backgroundColor: '#fff',
    }}>
      {/* <View style={{
        backgroundColor: enable ? 'orange' : 'black',
        width: 200,
        height: 200,
        borderRadius: 100,
        alignSelf: 'center',
        marginTop: 100,
      }}></View> */}

      <Image 
        style={{
          width: 200,
          height: 200,
          alignSelf: 'center',
          marginTop: 100,
        }}
        resizeMode="contain"
        source={enable ? require('./assets/OnBulb.webp'):require('./assets/OffBulb.jpg')}
        />

      <TouchableOpacity 
        onPress={
          () => {
            onClickMe(); // function call , switch button click
          }
        }
      style={{
        width: 300,
        height: 60,
        borderRadius: 10,
        alignSelf: 'center',
        backgroundColor: 'red',
        marginTop: 50,
      }}>
        <Text style={{
          fontSize: 30,
          color: '#fff',
          alignSelf: 'center',
          marginTop: 10,
        }}>
          { enable ? 'BULB OFF' : 'BULB ON'}
        </Text>
      </TouchableOpacity>


     
    </View>
  )
}

export default App

const styles = StyleSheet.create({})