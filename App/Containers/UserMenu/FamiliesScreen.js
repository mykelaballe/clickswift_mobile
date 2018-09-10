import React from 'react'
import {View, StyleSheet, TextInput, TouchableOpacity, InteractionManager, Image, ImageBackground, Dimensions} from 'react-native'
import {connect} from 'react-redux'
import Actions from '../../Actions/Creators'
import Toast from 'react-native-root-toast'
import {Images, Metrics, Fonts, Colors, AppStyles} from '../../Themes'
import {ScrollView, FlatList, Button, Text} from '../../Components'
import I18n from 'react-native-i18n'
import Icon from 'react-native-vector-icons/Ionicons'

const {height, width} = Dimensions.get('window')
const BANNER_HEIGHT = parseInt(height / 3)

class FamiliesScreen extends React.Component {

    static navigationOptions = ({navigation}) => ({
        headerRight: (
            <View style={{paddingRight:Metrics.pb}}>
                <TouchableOpacity>
                    <Icon name='ios-create' size={Metrics.icons.regular} color={Colors.light} />
                </TouchableOpacity>
            </View>
        )
    })

    constructor(props) {
        super(props)
        this.state = {
            partner: {
                logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT02jy8Stw5JG5IQgAIbTHykEeejqrtUEwY49vMdg1l0cA2ga08',
                name:'Kinggo BBQ',
                address:'6226 Zander Knolls Suite'
            },
            loading:true,
            error:false
        }
    }

