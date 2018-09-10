import React from 'react'
import {View, StyleSheet} from 'react-native'
import {Metrics, Colors} from '../Themes'

class ListItemFooter extends React.Component {
  
  render() {
    return <View style={style.container} />
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor:Colors.light,
    height:10,
    marginBottom:Metrics.mmb,
    elevation:2,
  }
})

export default ListItemFooter