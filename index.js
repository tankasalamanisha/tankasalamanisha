//index.js
const Mustache = require('mustache');
const fs = require('fs');
const MUSTACHE_MAIN_DIR = './main.mustache';

/**
 * DATA is the object that contains all the data to be provided to Mustache.
 */
let DATA = {
	name: 'Manisha Akshita T V',
	date: new Date().toLocaleDateString('en-GB',{
		weekday: 'long',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		timeZoneName: 'short',
		timeZone: 'Asia/Kolkata',
	}),
};

/**
 * A- Open 'main.mustache'
 * B- Ask Mustache to render our file with data
 * C- Create a README.md file with generated output
 */

function generateReadMe(){
   fs.readFile(MUSTACHE_MAIN_DIR, (err, data) => {
	   if (err) throw err;
	   const output = Mustache.render(data.toString(), DATA);
	   fs.writeFileSync('README.md', output);
   });
}

generateReadMe();
