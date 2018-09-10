import React from 'react'
import {View, StyleSheet, TextInput, TouchableOpacity, InteractionManager, Image, ImageBackground, Dimensions} from 'react-native'
import {connect} from 'react-redux'
import Actions from '../Actions/Creators'
import Toast from 'react-native-root-toast'
import {Images, Metrics, Fonts, Colors, AppStyles} from '../Themes'
import {ScrollView, FlatList, Button, Text} from '../Components'
import I18n from 'react-native-i18n'
import Icon from 'react-native-vector-icons/Ionicons'
import {TabNavigator} from 'react-navigation'
import PartnerDetailDescriptionScreen from './PartnerDetailDescriptionScreen'
import PartnerDetailMenuScreen from './PartnerDetailMenuScreen'

const {height, width} = Dimensions.get('window')
const BANNER_HEIGHT = parseInt(height / 3)

class PartnerDetailScreen extends React.Component {

    static navigationOptions = ({navigation}) => ({
        title:navigation.state.params.partner.name,
        headerRight: (
            <View style={{flexDirection:'row',paddingRight:Metrics.pb}}>
                <TouchableOpacity>
                    <Icon name='ios-search' size={Metrics.icons.regular} color={Colors.light} style={{marginHorizontal:Metrics.mdb}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ViewCart',{partner:navigation.state.params.partner})}>
                    <Icon name='ios-cart' size={Metrics.icons.regular} color={Colors.light} style={{marginHorizontal:Metrics.mdb}} />
                </TouchableOpacity>
            </View>
        )
    })

    constructor(props) {
        super(props)
        this.state = {
            partner:props.navigation.state.params.partner,
            loading:true,
            error:false
        }
    }

    componentDidMount = () => InteractionManager.runAfterInteractions(() => this.getData())

    getData = async () => {
        
    }

    render() {

        const {partner} = this.state

        return (
            <View style={{flex:1,marginTop:-56}}>
                <View style={{backgroundColor:Colors.dark}} onPress={null}>
                    <Image source={{uri:'https://media-cdn.tripadvisor.com/media/photo-s/0a/26/63/4c/restaurant.jpg'}} style={{height:BANNER_HEIGHT,opacity:0.7}} resizeMode='cover' />
                    <View style={style.bannerContent}>
                        <Image source={{uri:partner.logo}} style={{width:Metrics.images.large,height:Metrics.images.large,marginVertical:Metrics.mdb}} resizeMode='contain' />
                        <Text light>{partner.address}</Text>
                        <Text light>{partner.travel_time}</Text>
                    </View>
                </View>

                <Tabs />

            </View>
        )
    }
}

const Tabs = new TabNavigator({
    PartnerDetailDescription: { screen: PartnerDetailDescriptionScreen, navigationOptions: { title:'DESCRIPTION' } },
    PartnerDetailMenu: { screen: PartnerDetailMenuScreen, navigationOptions: { title:'MENU' } },
},{
    initialRouteName:'PartnerDetailDescription',
    tabBarOptions: {
        activeTintColor: Colors.dark,
        inactiveTintColor: Colors.dark,
        labelStyle: {
            fontSize:11,
            fontWeight:'bold'
        },
        style: {
            backgroundColor:Colors.light
        }
    }
})

const style = StyleSheet.create({
    bannerContent: {
		position:'absolute',
		top:0,
		left:0,
		width,
		height:BANNER_HEIGHT,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'rgba(0,0,0,0.4)'
	},
})

mapStateToProps = state => {
    return {
        
    }
}

mapDispatchToProps = dispatch => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PartnerDetailScreen)