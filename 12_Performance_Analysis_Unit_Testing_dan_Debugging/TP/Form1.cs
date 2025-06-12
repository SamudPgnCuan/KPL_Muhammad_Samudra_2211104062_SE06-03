using System;
using System.Windows.Forms;

namespace tpmodul12_2211104062
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        // Method untuk menentukan tanda bilangan
        public string CariTandaBilangan(int a)
        {
            if (a < 0)
                return "Negatif";
            else if (a > 0)
                return "Positif";
            else
                return "Nol";
        }

        // Event saat tombol diklik
        private void button1_Click(object sender, EventArgs e)
        {
            int angka;
            if (int.TryParse(textBox1.Text, out angka))
            {
                string hasil = CariTandaBilangan(angka);
                label1.Text = "Tanda: " + hasil;
            }
            else
            {
                label1.Text = "Masukkan angka yang valid!";
            }
        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {
            // Boleh dikosongkan jika tidak digunakan
        }
    }
}
