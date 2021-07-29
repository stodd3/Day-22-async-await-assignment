async function getGeo(city) {
  var city = `${city}`;
  var url = `https://geocode.xyz/${city}?json=1`;
  var response = await fetch(url);
  var data = await response.json();
  var lat = data.latt;
  var long = data.longt;
  lat = `Latitude ${lat} `;
  long = `Longitude ${long} `;
  res = city[0].toUpperCase() + city.slice(1).toLowerCase() + ':\n' + lat + '\n' + long
  console.log(res)
}

getGeo('austin');

getGeo('fayettville');
