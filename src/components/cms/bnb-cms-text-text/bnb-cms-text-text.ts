import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbCmsTextTextProps } from './defines';
import BnbHeadline from '../../bnb-headline/bnb-headline';

class BnbCmsTextText extends Component<BnbCmsTextTextProps, null> {
	public static componentName = 'bnb-cms-text-text';

	public static dependencies = [BnbHeadline as typeof Component];

	protected readonly defaultProps: BnbCmsTextTextProps = {};

	public render(): HTMLFragment {
		return template({ ...this.props });
	}
}

export default BnbCmsTextText;
