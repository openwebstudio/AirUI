import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'air-example',
  styleUrl: 'air-example.css',
  shadow: true,
})
export class HeroSection {

  render() {
    return (
      <Host>
            <air-topbar>
      <air-link-button
        href="https://github.com/SisyphusZheng/AirComponents"
        icon="https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/github.svg"
        label="Documents"
        textColor="text-white-500"
      ></air-link-button>
      <air-link-button
        href="https://github.com/SisyphusZheng/air-components-starter"
        icon="https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/github.svg"
        label="Starter"
        textColor="text-white-500"
      ></air-link-button>
    </air-topbar>
    
        <div class="grid min-h-screen overflow-hidden place-items-center">
          <div class="flex flex-col justify-between w-full max-w-6xl gap-4 p-4 mt-10 mb-48 text-black">
            <h1 class="flex flex-col gap-2 py-4 mb-2 font-extrabold text-center text-black">
              {/* Centered the logo */}
              <div class="flex justify-center items-center mb-2">
                <img 
                  src="assets/air-components-logo.svg" 
                  alt="Air Components Logo" 
                  class="w-20 lg:w-32"  // Adjust the width as needed
                />
              </div>
            </h1>
            <div class="flex flex-col items-center justify-center w-full space-y-10 lg:space-x-4 lg:space-y-0 lg:flex-row">
              <div class="flex items-center w-full max-w-md gap-2 p-5 font-mono text-xs bg-transparent border-2 rounded-md md:text-base sm:text-sm border-opacity-40 text-black">
                <code>$</code>
                <code>npm -D air-components</code>
              </div>
            </div>

            <div class="flex flex-col gap-4 py-4 mb-2 font-extrabold text-center items-center justify-center">
              <div class="flex items-center justify-center gap-2 text-black">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current text-black">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Tailwind, Stencil, Vite, Pnpm</span>
              </div>
              <div class="flex items-center justify-center gap-2 text-black">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current text-black">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Clean Code</span>
              </div>
              <div class="flex items-center justify-center gap-2 text-black">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current text-black">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Easy to use</span>
              </div>
            </div>
          </div>
        </div>

        <air-foot-nav>
      <span slot="title">My Custom Footer</span>
      <span slot="description">Custom description for my footer component.</span>
      <span slot="extra-description">Additional description goes here.</span>
      <a slot="external-link" href="https://example.com">Visit My Website</a>
      <span slot="links-title">Important Links</span>
    </air-foot-nav>
      </Host>
    );
  }
}
