
window.cookieConsentSettings = {
	current_lang: 'cs',
	autoclear_cookies: true, // default: false
	theme_css: '/dist/css/cookie-consent.css', // đźš¨ replace with a valid path
	page_scripts: true, // default: false
	languages: {
		cs: {
			consent_modal: {
				title: 'Tato webovĂˇ strĂˇnka pouĹľĂ­vĂˇ cookies',
				description: 'Tyto webovĂ© strĂˇnky pouĹľĂ­vajĂ­ k poskytovĂˇnĂ­ sluĹľeb, personalizaci reklam a analĂ˝ze nĂˇvĹˇtÄ›vnosti soubory cookies. NÄ›kterĂ© z nich jsou k fungovĂˇnĂ­ strĂˇnky nezbytnĂ©, ale o nÄ›kterĂ˝ch mĹŻĹľete rozhodnout sami. VĂ­ce o pouĹľĂ­vĂˇnĂ­ souborĹŻ cookies se dozvĂ­te nĂ­Ĺľe. MĹŻĹľete je povolit vĹˇechny, jednotlivÄ› vybrat nebo vĹˇechny odmĂ­tnout. VĂ­ce informacĂ­ zĂ­skĂˇte kdykoliv na strĂˇnce ZĂˇsady pouĹľĂ­vĂˇnĂ­ souborĹŻ cookies. <button type="button" data-cc="c-settings" class="cc-link">NastavenĂ­ cookies</button>',
				primary_btn: {
					text: 'PĹ™ijmout vĹˇe',
					role: 'accept_all', // 'accept_selected' or 'accept_all'
				},
				secondary_btn: {
					text: 'Pouze nezbytnĂ©',
					role: 'accept_necessary', // 'settings' or 'accept_necessary'
				},
			},
			settings_modal: {
				title: 'NastavenĂ­ cookies',
				save_settings_btn: 'UloĹľit moje volby',
				accept_all_btn: 'PĹ™ijmout vĹˇe',
				reject_all_btn: 'OdmĂ­tnout vĹˇe',
				close_btn_label: 'ZavĹ™Ă­t',
				cookie_table_headers: [
					{ col1: 'NĂˇzev' },
					{ col2: 'DomĂ©na' },
					{ col3: 'Platnost do' },
					{ col4: 'Popis' },
				],
				blocks: [
					{
						title: 'PouĹľĂ­vanĂ­ cookies',
						description: 'Tyto webovĂ© strĂˇnky pouĹľĂ­vajĂ­ k poskytovĂˇnĂ­ sluĹľeb, personalizaci reklam a analĂ˝ze nĂˇvĹˇtÄ›vnosti soubory cookies. NÄ›kterĂ© z nich jsou k fungovĂˇnĂ­ strĂˇnky nezbytnĂ©, ale o nÄ›kterĂ˝ch mĹŻĹľete rozhodnout sami.',
					},
					{
						title: 'FunkÄŤnĂ­ cookies â€“ vĹľdy povoleno',
						description: 'Tyto soubory cookie jsou nutnĂ© pro zĂˇkladnĂ­ funkce strĂˇnky, a jsou proto vĹľdy povolenĂ©.',
						toggle: {
							value: 'necessary',
							enabled: true,
							readonly: true, // cookie categories with readonly=true are all treated as "necessary cookies"
						},
					},
					
						{
							title: 'StatistickĂ© cookies',
							description: 'StatistickĂ© cookies umoĹľĹujĂ­ majitelĹŻm webovĂ˝ch strĂˇnek sledovat nĂˇvĹˇtÄ›vnost webovĂ˝ch strĂˇnek. AnonymnÄ› sbĂ­rajĂ­ a sdÄ›lujĂ­ informace, kterĂ© pomĂˇhajĂ­ k vylepĹˇovĂˇnĂ­ obsahu strĂˇnek.',
							toggle: {
								value: 'analytics', // your cookie category
								enabled: false,
								readonly: false,
							},
							/*cookie_table: [
								// list of all expected cookies
								{
									col1: '^_ga', // match all cookies starting with "_ga"
									col2: 'google.com',
									col3: '2 years',
									col4: 'description ...',
									is_regex: true,
								},
								{
									col1: '_gid',
									col2: 'google.com',
									col3: '1 day',
									col4: 'description ...',
								},
							],*/
						},
						{
							title: 'MarketingovĂ© cookies',
							description:
								'MarketingovĂ© cookies jsou pouĹľĂ­vĂˇny pro sledovĂˇnĂ­ nĂˇvĹˇtÄ›vnĂ­kĹŻ na webovĂ˝ch strĂˇnkĂˇch. ZĂˇmÄ›rem je zobrazit reklamu, kterĂˇ je relevantnĂ­ a zajĂ­mavĂˇ pro jednotlivĂ©ho uĹľivatele a tĂ­mto hodnotnÄ›jĹˇĂ­ pro vydavatele a inzerenty tĹ™etĂ­ch stran.',
							toggle: {
								value: 'targeting',
								enabled: false,
								readonly: false,
							},
						},
						{
							title: 'SociĂˇlnĂ­ mĂ©dia',
							description: 'Se souhlasem cookies sociĂˇlnĂ­ch mĂ©diĂ­ se mĹŻĹľete pĹ™ipojit k vaĹˇim sociĂˇlnĂ­m sĂ­tĂ­m a prostĹ™ednictvĂ­m nich sdĂ­let obsah z naĹˇĂ­ webovĂ© strĂˇnky. PĹ™i vypnutĂ­ se nebude zobrazovat obsah ze sociĂˇlnĂ­ch sĂ­tĂ­ (Facebook, Twitter, Youtube a dalĹˇĂ­).',
							toggle: {
								value: 'social',
								enabled: false,
								readonly: false,
							},
						},
					
				],
			},
		},
	},
}

window.addEventListener("message", function(e) {
	if (e.data === 'cc-settings') {
		document.querySelector('[data-cc="c-settings"]').click();
	}
}, false);

document.querySelectorAll('[data-src][data-cookiecategory="social"][data-placeholder]').forEach(function(el) {
	el.src = '/inc/cookie-consent-frame.html';
});

document.querySelectorAll('[data-cookie-placeholder]').forEach(function(el) {
	el.addEventListener("click", function() {
		if (typeof el.dataset.cookiePlaceholder !== 'undefined') {
			document.querySelector('[data-cc="c-settings"]').click();
		}
	});
});