import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import {connect} from 'react-redux'
import {withNavigation} from 'react-navigation'
import {Metrics, Colors, Fonts} from '../Themes'
import Icon from 'react-native-vector-icons/Ionicons'

class Hamburger extends React.Component {
  
  render() {

    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerOpen')} style={{padding:Metrics.pb}}>
          <Icon name='ios-menu' size={Metrics.icons.medium} color={Colors.branding} />
      </TouchableOpacity>
    )
  }
}

export default withNavigation(Hamburger)