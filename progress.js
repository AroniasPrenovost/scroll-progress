// append DOM element 
var progressBar = document.createElement('div');
progressBar.style.cssText = 'transition: width 1s;position:fixed;top:0;width:1%;height:3px;z-index:100;background:#2980b9';
document.body.appendChild(progressBar);
 
// logic 
getScrollTopMax = function () {
    var ref;
    if (document && document.scrollingElement) {
        return (ref = document.scrollingElement.scrollTopMax) != null 
        ? ref : (document.scrollingElement.scrollHeight - document.documentElement.clientHeight);
    }
};

var milestones = [25, 50, 75, 100]; 
var scrollTopMax = getScrollTopMax();

window.addEventListener('scroll', function () {
    var scrollPositionPercentage = Math.floor((window.scrollY / scrollTopMax) * 100);
    progressBar.style.width = scrollPositionPercentage + '%';
    
    for (var ii = 0; ii < milestones.length; ii++) { 
        if (milestones[ii] && scrollPositionPercentage >= milestones[ii]) { 
            console.log('scroll position: ' + milestones[ii] + '%'); 

            milestones[ii] = null; 
        } 
    }
});
 
