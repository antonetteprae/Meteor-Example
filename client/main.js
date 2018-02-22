
import { Tasks } from '../imports/api/tasks.js';
import { getBrowserName } from '../imports/browser.js'
import Highcharts from 'highcharts';

var count = 0
Router.route('/', function () {
  // render the Home template with a custom data context
//   const data = Tasks.find({}).count()
//   Tasks.insert({ browser: ""});
//   console.log('>>', JSON.stringify(data));
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
              data: [1, 0, 4, 3, 3, 3]
          }]
        });
      });
}
  this.render('Home');
});

// navigate to "/details" automatically render the template named "Details".
Router.route('/details', function() {
    //let userAgent = window.navigator.userAgent
  const browser_name = getBrowserName();
  $('html').addClass(browser_name);
 this.render('Details', {data: {browser: browser_name}})	
});




