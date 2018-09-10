import React from 'react'
import {View, StyleSheet, TextInput, TouchableOpacity, InteractionManager, Image, ImageBackground, Dimensions} from 'react-native'
import {connect} from 'react-redux'
import Actions from '../Actions/Creators'
import Toast from 'react-native-root-toast'
import {Images, Metrics, Fonts, Colors, AppStyles} from '../Themes'
import {ScrollView, FlatList, Button, Text} from '../Components'
import I18n from 'react-native-i18n'
import Icon from 'react-native-vector-icons/Ionicons'

const {height, width} = Dimensions.get('window')
const ITEM_HEIGHT = parseInt(height / 4)

class MenuScreen extends React.Component {

    static navigationOptions = ({navigation}) => ({
        headerRight: (
            <TouchableOpacity style={{padding:Metrics.pb}} onPress={() => navigation.navigate('UserMenu')}>
                <Icon name='ios-person' size={Metrics.icons.medium} color={Colors.light} />
            </TouchableOpacity>
        )
    })

    constructor(props) {
        super(props)
        this.state = {
            restaurants:[],
            loading:true,
            error:false
        }
    }

    componentDidMount = () => InteractionManager.runAfterInteractions(() => this.getData())

    getData = async () => {
        let restaurants = [], error = false

        try {
            restaurants = [
                {id:1,name:'Social Brunch Cafe',banner:'http://www.royalhotelchilliwack.com/Content/images/Hotel-Cafe-o.jpg'},
                {id:2,name:'Fish N Chips .Co',banner:'https://media-cdn.tripadvisor.com/media/photo-s/0a/26/63/4c/restaurant.jpg'},
                {id:3,name:'Plannet',banner:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL1Eg8QIuNPY2XywcBnRO7ORdR2ikysVVD2MsVOUh6i1P-cv4r'},
                {id:4,name:'Hype',banner:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS55F4uUaBoBoLFOMbJ6oaEkslwC8mTw-Mfg8n46L1y1Bn_n6AN'},
                {id:5,name:'14th Street',banner:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7jNHLWQm6Fn-2fyPwdGSm3FU9tsRejmX_hQ-zvjLu7GQqnPsbRQ'},
                {id:6,name:'Burger King',banner:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5nJDqm8gCOhrOXF2bbSFfJOt-af6q1WoVlusLha4f5TBHVo5x'},
                {id:7,name:'McDonalds',banner:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW_fQnyL4NZCbH7p12E8y2AaiuU9uMJg0DEEY6nHWQMHEb5Zus'},
                {id:8,name:'Mango Ave.',banner:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxpMZW2HzGQ8PzSJaUCNmR5hQ9O57gIOWkvvblDuueE4r_RAbZCw'},
                {id:9,name:'Jollibee',banner:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDLVWbo2dSHBbCr2IbCVghKhslJa1LjSCd7duoyFD-dvxp5fVTWA'},
                {id:10,name:'Chowking',banner:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaBLZrapheKoqF546FlPT74W1FxIYchyQFjzEudW3c4kh930il'},
            ]
        }
        catch(err) {
            error = true
        }
        
        this.setState({
            restaurants,
            loading:false,
            error
        })
    }

    renderItem = ({item}) => {
        return (
            <TouchableOpacity onPress={null}>
                <Image source={{uri:item.banner}} style={{height:ITEM_HEIGHT}} resizeMode='cover' />
                <View style={style.textWrapper}>
                    <Text bold light lg>{item.name}</Text>
                </View>
			</TouchableOpacity>
        )
    }

    render() {

        const {restaurants, loading, error} = this.state

        return (
            <ScrollView>
                <FlatList
                    data={restaurants}
                    renderItem={this.renderItem}
                    loading={loading}
                    error={error}
                />
            </ScrollView>
        )
    }
}

const style = StyleSheet.create({
	textWrapper: {
		position:'absolute',
		top:0,
		left:0,
		width,
		height:ITEM_HEIGHT,
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

export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen)