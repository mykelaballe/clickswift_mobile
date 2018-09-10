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

class ColorTextScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {

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
                        <TouchableOpacity style={style.listItem} onPress={null}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Text>Color</Text>
                                <View style={[style.colorPalette,{backgroundColor:Colors.branding}]}></View>
                            </View>
                            <Icon name='ios-create' size={Metrics.icons.small} color={Colors.info} />
                        </TouchableOpacity>
                        <TouchableOpacity style={style.listItem} onPress={null}>
                            <Text>Font Family: Roboto</Text>
                            <Icon name='ios-create' size={Metrics.icons.small} color={Colors.info} />
                        </TouchableOpacity>
                        <TouchableOpacity style={style.listItem} onPress={null}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Text>Text Field Color</Text>
                                <View style={[style.colorPalette,{backgroundColor:Colors.dark}]}></View>
                                <View style={[style.colorPalette,{backgroundColor:Colors.light}]}></View>
                            </View>
                            <Icon name='ios-create' size={Metrics.icons.small} color={Colors.info} />
                        </TouchableOpacity>
                        <TouchableOpacity style={style.listItem} onPress={null}>
                            <Text>Font Size: 48px</Text>
                            <Icon name='ios-create' size={Metrics.icons.small} color={Colors.info} />
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
    colorPalette: {
        width:20,
        height:20,
        borderRadius:20,
        marginLeft:Metrics.mb,
        borderWidth:StyleSheet.hairlineWidth,
        borderColor:Colors.mute
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

export default connect(mapStateToProps, mapDispatchToProps)(ColorTextScreen)