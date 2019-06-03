import React, { Component } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

export default class ImageDel extends Component {

  constructor(props) {
    super(props)

    this.timer   = 400
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

  select = () => {
    if(this.selects[this.id]) {
      return
    }

    this.selects[this.id] = true
    this.changeBorder('#ff0000')
  }

  click = () => {
    if(Object.keys(this.selects).length) {  // has clicked photos
      if(this.selects[this.id]) {           // it's clicked ?
        delete(this.selects[this.id])       // just delete from hash: un-click
        this.changeBorder(this.previous)    // clean border
      } else {
        this.selects[this.id] = true        // add to selections
        this.changeBorder('#ff0000')
      }
    } else {
      // this.viewPhoto()  // comming soon
    }
  }

  render() {
    return (
      <View style={this.stylesV}>
        <TouchableOpacity onPress={this.click} onLongPress={this.select} activeOpacity={0.6} >
          <Image
            source={this.source}
            style ={this.stylesI}
          />
        </TouchableOpacity>
      </View>
    )
  }
}
