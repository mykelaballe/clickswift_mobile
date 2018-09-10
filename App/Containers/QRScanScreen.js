import React from 'react'
import {View, StyleSheet, TextInput, TouchableOpacity, Image, ImageBackground, Dimensions} from 'react-native'
import {connect} from 'react-redux'
import Actions from '../Actions/Creators'
import Toast from 'react-native-root-toast'
import {Images, Metrics, Fonts, Colors, AppStyles} from '../Themes'
import {ScrollView, Button, Text, ModalWhatIsQR, ModalHowToUseQR} from '../Components'
import I18n from 'react-native-i18n'
import Icon from 'react-native-vector-icons/Ionicons'
import Camera from 'react-native-camera'

const {height, width} = Dimensions.get('window')

class QRScanScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            cameraType: Camera.constants.Type.back,
            showWhatIsQR:false,
            showHowToUseQR:false
        }
    }

    handleScan = e => {
        let code = e.data
        alert(code)
    }

    render() {

        const {navigate} = this.props.navigation
        const {cameraType, showWhatIsQR, showHowToUseQR} = this.state
        
        return (
            <ScrollView style={style.container}>

                <ModalWhatIsQR visible={showWhatIsQR} onRequestClose={() => this.setState({showWhatIsQR:false})} />
                <ModalHowToUseQR visible={showHowToUseQR} onRequestClose={() => this.setState({showHowToUseQR:false})} />

                <Camera style={style.camera} type={cameraType} onBarCodeRead={this.handleScan}>
                    <View style={style.rectangle} />

                    <TouchableOpacity style={style.btnFlash} onPress={null}>
                        <Icon name='ios-flash' size={Metrics.icons.lgmedium} color={Colors.light} />
                    </TouchableOpacity>          
                </Camera>

                <View style={style.btnContainer}>
                    <Button text='What is a Qr-Code?' type='branding' onPress={() => this.setState({showWhatIsQR:true})} mv />
                    <Button text='Do you know how to order?' type='branding' onPress={() => this.setState({showHowToUseQR:true})} mv />
                </View>

            </ScrollView>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex:1
    },
    camera: {
        flex:1,
		alignItems:'center',
		justifyContent:'center',
		backgroundColor:'transparent',
		height:height / 2,
		width,
    },
	rectangle: {
        width:200,
        height:200,
    },
    corner: {
        position:'absolute',
        width:50,
        height:50,
        borderColor:Colors.light,
        padding:Metrics.psm,
        borderTopWidth:StyleSheet.hairlineWidth,
        borderLeftWidth:StyleSheet.hairlineWidth,
    },
    btnContainer: {
        padding:Metrics.pdb
    },
    btnFlash: {
        width:width / 4,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:Metrics.rb,
        marginVertical:Metrics.mb,
        backgroundColor:'#ffbc14'
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

export default connect(mapStateToProps, mapDispatchToProps)(QRScanScreen)