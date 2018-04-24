import * as React from 'react';
import * as chroma from 'chroma-js';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';
import { switchProp, ifProp } from 'styled-tools';
import { ButtonProps } from './Button.interface';

const Spinner = require('../../../media/btn_spinner.gif');

const CustomButton = ({ state, onClick,...rest } :ButtonProps) =>  <a onClick={state === "disabled" ? () => {}: onClick} {...rest}/>;

const Button = styled(CustomButton)`
	display: inline-block;
	background-color: ${
		switchProp('state', {
			success: palette('success', 0),
			failed: palette('danger', 0),
			disabled: chroma(palette('grayscale', 2)()).brighten(),
			loading: palette('grayscale', 4)
		}, palette('primary', 0))
	};
	color: ${palette('primaryText', 0)};
	border: 1px solid ${palette('primaryBorder', 0)};
	font-family: ${font('primary')};
	padding: .3rem 1rem;
	font-size: 12px;

	${ifProp({ state: 'loading' }, `
		background-image: url(${Spinner});
		background-size: 30%;
		background-repeat: no-repeat;
		background-position: center;
		color: transparent;
	`, '')}

	&:hover {
		background-color: ${
			switchProp('state', {
				success: chroma(palette('success', 0)()).brighten(),
				failed: chroma(palette('danger', 0)()).brighten(),
				disabled: chroma(palette('grayscale', 2)()).brighten(),
				loading: chroma(palette('grayscale', 2)()).brighten()
			}, chroma(palette('primary', 0)()).brighten(0))
		};
	};
	cursor: pointer;
`;
/*background-image: url(${logo});*/

/** @component */
export default Button;
