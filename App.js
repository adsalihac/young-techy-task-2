import { StyleSheet, Text, TouchableOpacity, View , Image } from 'react-native'
import React, {useState}  from 'react'
import Button from './app/components/button'

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


  const onBulb = () => { // switch board , function declaration
    console.log(enable, 'clicked');
    setEnable(true); // update enable variable
  }

  const offBulb = () => { // switch board , function declaration
    console.log(enable, 'clicked');
    setEnable(false); // update enable variable
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

        <Button
          btn_name={enable ? "BULB ON": "BULB OFF"}
          enableButton={enable}
          onClick={
            ()=>{
              setEnable(!enable)
            }
          }
        />

        {/* <Button
          btn_name={"BULB OFF"}
          enableButton={enable}
          onClick={
            ()=>{
              setEnable(false)
            }
          }
        /> */}

      {/* <TouchableOpacity 
        onPress={
          () => {
            onBulb(); // function call , switch button click
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
          BULB ON
        </Text>
      </TouchableOpacity>


      <TouchableOpacity 
        onPress={
          () => {
            offBulb(); // function call , switch button click
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
         BULB OFF
        </Text>
      </TouchableOpacity> */}


      <TouchableOpacity 
        onPress={()=>{
          setEnable(!enable)
        }}
        style={{
          width: 150,
          height: 60,
          borderRadius: 100/2,
          alignSelf: 'center',
          backgroundColor: enable ? "yellow" : 'black',
          marginTop: 50,
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center'
        }}>

         {
          enable ===false &&
          <View style={{
            height:50,
            width:50,
            borderRadius:50/2,
            backgroundColor:'white',
            marginLeft:5,
          }}>
          </View>
         }
     
       {
        !enable &&
        <View style={{
          width:50,
        }}>
        <Text 
            style={{
              color:'white',
            }}>
              OFF
            </Text>
        </View>
       }

       
      {
        enable === true &&
        <View style={{
          width:50,
        }}>
        <Text 
            style={{
              color:'black',
              marginLeft:5,
            }}>
              ON
            </Text>
        </View>
      }

       {
        enable &&
        <View style={{
            height:50,
            width:50,
            borderRadius:50/2,
            backgroundColor:'black',
            marginRight:5,
          }}>

          </View>

       }
      

        </TouchableOpacity>


     
    </View>
  )
}

export default App

const styles = StyleSheet.create({})