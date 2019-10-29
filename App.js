import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';

export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
      time: 0,
    }
  }
  _handleVideoRef = ref => {
    this.playbackObject = ref;
  }
  _onPressButton = () => {
    this.playbackObject.getStatusAsync().then(status=> {
      this.setState({time: status.positionMillis})
    });
  }

  render() {
    return (
      <View 
        style={styles.container}
      >
        <Text>Playback position when tapped: {this.state.time}ms</Text>
        <TouchableOpacity
          onPress={this._onPressButton}
        >
          <Video
            ref={this._handleVideoRef}
            source={{ uri: 'http://qthttp.apple.com.edgesuite.net/1010qwoeiuryfg/sl.m3u8' }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay
            isLooping
            style={{ width: 300, height: 300 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
