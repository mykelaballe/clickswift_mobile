import React from 'react'
import {View, StyleSheet, TextInput, TouchableOpacity, Image, ImageBackground, Dimensions} from 'react-native'
import {connect} from 'react-redux'
import Actions from '../Actions/Creators'
import Toast from 'react-native-root-toast'
import {Images, Metrics, Fonts, Colors, AppStyles} from '../Themes'
import {ScrollView, Button, Text} from '../Components'
import I18n from 'react-native-i18n'
import Icon from 'react-native-vector-icons/Ionicons'
import AppIntro from 'react-native-app-intro'

const {height, width} = Dimensions.get('window')

class WelcomeScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            index:0
        }
    }

    onSlideChangeHandle = (index, total) => this.setState({index})

    render() {

        const {navigate} = this.props.navigation
        const {index} = this.state

        return (
            <View>
                <AppIntro showSkipButton={false} showDoneButton={false} showDots={false} onSlideChange={this.onSlideChangeHandle}>
                    <View style={[styles.slide,{ backgroundColor: '#fa931d' }]}>
                        <Image source={require('../Images/bg_welcome.jpg')} style={{width,height}} resizeMode='cover' />
                    </View>
                    <View style={[styles.slide,{ backgroundColor: '#fa931d' }]}>
                        <Image source={require('../Images/bg_welcome.jpg')} style={{width,height}} resizeMode='cover' />
                    </View>
                    <View style={[styles.slide,{ backgroundColor: '#fa931d' }]}>
                        <Image source={require('../Images/bg_welcome.jpg')} style={{width,height}} resizeMode='cover' />
                    </View>
                </AppIntro>

                <View style={{position:'absolute',bottom:70,width}}>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    
                        <Text lg center>Overview</Text>

                        <View style={{width:width/2}}>
                            <Text sm mute center>Making friends is easy as waving your hand back and forth</Text>
                        </View>

                        <View style={{flexDirection:'row',marginVertical:Metrics.mdb}}>
                            {[1,2,3].map(i => <View key={i} style={[styles.dot,{backgroundColor:(i-1) == index ? Colors.branding : Colors.mute}]}></View>)}
                        </View>

                    </View>

                    <View style={{justifyContent:'center'}}>
                        <View style={{marginVertical:Metrics.msm,paddingHorizontal:Metrics.pb}}>
                            <Button text='ORDER' type='branding' onPress={() => navigate('QRScan')} />
                        </View>
                        <View style={{flex:1,flexDirection:'row',paddingHorizontal:Metrics.pb}}>
                            <View style={{flex:1,marginRight:Metrics.mxs}}>
                                <Button text='MENU' type='branding' onPress={() => navigate('Menu')} />
                            </View>
                            <View style={{flex:1,marginLeft:Metrics.mxs}}>
                                <Button text='OUR PARTNERS' type='branding' onPress={() => navigate('Partners')} />
                            </View>
                        </View>
                    </View>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
        //padding: 15,
      },
      text: {
        color: Colors.light,
        fontSize: 30,
        fontWeight: 'bold',
      },
      dot: {
        width:10,
        height:10,
        borderRadius:10,
        marginHorizontal:Metrics.mxs
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

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen)