var progressBar = document.createElement('div');
progressBar.style.cssText = ' position:fixed;top:0;width:1%;height:4px;z-index:100;background:#2980b9';
document.body.appendChild(progressBar);

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
