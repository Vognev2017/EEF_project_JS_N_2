const fs = require('fs');
const axios = require('axios');
const moment = require('moment');

const init = async () => {

    let name = moment(new Date()).format('X') + '.log';

    let path = `${__dirname}/${name}`;

    const result = await axios.get("https://swapi.dev/api/planets/4");

    let planet = 'name: ' + result.data.name +
        '\n' + 'rotation_period: ' + result.data.rotation_period +
        '\n' + 'orbital_period: ' + result.data.orbital_period +
        '\n' + 'diameter: ' + result.data.diameter +
        '\n' + 'climate: ' + result.data.climate +
        '\n' + 'gravity: ' + result.data.gravity +
        '\n' + 'terrain: ' + result.data.terrain +
        '\n' + 'surface_water: ' + result.data.surface_water +
        '\n' + 'population: ' + result.data.population +
        '\n' + 'created: ' + result.data.created;

    await fs.writeFile(path, planet, (err) => {
        if (err) throw err;
        console.log('Data has been written!');
    });
}
init()