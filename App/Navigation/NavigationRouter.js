import React from 'react'
import {Text, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import {StackNavigator, TabNavigator, TabBarBottom, DrawerNavigator, NavigationActions} from 'react-navigation'
import * as Screen from '../Containers'
import {Drawer} from '../Components'
import {Metrics, Colors, Fonts, AppStyles} from '../Themes'
import Icon from 'react-native-vector-icons/Ionicons'

class NavigationRouter extends React.Component {
  render() {
    if(this.props.isLoggedIn) return <MainStack />
    else return <AuthStack />
  }
}

const tabBarOptions = {
  activeTintColor: Colors.light,
  labelStyle: {
    fontSize:11
  },
  style: {
    backgroundColor:Colors.branding
  }
}

const AuthStack = StackNavigator({
  Login: { screen: Screen.LoginScreen, navigationOptions: { header:null } },
},{
  initialRouteName: 'Login'
})

const MainStack = StackNavigator({
  Welcome: { screen: Screen.WelcomeScreen, navigationOptions: { header:null } },
  QRScan: { screen: Screen.QRScanScreen, navigationOptions: { title:'SCAN' } },
  Menu: { screen: Screen.MenuScreen, navigationOptions: { title:'MENU' } },
  Partners: { screen: Screen.PartnersScreen, navigationOptions: { title:'OUR PARTNERS' } },
  PartnerDetail: {
    screen: Screen.PartnerDetailScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor:'transparent'
      }
    }
  },
  Allergens: { screen: Screen.AllergensScreen, navigationOptions: { title:'Allergens' } },
  Cart: { screen: Screen.CartScreen, navigationOptions: { title:'Cart' } },
  ViewCart: { screen: Screen.ViewCartScreen },
  Payment: { 
    screen: Screen.PaymentScreen, 
    navigationOptions: {
      title:'Table Order',
      headerStyle: {
        backgroundColor:'transparent'
      }
    }
  },
  UserMenu: { 
    screen: Screen.UserMenuScreen, 
    navigationOptions: {
      headerStyle: {
        backgroundColor:'transparent'
      }
    }
  },
  ColorText: { 
    screen: Screen.ColorTextScreen, 
    navigationOptions: {
      title:'Color and Text',
      headerStyle: {
        backgroundColor:'transparent'
      }
    }
  },
  Families: { 
    screen: Screen.FamiliesScreen, 
    navigationOptions: {
      title:'Families',
      headerStyle: {
        backgroundColor:'transparent'
      }
    }
  },
  Language: { 
    screen: Screen.LanguageScreen, 
    navigationOptions: {
      title:'Language',
      headerStyle: {
        backgroundColor:'transparent'
      }
    }
  },
  MenuSetting: { 
    screen: Screen.MenuSettingScreen, 
    navigationOptions: {
      title:'Menu Setting',
      headerStyle: {
        backgroundColor:'transparent'
      }
    }
  },
  TableSectors: { screen: Screen.TableSectorsScreen, navigationOptions: { title:'Segment and Table Setup' } },
  TableSector: { screen: Screen.TableSectorScreen },
  OrderGroup: { screen: Screen.OrderGroupScreen, navigationOptions: { title:'New Order' } },
  OrderComments: { screen: Screen.OrderCommentsScreen, navigationOptions: { title:'All Comments' } },
  ViewOrderComment: { screen: Screen.ViewOrderCommentScreen },
  AddMenuItem: { screen: Screen.AddMenuItemScreen, navigationOptions: { title:'Add Menu Item' } },
  EditMenuItem: { screen: Screen.EditMenuItemScreen, navigationOptions: { title:'Edit Menu Item' } },
  WaitingOrder: { screen: Screen.WaitingOrderScreen, navigationOptions: { title:'Waiting Order' } },
},{
  initialRouteName:'Welcome',
  navigationOptions: {
    headerStyle: {
      backgroundColor:Colors.branding
    },
    headerTintColor:Colors.light,
  }
})

mapStateToProps = state => {
  return {
    
  }
}
 
export default connect(mapStateToProps)(NavigationRouter)