# play-dtmf

This is a simple library that allows playing DTMF tones using Web Audio API.
It should work in any browser supporting [Web Audio API](http://caniuse.com/#feat=audio-api).

## Usage

```javascript
import {DtmfPlayer} from 'play-dtmf';
let dtmfPlayer = new DtmfPlayer();
dtmfPlayer.play('1');
setTimeout(() => {
  dtmfPlayer.stop();
  dtmfPlayer.close();
});
```

## TODO list

*   Improve tests.
*   Add documentation.
