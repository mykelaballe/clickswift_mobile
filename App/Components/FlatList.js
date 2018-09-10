import React from 'react'
import { View, StyleSheet, ActivityIndicator, FlatList as List } from 'react-native'
import {connect} from 'react-redux'
import {Metrics, Colors, Fonts} from '../Themes'
import {Placeholder} from './'

class FlatList extends React.Component {
  
  render() {

    const {data, loading} = this.props

    if(loading) {
      return <ActivityIndicator animating={true} />
    }

    if(!loading && data.length === 0) {
      return <Placeholder />
    }

    if(!loading && data.length === 0 && !this.props.error) {
      if(this.props.placeholder) {
        return <Placeholder text={this.props.placeholder.text} />
      }
      else return <Placeholder />
    }
    else if(!loading && this.props.error) {
      return <Placeholder text={Globals.error.generic} />
    }

    if(!this.props.keyExtractor) {
      this.props = {
        ...this.props,
        keyExtractor:(item, index) => item.id.toString()
      }
    }

    return <List {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(FlatList)