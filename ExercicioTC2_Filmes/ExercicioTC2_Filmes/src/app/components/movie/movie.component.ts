import { Component, inject, OnInit } from '@angular/core';
import { MovieService } from '../../service/movie/movie.service';


@Component({
    selector: 'app-movie',
    standalone: true,
    imports: [],
    templateUrl: './movie.component.html',
    styleUrl: './movie.component.css',
})
export class MovieComponent implements OnInit {
    movies: any = [];
    private movieService = inject(MovieService);

    ngOnInit(): void {this.loadMovies()}
    constructor() {}
    loadMovies() {
        this.movieService.getMovies().subscribe({
            next: (res: any) => {
                this.movies = res.results;
                console.log(res.results);
            },
            error(err) {
                console.log('Erro ao realizar o fetch de filmes', err);
            },
        });
    }
}
