import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbCmsContactProps, BnbCmsContactMethods } from './defines';

export const template = (
	data: BnbCmsContactProps & BnbCmsContactMethods,
): HTMLFragment => {
	return html`
		<bnb-headline level="3">Kontakt</bnb-headline>
		<div class="contact__wrapper">
			<div class="contact__text">
				<bnb-paragraph>
					<slot />
				</bnb-paragraph>
			</div>
			<div class="contact__inputs">
				<bnb-input
					required
					label="Name"
					placeholder="Name (Bsp: Vorname Nachname)"
					class="contact__inputs--name"
				></bnb-input>
				<bnb-input
					required
					label="Email"
					placeholder="E-Mail (Bsp: kontakt@brandnewbundestag.de)"
					class="contact__inputs--email"
				></bnb-input>
				<bnb-input
					type="number"
					label="Telefon"
					placeholder="Telefon (Bsp: +49157-1234567)"
					class="contact__inputs--telephone"
				></bnb-input>
				<bnb-textarea
					required
					label="Nachricht"
					placeholder="Deine Nachricht"
					class="contact__inputs--message"
				></bnb-textarea>
				<bnb-checkbox
					required
					id="confirmCheckbox"
					label="Datenschutzbestimmungen und Nutzungsbedingungen akzeptiert"
					link
				>
					<bnb-paragraph
						>Ich habe die
						<bnb-link
							value="Datenschutzbestimmungen"
							url="data-protection.html"
							target="_blank"
						></bnb-link>
						gelesen und akzeptiert.*</bnb-paragraph
					>
				</bnb-checkbox>
			</div>
		</div>
		<bnb-button-cta
			value="Absenden"
			version="primary"
			tab-index="0"
		></bnb-button-cta>
		${createStyle(styles)}
	`;
};
