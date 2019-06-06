import ImageDel from './imageDel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { EventRegister } from 'react-native-event-listeners'
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
    this.showTrash    = false
    this.photos       = props.photos
    this.horizontal   = props.horizontal
    this.commonView   = props.commonView
    this.commonImage  = props.commonImage
    this.iconSize     = SCREEN_HEIGHT*0.06
  }

  componentWillMount() {
    this.listener = EventRegister.addEventListener('trash', this.trash)
  }

  // show and hide trash
  trash = () => {
    this.showTrash = !this.showTrash

    this.forceUpdate()
  }

  // don't let image overflow the width
  verifyWidth = (styles) => {
    if(!styles.width) {
      return
    }

    styles.width = styles.width > SCREEN_WIDTH ? SCREEN_WIDTH : styles.width
  }

  // apply all commons styles
  changeStyles = (styles) => {
    let newStyles = styles

    // if the styles in the photo doesn't have one property then, add
    Object.keys(this.commonImage).forEach((key) => {
      if(styles[key] == undefined) {
        styles[key] = this.commonImage[key]
      }
    })

    this.verifyWidth(styles)
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

  excludePhoto = (id) => {
    this.photos.forEach((photo, index) => {
      if(photo.id == id) {
        this.photos.splice(index, 1)
        return
      }
    })
  }

  exclude = () => {
    var count = 0
    Object.keys(this.selects).forEach( (id) => {
      this.excludePhoto(id)
    })

    // hide trash and force update
    this.trash()
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

  getViewTrash = () => {
    if(!this.showTrash) {
      return null
    }

    return (
      <View style={{paddingLeft: SCREEN_HEIGHT*0.1}} >
        <Icon name='trash-o' size={this.iconSize} color='#000' onPress={this.confirmDelete} />
      </View>
    )
  }

  render() {
    return (
      <View>
        {this.getViewTrash()}
        <ScrollView horizontal={this.horizontal} contentContainerStyle={styles.scrollView}>
          {this.renderPhotos()}
        </ScrollView>
      </View>
    )
  }

  componentWillUnmount() {
    EventRegister.removeEventListener(this.listener)
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow       : 1,
    flexDirection  : 'column',
    alignItems     : 'center',
    justifyContent : 'space-around',
    paddingBottom  : SCREEN_HEIGHT*0.06,
  },
})

Gallery.propTypes = {
  photos: PropTypes.array,
}