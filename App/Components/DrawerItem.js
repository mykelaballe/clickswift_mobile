import React from 'react'
import { View, StyleSheet, Text, TouchableHighlight, ActivityIndicator } from 'react-native'
import {Metrics, Colors, Fonts} from '../Themes'
import Icon from 'react-native-vector-icons/Ionicons'

const mainColor = '#868aa8'

class DrawerItem extends React.Component {
  
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress} style={style.drawerItem} underlayColor='#221370'>
          <View style={{flexDirection:'row'}}>
              <Icon name={`ios-${this.props.icon}`} size={Metrics.icons.small} style={style.icon} />
              <Text style={style.drawerItemText}>{this.props.label}</Text>
          </View>
      </TouchableHighlight>
    )
  }
}

const style = StyleSheet.create({
  drawerItem: {
    flexDirection:'row',
    padding:Metrics.pmb,
    alignItems:'center'
  },
  drawerItemText: {
    color:mainColor,
    fontSize:Fonts.size.lgmedium
  },
  icon: {
    marginRight:Metrics.mb,
    color:mainColor
  }
})

export default DrawerItem