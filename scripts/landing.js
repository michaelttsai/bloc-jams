var animatePoints = function() {

     var points = document.getElementsByClassName('point');

    var revealPoint = function(counter) {
        points[counter].style.opacity = 1;
        points[counter].style.transform = "scaleX(1) translateY(0)";
        points[counter].style.msTransform = "scaleX(1) translateY(0)";
        points[counter].style.WebkitTransform = "scaleX(1) translateY(0)";
    }
     
    for (var i = 0; i < points.length; i++){
      revealPoint(i);
    }
 };
