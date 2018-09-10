import React from 'react'
import {View, StyleSheet, TextInput, TouchableOpacity, Image, ImageBackground, Dimensions} from 'react-native'
import {connect} from 'react-redux'
import Actions from '../Actions/Creators'
import Toast from 'react-native-root-toast'
import {Images, Metrics, Fonts, Colors, AppStyles} from '../Themes'
import {ScrollView, Button, Text, ModalPaymentOption} from '../Components'
import I18n from 'react-native-i18n'
import Icon from 'react-native-vector-icons/Ionicons'
import AppIntro from 'react-native-app-intro'

const {height, width} = Dimensions.get('window')

class PaymentScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showPaymentOption:false
        }
    }

    handlePay = () => {
        this.setState({showPaymentOption:true})
    }

    handleConfirmPayment = () => {
        this.setState({showPaymentOption:false},() => this.props.navigation.navigate('WaitingOrder'))
    }

    render() {

        const {navigate} = this.props.navigation
        const {index, showPaymentOption} = this.state

        return (
            <View style={{backgroundColor:Colors.dark,marginTop:-56}}>

                <ModalPaymentOption visible={showPaymentOption} onRequestClose={this.handleConfirmPayment} />

                <Image source={require('../Images/bg_welcome.jpg')} style={{width,height,opacity:0.6}} resizeMode='cover' />

                <View style={{position:'absolute',top:height / 4,left:0,width}}>

                    <View style={{flex:1,justifyContent:'center',alignItems:'center',marginBottom:Metrics.mdb}}>
                        <Text xl center bold light>TOTAL: $30.00</Text>
                    </View>

                    <View style={{justifyContent:'center',padding:Metrics.pdb}}>
                        <TouchableOpacity style={style.btn} onPress={this.handlePay}>
                            <Text light center sm>Order your receipt</Text>
                            <Text light center lg bold>$8.50</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={style.btn} onPress={this.handlePay}>
                            <Text light center sm>Order full receipt</Text>
                            <Text light center lg bold>$21.50</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    btn: {
        backgroundColor:Colors.branding,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:Metrics.msm,
        padding:Metrics.pb,
        borderRadius:Metrics.rb
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

export default connect(mapStateToProps, mapDispatchToProps)(PaymentScreen)