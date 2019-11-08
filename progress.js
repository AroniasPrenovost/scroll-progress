var progressBar = document.createElement('div');
progressBar.style.cssText = 'transition: width 1s;position:fixed;top:0;width:1%;height:3px;z-index:100;background:#2980b9';
document.body.appendChild(progressBar);

// resource load percentage progress bar 
var stateCheck = setInterval(() => {
    if (document.readyState === 'complete') {
        clearInterval(stateCheck);
        progressBar.style.width = '100%';
    } else {
        progressBar.style.width = '55%';
    }
}, 1);

// get location-based progress bar on scroll 
/*
getScrollTopMax = function () {
    var ref;
    return (ref = document.scrollingElement.scrollTopMax) != null
        ? ref
        : (document.scrollingElement.scrollHeight - document.documentElement.clientHeight);
};

var scrollTopMax = getScrollTopMax();
window.addEventListener('scroll', function () {
    var scrollPositionPercentage = Math.floor((window.scrollY / scrollTopMax) * 100);
    progressBar.style.width = scrollPositionPercentage + '%';
});
*/
