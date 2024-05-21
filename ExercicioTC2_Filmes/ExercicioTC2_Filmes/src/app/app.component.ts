import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieComponent } from './components/movie/movie.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MovieComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ExercicioTC2_Filmes';
}
