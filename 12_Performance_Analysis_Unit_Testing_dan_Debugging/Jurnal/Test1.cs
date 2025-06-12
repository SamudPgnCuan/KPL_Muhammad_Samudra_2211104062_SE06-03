using Microsoft.VisualStudio.TestTools.UnitTesting;
using modul12_2211104062;

namespace UnitTesting
{
    [TestClass]
    public class CariNilaiPangkatTests
    {
        [TestMethod]
        public void NormalCase_2Pangkat3_Hasil8()
        {
            Assert.AreEqual(8, Form1.CariNilaiPangkat(2, 3));
        }

        [TestMethod]
        public void B_Zero_Hasil1()
        {
            Assert.AreEqual(1, Form1.CariNilaiPangkat(10, 0));
        }

        [TestMethod]
        public void AB_Zero_Hasil1()
        {
            Assert.AreEqual(1, Form1.CariNilaiPangkat(0, 0));
        }

        [TestMethod]
        public void B_Negatif_HasilMinus1()
        {
            Assert.AreEqual(-1, Form1.CariNilaiPangkat(2, -1));
        }

        [TestMethod]
        public void A_Lebih100_HasilMinus2()
        {
            Assert.AreEqual(-2, Form1.CariNilaiPangkat(101, 3));
        }

        [TestMethod]
        public void B_Lebih10_HasilMinus2()
        {
            Assert.AreEqual(-2, Form1.CariNilaiPangkat(3, 11));
        }

        [TestMethod]
        public void Overflow_Cek_HasilMinus3()
        {
            Assert.AreEqual(-3, Form1.CariNilaiPangkat(99, 9)); 
        }
    }
}
