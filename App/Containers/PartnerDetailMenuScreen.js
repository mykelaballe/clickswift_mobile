import React from 'react'
import {View, StyleSheet, TextInput, TouchableOpacity, InteractionManager, Image, ImageBackground, Dimensions} from 'react-native'
import {connect} from 'react-redux'
import Actions from '../Actions/Creators'
import Toast from 'react-native-root-toast'
import {Images, Metrics, Fonts, Colors, AppStyles} from '../Themes'
import {ScrollView, FlatList, Button, Text} from '../Components'
import I18n from 'react-native-i18n'
import Icon from 'react-native-vector-icons/Ionicons'

const {height, width} = Dimensions.get('window')
const ITEM_WIDTH = (width / 2) - (Metrics.mxs * 2)
const ITEM_HEIGHT = 200

class PartnerDetailMenuScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            items:[
                {
                    id:1,
                    category:'Dinner',
                    name:'Burger',
                    description:'blah blah blah',
                    price:'$10',
                    weight:'1.5 Kg',
                    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT034S6tIiSPoejnl537oTuYB--dw6t6DsKbGzefuGeRCX_deAulg',
                    selected:false
                },
                {
                    id:2,
                    category:'Dinner',
                    name:'Chicken Wings',
                    description:'blah blah blah',
                    price:'$10',
                    weight:'1.5 Kg',
                    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkqH5ryb7aM5KavnlSsJanyTXFi0M3WM00Hz6Bol4NmGsyQcdY',
                    selected:false
                },
                {
                    id:3,
                    category:'Dinner',
                    name:'Fries',
                    description:'blah blah blah',
                    price:'$10',
                    weight:'1.5 Kg',
                    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsWtK7f1cDieuEhOPop0YQ0I8RvjqHM5PRs1v-IrmfPSviU6OfLQ',
                    selected:false
                },
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
            <View style={{width:ITEM_WIDTH,height:ITEM_HEIGHT,backgroundColor:Colors.light,margin:Metrics.mxs,elevation:2}}>
                <Image source={{uri:item.image}} style={{width:ITEM_WIDTH,height:ITEM_HEIGHT * 0.75}} resizeMode='cover' />
                <View style={{padding:Metrics.pb,alignItems:'center',alignItems:'center'}}>
                    <Text>{item.name}</Text>
                </View>
            </View>
        )
    }

    render() {

        const {items, loading, error} = this.state

        return (
            <ScrollView>
                <FlatList
                    data={items}
                    renderItem={this.renderItem}
                    numColumns={2}
                    loading={loading}
                    error={error}
                />
            </ScrollView>
        )
    }
}

mapStateToProps = state => {
    return {
        
    }
}

mapDispatchToProps = dispatch => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PartnerDetailMenuScreen)