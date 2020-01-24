const lugar = require('./lugar/lugar');
const clima =require('./clima/clima');

const argv = require('yargs').options({
  direccion: {
    alias: 'd',
    desc: 'Dirección de la ciudad',
    demand: true
  }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//   .then(console.log)
//   .catch(error =>{
//     console.error('Error prueba',error);
//   });

  // clima.getClima(13.720000,-89.660004)
  // .then(console.log)
  // .catch(err =>{
  //   console.log('Error request 1',err);
  // })

const getInfo=async(direccion)=>{

try {
  const coords= await lugar.getLugarLatLng(direccion);
  const temp= await clima.getClima(coords.lat,coords.long);
  return `el clima del lugar ${coords.direccion} es de ${temp}.`

} catch (e) {
  return `No se pudo determinar el clima de ${direccion}`
}


//salida
//el clima del lugar es :
//No se pudo determinar el clima de :
}

getInfo(argv.direccion)
.then(console.log)
.catch(console.log);
