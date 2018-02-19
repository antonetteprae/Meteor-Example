
var count = 0
Router.route('/', function () {
  // render the Home template with a custom data context
  var xxx = 'nnn'
  let userAgent = window.navigator.userAgent
  count++;
  this.render('Home', {data: {title: count}});
});

// when you navigate to "/one" automatically render the template named "One".
Router.route('/one', function() {
 this.render('One', {data: {example: count}})	
});

// when you navigate to "/two" automatically render the template named "Two".
Router.route('/two');
