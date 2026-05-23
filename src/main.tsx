import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "@fontsource/poppins"; // Import Poppins font
import { Toaster } from "react-hot-toast";
import App from './App.tsx'
import { SchoolConfigProvider } from './context/SchoolConfigContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SchoolConfigProvider>
      <App />
    </SchoolConfigProvider>
    <Toaster />

  </StrictMode>,
)
