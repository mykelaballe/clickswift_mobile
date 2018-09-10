import React from 'react'
import {View, StyleSheet, TextInput, TouchableOpacity, Image, ImageBackground, Dimensions} from 'react-native'
import {connect} from 'react-redux'
import Actions from '../../Actions/Creators'
import Toast from 'react-native-root-toast'
import {Images, Metrics, Fonts, Colors, AppStyles} from '../../Themes'
import {ScrollView, Button, Text, Avatar} from '../../Components'
import I18n from 'react-native-i18n'
import Icon from 'react-native-vector-icons/Ionicons'

const {height, width} = Dimensions.get('window')

class UserMenuScreen extends React.Component {

    /*static navigationOptions = ({navigation}) => ({
        headerRight: (
            <View style={{flexDirection:''}}>

            </View>
        )
    })*/

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {

        const {navigate} = this.props.navigation

        return (
            <View style={{flex:1,marginTop:-56}}>
                <ScrollView>
                    <ImageBackground source={require('../../Images/user_profile_bg.jpg')} imageStyle={{resizeMode:'stretch'}} style={{padding:Metrics.ptb}}>
                        <View style={{marginVertical:Metrics.mb}}>
                            <Avatar source={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXS-fBq0ORyaknRXcFnoUyJVtJW8fs_goDk_WOGppy-bm-zjR2'} size={Metrics.images.xlarge} />
                        </View>
                        <Text bold light h3>Erik Walters</Text>
                        <Text sm light>6226 Zander Knolls Suite</Text>
                    </ImageBackground>

                    <View style={{padding:Metrics.pb,backgroundColor:Colors.gray}}>
                        <TouchableOpacity style={style.listItem} onPress={() => navigate('Families')}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Image source={require('../../Images/allergens/1.png')} style={style.icon} />
                                <Text>Families</Text>
                            </View>
                            <Icon name='ios-arrow-forward' size={Metrics.icons.small} color={Colors.mute} />
                        </TouchableOpacity>
                        <TouchableOpacity style={style.listItem} onPress={() => navigate('ColorText')}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Image source={require('../../Images/allergens/2.png')} style={style.icon} />
                                <Text>Color and Text</Text>
                            </View>
                            <Icon name='ios-arrow-forward' size={Metrics.icons.small} color={Colors.mute} />
                        </TouchableOpacity>
                        <TouchableOpacity style={style.listItem} onPress={() => navigate('TableSectors')}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Image source={require('../../Images/allergens/3.png')} style={style.icon} />
                                <Text>Segment and Table Setup</Text>
                            </View>
                            <Icon name='ios-arrow-forward' size={Metrics.icons.small} color={Colors.mute} />
                        </TouchableOpacity>
                        <TouchableOpacity style={style.listItem} onPress={() => navigate('Language')}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Image source={require('../../Images/allergens/4.png')} style={style.icon} />
                                <Text>Menu Language</Text>
                            </View>
                            <Icon name='ios-arrow-forward' size={Metrics.icons.small} color={Colors.mute} />
                        </TouchableOpacity>
                        <TouchableOpacity style={style.listItem} onPress={() => navigate('MenuSetting')}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Image source={require('../../Images/allergens/5.png')} style={style.icon} />
                                <Text>Menu Setting</Text>
                            </View>
                            <Icon name='ios-arrow-forward' size={Metrics.icons.small} color={Colors.mute} />
                        </TouchableOpacity>
                        <TouchableOpacity style={style.listItem} onPress={() => navigate('Allergens')}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Image source={require('../../Images/allergens/8.png')} style={style.icon} />
                                <Text>Allergens</Text>
                            </View>
                            <Icon name='ios-arrow-forward' size={Metrics.icons.small} color={Colors.mute} />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const style = StyleSheet.create({
    listItem: {
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:Colors.light,
        alignItems:'center',
        padding:Metrics.pmb,
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderColor:Colors.gray
    },
    icon: {
        width:40,
        height:40,
        marginRight:Metrics.mb
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

export default connect(mapStateToProps, mapDispatchToProps)(UserMenuScreen)