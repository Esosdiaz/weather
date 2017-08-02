$(document).ready(function(){
   $.ajax({
       url: 'https://api.darksky.net/forecast/a562599ca89ddfdee0cf0f907e01eead/-33.4143,-70.6608',
       type: 'GET',
       dataType: 'jsonp',    
})
   .done(function(elemento){
      $('#calcular').click(function(){
      console.log(elemento);
      $('#respuestaTiempo').append('<div>Ciudad: ' + elemento.timezone + '</div>'+'<div class="temperatura">Temperatura: ' + ((elemento.currently.temperature-32)/1.8).toFixed(2) + '°C </div>'+'<div>Humedad: ' + elemento.currently.humidity + '</div>'+'<div>Indice UV: ' + elemento.currently.uvIndex + '</div>'+'<div>Presion: ' + elemento.currently.pressure + '</div>'+'<div>Viento: ' + elemento.currently.windSpeed + '</div>');
   fail(function() {
       console.log("error");
   })
   .always(function() {
       console.log("complete");
   });
});
});
   $(window).on("load", function(){
     $.ajax({
       url: 'https://api.darksky.net/forecast/a562599ca89ddfdee0cf0f907e01eead/-33.4143,-70.6608',
       type: 'GET',
       dataType: 'jsonp',    
})
   .done(function(elemento){
       $('#semana').append('<div>Lunes: ' + (((elemento.daily.data[0].temperatureMin)-32)/1.8).toFixed(2) + '°C - '+ (((elemento.daily.data[0].temperatureMax)-32)/1.8).toFixed(2)+'°C</div><div>Martes: ' + (((elemento.daily.data[1].temperatureMin)-32)/1.8).toFixed(2) + '°C - '+ (((elemento.daily.data[1].temperatureMax)-32)/1.8).toFixed(2)+'°C</div><div>Miercoles: ' + (((elemento.daily.data[1].temperatureMin)-32)/1.8).toFixed(2) + '°C - '+ (((elemento.daily.data[1].temperatureMax)-32)/1.8).toFixed(2)+'°C</div><div>Jueves: ' + (((elemento.daily.data[3].temperatureMin)-32)/1.8).toFixed(2) + '°C - '+ (((elemento.daily.data[3].temperatureMax)-32)/1.8).toFixed(2)+'°C</div><div>Viernes: ' + (((elemento.daily.data[4].temperatureMin)-32)/1.8).toFixed(2) + '°C - '+ (((elemento.daily.data[4].temperatureMax)-32)/1.8).toFixed(2)+'°C</div><div>Sábado: ' + (((elemento.daily.data[5].temperatureMin)-32)/1.8).toFixed(2) + '°C - '+ (((elemento.daily.data[5].temperatureMax)-32)/1.8).toFixed(2)+'°C</div><div>Domingo: ' + (((elemento.daily.data[6].temperatureMin)-32)/1.8).toFixed(2) + '°C - '+ (((elemento.daily.data[6].temperatureMax)-32)/1.8).toFixed(2)+'°C</div>');
    });
   fail(function() {
       console.log("error");
   })
   .always(function() {
       console.log("complete");
   });
});
});

