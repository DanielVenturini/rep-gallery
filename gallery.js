import ImageDel from './imageDel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

export default class Gallery extends Component {

  static defaultProps = {
    horizontal  : false,
    commonImage : {borderRadius: 20, borderWidth: 5, width: SCREEN_WIDTH*0.95, height: SCREEN_HEIGHT*0.25},
    commonView  : {padding: 5}
  }

  constructor(props) {
    super(props)

    this.selects      = {}
    this.photos       = props.photos
    this.horizontal   = props.horizontal
    this.commonView   = props.commonView
    this.commonImage  = props.commonImage
  }

  changeStyles = (styles) => {
    let newStyles = styles

    // if the styles in the photo doesn't have one property then, add
    Object.keys(this.commonImage).forEach((key) => {
      if(styles[key] == undefined) {
        styles[key] = this.commonImage[key]
      }
    })

    return newStyles
  }

  renderPhotos = () => {
    return this.photos.map((item) => {
      return (
        <View key={item.id} style={styles.view}>
          <ImageDel
            id     ={item.id}
            source ={item.source}
            selects={this.selects}
            stylesV={this.commonView}
            stylesI={this.changeStyles(item.styles)}
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
    )
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow       : 1,
    justifyContent : 'space-around',
    alignItems     : 'center',
    backgroundColor: '#eff7f9',
    padding        : SCREEN_WIDTH * 0.025,
  },
})

Gallery.propTypes = {
  photos: PropTypes.array,
}