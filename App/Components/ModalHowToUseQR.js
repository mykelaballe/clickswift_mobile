import React from 'react'
import {View, StyleSheet, TextInput, TouchableOpacity, Image, Dimensions} from 'react-native'
import {connect} from 'react-redux'
import Actions from '../Actions/Creators'
import Toast from 'react-native-root-toast'
import {Images, Metrics, Fonts, Colors, AppStyles} from '../Themes'
import {ScrollView, Button, Text} from '../Components'
import I18n from 'react-native-i18n'
import Icon from 'react-native-vector-icons/Ionicons'
import Modal from 'react-native-modal'

const {height, width} = Dimensions.get('window')

class ModalHowToUseQR extends React.Component {

    render() {

        const props = this.props
        const onClose = props.onRequestClose

        return (
            <Modal
                isVisible={props.visible}
                onBackButtonPress={onClose}
                onBackdropPress={onClose}
                onModalHide={onClose}
                animationIn='zoomInDown'
                animationOut='zoomOutUp'
            >   
                <View style={style.modal}>
                    <View style={style.container}>
                        <View style={style.header}>
                            <Text light center bold>HOW TO USE QR-CODE?</Text>
                        </View>
                        <View style={style.body}>
                            <View style={{padding:Metrics.pdb}}>
                                <View style={{marginBottom:Metrics.mdb,justifyContent:'center',alignItems:'center'}}>
                                    <Image source={require('../Images/use-qr.png')} style={{width:100,height:100}} resizeMode='contain' />
                                </View>
                                <Text sm mute center>
                                    The reason they are more useful than a standarn barcode is that they can store (and digitally present) much more data, including url links, geo coordinates and text.
                                </Text>
                            </View>

                            <Button text='Close' type='branding' onPress={props.onRequestClose} />
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }
}

const style = StyleSheet.create({
    modal: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    container: {
        width:width * 0.75,
        backgroundColor:Colors.light,
        borderRadius:Metrics.rb
    },
    header: {
        backgroundColor:Colors.branding,
        padding:Metrics.pb,
        justifyContent:'center',
        alignItems:'center',
        borderTopLeftRadius:Metrics.rb,
        borderTopRightRadius:Metrics.rb
    },
    body: {
        padding:Metrics.pb
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalHowToUseQR)