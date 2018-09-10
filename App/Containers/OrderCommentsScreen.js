import React from 'react'
import {View, StyleSheet, TextInput, TouchableOpacity, InteractionManager, Image, ImageBackground, Dimensions} from 'react-native'
import {connect} from 'react-redux'
import Actions from '../Actions/Creators'
import Toast from 'react-native-root-toast'
import {Images, Metrics, Fonts, Colors, AppStyles} from '../Themes'
import {ScrollView, FlatList, Button, Text} from '../Components'
import I18n from 'react-native-i18n'
import Icon from 'react-native-vector-icons/Ionicons'

class OrderCommentsScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            customers:[
                {id:1,number:'#001',date:'2018-09-01'},
                {id:2,number:'#002',date:'2018-09-01'},
                {id:3,number:'#003',date:'2018-09-01'},
                {id:4,number:'#004',date:'2018-09-01'},
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

    renderItem = ({item}) => {
        return (
            <TouchableOpacity style={style.listItem} onPress={() => this.props.navigation.navigate('ViewOrderComment',{Comment:item})}>
                <Icon name='ios-document' size={Metrics.icons.lgmedium} color={Colors.mute} style={{marginRight:Metrics.mb}} />
                <View>
                    <Text lg>{item.number}</Text>
                    <Text sm mute>{item.date}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {

        const {customers, loading, error} = this.state

        return (
            <ScrollView style={AppStyles.screen}>

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

export default connect(mapStateToProps, mapDispatchToProps)(OrderCommentsScreen)