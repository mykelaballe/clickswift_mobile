import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import {connect} from 'react-redux'
import {Metrics, Colors, Fonts, AppStyles} from '../Themes'

class ListItem extends React.Component {
  
  render() {

    let style = {
      ...AppStyles.list
    }

    if(this.props.row) style.flexDirection = 'row'

    if(this.props.jsb) style.justifyContent = 'space-between'

    if(this.props.set) {
      style.marginBottom = 0
      style.elevation = 0
      style.borderRadius = 0
    }

    return (
      <View style={style}>
        {this.props.children}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)