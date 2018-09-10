import React from 'react'
import {View, StyleSheet, TextInput, TouchableOpacity, InteractionManager, Image, ImageBackground, Dimensions} from 'react-native'
import {connect} from 'react-redux'
import Actions from '../Actions/Creators'
import Toast from 'react-native-root-toast'
import {Images, Metrics, Fonts, Colors, AppStyles} from '../Themes'
import {ScrollView, FlatList, Button, Text, ModalOrderComment} from '../Components'
import I18n from 'react-native-i18n'
import Icon from 'react-native-vector-icons/Ionicons'

class OrderGroupScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            customers:[
                {id:1,name:'John Doe',orders:['Water','Coffee','Fanta']},
                {id:2,name:'Jane Smith',orders:['Milk','Coffee','Soda']}
            ],
            showComments:false,
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

    renderItem = ({item}) => {
        return (
            <View style={style.listItem}>
                <View style={style.listHeader}>
                    <Text lg>{item.name}</Text>
                </View>

                <View>
                    <FlatList
                        data={item.orders}
                        renderItem={this.renderOrders}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </View>
        )
    }

    renderOrders = ({item}) => {
        return (
            <View style={style.subListItem}>
                <TouchableOpacity onPress={() => this.setState({showComments:true})}>
                    <Text>{item}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() {

        const {customers, showComments, loading, error} = this.state

        return (
            <ScrollView style={AppStyles.screen}>

                <ModalOrderComment visible={showComments} onRequestClose={() => this.setState({showComments:false})} />

                <FlatList
                    data={customers}
                    renderItem={this.renderItem}
                    loading={loading}
                    error={error}
                />
            </ScrollView>
        )
    }
}

const style = StyleSheet.create({
    listItem: {
        ...AppStyles.list
    },
    listHeader: {
        paddingVertical:Metrics.pb,
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderColor:Colors.gray
    },
    subListItem: {
        padding:Metrics.pb,
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderColor:Colors.gray
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

export default connect(mapStateToProps, mapDispatchToProps)(OrderGroupScreen)