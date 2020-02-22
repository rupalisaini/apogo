import Howl from './howler';

$(document).ready(() => {
    $("#play-audio").on('click', () => {
        var sound = new Howl({
            src: ['80s_vibe.mp3']
          });
          
          sound.play();
    });
});
