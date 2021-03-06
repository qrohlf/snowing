$(document).ready(function() {
  
  weather('97219');
  $( "#form" ).submit(function( event ) {
      event.preventDefault();
      weather($("#zip").val());
    });
});

function weather(zip) {
    console.log("weather called with zip "+zip);
    $.simpleWeather({
    zipcode: zip,
    woeid: '',
    location: '',
    unit: 'f',
    success: function(weather) {
          $('#title').text("Is it snowing in "+weather.city+"?");
          // html = '<h2>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
          // html += '<ul><li>'++', '+weather.region+'</li>';
          // html += '<li class="currently">'+weather.currently+'</li>';
          // html += '<li>'+weather.tempAlt+'&deg;C</li></ul>';
      
          // $("#weather").html(html);
          console.log(weather);
          if (weather.code > 12 && weather.code < 17) {
            $("#snowing").text("YES");
          } else {
            $("#snowing").text("NO");
          }
          
        },
        error: function(error) {
          $("#snowing").html("");
          $("#error").text("invalid zip code")
        }
      });
}