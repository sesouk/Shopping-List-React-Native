import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList,  } from 'react-native'
import Header from './components/Header'
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'


const App = () => {
  const [ items, setItems ] = useState([
    {id: Math.floor(Math.random() * 100000), text: 'Milk'},
    {id: Math.floor(Math.random() * 100000), text: 'Rice'},
    {id: Math.floor(Math.random() * 100000), text: 'Chicken'},
    {id: Math.floor(Math.random() * 100000), text: 'Apples'},
  ])

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)
    })

  }
  const addItem = (text) => {
    setItems(prevItems => {
      return [...prevItems, {id: Math.floor(Math.random() * 100000), text}]
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem}/>
      <FlatList data={items} renderItem={({item}) => (
        <ListItem item={item} deleteItem={deleteItem}/>
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