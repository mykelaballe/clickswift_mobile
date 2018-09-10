import Metrics from './Metrics'
import Colors from './Colors'
import Fonts from './Fonts'

const style = {
    screen: {
        backgroundColor:Colors.gray,
        padding:Metrics.pmb
    },
    screenlight: {
        backgroundColor:Colors.light,
        padding:Metrics.pmb
    },
    input: {
        borderRadius:Metrics.rb,
        padding:Metrics.pmb,
        backgroundColor:Colors.light,
        fontSize:Fonts.size.h5,
        elevation:2,
    },
    list: {
        backgroundColor:Colors.light,
        justifyContent:'center',
        padding:Metrics.pdb,
        borderRadius:Metrics.rs,
        marginBottom:Metrics.msm,
        elevation:2
    },
    tabBarOptions: {
        activeTintColor: Colors.light,
        labelStyle: {
          fontSize:11
        },
        style: {
          backgroundColor:Colors.branding
        }
    }
}

export default style