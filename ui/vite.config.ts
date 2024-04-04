import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import fs from 'fs'

if (fs.existsSync('../.env')) {
  dotenv.config({ path: '../.env' })
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: parseInt(process.env.APP_PORT ?? '3000'),
  }
})