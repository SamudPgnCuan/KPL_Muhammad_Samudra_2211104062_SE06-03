using System;
using MatematikaLibraries;

namespace TesMatematika
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("FPB(60, 45) = " + Matematika.FPB(60, 45));
            Console.WriteLine("KPK(12, 8) = " + Matematika.KPK(12, 8));

            Console.WriteLine("Turunan([1, 4, -12, 9]) = " + Matematika.Turunan(new int[] { 1, 4, -12, 9 }));
            Console.WriteLine("Integral([4, 6, -12, 9]) = " + Matematika.Integral(new int[] { 4, 6, -12, 9 }));
        }
    }
}
