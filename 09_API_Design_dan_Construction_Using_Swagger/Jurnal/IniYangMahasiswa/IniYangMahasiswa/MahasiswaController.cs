using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace YourNamespace.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MahasiswaController : ControllerBase
    {
        public static List<Mahasiswa> mahasiswaList = new List<Mahasiswa>
        {
            new Mahasiswa
            {
                Name = "Samud",
                Nim = "221110401",
                Course = new List<string> { "Konstruksi", "Perangkat", "Lunak" },
                Year = 2022
            },
            new Mahasiswa
            {
                Name = "Samudmud",
                Nim = "221110402",
                Course = new List<string> { "Terus", "ApaLagiYa", "Hmmmmm" },
                Year = 2022
            },
            new Mahasiswa
            {
                Name = "Samuuuuuud",
                Nim = "221110403",
                Course = new List<string> { "Lupa", "Hehehe", "Kecerdasan Buatan" },
                Year = 2022
            }
        };

        [HttpGet]
        public ActionResult<IEnumerable<Mahasiswa>> GetAllMahasiswa()
        {
            return mahasiswaList;
        }

        [HttpGet("{id}")]
        public ActionResult<Mahasiswa> GetMahasiswaById(int id)
        {
            if (id >= 0 && id < mahasiswaList.Count)
                return mahasiswaList[id];
            return NotFound(new { error = "Mahasiswa tidak ditemukan" });
        }

        [HttpPost]
        public ActionResult AddMahasiswa([FromBody] Mahasiswa mahasiswa)
        {
            mahasiswaList.Add(mahasiswa);
            return Ok(new { pesan = "Mahasiswa berhasil ditambahkan" });
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteMahasiswa(int id)
        {
            if (id >= 0 && id < mahasiswaList.Count)
            {
                var deleted = mahasiswaList[id];
                mahasiswaList.RemoveAt(id);
                return Ok(new { pesan = "Mahasiswa berhasil dihapus", data = deleted });
            }
            return NotFound(new { error = "Mahasiswa tidak ditemukan" });
        }
    }

    public class Mahasiswa
    {
        public string Name { get; set; }
        public string Nim { get; set; }
        public List<string> Course { get; set; }
        public int Year { get; set; }
    }
}
