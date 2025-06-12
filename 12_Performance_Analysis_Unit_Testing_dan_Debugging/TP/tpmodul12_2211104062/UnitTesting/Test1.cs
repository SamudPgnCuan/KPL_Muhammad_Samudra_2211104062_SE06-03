using Microsoft.VisualStudio.TestTools.UnitTesting;
using tpmodul12_2211104062;  

namespace UnitTesting
{
    [TestClass]
    public class CariTandaBilanganTests
    {
        private Form1 form;

        [TestInitialize]
        public void Setup()
        {
            form = new Form1();
        }

        [TestMethod]
        public void TestNegatif()
        {
            var result = form.CariTandaBilangan(-5);
            Assert.AreEqual("Negatif", result);
        }

        [TestMethod]
        public void TestPositif()
        {
            var result = form.CariTandaBilangan(10);
            Assert.AreEqual("Positif", result);
        }

        [TestMethod]
        public void TestNol()
        {
            var result = form.CariTandaBilangan(0);
            Assert.AreEqual("Nol", result);
        }
    }
}
