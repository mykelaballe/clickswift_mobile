import React from 'react'
import {View, StyleSheet, TextInput, TouchableOpacity, InteractionManager, Image, ImageBackground, Dimensions} from 'react-native'
import {connect} from 'react-redux'
import Actions from '../Actions/Creators'
import Toast from 'react-native-root-toast'
import {Images, Metrics, Fonts, Colors, AppStyles} from '../Themes'
import {ScrollView, FlatList, Button, Text} from '../Components'
import I18n from 'react-native-i18n'
import Icon from 'react-native-vector-icons/Ionicons'

class CartScreen extends React.Component {

    static navigationOptions = ({navigation}) => ({
        headerRight: (
            <TouchableOpacity onPress={() => navigation.navigate('OrderGroup')} style={{padding:Metrics.pmb}}>
                <Icon name='ios-list' size={Metrics.icons.lgmedium} color={Colors.light} />
            </TouchableOpacity>
        )
    })

    constructor(props) {
        super(props)
        this.state = {
            items:[],
            loading:true,
            error:false
        }
    }

    componentDidMount = () => InteractionManager.runAfterInteractions(() => this.getData())

    getData = async () => {
        let items = [], error = false

        try {
            items = [
                {id:1,product:'Food 1',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS05JBa-f6TArzVZITo2u8FZDetHhZkExxdVwZjgf6IeD8tO-x7',price:'$50.00',quantity:2},
                {id:2,product:'Food 2',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS05JBa-f6TArzVZITo2u8FZDetHhZkExxdVwZjgf6IeD8tO-x7',price:'$50.00',quantity:2},
                {id:3,product:'Food 3',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS05JBa-f6TArzVZITo2u8FZDetHhZkExxdVwZjgf6IeD8tO-x7',price:'$50.00',quantity:2},
                {id:4,product:'Food 4',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS05JBa-f6TArzVZITo2u8FZDetHhZkExxdVwZjgf6IeD8tO-x7',price:'$50.00',quantity:2},
                {id:5,product:'Food 5',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS05JBa-f6TArzVZITo2u8FZDetHhZkExxdVwZjgf6IeD8tO-x7',price:'$50.00',quantity:2},
            ]
        }
        catch(err) {
            error = true
        }
        
        this.setState({
            items,
            loading:false,
            error
        })
    }

    renderItem = ({item}) => {
        return (
            <View style={style.item}>
                <View style={style.itemInner}>
                    <Image source={{uri:item.image}} style={style.logo} resizeMode='cover' />
                    <View style={{flex:1,marginRight:Metrics.mb}}>
                        <View style={{marginBottom:Metrics.msm}}>
                            <Text bold>{item.product}</Text>
                        </View>
                        <Text sm mute numberOfLines={1}>{item.price}</Text>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <TouchableOpacity onPress={null} style={style.qBtn}>
                                    <Text bold sm center>-</Text>
                                </TouchableOpacity>
                                <View style={{marginHorizontal:Metrics.msm}}>
                                    <Text>{item.quantity}</Text>
                                </View>
                                <TouchableOpacity onPress={null} style={style.qBtn}>
                                    <Text bold sm center>+</Text>
                                </TouchableOpacity>
                            </View>
                            <Button sm text='View Remark' type='branding' onPress={null} mh/>
                            <Button sm text='Add Remark' type='branding' onPress={null} mh />
                        </View>
                    </View>
                    <TouchableOpacity onPress={null}>
                        <Icon name='ios-close-circle-outline' size={Metrics.icons.regular} color={Colors.danger} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    render() {

        const {items, loading, error} = this.state

        return (
            <ScrollView style={AppStyles.screenlight}>
                <FlatList
                    data={items}
                    renderItem={this.renderItem}
                    loading={loading}
                    error={error}
                />
                <View style={{justifyContent:'center'}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Payment')} style={{backgroundColor:Colors.branding,borderRadius:Metrics.rb,padding:Metrics.pb,justifyContent:'center'}}>
                        <Text sm center light>Total: $100</Text>
                        <Text lg bold center light>ORDER</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const style = StyleSheet.create({
    item: {
        alignItems:'center',
        backgroundColor:Colors.light,
        marginVertical:Metrics.mxs,
    },
    itemInner: {
        flexDirection:'row',
        justifyContent:'space-between',
        padding:Metrics.psm,
    },
    logo: {
        width:70,
        height:70,
        marginRight:Metrics.mb
    },
    qBtn: {
        backgroundColor:Colors.gray,
        padding:Metrics.msm,
        width:20,
        height:20,
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

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen)