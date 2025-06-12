using System;
using System.Windows.Forms;

namespace modul12_2211104062
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        public static int CariNilaiPangkat(int a, int b)
        {
            if (b == 0)
                return 1;
            if (b < 0)
                return -1;
            if (b > 10 || a > 100)
                return -2;

            try
            {
                checked
                {
                    int hasil = 1;
                    for (int i = 0; i < b; i++)
                    {
                        hasil *= a;
                    }
                    return hasil;
                }
            }
            catch (OverflowException)
            {
                return -3;
            }
        }

        private void buttonHitung_Click(object sender, EventArgs e)
        {
            int a, b;
            if (int.TryParse(textBoxA.Text, out a) && int.TryParse(textBoxB.Text, out b))
            {
                int hasil = CariNilaiPangkat(a, b);
                labelHasil.Text = "Hasil: " + hasil.ToString();
            }
            else
            {
                labelHasil.Text = "Input tidak valid!";
            }
        }

        //private void buttonHitung_Click(object sender, EventArgs e)
        //{
        //    labelHasil.Text = "Tombol ditekan!";
        //} //buat debug tadi

        private void labelHasil_Click(object sender, EventArgs e)
        {

        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }
    }
}
