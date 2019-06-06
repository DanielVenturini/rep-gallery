# Rep-Gallery
![Gallery Gif](https://i.ibb.co/sj7fvDG/rep-image.gif)

Simple component to React-Native that loads the images from a `uri` and show in gallery. The images must be passed through an array. Selected and deleted images are removed the array.

## Getting Started
Install the package using `npm`:

```bash
$ npm install rep-gallery --save
```

## Usage

```javascript
import Gallery from 'rep-gallery';

class YourComponent extends Component {
  render() {
    var photos = [
      {
        id: 'img1',
        source: { uri: 'https://i.imgur.com/bfZhJLD.jpg' },
        styles: { borderRadius: 10 }
      },
      {
        id: 'img2',
        source: { uri: 'https://i.imgur.com/kFa0MX4.jpg' },
        styles: { borderColor: '#8c8c8c', height: 200 }
      },
      {
        id: 'img3',
        source: { uri: 'https://i.imgur.com/CYNRyrA.jpg' },
        styles: { borderColor: '#8c8c8c', width: 500, height: 500, borderWidth: 5, borderRadius: 10 }
      },
      {
        id: 'img4',
        source: { uri: 'https://i.imgur.com/ZPiZkRh.jpg' },
        styles: { borderColor: '#8c8c8c', width: 1200, height: 300, borderWidth: 2,borderRadius: 50 }
      },
      {
        id: 'img5',
        source: { uri: 'http://i.imgur.com/XP2BE7q.jpg' },
        styles: { borderWidth: 10 }
      }
    ]

    // each image that doesn't have this props will receive
    commonImage = {borderWidth: 2, borderColor: 'green', borderRadius: 5, width: 200, height: 250}

    return (
      <Gallery photos={photos} commonImage={commonImage}/>
    );
  }
}
```

## Props

| Key | Required | Description |
|-----|----------|-------------|
| `photos` | Yes | Array with the objects of photos. This array will be update when any image was delete |
| `commonImage` | No | The props that will be apply to each image. This props doesn't overide the props that is passed in `styles` of photos |
| `horizontal` | No | Change the `ScroolView` to horizontal scroll |

## Photos object
Each object has the follow props:

| Key             | Required   | Description |
|-----------------|--------------------------------------------------------------------------------------------|----|
| `id` | No | If you want take a control
| `source` | Yes | The `uri` to load image |
| `styles` | No | The styles of image. Isn't required, but the `commonImage` will be apply if any key doesn't be in `styles` key |