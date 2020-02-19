import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

export const template = (): HTMLFragment => {
	return html`
		<bnb-headline level="3">anmelden</bnb-headline>
		<div class="newsletter-form">
			<bnb-input
				type="text"
				label="email"
				required
				placeholder="Emailadresse"
			></bnb-input>
			<bnb-input
				type="text"
				label="first name"
				placeholder="Vorname"
			></bnb-input>
			<bnb-input
				type="text"
				label="last name"
				placeholder="Nachname"
			></bnb-input>
			<bnb-checkbox label="accept data protection" required link>
				<bnb-paragraph
					>Ich habe die
					<bnb-link
						value="Datenschutzbestimmunge"
						url="data-protection.html"
						target="_blank"
					></bnb-link>
					und die
					<bnb-link
						value="Nutzungsbedingungen"
						url="data-protection.html"
						target="_blank"
					></bnb-link>
					gelesen und akzeptiert.*</bnb-paragraph
				>
			</bnb-checkbox>
			<bnb-button-cta version="primary" value="Anmelden"></bnb-button-cta>
		</div>
		${createStyle(styles)}
	`;
};