    render() {

        const {partner} = this.state

        return (
            <View style={{flex:1,marginTop:-56}}>
                <View style={{backgroundColor:Colors.dark}} onPress={null}>
                    <Image source={{uri:'https://media-cdn.tripadvisor.com/media/photo-s/0a/26/63/4c/restaurant.jpg'}} style={{height:BANNER_HEIGHT,opacity:0.7}} resizeMode='cover' />
                    <View style={style.bannerContent}>
                        <Image source={{uri:partner.logo}} style={{width:Metrics.images.large,height:Metrics.images.large,marginVertical:Metrics.mdb}} resizeMode='contain' />
                        <Text light>{partner.name}</Text>
                        <Text light>{partner.address}</Text>
                    </View>
                </View>

                <ScrollView>
                    <View style={style.listHeader}>
                        <Text mute sm bold>Account</Text>
                    </View>
                    <TouchableOpacity style={style.listItem} onPress={null}>
                        <View style={style.listItemLeft}>
                            <Icon name='ios-contact' size={Metrics.icons.regular} color={Colors.dark} style={{marginRight:Metrics.msm}} />
                            <Text>Your Name</Text>
                        </View>
                        <View style={style.listItemLeft}>
                            <Text mute>Erick Walter</Text>
                            <Icon name='ios-arrow-forward' size={Metrics.icons.small} color={Colors.gray} style={{marginLeft:Metrics.mb}} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.listItem} onPress={null}>
                        <View style={style.listItemLeft}>
                            <Icon name='ios-lock' size={Metrics.icons.regular} color={Colors.dark} style={{marginRight:Metrics.msm}} />
                            <Text>Your Password</Text>
                        </View>
                        <View style={style.listItemLeft}>
                            <Text mute>*******</Text>
                            <Icon name='ios-arrow-forward' size={Metrics.icons.small} color={Colors.mute} style={{marginLeft:Metrics.mb}} />
                        </View>
                    </TouchableOpacity>

                    <View style={style.listHeader}>
                        <Text mute sm bold>About Chain Stores</Text>
                    </View>
                    <TouchableOpacity style={style.listItem} onPress={null}>
                        <View style={style.listItemLeft}>
                            <Icon name='ios-people' size={Metrics.icons.regular} color={Colors.dark} style={{marginRight:Metrics.msm}} />
                            <Text>Restaurant Name</Text>
                        </View>
                        <View style={style.listItemLeft}>
                            <Text mute>Kinggo BBQ</Text>
                            <Icon name='ios-arrow-forward' size={Metrics.icons.small} color={Colors.gray} style={{marginLeft:Metrics.mb}} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.listItem} onPress={null}>
                        <View style={style.listItemLeft}>
                            <Icon name='ios-call' size={Metrics.icons.regular} color={Colors.dark} style={{marginRight:Metrics.msm}} />
                            <Text>Phone</Text>
                        </View>
                        <View style={style.listItemLeft}>
                            <Text mute>090800090</Text>
                            <Icon name='ios-arrow-forward' size={Metrics.icons.small} color={Colors.mute} style={{marginLeft:Metrics.mb}} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.listItem} onPress={null}>
                        <View style={style.listItemLeft}>
                            <Icon name='ios-mail' size={Metrics.icons.regular} color={Colors.dark} style={{marginRight:Metrics.msm}} />
                            <Text>Email</Text>
                        </View>
                        <View style={style.listItemLeft}>
                            <Text mute>abc@gmail.com</Text>
                            <Icon name='ios-arrow-forward' size={Metrics.icons.small} color={Colors.mute} style={{marginLeft:Metrics.mb}} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.listItem} onPress={null}>
                        <View style={style.listItemLeft}>
                            <Icon name='md-pin' size={Metrics.icons.regular} color={Colors.dark} style={{marginRight:Metrics.msm}} />
                            <Text>Address</Text>
                        </View>
                        <View style={style.listItemLeft}>
                            <Text mute>09 Kingqute, US</Text>
                            <Icon name='ios-arrow-forward' size={Metrics.icons.small} color={Colors.mute} style={{marginLeft:Metrics.mb}} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.listItem} onPress={null}>
                        <View style={style.listItemLeft}>
                            <Icon name='ios-clock' size={Metrics.icons.regular} color={Colors.dark} style={{marginRight:Metrics.msm}} />
                            <Text>Opening Hour</Text>
                        </View>
                        <View style={style.listItemLeft}>
                            <Text mute>06:00 - 23:00</Text>
                            <Icon name='ios-arrow-forward' size={Metrics.icons.small} color={Colors.mute} style={{marginLeft:Metrics.mb}} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.listItem} onPress={null}>
                        <View style={style.listItemLeft}>
                            <Icon name='ios-information-circle' size={Metrics.icons.regular} color={Colors.dark} style={{marginRight:Metrics.msm}} />
                            <Text>Description</Text>
                        </View>
                        <View style={style.listItemLeft}>
                            <Text mute>There's nothing quite...</Text>
                            <Icon name='ios-arrow-forward' size={Metrics.icons.small} color={Colors.mute} style={{marginLeft:Metrics.mb}} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.listItem} onPress={null}>
                        <View style={style.listItemLeft}>
                            <Icon name='ios-star' size={Metrics.icons.regular} color={Colors.dark} style={{marginRight:Metrics.msm}} />
                            <Text>Feature</Text>
                        </View>
                        <View style={style.listItemLeft}>
                            <Text mute>Indoor, Bar</Text>
                            <Icon name='ios-arrow-forward' size={Metrics.icons.small} color={Colors.mute} style={{marginLeft:Metrics.mb}} />
                        </View>
                    </TouchableOpacity>
                </ScrollView>

            </View>
        )
    }
}

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
    listHeader: {
        padding:Metrics.pmb,
        backgroundColor:Colors.gray
    },
    listItem: {
        flexDirection:'row',
        justifyContent:'space-between',
        padding:Metrics.pmb,
        alignItems:'center',
        backgroundColor:Colors.light,
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderColor:Colors.gray
    },
    listImage: {
        width:20,
        height:20
        ,marginRight:Metrics.mb
    },
    listItemLeft: {
        flexDirection:'row',
        alignItems:'center'
    }
})

mapStateToProps = state => {
    return {
        
    }
}

mapDispatchToProps = dispatch => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FamiliesScreen)