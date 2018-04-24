import { Themes } from './Themes';
import { reversePalette } from 'styled-theme/composer';

const theme = <Themes> {}

theme.palette = {
	primary: ['#4C709B', '#6898C7'],
	primaryText: ['#ffffff'],
	primaryBorder: ['#3B5778'],
	secondary: ['#c2185b'],
	danger: ['#d32f2f'],
	alert: ['#ffa000'],
	success: ['#388e3c'],
	white: ['#fff']
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
	headerFontSize: '5em',
	defaultPadding: '3px',
	modalHeaderSize: '30px',
	modalFooterSize: '30px'
}

export default theme;
