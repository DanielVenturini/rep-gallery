# Rep-Gallery
![Gallery Gif](https://i.ibb.co/xf7LbTL/rep-gallery-0-2-0.gif)

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
        styles: { borderRadius: 10, width: 300 }
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
    commonImage = {borderWidth: 2, borderColor: 'green', borderRadius: 5, width: 400, height: 250}

    return (
      <Gallery photos={photos} callback={(delPhotos) => {/*do something*/}} commonImage={commonImage} />
    );
  }
}
```

## Props

| Key | Required | Description |
|-----|----------|-------------|
| `photos` | Yes | Array with the objects of photos. This array will be update when any image was deleted. |
| `callback` | No | A function that will be called after the photos objects has been removed. The `delPhotos` is array that contains all removeds photos objects. |
| `commonImage` | No | The props that will be apply to each image. This props doesn't overide the props that is passed in `styles` of photos. |
| `backgroundColor` | No | It's the `rgb` color that is apply in the background. |
| `horizontal` | No | Change the `ScroolView` to horizontal scroll. |

## Photos object
Each object has the follow props:

| Key             | Required   | Description |
|-----------------|--------------------------------------------------------------------------------------------|----|
| `id` | Yes | Unique `id` that identify the object. It's require by the `JavaScript` also. |
| `source` | Yes | The `uri` to load image. |
| `styles` | No | The styles of image. It isn't required, but the `commonImage` will be apply if any key doesn't be in `styles` key. |
