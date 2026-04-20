import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GameStore } from '../../store/library.store';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav class="bg-gray-900 border-b border-gray-800 px-6 py-4 flex justify-between items-center">
      <div class="flex items-center gap-2">
        <div class="bg-blue-600 p-1.5 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
        <span class="text-white font-bold text-xl tracking-tight"
          >GAME<span class="text-blue-500">VAULT</span></span
        >
      </div>

      <div class="flex items-center gap-6">
        <a routerLink="/" class="text-gray-300 hover:text-white transition-colors">Store</a>

        <a
          routerLink="/library"
          class="relative group text-gray-300 hover:text-white transition-colors"
        >
          <span>My Library</span>

          @if (store.gamesCount() > 0) {
            <span
              class="absolute -top-2 -right-4 bg-green-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-4.5 text-center shadow-sm"
            >
              {{ store.gamesCount() }}
            </span>
          }
        </a>
      </div>
    </nav>
  `,
})
export class NavbarComponent {
  readonly store = inject(GameStore);
}
