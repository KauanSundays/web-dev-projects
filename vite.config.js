// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   base: "portfolio",
//   // server: {
//   //   open: true,
//   // },
//   // build: {
//   //   outDir: 'dist'
//   // }
// });
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'  // Este é o diretório onde os arquivos de build serão colocados
  }
});

