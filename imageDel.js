import React, { Component } from 'react';
import { View, Image } from 'react-native';

export default class ImageDel extends Component {

  constructor(props) {
    super(props)

    this.source = props.source
  }

  render() {
    return (
      <View>
        <Image
          style={{ width: 66, height: 58 }}
          source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==' }}
        />
      </View>
    );
  }
}
