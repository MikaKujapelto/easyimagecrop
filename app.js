var easyimg = require('easyimage');

easyimg.crop({
     src:'*.jpg', dst:'./output/image.jpg',
     cropwidth:900, cropheight:300
  }).then(
  function(image) {
     console.log('Resized and cropped: ' + image.width + ' x ' + image.height);
  },
  function (err) {
    console.log(err);
  }
);