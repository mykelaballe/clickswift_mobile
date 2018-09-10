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
const ITEM_WIDTH = (width / 5)
const ITEM_HEIGHT = 120

class AllergensScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            allergens:[
                {id:1,image:require('../Images/allergens/1.png'),quantity:10},
                {id:2,image:require('../Images/allergens/2.png'),quantity:10},
                {id:3,image:require('../Images/allergens/3.png'),quantity:10},
                {id:4,image:require('../Images/allergens/4.png'),quantity:10},
                {id:5,image:require('../Images/allergens/5.png'),quantity:10},
                {id:6,image:require('../Images/allergens/6.png'),quantity:10},
                {id:7,image:require('../Images/allergens/7.png'),quantity:10},
                {id:8,image:require('../Images/allergens/8.png'),quantity:10},
                {id:9,image:require('../Images/allergens/9.png'),quantity:10},
                {id:10,image:require('../Images/allergens/10.png'),quantity:10},
                {id:11,image:require('../Images/allergens/11.png'),quantity:10},
                {id:12,image:require('../Images/allergens/12.png'),quantity:10},
                {id:13,image:require('../Images/allergens/13.png'),quantity:10},
                {id:14,image:require('../Images/allergens/14.png'),quantity:10},
                {id:15,image:require('../Images/allergens/15.png'),quantity:10},
                {id:16,image:require('../Images/allergens/16.png'),quantity:10},
                {id:17,image:require('../Images/allergens/17.png'),quantity:10},
            ],
            loading:true,
            error:false
        }
    }

    componentDidMount = () => InteractionManager.runAfterInteractions(() => this.getData())

    getData = async () => {
        let error = false

        this.setState({
            loading:false,
            error
        })
    }

    renderItem = ({item}) => {
        return (
            <TouchableOpacity style={{width:ITEM_WIDTH,height:ITEM_HEIGHT,marginHorizontal:Metrics.msm}}>
                <Image source={item.image} style={{width:ITEM_WIDTH,height:ITEM_HEIGHT * 0.75}} resizeMode='contain' />
                <View style={{alignItems:'center',alignItems:'center'}}>
                    <Text>{item.quantity}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {

        const {allergens, loading, error} = this.state

        return (
            <ScrollView style={AppStyles.screenlight}>
                <FlatList
                    data={allergens}
                    renderItem={this.renderItem}
                    numColumns={4}
                    loading={loading}
                    error={error}
                />
            </ScrollView>
        )
    }
}

mapStateToProps = state => {
    return {
        
    }
}

mapDispatchToProps = dispatch => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllergensScreen)