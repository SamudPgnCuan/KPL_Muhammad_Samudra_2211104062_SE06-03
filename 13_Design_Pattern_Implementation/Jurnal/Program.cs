using System;
using System.Collections.Generic;

namespace modul13_2211104062
{
    // Singleton class
    public sealed class PusatDataSingleton
    {
        private static PusatDataSingleton _instance;

        // Property menyimpan data
        public List<string> DataTersimpan { get; set; }

        // Konstruktor private
        private PusatDataSingleton()
        {
            DataTersimpan = new List<string>(); // i. Konstruktor isi list kosong
        }

        // ii. Property singleton
        public static PusatDataSingleton GetDataSingleton()
        {
            if (_instance == null)
            {
                _instance = new PusatDataSingleton();
            }
            return _instance;
        }

        // iii. Mengembalikan seluruh data
        public List<string> GetSemuaData()
        {
            return DataTersimpan;
        }

        // iv. Print data satu per satu
        public void PrintSemuaData()
        {
            Console.WriteLine("Data Tersimpan:");
            for (int i = 0; i < DataTersimpan.Count; i++)
            {
                Console.WriteLine($"{i}: {DataTersimpan[i]}");
            }
        }

        // v. Menambahkan data ke list
        public void AddSebuahData(string input)
        {
            DataTersimpan.Add(input);
        }

        // vi. Menghapus data berdasarkan index
        public void HapusSebuahData(int index)
        {
            if (index >= 0 && index < DataTersimpan.Count)
            {
                DataTersimpan.RemoveAt(index);
            }
            else
            {
                Console.WriteLine("Index tidak valid!");
            }
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            // A. Buat dua variable data1 dan data2
            PusatDataSingleton data1;
            PusatDataSingleton data2;

            // B. Isi dengan GetDataSingleton()
            data1 = PusatDataSingleton.GetDataSingleton();
            data2 = PusatDataSingleton.GetDataSingleton();

            // C. Tambahkan data ke data1
            data1.AddSebuahData("Anggota 1: Budi");
            data1.AddSebuahData("Anggota 2: Sari");
            data1.AddSebuahData("Asisten Praktikum: Dimas");

            // D. Print lewat data2 (seharusnya data sama karena singleton)
            Console.WriteLine("\n[Data2: Print Semua Data]");
            data2.PrintSemuaData();

            // E. Hapus nama asisten dari data2
            data2.HapusSebuahData(2); // Hapus "Dimas" (index ke-2)

            // F. Cek hasil pada data1 (harusnya "Dimas" sudah tidak ada)
            Console.WriteLine("\n[Data1: Setelah Penghapusan Asisten]");
            data1.PrintSemuaData();

            // G. Cek jumlah elemen (seharusnya sama)
            Console.WriteLine($"\nJumlah data di data1: {data1.GetSemuaData().Count}");
            Console.WriteLine($"Jumlah data di data2: {data2.GetSemuaData().Count}");
        }

    }
}
