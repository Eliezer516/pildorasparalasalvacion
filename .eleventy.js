// import { format } from 'date-fns' 
const format = require('date-fns/format');
// import { es } from 'date-fns/locale'
const es = require('date-fns/locale/es');

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("./src/asets/");
	eleventyConfig.addWatchTarget("./src/asets/");

	eleventyConfig.addFilter("formatDate", dateinfo => {
		return format(dateinfo, "LLLL dd, uuuu", {locale: es}).replace(/^\w/, (c) => c.toUpperCase())
	})
	
	return {
		dir: {
			input: './src',
			output: './public',
		},
	};
};