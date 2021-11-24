module.exports = {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		backgroundcolor: theme => ({
			...theme('color'),
			'darkblue': '#2e4474',
			'lightblue': '#395591'
		})
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
