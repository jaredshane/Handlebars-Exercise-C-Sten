//sample data modified from randomUser.me
var randomUser = {
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "stella",
        "last": "meyer"
      },
      "location": {
        "street": "7385 kapellenweg",
        "city": "schmalkalden-meiningen",
        "state": "saarland",
        "postcode": 58225
      },
      "email": "stella.meyer@example.com",
      "picture": {
        "medium": "https:\/\/randomuser.me\/api\/portraits\/med\/women\/50.jpg"
      },
      "nat": "DE"
    }
  ]
}

//handlebars step one: grap the html from the script tag
var userHTML = $('#randomUser').html();

//handlebars step two: compile it into a template
var template = Handlebars.compile(userHTML);

//handlebars step three:render the HTML by passing the data to the template
var outputStuff = template(randomUser.results[0])
console.log(outputStuff)
console.log(randomUser.results[0])

//handlebars step four: put the complete HTML into the DOM
$('#htmlOutput').append(outputStuff)

// $.ajax({
//   url: 'https://randomuser.me/api/',
//   dataType: 'json',
//   success: function(data) {
//     console.log(data);
//     console.log(data.results[0].name)
//   }
// });

var userList;

var promise = new Promise(function (resolve, reject) {
  $.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data);
    resolve(data);
  }
})
});

console.log(promise)

promise
  .then(
    function(data) {
      //handlebars step one: grap the html from the script tag
      var newHTML = $('#newUser').html();

      //handlebars step two: compile it into a template
      var newTemplate = Handlebars.compile(newHTML);

      //handlebars step three:render the HTML by passing the data to the template
      var outputNewStuff = newTemplate(data.results[0])
      console.log(outputNewStuff)
      $('#newOutput').append(outputNewStuff)
    }
  )
