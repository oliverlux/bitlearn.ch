import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '',
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
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
