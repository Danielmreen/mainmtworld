
    var captcha = sliderCaptcha({
    id: 'captcha',
    loadingText: 'Loading...',
    failedText: 'Try again',
    barText: 'Slide right to fill',
    repeatIcon: 'fa fa-redo',
    onSuccess: function () {
    // var handler = setTimeout(function () {
    //     window.clearTimeout(handler);
    //     captcha.reset();
    // }, 500);
    setTimeout(function () {

    captcha.reset();
}, 1000);
},
    setSrc: function () {
    //return 'https://picsum.photos/' + Math.round(Math.random() * 136) + '.jpg';
},
});
