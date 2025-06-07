using Microsoft.AspNetCore.Mvc;
using MahasiswaAPI.Models;
using System.Collections.Generic;

namespace MahasiswaAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MahasiswaController : ControllerBase
    {
        private static List<Mahasiswa> mahasiswaList = new List<Mahasiswa>
        {
            new Mahasiswa { Nama = "Muhammad Samudra", Nim = "2211104062" },
            new Mahasiswa { Nama = "sapi", Nim = "1302000001" },
            new Mahasiswa { Nama = "kambing", Nim = "1302000002" },
            new Mahasiswa { Nama = "lionel ronaldo", Nim = "1302000003" }
        };

        [HttpGet]
        public ActionResult<List<Mahasiswa>> GetAll()
        {
            return mahasiswaList;
        }

        [HttpGet("{index}")]
        public ActionResult<Mahasiswa> Get(int index)
        {
            if (index >= 0 && index < mahasiswaList.Count)
                return mahasiswaList[index];
            return NotFound(new { error = "Index tidak ditemukan" });
        }

        [HttpPost]
        public ActionResult Tambah(Mahasiswa mhs)
        {
            mahasiswaList.Add(mhs);
            return Ok(new { pesan = "Mahasiswa berhasil ditambahkan" });
        }

        [HttpDelete("{index}")]
        public ActionResult Hapus(int index)
        {
            if (index >= 0 && index < mahasiswaList.Count)
            {
                var deleted = mahasiswaList[index];
                mahasiswaList.RemoveAt(index);
                return Ok(new { pesan = "Mahasiswa berhasil dihapus", data = deleted });
            }
            return NotFound(new { error = "Index tidak ditemukan" });
        }
    }
}
