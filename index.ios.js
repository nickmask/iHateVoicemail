import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native'

export default class iHateVoicemail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome, styles.red}>
          <Blink text='Hello world!' />
        </Text>
        <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}} style={{width: 193, height: 110}} />
      </View>
    )
  }
}

class Blink extends Component {
  constructor(props) {
    super(props)
    this.state = { showText: true }
    setInterval(() => {
      this.setState({ showText: !this.state.showText })
    }, 1000)
  }

  render() {
    let display = this.state.showText ? this.props.text : ' '
    return (
      <Text>{display}</Text>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#178ded',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  red: {
    color: 'red',
    fontSize: 40,
  },
})

AppRegistry.registerComponent('iHateVoicemail', () => iHateVoicemail)
