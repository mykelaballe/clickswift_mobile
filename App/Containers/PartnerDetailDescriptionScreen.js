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

class PartnerDetailDescription extends React.Component {

    renderPhotos = ({item}) => {
        return (
            <View>
                <Image source={{uri:item.path}} style={{width:50,height:50,borderRadius:Metrics.rb,marginRight:Metrics.msm}} resizeMode='cover' />
            </View>
        )
    }

    render() {

        return (
            <ScrollView style={AppStyles.screen}>
                <View style={{backgroundColor:Colors.light,flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:Metrics.pb,borderRadius:Metrics.rb,elevation:2,marginVertical:Metrics.msm}}>
                    <View>
                        <Text mute>OPEN IN</Text>
                        <Text>10:00 - 23:00</Text>
                    </View>
                    <TouchableOpacity style={{backgroundColor:Colors.lightgray,flexDirection:'row',justifyContent:'center',alignItems:'center',paddingVertical:Metrics.psm,paddingHorizontal:Metrics.pb}} onPress={null}>
                        <Icon name='ios-call' size={Metrics.icons.regular} color={Colors.dark} style={{marginRight:Metrics.mb}} />
                        <Text>Contact</Text>
                    </TouchableOpacity>
                </View>

                <View style={{backgroundColor:Colors.light,padding:Metrics.pb,borderRadius:Metrics.rb,elevation:2,marginVertical:Metrics.msm}}>
                    <Text mute>PHOTOS</Text>
                    <FlatList
                        data={[
                            {id:1,path:'http://www.royalhotelchilliwack.com/Content/images/Hotel-Cafe-o.jpg'},
                            {id:2,path:'https://media-cdn.tripadvisor.com/media/photo-s/0a/26/63/4c/restaurant.jpg'},
                            {id:3,path:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL1Eg8QIuNPY2XywcBnRO7ORdR2ikysVVD2MsVOUh6i1P-cv4r'}
                        ]}
                        renderItem={this.renderPhotos}
                        horizontal
                    />
                </View>

                <View style={{backgroundColor:Colors.light,borderRadius:Metrics.rb,elevation:2,marginVertical:Metrics.msm}}>
                    <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCh3BPAFGWVWiEybLfyYoN5Vmk6hjyNDMuWiIIw-zRqLml8iJ-1A'}} style={{width:width - 20,height:200}} resizeMode='cover' />
                    <View style={{marginVertical:Metrics.mb,padding:Metrics.pb}}>
                        <Text mute>DESCRIPTION</Text>
                        <Text>There's nothing quite like an outdoor grilling party. The sounds of splashing in the pool just seem to harmonize with the sizzling of the grill. And if the scent of flame-kissed steaks getting its caramelized char from the grill doesn't get your mouth watering, few things will! This is the concept behind Cocobolo.</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const style = StyleSheet.create({

})

mapStateToProps = state => {
    return {
        
    }
}

mapDispatchToProps = dispatch => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PartnerDetailDescription)