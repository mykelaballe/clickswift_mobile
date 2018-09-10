import React from 'react'
import {View, StyleSheet, TextInput, TouchableOpacity, Image, Dimensions} from 'react-native'
import {connect} from 'react-redux'
import Actions from '../Actions/Creators'
import Toast from 'react-native-root-toast'
import {Images, Metrics, Fonts, Colors, AppStyles} from '../Themes'
import {ScrollView, FlatList, Button, Text} from '../Components'
import I18n from 'react-native-i18n'
import Icon from 'react-native-vector-icons/Ionicons'
import Modal from 'react-native-modal'

const {height, width} = Dimensions.get('window')

class ModalAddCommentOption extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            items:[
                {id:1,name:'Milk',selected:false},
                {id:2,name:'Sugar',selected:false},
                {id:3,name:'Honey',selected:false},
            ]
        }
    }

    toggleItem = index => {
        let items = this.state.items.slice()

        items[index].selected = !items[index].selected

        this.setState({
            items
        })
    }

    renderItem = ({item, index}) => {

        let icon = item.selected ? 'ios-checkbox-outline' : 'ios-square-outline'

        return (
            <TouchableOpacity style={style.item} onPress={this.toggleItem.bind(this,index)}>
                <Icon name={icon} size={Metrics.icons.regular} color={Colors.branding} style={{marginRight:Metrics.mb}} />
                <Text>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    render() {

        const {items} = this.state

        const props = this.props
        const onClose = props.onRequestClose

        let selectedItems = []
        for(let i in items) {
            if(items[i].selected) selectedItems.push(items[i].name)
        }

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
                            <Text light center bold>Drink Option</Text>
                        </View>
                        <View style={style.body}>
                            <View style={{padding:Metrics.pdb}}>

                                <View style={{paddingVertical:Metrics.pdb,paddingHorizontal:Metrics.pb,borderWidth:StyleSheet.hairlineWidth,borderColor:Colors.mute}}>
                                    <Text>{selectedItems.join(', ')}</Text>
                                </View>
                                
                                <View style={{marginVertical:Metrics.msm}}>
                                    <FlatList
                                        data={items}
                                        renderItem={this.renderItem}
                                    />
                                </View>
                                
                            </View>

                            <Button text='Save' type='branding' onPress={props.onRequestClose} />
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
    },
    item: {
        flexDirection:'row',
        paddingVertical:Metrics.pb
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalAddCommentOption)