import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Image} from 'react-native'
import {Metrics, Images} from '../Themes'

class Avatar extends Component {
  
  render() {

    let props = this.props,
				wh = Metrics.images.medium,
				width = props.size ? props.size : wh,
				height = props.size ? props.size : wh,
				borderRadius = 0,
				source = props.source ? {uri:props.source} : Images.avatar.default
	  
		borderRadius = (height > width) ? height / 2 : width / 2
	
		return (
			<Image
				style={
					[
						{width, height, borderRadius},
						props.style
					]
				}
				source={source}
			 />
		)
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Avatar)