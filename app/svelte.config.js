import preprocess from 'svelte-preprocess';
//import adapter from '@sveltejs/adapter-auto';
//import { adapter } from 'sveltekit-adapter-aws';
import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		preprocess({
			postcss: true,
			sourceMap: true 
		})
	],

	kit: {
		adapter: adapter({
			edge: false,
			split:false
		})
	}
};

export default config;