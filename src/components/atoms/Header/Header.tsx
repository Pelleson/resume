import styled from 'styled-components';
import { font, size, palette } from 'styled-theme';

const Header = styled.span`
	margin-bottom: 2.33em;
	font-size: ${size('headerFontSize')};
	font-family: ${font('primary')};
	color: ${palette('grayscale', 2)};
`;

/** @component */
export default Header;