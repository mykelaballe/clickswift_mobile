import React from 'react'
import {View, StyleSheet, TextInput, TouchableOpacity, InteractionManager, Image, ImageBackground, Dimensions} from 'react-native'
import {connect} from 'react-redux'
import Actions from '../../Actions/Creators'
import Toast from 'react-native-root-toast'
import {Images, Metrics, Fonts, Colors, AppStyles} from '../../Themes'
import {ScrollView, FlatList, Button, Text, ModalTableOptions} from '../../Components'
import I18n from 'react-native-i18n'
import Icon from 'react-native-vector-icons/Ionicons'

const {height, width} = Dimensions.get('window')
const ITEM_WIDTH = (width / 3) - (Metrics.pmb * 2)

class TableSectorScreen extends React.Component {

    static navigationOptions = ({navigation}) => ({
        title:`Sector ${navigation.state.params.Sector.number}`
    })

    constructor(props) {
        super(props)
        this.state = {
            tables:[],
            showOptions:false,
            loading:true,
            error:false
        }
    }

    componentDidMount = () => InteractionManager.runAfterInteractions(() => this.getData())

    getData = async () => {
        let tables = [], error = false

        try {
            tables = [
                {id:1,number:1},
                {id:2,number:2},
                {id:3,number:3},
                {id:4,number:4},
                {id:5,number:5},
                {id:6,is_button:true}
            ]
        }
        catch(err) {
            error = true
        }
        
        this.setState({
            tables,
            loading:false,
            error
        })
    }

    handleShowOptions = item => {
        this.setState({showOptions:true})
    }

    handleOnSelectOption = () => {
        this.setState({showOptions:false})
    }

    handleViewTable = item => {

    }

    handleAddTable = () => {
        let tables = this.state.tables.slice()
        let id = tables.length

        tables.splice(id - 1,0,{
            id,
            number:id 
        })

        this.setState({
            tables
        })
    }

    renderItem = ({item}) => {

        if(item.is_button) {
            return (
                <TouchableOpacity style={style.item} onPress={this.handleAddTable}>
                    <Text bold success h3 center>+</Text>
                    <Text bold success lg center>New</Text>
                </TouchableOpacity>
            )
        }

        return (
            <TouchableOpacity style={style.item} onPress={this.handleViewTable.bind(this,item)}>
                <Text mute center lg>Table</Text>
                <Text bold h3 branding center>{item.number}</Text>
                <TouchableOpacity style={style.editBtn} onPress={this.handleShowOptions.bind(this,item)}>
                    <Icon name='ios-create' size={Metrics.icons.small} color={Colors.light} />
                </TouchableOpacity>
            </TouchableOpacity>
        )
    }

    render() {

        const {tables, showOptions, loading, error} = this.state

        return (
            <ScrollView style={AppStyles.screen}>

                <ModalTableOptions visible={showOptions} onSelect={this.handleOnSelectOption} onRequestClose={() => this.setState({showOptions:false})} />

                <FlatList
                    data={tables}
                    renderItem={this.renderItem}
                    numColumns={3}
                    loading={loading}
                    error={error}
                />
            </ScrollView>
        )
    }
}

const style = StyleSheet.create({
    item: {
        width:ITEM_WIDTH,
        height:ITEM_WIDTH,
        backgroundColor:Colors.light,
        borderRadius:ITEM_WIDTH,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:StyleSheet.hairlineWidth,
        borderColor:Colors.branding,
        margin:Metrics.mb
    },
    editBtn: {
        position:'absolute',
        bottom:0,
        right:0,
        width:30,
        height:30,
        borderRadius:30,
        backgroundColor:Colors.branding,
        alignItems:'center',
        justifyContent:'center'
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

export default connect(mapStateToProps, mapDispatchToProps)(TableSectorScreen)