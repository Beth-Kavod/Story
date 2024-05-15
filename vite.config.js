import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import dotenv from 'dotenv'
dotenv.config()

export default defineConfig({
	plugins: [sveltekit()],
	server: {
    proxy: {
			'/api/': {
				target: process.env.ApiHostname,
				changeOrigin: true, // Required for virtual hosted sites
        rewrite: (path) => path.replace(/^\/api/, '') // Optional rewrite if your API endpoints don't include "/api/"
			}
		}
	}
});
