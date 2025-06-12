using System;
using AljabarLibraries;

namespace TesAljabar
{
    class Program
    {
        static void Main(string[] args)
        {
            // Contoh 1: Akar dari persamaan kuadrat x^2 - 3x - 10 = 
            double[] akar = Aljabar.AkarPersamaanKuadrat(new double[]{ 1, -3, -10 });
            Console.WriteLine("Akar-akar persamaan:");
            Console.WriteLine($"{akar[0]}, {akar[1]}");


            // Contoh 2: Hasil kuadrat dari 2x - 
            double[] hasil = Aljabar.HasilKuadrat(new double[] { 2, -3 });
            Console.WriteLine("\nHasil kuadrat:");
            Console.WriteLine($"{hasil[0]}, {hasil[1]}, {hasil[2]}");
        }
    }
}
