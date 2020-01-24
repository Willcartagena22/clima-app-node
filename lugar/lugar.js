const axios = require('axios');


const getLugarLatLng = async (dir) => {
  const encodeUrl = encodeURI(dir);
  console.log(encodeUrl);

  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
    headers: {
      'x-rapidapi-key': 'e23bdf3027mshe4ce3f6fa32819dp18f637jsn253b35b7b73a'
    }
  });


  const resp = await instance.get();
  if (resp.data.Results.length === 0) {
    throw new Error(`No hay direcciones para ${dir}`);
  }

  const data = resp.data.Results[0];
  const direccion = data.name;
  const lat = data.lat;
  const long = data.lon;

  return {
    direccion,
    lat,
    long
  }
}

module.exports ={
  getLugarLatLng
}
