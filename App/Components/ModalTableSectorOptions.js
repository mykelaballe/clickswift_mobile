import React from 'react'
import {View, StyleSheet, TextInput, TouchableOpacity, TouchableHighlight, Image, Dimensions} from 'react-native'
import {connect} from 'react-redux'
import Actions from '../Actions/Creators'
import Toast from 'react-native-root-toast'
import {Images, Metrics, Fonts, Colors, AppStyles} from '../Themes'
import {ScrollView, Button, Text} from '../Components'
import I18n from 'react-native-i18n'
import Icon from 'react-native-vector-icons/Ionicons'
import Modal from 'react-native-modal'

const {height, width} = Dimensions.get('window')

class ModalTableSectorOptions extends React.Component {

    render() {

        const props = this.props
        const onSelect = this.props.onSelect
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
                        <View style={style.body}>
                            <TouchableHighlight onPress={onSelect} style={style.item} underlayColor={Colors.gray}>
                                <Text>Remove</Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={onSelect} style={style.item} underlayColor={Colors.gray}>
                                <Text>Add Table</Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={onSelect} style={style.item} underlayColor={Colors.gray}>
                                <Text>Edit Sector</Text>
                            </TouchableHighlight>
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
    item: {
        padding:Metrics.pmb,
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalTableSectorOptions)