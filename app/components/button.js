import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({btn_name , onClick , enableButton}) => {
  return (
    <TouchableOpacity 
        onPress={onClick}
      style={{
        width: 300,
        height: 60,
        borderRadius: 10,
        alignSelf: 'center',
        backgroundColor: enableButton ? 'red' : 'gray',
        marginTop: 50,
      }}>
        <Text style={{
          fontSize: 30,
          color: '#fff',
          alignSelf: 'center',
          marginTop: 10,
        }}>
         {btn_name}
        </Text>
      </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({})