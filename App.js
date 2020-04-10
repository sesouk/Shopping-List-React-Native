import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native'
import Header from './components/Header'
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'
import UpdateItem from './components/UpdateItem'


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

  const updateItem = (id, text) => {
    const newItems = [...items]
    const index = items.findIndex(item => item.id === id)
    
    newItems[index].text = text
    setItems(newItems)
  }

  const addItem = (text) => {
    console.log(text);
    
    if (!text) {
      Alert.alert('Error', 'Please enter an item', {text: 'Ok'})
    } else {
      setItems(prevItems => {
        return [...prevItems, {id: Math.floor(Math.random() * 100000), text}]
      })
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem}/>
      <UpdateItem updateItem={updateItem}/>
      <FlatList data={items} renderItem={({item}) => (
        <ListItem item={item} deleteItem={deleteItem} updateItem={updateItem}/>
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