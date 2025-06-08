using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using MovieApi.Models;

namespace MovieApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MoviesController : ControllerBase
    {
        public static List<Movie> MovieList = new List<Movie>
        {
            new Movie
            {
                Title = "The Shawshank Redemption",
                Director = "Frank Darabont",
                Stars = new List<string> { "Tim Robbins", "Morgan Freeman", "Bob Gunton" },
                Description = "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
            },
            new Movie
            {
                Title = "The Godfather",
                Director = "Francis Ford Coppola",
                Stars = new List<string> { "Marlon Brando", "Al Pacino", "James Caan" },
                Description = "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
            },
            new Movie
            {
                Title = "The Dark Knight",
                Director = "Christopher Nolan",
                Stars = new List<string> { "Christian Bale", "Heath Ledger", "Aaron Eckhart" },
                Description = "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests."
            }
        };

        [HttpGet]
        public ActionResult<List<Movie>> GetAllMovies()
        {
            return MovieList;
        }

        [HttpGet("{id}")]
        public ActionResult<Movie> GetMovieById(int id)
        {
            if (id >= 0 && id < MovieList.Count)
            {
                return MovieList[id];
            }
            return NotFound(new { error = "Movie tidak ditemukan" });
        }

        [HttpPost]
        public ActionResult AddMovie([FromBody] Movie movie)
        {
            MovieList.Add(movie);
            return Ok(new { pesan = "Movie berhasil ditambahkan" });
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteMovie(int id)
        {
            if (id >= 0 && id < MovieList.Count)
            {
                var deleted = MovieList[id];
                MovieList.RemoveAt(id);
                return Ok(new { pesan = "Movie berhasil dihapus", data = deleted });
            }
            return NotFound(new { error = "Movie tidak ditemukan" });
        }
    }
}
