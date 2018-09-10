import React from 'react'
import {View, StyleSheet, TextInput, TouchableOpacity, InteractionManager, Image, Picker, Dimensions} from 'react-native'
import {connect} from 'react-redux'
import Actions from '../Actions/Creators'
import Toast from 'react-native-root-toast'
import {Images, Metrics, Fonts, Colors, AppStyles} from '../Themes'
import {ScrollView, FlatList, Button, Text, ModalAddVariations} from '../Components'
import I18n from 'react-native-i18n'
import Icon from 'react-native-vector-icons/Ionicons'

class EditMenuItemScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            category: 'Breakfast',
            categories: ['Breakfast','Lunch','Dinner'],
            description: '',
            weight: '',
            price: '',
            from: '',
            to: '',
            allergens: '',
            showAddVariations: false
        }
    }

    render() {

        const {name, category, categories, description, weight, price, from, to, allergens, showAddVariations} = this.state

        return (
            <ScrollView>

                <ModalAddVariations visible={showAddVariations} onRequestClose={() => this.setState({showAddVariations:false})} />

                <View style={{height:200,backgroundColor:Colors.mute,alignItems:'center',justifyContent:'center'}}>
                    <View>
                        <Button sm text='Add Image' onPress={null} />
                    </View>
                </View>

                <View style={{backgroundColor:Colors.light,padding:Metrics.pb,marginHorizontal:Metrics.mb,marginTop:-50}}>
                    <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
                        <View style={style.checkbox} />
                        <Text>Order</Text>
                    </TouchableOpacity>

                    <View style={{marginTop:Metrics.mb,marginBottom:Metrics.mdb,paddingLeft:Metrics.pdb}}>
                        
                        <View style={style.picker}>
                            <Picker
                                selectedValue={'Waiter'}
                                onValueChange={null}>
                                {['Waiter','Option','Another Option'].map((c, i) => <Picker.Item key={i} label={c} value={c} />)}
                            </Picker>
                        </View>

                        <TextInput
                            style={style.input}
                            onChangeText={weight => this.setState({weight})}
                            value={weight}
                            placeholder='Weight (kg)'
                            keyboardType='default'
                            autoCorrect={false}
                            underlineColorAndroid='transparent'
                        />

                        <TextInput
                            style={style.input}
                            onChangeText={price => this.setState({price})}
                            value={price}
                            placeholder='Price'
                            keyboardType='default'
                            autoCorrect={false}
                            underlineColorAndroid='transparent'
                        />
                    </View>

                    <View style={{marginVertical:Metrics.mb}}>
                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
                            <View style={style.checkbox} />
                            <Text>Menu</Text>
                        </TouchableOpacity>

                        <View style={{marginTop:Metrics.mb,paddingLeft:Metrics.pdb}}>
                            <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
                                <View style={style.checkbox} />
                                <Text>Visible menu</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{marginVertical:Metrics.mb}}>
                        <Text>Item Name</Text>
                        <TextInput
                            style={style.input}
                            onChangeText={name => this.setState({name})}
                            value={name}
                            keyboardType='default'
                            autoCorrect={false}
                            underlineColorAndroid='transparent'
                        />

                        <Text>Category</Text>
                        <View style={style.picker}>
                            <Picker
                                selectedValue={category}
                                onValueChange={category => this.setState({category})}>
                                {categories.map((c, i) => <Picker.Item key={i} label={c} value={c} />)}
                            </Picker>
                        </View>
                    </View>

                    <View style={{marginVertical:Metrics.mb}}>
                        <Text>Timezone</Text>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <View style={{flex:1,marginHorizontal:Metrics.msm}}>
                                <TextInput
                                    style={style.input}
                                    onChangeText={from => this.setState({from})}
                                    value={from}
                                    placeholder='From'
                                    keyboardType='default'
                                    autoCorrect={false}
                                    underlineColorAndroid='transparent'
                                />
                            </View>

                            <View style={{flex:1,marginHorizontal:Metrics.msm}}>
                                <TextInput
                                    style={style.input}
                                    onChangeText={to => this.setState({to})}
                                    value={to}
                                    placeholder='To'
                                    keyboardType='default'
                                    autoCorrect={false}
                                    underlineColorAndroid='transparent'
                                />
                            </View>
                        </View>
                    </View>

                    <View style={{marginVertical:Metrics.mb}}>
                        <Text>The Allergens</Text>
                        <TextInput
                            style={style.input}
                            onChangeText={allergens => this.setState({allergens})}
                            value={allergens}
                            keyboardType='default'
                            autoCorrect={false}
                            underlineColorAndroid='transparent'
                        />
                    </View>

                    <View style={{marginVertical:Metrics.mb}}>
                        <Text>Variations</Text>
                        <View>
                            <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:Metrics.msm}}>
                                <TouchableOpacity style={{flexDirection:'row'}}>
                                    <View style={style.checkbox} />
                                    <Text>Milk</Text>
                                </TouchableOpacity>
                                <Text>$ 23</Text>
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:Metrics.msm}}>
                                <TouchableOpacity style={{flexDirection:'row'}}>
                                    <View style={style.checkbox} />
                                    <Text>Sugar</Text>
                                </TouchableOpacity>
                                <Text>$ 23</Text>
                            </View>

                            <View style={{justifyContent:'center',marginVertical:Metrics.msm}}>
                                <Button sm text='ADD VARIATION' type='mute' onPress={() => this.setState({showAddVariations:true})} />
                            </View>
                        </View>
                    </View>

                    <View style={{marginVertical:Metrics.mb}}>
                        <Text>Description</Text>
                        <TextInput
                            style={style.textarea}
                            onChangeText={description => this.setState({description})}
                            value={description}
                            keyboardType='default'
                            multiline={true}
                            autoCorrect={false}
                            underlineColorAndroid='transparent'
                        />
                    </View>

                    <Button text='SAVE' type='branding' onPress={null} />
                </View>
            </ScrollView>
        )
    }
}

const style = StyleSheet.create({
    input: {
        //...AppStyles.input,
        borderWidth:StyleSheet.hairlineWidth,
        borderColor:Colors.mute,
        fontSize:Fonts.size.smregular,
        marginVertical:Metrics.mxs
    },
    textarea: {
        //...AppStyles.input,
        borderWidth:StyleSheet.hairlineWidth,
        borderColor:Colors.mute,
        height:50
    },
    checkbox: {
        width:20,
        height:20,
        borderWidth:StyleSheet.hairlineWidth,
        borderColor:Colors.dark,
        marginRight:Metrics.msm
    },
    picker: {
        borderWidth:StyleSheet.hairlineWidth,
        borderColor:Colors.mute
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

export default connect(mapStateToProps, mapDispatchToProps)(EditMenuItemScreen)