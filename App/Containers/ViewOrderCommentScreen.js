import React from 'react'
import {View, StyleSheet, TextInput, TouchableOpacity, InteractionManager, Image, ImageBackground, Dimensions} from 'react-native'
import {connect} from 'react-redux'
import Actions from '../Actions/Creators'
import Toast from 'react-native-root-toast'
import {Images, Metrics, Fonts, Colors, AppStyles} from '../Themes'
import {ScrollView, FlatList, Button, Text, ModalAddCommentOption} from '../Components'
import I18n from 'react-native-i18n'
import Icon from 'react-native-vector-icons/Ionicons'

class ViewOrderCommentScreen extends React.Component {

    static navigationOptions = ({navigation}) => ({
        title:navigation.state.params.Comment.number
    })

    constructor(props) {
        super(props)
        this.state = {
            name:'Drink',
            items:['Coffee','Sugar','Honey'],
            showAddOption:false,
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
                <Text lg>{item}</Text>
                <TouchableOpacity onPress={null}>
                    <Icon name='ios-create' size={Metrics.icons.medium} color={Colors.branding} />
                </TouchableOpacity>
            </View>
        )
    }

    render() {

        const {name, items, showAddOption, loading, error} = this.state

        return (
            <ScrollView style={AppStyles.screen}>

                <ModalAddCommentOption visible={showAddOption} onRequestClose={() => this.setState({showAddOption:false})} />

                <View style={{marginVertical:Metrics.mb}}>
                    <Text lg bold>{name}</Text>
                </View>

                <View style={{marginVertical:Metrics.mb}}>
                    <Button text='Add a list of notes' type='branding' onPress={() => this.setState({showAddOption:true})} />
                </View>

                <FlatList
                    data={items}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index.toString()}
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
        justifyContent:'space-between'
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

export default connect(mapStateToProps, mapDispatchToProps)(ViewOrderCommentScreen)