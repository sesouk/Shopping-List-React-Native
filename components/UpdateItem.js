import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'


const UpdateItem= ({ updateItem }) => {
  const [ text, setText ] = useState('')

  const onChange = textValue => setText(textValue)
  

  return (
    <View>
      <TextInput placeholder='Make Changes..' style={styles.input} onChangeText={onChange}/>
      <TouchableOpacity style={styles.btn} onPress={() => updateItem(text)}>
        <Text style={styles.btnText}><Icon name='plus' size={20}/> Update Item</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center'
  }
})

export default UpdateItem