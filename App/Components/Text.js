import React from 'react'
import { View, StyleSheet, Text as Txt } from 'react-native'
import {connect} from 'react-redux'
import {Metrics, Colors, Fonts} from '../Themes'

class Text extends React.Component {
  
  render() {

    let style = {
      color:Colors.dark,
      fontSize:Fonts.size.lgmedium
    }

    if(this.props.sm) style.fontSize = Fonts.size.small
    if(this.props.lg) style.fontSize = Fonts.size.input
    if(this.props.xl) style.fontSize = Fonts.size.h5
    if(this.props.h3) style.fontSize = Fonts.size.h3

    if(this.props.bold) style.fontWeight = 'bold'

    if(this.props.mute) style.color = Colors.mute
    if(this.props.primary) style.color = Colors.primary
    if(this.props.success) style.color = Colors.success
    if(this.props.info) style.color = Colors.info
    if(this.props.warning) style.color = Colors.warning
    if(this.props.danger) style.color = Colors.danger
    if(this.props.color) style.color = this.props.color
    if(this.props.light) style.color = Colors.light
    if(this.props.branding) style.color = Colors.branding

    if(this.props.center) style.textAlign = 'center'

    return <Txt style={style} {...this.props}>{this.props.children}</Txt>

  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Text)