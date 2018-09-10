import React, {Component, PropTypes} from 'react'
import { ScrollView as MainScrollView, StyleSheet, View, RefreshControl, Keyboard, LayoutAnimation, KeyboardAvoidingView } from 'react-native'
import {connect} from 'react-redux'
import {Metrics, Colors} from '../Themes'
import Toast from 'react-native-root-toast'

class ScrollView extends Component {

  constructor(props) {
	  super(props)
	  this.state={
			refreshing: false
		}
	}
	
	componentWillMount() {
		this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
		this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide)
	}

	componentWillUnmount() {
		this.keyboardDidShowListener.remove()
		this.keyboardDidHideListener.remove()
	}

	keyboardDidShow = e => LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)

	keyboardDidHide = e => LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
  
  handleOnRefresh() {
		/*if(this.props.isConnected) this.props.onRefresh()
		else Toast.show(Globals.error.network)*/
  }
  
  render() {
		const { onRefresh, clip } = this.props

		var refreshStatus = this.props.refreshing ? this.props.refreshing : this.state.refreshing
	  
	  var clipSubview = typeof clip !== 'undefined' && !clip ? false : true
	  
	  var refreshControl = typeof onRefresh !== 'undefined' ? 
											<RefreshControl
													refreshing={refreshStatus}
													colors={[Colors.primary]}
													onRefresh={this.handleOnRefresh.bind(this)}
												/> : null
		
		var baseStyles = {
			flex:1,
			backgroundColor:Colors.gray,
		}

		var styles = baseStyles

		if(this.props.style) {
			styles = [
				baseStyles,
				this.props.style,
			]
		}

		return (
			<MainScrollView
				ref='scrollView'
				enableEmptySections={true}
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
				refreshControl={refreshControl}
				removeClippedSubviews={clipSubview}
				{...this.props}
				style={styles}
		  >
				<KeyboardAvoidingView style={{marginBottom:Metrics.mtb}}>
					{this.props.children}
				</KeyboardAvoidingView>
			  
			</MainScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    //isConnected: state.network.isConnected,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ScrollView)