import ImageDel from './imageDel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Alert, Dimensions, ScrollView, StyleSheet, View } from 'react-native'

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
    this.iconSize     = SCREEN_HEIGHT*0.06
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

  // coming soon
  exclude = () => {
    // this.forceUpdate()
  }

  confirmDelete = () => {
    Alert.alert(
      'Are you sure?',
      '',
      [
        { text: 'CANCEL', style: 'cancel' },
        { text: 'OK', onPress: this.exclude }
      ]
    )
  }

  render() {
    return (
      <View>
        {/*<Icon name='users' size={this.iconSize} color='#000' onPress={this.confirmDelete} />*/}
        <ScrollView horizontal={this.horizontal} contentContainerStyle={styles.scrollView}>
          {this.renderPhotos()}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow       : 1,
    flexDirection  : 'column',
    alignItems     : 'center',
    justifyContent : 'space-around',
    width          : SCREEN_WIDTH*0.9,
    padding        : SCREEN_WIDTH*0.025,
    paddingTop     : SCREEN_HEIGHT*0.06,
  },
})

Gallery.propTypes = {
  photos: PropTypes.array,
}