import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbCmsTextIconProps } from './defines';
import BnbIcon from '../../bnb-icon/bnb-icon';
import BnbHeadline from '../../bnb-headline/bnb-headline';
import BnbButtonCTA from '../../bnb-button-cta/bnb-button-cta';

class BnbCmsTextIcon extends Component<BnbCmsTextIconProps, null> {
	public static componentName = 'bnb-cms-text-icon';
	public static attributes = [
		'icon',
		'heading',
		'color',
		{ name: 'button', type: 'object' },
	];

	public static dependencies = [
		BnbIcon as typeof Component,
		BnbHeadline as typeof Component,
		BnbButtonCTA as typeof Component,
	];
	protected readonly defaultProps: BnbCmsTextIconProps = {
		icon: '',
		heading: '',
	};

	public render(): HTMLFragment {
		return template({ ...this.props });
	}
}

export default BnbCmsTextIcon;
