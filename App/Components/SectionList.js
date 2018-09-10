import React from 'react'
import { View, StyleSheet, ActivityIndicator, SectionList as List } from 'react-native'
import {connect} from 'react-redux'
import {Metrics, Colors, Fonts} from '../Themes'
import {Placeholder} from './'

class SectionList extends React.Component {
  
  render() {

    const {sections, loading} = this.props

    if(loading) {
      return <ActivityIndicator animating={true} />
    }

    if(!loading && sections.length === 0) {
      return <Placeholder />
    }

    return (
      <List {...this.props} />
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionList)