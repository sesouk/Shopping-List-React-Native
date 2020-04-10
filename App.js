import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList,  } from 'react-native'
import Header from './components/Header'
import ListItem from './components/ListItem'


const App = () => {
  const [ items, setItems ] = useState([
    {id: Math.floor(Math.random() * 100000), text: 'Milk'},
    {id: Math.floor(Math.random() * 100000), text: 'Rice'},
    {id: Math.floor(Math.random() * 100000), text: 'Chicken'},
    {id: Math.floor(Math.random() * 100000), text: 'Apples'},
  ])

  return (
    <View style={styles.container}>
      <Header />
      <FlatList data={items} renderItem={({item}) => (
        <ListItem item={item}/>
      )} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  }
})

export default App