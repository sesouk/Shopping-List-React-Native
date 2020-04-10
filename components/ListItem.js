import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'


const ListItem = ({item, deleteItem}) => {
  const [show, setShow] = useState(false)
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
        <Icon name='ellipsis-v' size={20} color='firebrick' onPress={() => setShow(!show)}/>
        { show ?
        <>
        <Icon name='edit' size={20} color='firebrick' onPress={() => deleteItem(item.id)}/>
        <Icon name='remove' size={20} color='firebrick' onPress={() => deleteItem(item.id)}/>
        </>
        : null }
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  listItemText: {
    fontSize: 18
  }
})

export default ListItem