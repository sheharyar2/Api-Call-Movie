import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
/*export default defineConfig({
  plugins: [react()],
})*/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.REACT_APP_API_DOMAIN': JSON.stringify(env.REACT_APP_API_DOMAIN),
      'process.env.REACT_APP_MOVIE_DB_API_KEY': JSON.stringify(env.REACT_APP_MOVIE_DB_API_KEY)

    },
    plugins: [react()],
  }
})
