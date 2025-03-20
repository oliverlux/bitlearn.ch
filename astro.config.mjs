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
					label: 'Unterlagen',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '📄 Dossiers', link: '/unterlagen/dossiers/' },
						{ label: '✏️ Notizen Weiterbildung', link: '/unterlagen/weiterbildung/', badge: 'work' },
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
