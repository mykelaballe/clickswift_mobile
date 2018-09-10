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

class ModalProductCall extends React.Component {

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
                            <Text light center bold>Call Shisha Master?</Text>
                        </View>
                        <View style={style.body}>
                            <View style={{padding:Metrics.pdb}}>
                                <View style={{marginBottom:Metrics.mdb,justifyContent:'center',alignItems:'center'}}>
                                    <Icon name='ios-clock' size={Metrics.icons.medium} color={Colors.mute} />
                                    <Text h3 mute center>05:30</Text>
                                </View>
                            </View>

                            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                                <Button text='YES' type='branding' onPress={props.onRequestClose} />
                                <Button text='NO' type='dark' onPress={props.onRequestClose} />
                            </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalProductCall)