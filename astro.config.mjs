import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '',
			locales: {
				root: {
					label: 'Deutsch',
					lang: 'de-de',
			  },
			},
			customCss: [
				'./src/styles/custom.css'
			],
			logo: {
				light: './src/assets/logo_trans.png',
				dark: './src/assets/logo_trans_dark.png',
			},
			social: {
				github: 'https://github.com/oliverlux',
			},
			sidebar: [
				{
					label: 'Fallstudien',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '📄 UseOffice AG', link: '/fallstudien/useoffice-ag/' },
						{ label: '✏️ Notizen Weiterbildung', link: '/fallstudien/weiterbildung/', badge: 'work' },
					],
				},
				{
					label: 'Referenz',
					autogenerate: { directory: 'referenz' },
				},
			],
			editLink: {
				baseUrl: 'https://github.com/oliverlux/bitlearn.ch/edit/main/',
			},
		}),
	],
});
