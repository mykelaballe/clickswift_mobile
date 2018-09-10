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

class ModalProductDetail extends React.Component {

    render() {

        const props = this.props
        const onClose = props.onRequestClose
        const p = props.product

        if(p === null) return null

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
                            <Text light center bold>DETAIL</Text>
                        </View>
                        <Image source={{uri:p.image}} style={{width:width * 0.75,height:120}} resizeMode='cover' />
                        <View style={style.body}>
                            <View style={{padding:Metrics.pb}}>
                                <Text lg center>{p.name}</Text>

                                <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:Metrics.mb}}>
                                    <Text sm mute>Weight: {p.weight}</Text>
                                    <Text sm mute>Category: {p.category}</Text>
                                </View>

                                <Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </Text>

                                <View style={{flexDirection:'row',justifyContent:'center'}}>
                                    <View>
                                        <Image source={require('../Images/allergens/1.png')} style={{width:50,height:50,marginHorizontal:Metrics.mxs}} resizeMode='contain' />
                                        <View style={{position:'absolute',bottom:0,right:0,backgroundColor:Colors.gray,width:20,height:20,borderRadius:20}}>
                                            <Text sm center>10</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <Image source={require('../Images/allergens/2.png')} style={{width:50,height:50,marginHorizontal:Metrics.mxs}} resizeMode='contain' />
                                        <View style={{position:'absolute',bottom:0,right:0,backgroundColor:Colors.gray,width:20,height:20,borderRadius:20}}>
                                            <Text sm center>10</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <Image source={require('../Images/allergens/3.png')} style={{width:50,height:50,marginHorizontal:Metrics.mxs}} resizeMode='contain' />
                                        <View style={{position:'absolute',bottom:0,right:0,backgroundColor:Colors.gray,width:20,height:20,borderRadius:20}}>
                                            <Text sm center>10</Text>
                                        </View>
                                    </View>
                                </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalProductDetail)