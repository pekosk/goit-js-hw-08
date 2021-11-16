import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);
    const TIME_KEY = "videoplayer-current-time";
    const onPlay = function (data) {
      const time = JSON.stringify(data.seconds);
      localStorage.setItem(TIME_KEY, time);
    };
    player.on('timeupdate', throttle(onPlay, 1000));
    const saveTime = localStorage.getItem(TIME_KEY);
    player.setCurrentTime(saveTime).then(function(seconds) {
      // seconds = the actual time that the player seeked to
  }).catch(function(error) {
      switch (error.name) {
          case 'RangeError':
              // the time was less than 0 or greater than the video’s duration
              break;
  
          default:
              // some other error occurred
              break;
      }
  });


    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });