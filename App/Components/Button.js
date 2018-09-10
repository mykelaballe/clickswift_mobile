import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import {connect} from 'react-redux'
import {Metrics, Colors, Fonts} from '../Themes'

class Button extends React.Component {
  
  render() {

    let style = {
      btn: {
        backgroundColor:Colors.primary,
        padding:Metrics.pb,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:Metrics.rb,
        flexDirection:'row'
      },
      btnText: {
          color:Colors.light,
          fontWeight:'bold',
          textAlign:'center',
      },
    }

    if(this.props.sm) {
      style.btnText.fontSize = Fonts.size.small
      style.btn.padding = Metrics.psm
    }

    if(this.props.type) {
      style.btn.backgroundColor = Colors[this.props.type]
    }

    if(this.props.style) {
      style.btn = {
        ...style.btn,
        ...this.props.style
      }
    }

    if(this.props.ml) style.btn.marginLeft = Metrics.msm
    if(this.props.mr) style.btn.marginRight = Metrics.msm
    if(this.props.mv) style.btn.marginVertical = Metrics.msm
    if(this.props.mh) style.btn.marginHorizontal = Metrics.msm

    return (
      <TouchableOpacity onPress={this.props.onPress} style={style.btn}>
        {(typeof this.props.processing && this.props.processing) &&
        <View style={{marginRight:Metrics.mxs}}>
          <ActivityIndicator animating={true} size={Metrics.icons.tiny} color={Colors.light} />
        </View>
        }
        <Text style={style.btnText}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Button)

/*

*/