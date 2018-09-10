import React from 'react'
import {View, StyleSheet, TextInput, TouchableOpacity, Image, ImageBackground, Dimensions} from 'react-native'
import {connect} from 'react-redux'
import Actions from '../Actions/Creators'
import Toast from 'react-native-root-toast'
import {Images, Metrics, Fonts, Colors, AppStyles} from '../Themes'
import {Globals, Storage} from '../Utils'
import {ScrollView, Button, Text} from '../Components'
import I18n from 'react-native-i18n'
import Config from 'react-native-config'
import Icon from 'react-native-vector-icons/Ionicons'

const {height, width} = Dimensions.get('window')

class LoginScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            processing: false,
        }
    }

    handleLogin = async () => {
        let user = {
            id:1,
            username:'Eric'
        }
        await Storage.doSave(Globals.db.user,{data: user})
        this.setState({processing:false})
        this.props.login()
        this.props.setUser(user)
    }

    render() {

        const {username, password, processing} = this.state

        return (
            <ScrollView style={style.container}>

                <ImageBackground source={Images.bg} imageStyle={{resizeMode:'stretch'}} style={{width, height, padding:Metrics.ptb}}>

                <View style={style.imgContainer}>
                    <Image source={Images.logo} style={style.img} resizeMode='contain' />
                </View>

                <View style={style.inputContainer}>
                    <TextInput
                        ref='username'
                        style={AppStyles.input}
                        onChangeText={username => this.setState({username})}
                        value={username}
                        placeholder='Username'
                        returnKeyType='next'
                        onSubmitEditing={() => this.refs.password.focus()}
                        keyboardType='default'
                        autoCorrect={false}
                        underlineColorAndroid='transparent'
                    />
                </View>
                
                <View style={style.inputContainer}>
                    <TextInput
                        ref='password'
                        style={AppStyles.input}
                        onChangeText={password => this.setState({password})}
                        value={password}
                        placeholder='Password'
                        returnKeyType='go'
                        onSubmitEditing={this.handleLogin}
                        keyboardType='default'
                        autoCorrect={false}
                        underlineColorAndroid='transparent'
                        secureTextEntry
                    />
                </View>

                <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:Metrics.mb}}>
                    <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
                        <Icon name='ios-square-outline' size={Metrics.icons.small} color={Colors.mute} style={{marginRight:Metrics.msm}} />
                        <Text sm>Waiter</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
                        <Icon name='ios-square-outline' size={Metrics.icons.small} color={Colors.mute} style={{marginRight:Metrics.msm}} />
                        <Text sm>Shima Master</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
                        <Icon name='ios-square-outline' size={Metrics.icons.small} color={Colors.mute} style={{marginRight:Metrics.msm}} />
                        <Text sm>Admin</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={style.btnContainer}>
                    <Button text='LOGIN' onPress={this.handleLogin} type='branding' processing={processing} style={{marginVertical:Metrics.mxs}} />
                    <Button text='CONNECT WITH FACEBOOK' type='primary' processing={processing} style={{marginVertical:Metrics.mxs}} />
                </View>

                <View style={{marginTop:Metrics.mb}}>
                    <TouchableOpacity style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                        <View style={{marginRight:Metrics.msm}}>
                            <Text sm> Don't have an account?</Text>
                        </View>
                        <Text sm primary bold>Sign Up</Text>
                    </TouchableOpacity>

                    <View style={{flexDirection:'row',justifyContent:'center',marginVertical:Metrics.mb}}>
                        <Icon name='logo-twitter' size={Metrics.icons.regular} color={Colors.success} style={{marginHorizontal:Metrics.mb}} />
                        <Icon name='logo-linkedin' size={Metrics.icons.regular} color={Colors.success} style={{marginHorizontal:Metrics.mb}} />
                        <Icon name='logo-googleplus' size={Metrics.icons.regular} color={Colors.success} style={{marginHorizontal:Metrics.mb}} />
                        <Icon name='logo-facebook' size={Metrics.icons.regular} color={Colors.success} style={{marginHorizontal:Metrics.mb}} />
                        <Icon name='logo-instagram' size={Metrics.icons.regular} color={Colors.success} style={{marginHorizontal:Metrics.mb}} />
                    </View>
                </View>

            </ImageBackground>

            </ScrollView>
        )
    }
}

const style = StyleSheet.create({
    container: {
        //padding:Metrics.ptb,
        width,
        height,
    },
    inputContainer: {
        marginVertical:Metrics.msm,
      },
    btnContainer: {
        marginVertical:Metrics.mdb
    },
    imgContainer: {
        paddingVertical:Metrics.psm,
        marginBottom:Metrics.mb,
        justifyContent:'center',
        alignItems:'center',
    },
    img: {
        width:width / 4,
        height:height / 5,
    },
})

mapStateToProps = state => {
    return {
        
    }
}

mapDispatchToProps = dispatch => {
    return {
        login: () => dispatch(Actions.login()),
        setUser: (user) => dispatch(Actions.setUser(user)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)