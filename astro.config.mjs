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
					label: '📂 Angebote',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '📚 Konzeption Schulungen', link: '/angebote/konzeption/' },
						{ label: '✏️ Erstellung Unterlagen', link: '/angebote/unterlagen/' },
					],
				},
				{
					label: '💭 Gedanken',  
					autogenerate: { directory: 'gedanken' },
				},
			],
			editLink: {
				baseUrl: 'https://github.com/oliverlux/bitlearn.ch/edit/main/',
			},
		}),
	],
});
