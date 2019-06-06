import React, { Component } from 'react'
import { EventRegister } from 'react-native-event-listeners'
import { Image, TouchableOpacity, View } from 'react-native'

export default class ImageDel extends Component {

  constructor(props) {
    super(props)

    this.id      = props.id
    this.source  = props.source
    this.selects = props.selects
    this.stylesV = props.stylesV
    this.stylesI = props.stylesI
    this.previous= this.stylesI.borderColor
  }

  changeBorder = (color) => {
    this.stylesI['borderColor'] = color
    this.forceUpdate()
  }

  deselect = () => {
    delete(this.selects[this.id])       // just delete from hash: un-click
    this.changeBorder(this.previous)    // clean border
  }

  // if this image has been the first selected
  // show the trash
  showTrash = () => {
    if(Object.keys(this.selects).length) {
      return
    }

    EventRegister.emit('trash')
  }

  select = () => {
    this.showTrash()

    this.selects[this.id] = true
    this.changeBorder('#ff0000')
  }

  longClick = () => {
    if(this.selects[this.id]) {
      this.deselect()
    } else {
      this.select()
    }
  }

  click = () => {
    if(Object.keys(this.selects).length) {  // has clicked photos
      if(this.selects[this.id]) {           // it's clicked ?
        this.deselect()
      } else {
        this.select()
      }
    } else {
      // this.viewPhoto()  // comming soon
    }
  }

  render() {
    return (
      <View style={this.stylesV}>
        <TouchableOpacity onPress={this.click} onLongPress={this.longClick} activeOpacity={0.6} >
          <Image
            source={this.source}
            style ={this.stylesI}
          />
        </TouchableOpacity>
      </View>
    )
  }

  componentWillUnmount() {
    this.deselect()
  }
}
