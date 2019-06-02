import React, { Component } from 'react';
import { View, Image } from 'react-native';

export default class ImageDel extends Component {

  constructor(props) {
    super(props)

    this.id      = props.id
    this.styles  = props.styles
    this.source  = props.source
    this.padding = props.padding
  }

  render() {
    return (
      <View padding={this.padding}>
        <Image
            source={this.source}
            style ={this.styles}
          />
      </View>
    )
  }
}
