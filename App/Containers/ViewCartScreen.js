import React from 'react'
import {View, StyleSheet, TextInput, TouchableOpacity, InteractionManager, Image, ImageBackground, Dimensions, Picker} from 'react-native'
import {connect} from 'react-redux'
import Actions from '../Actions/Creators'
import Toast from 'react-native-root-toast'
import {Images, Metrics, Fonts, Colors, AppStyles} from '../Themes'
import {Func} from '../Utils'
import {ScrollView, FlatList, Button, Text, ModalProductDetail, ModalProductCall, ModalMenuOption, ModalWaiterSelect} from '../Components'
import I18n from 'react-native-i18n'
import Icon from 'react-native-vector-icons/Ionicons'
import ActionButton from 'react-native-action-button'

const {height, width} = Dimensions.get('window')
const ITEM_WIDTH = (parseInt(width) / 2) - (Metrics.pb * 2)
const ITEM_HEIGHT = 150

class ViewCartScreen extends React.Component {

    static navigationOptions = ({navigation}) => ({
        title:'King BBQ',
        headerRight: (
            <View style={{flexDirection:'row',padding:Metrics.pmb}}>
                <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={{paddingHorizontal:Metrics.pb}} >
                    <Icon name='ios-cart' size={Metrics.icons.medium} color={Colors.light} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('AddMenuItem')} style={{paddingHorizontal:Metrics.pb}} >
                    <Icon name='ios-add' size={Metrics.icons.lgmedium} color={Colors.light} />
                </TouchableOpacity>
            </View>
        )
    })

    constructor(props) {
        super(props)
        this.def_mode = ''
        this.state = {
            items:[],
            category:'Breakfast',
            categories:['Breakfast','Lunch','Dinner'],
            showProductDetail:false,
            showProductCall:false,
            showMenuOption:false,
            showWaiterSelection:true,
            mode:'view',
            item:null,
            loading:true,
            error:false
        }
    }

    componentDidMount = () => InteractionManager.runAfterInteractions(() => this.getData())

    getData = async () => {
        const {def_mode} = this
        let items = [], error = false

        try {
            items = [
                {
                    id:1,
                    category:'Dinner',
                    name:'Burger',
                    description:'blah blah blah',
                    price:'$10',
                    weight:'1.5 Kg',
                    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT034S6tIiSPoejnl537oTuYB--dw6t6DsKbGzefuGeRCX_deAulg',
                    selected:true,
                    mode:def_mode
                },
                {
                    id:2,
                    category:'Dinner',
                    name:'Chicken Wings',
                    description:'blah blah blah',
                    price:'$10',
                    weight:'1.5 Kg',
                    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkqH5ryb7aM5KavnlSsJanyTXFi0M3WM00Hz6Bol4NmGsyQcdY',
                    selected:true,
                    mode:def_mode
                },
                {
                    id:3,
                    category:'Dinner',
                    name:'Fries',
                    description:'blah blah blah',
                    price:'$10',
                    weight:'1.5 Kg',
                    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsWtK7f1cDieuEhOPop0YQ0I8RvjqHM5PRs1v-IrmfPSviU6OfLQ',
                    selected:false,
                    mode:def_mode
                },
                {
                    id:4,
                    category:'Dinner',
                    name:'Hotdog',
                    description:'blah blah blah',
                    price:'$10',
                    weight:'1.5 Kg',
                    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7r2Hq4UXGD94f4brAyG2dyl26TsokXXl7kj9n0dTMRxwZYoC9Dg',
                    selected:false,
                    mode:def_mode
                },
                {
                    id:5,
                    category:'Dinner',
                    name:'Sandwich',
                    description:'blah blah blah',
                    price:'$10',
                    weight:'1.5 Kg',
                    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS05JBa-f6TArzVZITo2u8FZDetHhZkExxdVwZjgf6IeD8tO-x7',
                    selected:false,
                    mode:def_mode
                },
                {
                    id:6,
                    category:'Hotdog',
                    name:'Cookies',
                    description:'blah blah blah',
                    price:'$10',
                    weight:'1.5 Kg',
                    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTObAAIJD0-wKWu9bBZB6aoYP9igyDUljioH4gbYYUJvF30SbHmhA',
                    selected:false,
                    mode:def_mode
                },
                {
                    id:7,
                    category:'Dinner',
                    name:'Chicken Wings',
                    description:'blah blah blah',
                    price:'$10',
                    weight:'1.5 Kg',
                    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkqH5ryb7aM5KavnlSsJanyTXFi0M3WM00Hz6Bol4NmGsyQcdY',
                    selected:true,
                    mode:def_mode
                },
                {
                    id:8,
                    category:'Dinner',
                    name:'Fries',
                    description:'blah blah blah',
                    price:'$10',
                    weight:'1.5 Kg',
                    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsWtK7f1cDieuEhOPop0YQ0I8RvjqHM5PRs1v-IrmfPSviU6OfLQ',
                    selected:false,
                    mode:def_mode
                },
                {
                    id:9,
                    category:'Dinner',
                    name:'Hotdog',
                    description:'blah blah blah',
                    price:'$10',
                    weight:'1.5 Kg',
                    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7r2Hq4UXGD94f4brAyG2dyl26TsokXXl7kj9n0dTMRxwZYoC9Dg',
                    selected:false,
                    mode:def_mode
                },
            ]
        }
        catch(err) {
            
        }

        this.setState({
            items,
            loading:false,
            error
        })
    }

    showProductDetail = item => {
        this.setState({
            showProductDetail:true,
            item
        })
    }

    handleChangeMode = mode => {
        let items = this.state.items.slice()

        items.map(i => i.mode = mode)

        this.setState({
          mode,
          items  
        })
    }

    handleEditItem = item => this.props.navigation.navigate('EditMenuItem',{Menu:item})

    handleDeleteItem = index => {
        Func.ask('Delete it?',this.state.items[index].name,[
            {text:'Yes',onPress: () => this.deleteItem(index) },
            {text: 'No', style: 'cancel'}
        ])
    }

    deleteItem = index => {
        let items = this.state.items.slice()

        items.splice(index,1)

        this.setState({
            items
        })
    }

    handleMarkStock = item => {
        Func.ask('Mark product out of stock?',item.name,[
            {text:'Yes', style: 'cancel' },
            {text: 'No', style: 'cancel'}
        ])
    }

    renderItem = ({item, index}) => {
        return (
            <TouchableOpacity onPress={this.showProductDetail.bind(this,item)} style={{width:ITEM_WIDTH,height:ITEM_HEIGHT,backgroundColor:Colors.light,margin:Metrics.mxs,elevation:2}}>
                <View>
                    <Image source={{uri:item.image}} style={{width:ITEM_WIDTH,height:ITEM_HEIGHT - 60}} resizeMode='cover' />
                    
                    {item.mode === 'view' &&
                    <View style={{position:'absolute',top:'40%',left:'40%'}}>
                        <View style={{backgroundColor:Colors.branding,width:30,height:30,alignItems:'center',justifyContent:'center',borderRadius:30}}>
                            <Icon name='ios-eye' size={Metrics.icons.regular} color={Colors.light} />
                        </View>
                    </View>
                    }

                    {item.mode === 'edit' &&
                    <TouchableOpacity style={{position:'absolute',top:'40%',left:'40%'}} onPress={this.handleEditItem.bind(this,item)}>
                        <View style={{backgroundColor:Colors.branding,width:30,height:30,alignItems:'center',justifyContent:'center',borderRadius:30}}>
                            <Icon name='ios-create' size={Metrics.icons.small} color={Colors.light} />
                        </View>
                    </TouchableOpacity>
                    }

                    {item.mode === 'edit' &&
                    <TouchableOpacity style={{position:'absolute',top:0,right:0}} onPress={this.handleDeleteItem.bind(this,index)}>
                        <View style={{backgroundColor:Colors.branding,width:30,height:30,alignItems:'center',justifyContent:'center',borderRadius:30}}>
                            <Icon name='ios-trash' size={Metrics.icons.tiny} color={Colors.light} />
                        </View>
                    </TouchableOpacity>
                    }
                    
                    {item.mode === '' &&
                    <View style={{position:'absolute',bottom:0,left:0}}>
                        <View style={{width:ITEM_WIDTH,flexDirection:'row',justifyContent:'space-between',padding:Metrics.psm}}>
                            <TouchableOpacity onPress={this.handleMarkStock.bind(this,item)}>
                                <Icon name='ios-checkbox' size={Metrics.icons.small} color={Colors.light} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={null}>
                                <Icon name='ios-clock' size={Metrics.icons.small} color={Colors.light} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    }

                </View>
                <View style={{padding:Metrics.psm}}>
                    <Text>{item.name}</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',padding:Metrics.psm}}>
                    <Text color={Colors.branding} sm>{item.price}</Text>
                    <Text danger sm>{item.weight}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {

        const {items, item, category, categories, mode, showProductDetail, showProductCall, showMenuOption, showWaiterSelection, loading, error} = this.state

        return (
            <View style={{flex:1}}>

                <ScrollView style={AppStyles.screen}>

                    <ModalProductDetail product={item} visible={showProductDetail} onRequestClose={() => this.setState({showProductDetail:false})} />
                    <ModalProductCall visible={showProductCall} onRequestClose={() => this.setState({showProductCall:false})} />
                    <ModalMenuOption visible={showMenuOption} onRequestClose={() => this.setState({showMenuOption:false})} />
                    <ModalWaiterSelect visible={showWaiterSelection} onRequestClose={() => this.setState({showWaiterSelection:false})} />

                    <View style={{marginVertical:Metrics.mb}}>
                        <View style={{flexDirection:'row'}}>
                            <Button text='Edit Mode' type='info' onPress={this.handleChangeMode.bind(this,'edit')} mh />
                            <Button text='View Mode' type='primary' onPress={this.handleChangeMode.bind(this,'view')} mh />
                            <Button text='User Mode' type='success' onPress={this.handleChangeMode.bind(this,'')} mh />
                        </View>

                        <View style={style.picker}>
                            <Picker
                                selectedValue={category}
                                onValueChange={(itemValue, itemIndex) => this.setState({category: itemValue})}>
                                {categories.map((c, i) => <Picker.Item key={i} label={c} value={c} />)}
                            </Picker>
                        </View>
                    </View>

                    <FlatList
                        data={items}
                        renderItem={this.renderItem}
                        numColumns={2}
                        loading={loading}
                        error={error}
                    />

                    
                </ScrollView>

                {!showProductCall &&
                <View style={{position:'absolute',bottom:40,left:'30%'}}>
                    <Button text='Call shisha master' type='branding' onPress={() => this.setState({showProductCall:true})} />
                </View>
                }

                <ActionButton buttonColor={Colors.info} onPress={() => this.setState({showMenuOption:true})} />

            </View>
        )
    }
}

const style = StyleSheet.create({
    picker: {
        flex:1,
        marginTop:Metrics.mb,
        backgroundColor:Colors.lightgray,
        borderRadius:Metrics.rb
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: Colors.light,
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

export default connect(mapStateToProps, mapDispatchToProps)(ViewCartScreen)