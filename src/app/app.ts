import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AvailableGamesComponent } from "./components/available-games/available-games.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('games-lib');
}
