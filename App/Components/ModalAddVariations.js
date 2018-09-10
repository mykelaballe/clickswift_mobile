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

class ModalAddVariations extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            variations: '',
            price: ''
        }
    }

    render() {

        const {variations, price} = this.state

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
                            <Text light center bold>Add Variations</Text>
                        </View>
                        <View style={style.body}>
                            <View style={{padding:Metrics.pdb}}>
                                
                                <View style={{marginVertical:Metrics.msm}}>
                                    <Text>Variations</Text>
                                    <TextInput
                                        style={style.input}
                                        onChangeText={variations => this.setState({variations})}
                                        value={variations}
                                        keyboardType='default'
                                        autoCorrect={false}
                                        underlineColorAndroid='transparent'
                                    />
                                </View>

                                <View style={{marginVertical:Metrics.msm}}>
                                    <Text>Price</Text>
                                    <TextInput
                                        style={style.input}
                                        onChangeText={price => this.setState({price})}
                                        value={price}
                                        keyboardType='default'
                                        autoCorrect={false}
                                        underlineColorAndroid='transparent'
                                    />
                                </View>
                                
                            </View>

                            <Button text='Save Item' type='branding' onPress={props.onRequestClose} />
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
    },
    input: {
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalAddVariations)