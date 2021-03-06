
import { Tasks } from '../imports/api/tasks.js';
import { getBrowserName } from '../imports/browser.js'
import Highcharts from 'highcharts';

Router.route('/', function () {
  // render the Home template with a custom data context
  const browser_name = getBrowserName()
  Tasks.insert({ browser: browser_name});

let chromeTotal = Tasks.find({ browser: "chrome"}).count();
let safariTotal = Tasks.find({ browser: "safari"}).count();
let firefoxTotal = Tasks.find({ browser: "firefox"}).count();
let ieTotal = Tasks.find({ browser: "ie"}).count();
let edgeTotal = Tasks.find({ browser: "edge"}).count();
let othersTotal = Tasks.find({ browser: "other-browser"}).count();
if (Meteor.isClient) {
      Meteor.defer(function() {
        // Create standard Highcharts chart with options:
        Highcharts.chart('mychart', {
          chart: {
              type: 'bar'
          }, 
          title: {
              text: 'Browser'
          },
          xAxis: {
              categories: ['Chrome', 'Safari', 'Firefox','IE','Edge','Others']
          },
          yAxis: {
              title: {
                  text: 'Total'
              }
          },
          series: [{
              name: 'Client',
              data: [chromeTotal, safariTotal, firefoxTotal, ieTotal, edgeTotal, othersTotal]
          }]
        });
      });
}
  this.render('Home');
});

// navigate to "/details" automatically render the template named "Details".
Router.route('/details', function() {
  
  Template.Details.helpers({
    browsers: () => {
      return Tasks.find({}).fetch();
    },
  });

  
  const browser_name = getBrowserName();
  $('html').addClass(browser_name);
 this.render('Details', {data: {browser: browser_name}})	
});




