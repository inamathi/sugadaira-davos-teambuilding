import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'git@github.com:inamathi/sugadaira-davos-teambuilding.git',
  plugins: [react()],
})
