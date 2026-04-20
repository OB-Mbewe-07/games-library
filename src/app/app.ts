import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AvailableGamesComponent } from "./components/available-games/available-games.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('games-lib');
}
