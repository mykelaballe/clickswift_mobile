import React from 'react'
import {View, StyleSheet, TextInput, TouchableOpacity, InteractionManager, Image, ImageBackground, Dimensions} from 'react-native'
import {connect} from 'react-redux'
import Actions from '../Actions/Creators'
import Toast from 'react-native-root-toast'
import {Images, Metrics, Fonts, Colors, AppStyles} from '../Themes'
import {ScrollView, FlatList, Button, Text} from '../Components'
import I18n from 'react-native-i18n'
import Icon from 'react-native-vector-icons/Ionicons'

class PartnersScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            partners:[],
            loading:true,
            error:false
        }
    }

    componentDidMount = () => InteractionManager.runAfterInteractions(() => this.getData())

    getData = async () => {
        let partners = [], error = false

        try {
            partners = [
                {id:1,name:'Chefs Restaurant',logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfm-L84P-VP1Ad5oTNR8gJlP7-gPQpuzqeK-Nrqf0U0UbPgbulmg',address:'60 Kub Pines Apt. 797',travel_time:'Set 20 minute drive from Sofia Airport',amenities:['Indoor Pool, 6 Restaurant, 4 bar, Scenic City']},
                {id:2,name:'Starbucks',logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPFID4HWcIhXhngD_AXkYh4h3MLhZRZseU0b6OSnHZhaGB2jEQTw',address:'60 Kub Pines Apt. 797',travel_time:'Set 20 minute drive from Sofia Airport',amenities:['Indoor Pool, 6 Restaurant, 4 bar, Scenic City']},
                {id:3,name:'Chicken Delicious',logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAo0_kwdVDbq8Ftt0hKsv0TIPdwom-xxZwx8WaFX_Ias1FCMuq',address:'60 Kub Pines Apt. 797',travel_time:'Set 20 minute drive from Sofia Airport',amenities:['Indoor Pool, 6 Restaurant, 4 bar, Scenic City']},
                {id:4,name:'McDonalds',logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTFm0sKn-o5_s0byOotc6JsEUnrKBlw_oUCrnN3TGYAqlTthMfgQ',address:'60 Kub Pines Apt. 797',travel_time:'Set 20 minute drive from Sofia Airport',amenities:['Indoor Pool, 6 Restaurant, 4 bar, Scenic City']},
                {id:5,name:'Chowking',logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwP7HEb_6q1G3-C7EXk4PojeL_KgOv3vIFB8ZmHzKLPvvUy63B',address:'60 Kub Pines Apt. 797',travel_time:'Set 20 minute drive from Sofia Airport',amenities:['Indoor Pool, 6 Restaurant, 4 bar, Scenic City']},
                {id:6,name:'Jollibee',logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC2Yvo1g5XYyjyomGH-fFZnwZ7u5Ji581NxOFfXwim3pI1Zdb-5g',address:'60 Kub Pines Apt. 797',travel_time:'Set 20 minute drive from Sofia Airport',amenities:['Indoor Pool, 6 Restaurant, 4 bar, Scenic City']},
            ]
        }
        catch(err) {
            error = true
        }
        
        this.setState({
            partners,
            loading:false,
            error
        })
    }

    renderItem = ({item}) => {
        return (
            <TouchableOpacity style={style.item} onPress={() => this.props.navigation.navigate('PartnerDetail',{partner:item})}>
                <View style={style.itemInner}>
                    <Image source={{uri:item.logo}} style={style.logo} resizeMode='contain' />
                    <View style={{flex:1,marginRight:Metrics.mb}}>
                        <View style={{marginBottom:Metrics.msm}}>
                            <Text bold>{item.name}</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Icon name='ios-pin' size={Metrics.icons.tiny} color={Colors.branding} style={{marginRight:Metrics.mb}} />
                            <Text sm mute numberOfLines={1}>{item.address}</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Icon name='ios-clock' size={Metrics.icons.tiny} color={Colors.branding} style={{marginRight:Metrics.mb}} />
                            <Text sm mute numberOfLines={1}>{item.travel_time}</Text>
                        </View>
                    </View>
                    {/*<TouchableOpacity onPress={null}>
                        <Icon name='ios-add-circle' size={Metrics.icons.large} color={Colors.branding} />
        </TouchableOpacity>*/}
                </View>
                <View style={style.itemFooter}>
                    <Text sm>{item.amenities}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {

        const {partners, loading, error} = this.state

        return (
            <ScrollView style={AppStyles.screen}>
                <FlatList
                    data={partners}
                    renderItem={this.renderItem}
                    loading={loading}
                    error={error}
                />
            </ScrollView>
        )
    }
}

const style = StyleSheet.create({
    item: {
        alignItems:'center',
        backgroundColor:Colors.light,
        marginVertical:Metrics.mxs,
        elevation:2
    },
    itemInner: {
        flexDirection:'row',
        justifyContent:'space-between',
        padding:Metrics.pb,
    },
    logo: {
        width:Metrics.images.large,
        height:Metrics.images.large,
        marginRight:Metrics.mb
    },
    itemFooter: {
        borderTopWidth:StyleSheet.hairlineWidth,
        borderTopColor:Colors.lightgray,
        padding:Metrics.pb,
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

export default connect(mapStateToProps, mapDispatchToProps)(PartnersScreen)