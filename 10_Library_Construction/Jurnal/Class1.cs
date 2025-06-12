using System;

namespace MatematikaLibraries
{
    public static class Matematika
    {
        // A. FPB
        public static int FPB(int input1, int input2)
        {
            while (input2 != 0)
            {
                int temp = input2;
                input2 = input1 % input2;
                input1 = temp;
            }
            return input1;
        }

        // B. KPK
        public static int KPK(int input1, int input2)
        {
            return (input1 * input2) / FPB(input1, input2);
        }

        // C. Turunan
        public static string Turunan(int[] persamaan)
        {
            string hasil = "";
            int pangkat = persamaan.Length - 1;

            for (int i = 0; i < persamaan.Length - 1; i++)
            {
                int koef = persamaan[i] * pangkat;
                if (koef == 0)
                {
                    pangkat--;
                    continue;
                }

                string term = (koef > 0 && hasil != "") ? $" + {koef}" : (koef < 0 ? $" - {Math.Abs(koef)}" : $"{koef}");
                term += (pangkat - 1 > 0) ? $"x^{pangkat - 1}" :
                        (pangkat - 1 == 0 ? "x" : "");
                hasil += term;

                pangkat--;
            }

            return hasil;
        }

        // D. Integral
        public static string Integral(int[] persamaan)
        {
            string hasil = "";
            int pangkat = persamaan.Length;

            for (int i = 0; i < persamaan.Length; i++)
            {
                int pembilang = persamaan[i];
                int penyebut = pangkat;
                double hasilBagi = (double)pembilang / penyebut;

                string formatted = hasilBagi % 1 == 0 ? $"{(int)hasilBagi}" : $"{hasilBagi:0.##}";
                string term = (hasil != "" && hasilBagi > 0) ? $" + {formatted}" : (hasilBagi < 0 ? $" - {formatted.TrimStart('-')}" : $"{formatted}");

                term += pangkat == 1 ? "x" : $"x^{pangkat}";
                hasil += term;

                pangkat--;
            }

            hasil += " + C";
            return hasil;
        }
    }
}
