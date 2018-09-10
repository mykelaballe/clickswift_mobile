import React from 'react'
import {View, StyleSheet, TextInput, TouchableOpacity, InteractionManager, Image, ImageBackground, Dimensions} from 'react-native'
import {connect} from 'react-redux'
import Actions from '../Actions/Creators'
import Toast from 'react-native-root-toast'
import {Images, Metrics, Fonts, Colors, AppStyles} from '../Themes'
import {ScrollView, FlatList, Button, Text} from '../Components'
import I18n from 'react-native-i18n'
import Icon from 'react-native-vector-icons/Ionicons'

class WaitingOrderScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            orders:[
                {id:1,item:'Lorem Ipsum 1',status:'New',selected:false},
                {id:2,item:'Lorem Ipsum2',status:'Waiting',selected:false},
                {id:3,item:'Lorem Ipsum 3',status:'Delivered',selected:false},
            ],
            loading:true,
            error:false
        }
    }

    componentDidMount = () => InteractionManager.runAfterInteractions(() => this.getData())

    getData = async () => {
        let error = false

        this.setState({
            loading:false,
            error
        })
    }

    toggleItem = index => {
        let orders = this.state.orders.slice()

        orders[index].selected = !orders[index].selected

        this.setState({
            orders
        })
    }

    renderItem = ({item, index}) => {

        let icon = item.selected ? 'ios-checkbox-outline' : 'ios-square-outline'

        return (
            <TouchableOpacity style={style.listItem} onPress={this.toggleItem.bind(this,index)}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Icon name={icon} size={Metrics.icons.regular} color={Colors.branding} style={{marginRight:Metrics.mb}} />
                    <View>
                        <Text lg bold>{item.item}</Text>
                        <Text>Status: {item.status}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    render() {

        const {orders, loading, error} = this.state

        return (
            <ScrollView style={AppStyles.screen}>

                <FlatList
                    data={orders}
                    renderItem={this.renderItem}
                    loading={loading}
                    error={error}
                />

                <View style={{marginVertical:Metrics.mb}}>
                    <Button text='Accept' type='branding' onPress={null} mv />
                    <Button text='Close Bill' type='dark' onPress={null} mv />
                    <Button text='Decline Order' type='danger' onPress={null} mv />
                </View>

            </ScrollView>
        )
    }
}

const style = StyleSheet.create({
    listItem: {
        ...AppStyles.list,
        flexDirection:'row',
        justifyContent:'flex-start'
    },
})

mapStateToProps = state => {
    return {
        
    }
}

mapDispatchToProps = dispatch => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WaitingOrderScreen)