import { Themes } from './Themes';
import { reversePalette } from 'styled-theme/composer';

const theme = <Themes> {}

theme.palette = {
	primary: ['#4C709B', '#6898C7'],
	primaryText: ['white'],
	primaryBorder: ['#3B5778'],
	secondary: ['#c2185b'],
	danger: ['#d32f2f'],
	alert: ['#ffa000'],
	success: ['#388e3c'],
	white: ['#fff'],
	modalbackground: ['#f7f9fc'],
	grayscale: [
		'#212121',
		'#414141',
		'#616161',
		'#9e9e9e',
		'#bdbdbd',
		'#e0e0e0',
		'#eeeeee',
		'#ffffff',
	],
}

theme.reversePalette = reversePalette(theme.palette);

theme.fonts = {
	primary: 'verdana, arial, sans-serif',
	pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
	quote: 'Georgia, serif',
}

theme.sizes = {
	fontSize: '10pt',
	secondaryFontSize: '8pt',
	headerFontSize: '2em',
	defaultPadding: '3px',
	modalHeaderSize: '30px',
	modalFooterSize: '30px'
}


export default theme