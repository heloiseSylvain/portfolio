

$(document).scroll(function () {
  var y = $(this).scrollTop();
  if (y > 1200) {
    $('.chart').easyPieChart({
      scaleColor: "#F9ECEB",
      lineWidth: 10,
      lineCap: 'butt',
      barColor: '#E0928E',
      trackColor: "#F9ECEB",
      size: 160,
      animate: 1000
    });
  }
});
