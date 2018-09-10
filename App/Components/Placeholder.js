import React from 'react'
import { View, StyleSheet } from 'react-native'
import {connect} from 'react-redux'
import {Metrics, Colors, Fonts} from '../Themes'
import {Text} from './'
import Icon from 'react-native-vector-icons/Ionicons'

class Placeholder extends React.Component {
  
  render() {

    let text = this.props.text ? this.props.text : 'No data'

    return (
      <View style={style.container}>
        <Icon name='ios-alert' size={100} color={Colors.mute} />
        <Text>{text}</Text>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems:'center'
  }
})

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Placeholder)