import { ButtonState } from 'interfaces';

export interface ButtonProps {
	state?: ButtonState,
	children?: string,
	style?: React.CSSProperties,
	onClick?(event: React.MouseEvent<HTMLAnchorElement>): void
};
