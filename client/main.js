
var count = 0
Router.route('/', function () {
  // render the Home template with a custom data context
  //let userAgent = window.navigator.userAgent
  var browser_name = '';
  isIE = /*@cc_on!@*/false || !!document.documentMode;
  isEdge = !isIE && !!window.StyleMedia;
  if(navigator.userAgent.indexOf("Chrome") != -1 && !isEdge)
  {
      browser_name = 'chrome';
  }
  else if(navigator.userAgent.indexOf("Safari") != -1 && !isEdge)
  {
      browser_name = 'safari';
  }
  else if(navigator.userAgent.indexOf("Firefox") != -1 ) 
  {
      browser_name = 'firefox';
  }
  else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
  {
      browser_name = 'ie';
  }
  else if(isEdge)
  {
      browser_name = 'edge';
  }
  else 
  {
     browser_name = 'other-browser';
  }
  $('html').addClass(browser_name);
  count++;
  this.render('Home', {data: {title: count, browser: browser_name}});
});

// navigate to "/details" automatically render the template named "Details".
Router.route('/details', function() {
 this.render('Details', {data: {example: count}})	
});




