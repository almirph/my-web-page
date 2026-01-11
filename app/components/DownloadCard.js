'use client';

import { useEffect } from 'react';
import animatedBackground from '../utils/AnimatedBackground';
// import ThemeSwitcher from './ThemeSwitcher';

export default function DownloadCard() {
  useEffect(() => {
    const cleanup = animatedBackground();
    return cleanup;
  }, []);

  return (
    <div className="relative flex h-[50vh] w-full items-center justify-center">
      <canvas id="animation" className="h-[50vh] w-full"></canvas>
      
      {/* <ThemeSwitcher /> */}
      
      <a
        href="/Almir_Philipe.pdf"
        download
        className="absolute z-10 no-underline"
      >
        <button className="rounded-lg border-2 border-white px-8 py-3 text-lg font-medium text-white transition-all hover:bg-white/10 hover:shadow-lg cursor-pointer">
          DOWNLOAD CURRICULUM
        </button>
      </a>
      
      <div className="absolute bottom-5 z-10 flex items-center justify-center gap-10">
        <a
          href="https://www.linkedin.com/in/almir-arruda-070408156/"
          target="_blank"
          rel="noreferrer"
          className="transition-transform hover:scale-110"
        >
          <img
            src="/imagens/logo-linkedin.png"
            alt="LinkedIn"
            className="h-8 w-8"
          />
        </a>
        <a
          href="https://github.com/almirph"
          target="_blank"
          rel="noreferrer"
          className="transition-transform hover:scale-110"
        >
          <img
            src="/imagens/logo-github.png"
            alt="GitHub"
            className="h-8 w-8"
          />
        </a>
      </div>
    </div>
  );
}
