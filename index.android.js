import React, { Component } from 'react'
import { AppRegistry, Text } from 'react-native'

import MyScene from './MyScene'

class iHateVoicemail extends Component {
  render() {
    return (
      <Text>
        Hello world
      </Text>
    )
  }
}

AppRegistry.registerComponent('iHateVoicemail', () => iHateVoicemail)
