import ImageDel from './imageDel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

export default class Gallery extends Component {

  static defaultProps = {
    padding     : 0,
    horizontal  : false,
    borderRadius: 10,
  }

  constructor(props) {
    super(props);

    this.photos       = props.photos
    this.padding      = props.padding
    this.horizontal   = props.horizontal
    this.borderRadius = props.borderRadius
  }

  changeStyles = (styles) => {
    let newStyles = styles

    if(!styles.borderRadius) {
      newStyles['borderRadius'] = this.borderRadius
    }

    return newStyles
  }

  renderPhotos = () => {
    return this.photos.map((item) => {
      return (
        <View key={item.id} style={styles.view}>
          <ImageDel
            id={item.id}
            source={item.source}
            padding={this.padding}
            styles={this.changeStyles(item.styles)}
          />
        </View>
      )
    })
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
})

Gallery.propTypes = {
  photos: PropTypes.array,
}