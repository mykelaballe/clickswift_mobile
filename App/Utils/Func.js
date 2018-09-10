import {Alert} from 'react-native'

const func = {
  ask:(msg, title, buttons) => Alert.alert(title, msg, buttons),
}

module.exports = func
