/**
 * The Great Compression — App Router
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './providers/ThemeProvider';
import { HomePage } from './pages/HomePage';
import { CompressionPage } from './pages/CompressionPage';
import { AboutPage } from './pages/AboutPage';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/compressions/:slug" element={<CompressionPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
