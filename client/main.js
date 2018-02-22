
import { Tasks } from '../imports/api/tasks.js';
import { getBrowserName } from '../imports/browser.js'

var count = 0
Router.route('/', function () {
  // render the Home template with a custom data context
//   const data = Tasks.find({}).count()
//   Tasks.insert({ browser: ""});
//   console.log('>>', JSON.stringify(data));
  this.render('Home');
});

// navigate to "/details" automatically render the template named "Details".
Router.route('/details', function() {
    //let userAgent = window.navigator.userAgent
  const browser_name = getBrowserName();
  $('html').addClass(browser_name);
 this.render('Details', {data: {browser: browser_name}})	
});




