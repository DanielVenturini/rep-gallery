import { ImageDel } from './imageDel'
import React, { Component } from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, View } from 'react-native'

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

export default class Gallery extends Component {

  static defaultProps = {
    photos      : [],
    horizontal  : false,
    imageWidth  : SCREEN_WIDTH * 0.9,
    imageHeight : SCREEN_HEIGHT * 0.25,
  }

  constructor(props) {
    super(props);

    this.imageWidth  = props.imageWidth
    this.imageHeight = props.imageHeight
    this.horizontal  = props.horizontal
    this.photos      = props.photos
  }

  renderPhotos = () => {
    return this.photos.map((item) => {
      return (
        <View key={item.id} style={styles.view}>
          <Image
            source={item.source}
            style ={styles.image}
          />
        </View>
      )
    }).reverse()
  }

  render() {
    return (
      <ScrollView horizontal={this.horizontal} contentContainerStyle={styles.scrollView}>
        {this.renderPhotos()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#eff7f9',
    padding: SCREEN_WIDTH * 0.025,
  },
  image: {
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_HEIGHT * 0.25,
  },
  view: {
    padding: 10,
  }
})