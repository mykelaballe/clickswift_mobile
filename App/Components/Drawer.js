import React, {Component} from 'react'
import {Text, View, StyleSheet, TouchableHighlight, Image, FlatList} from 'react-native'
import {connect} from 'react-redux'
import Actions from '../Actions/Creators'
import {NavigationActions} from 'react-navigation'
import {Metrics, Images, Colors, Fonts} from '../Themes'
import {DrawerItem} from './'
import {ScrollView} from '../Components'
import Icon from 'react-native-vector-icons/Ionicons'
import Toast from 'react-native-root-toast'

class Drawer extends Component {

  render () {
    return (
        <ScrollView style={{backgroundColor:Colors.branding}}>

            <View style={style.logoContainer}>
                <Image source={Images.logo} style={{width:150,height:150}} resizeMode='contain' />
            </View>
            
        </ScrollView>
    )
  }
}

const style = StyleSheet.create({
    logoContainer: {
        justifyContent:'flex-start',
        alignItems:'center',
        paddingTop:Metrics.pdb
    },
})

mapStateToProps = state => {
    return {
        user: state.user
    }
}

mapDispatchToProps = dispatch => {
    return {
      logout: () => dispatch(Actions.logout()),
      clearUser: () => dispatch(Actions.clearUser()) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Drawer)