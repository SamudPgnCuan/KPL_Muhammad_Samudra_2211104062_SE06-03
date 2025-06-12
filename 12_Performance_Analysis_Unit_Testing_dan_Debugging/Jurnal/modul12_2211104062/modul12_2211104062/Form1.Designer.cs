namespace modul12_2211104062
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            textBoxB = new TextBox();
            labelHasil = new Label();
            textBoxA = new TextBox();
            buttonHitung = new Button();
            SuspendLayout();
            // 
            // textBoxB
            // 
            textBoxB.Location = new Point(546, 75);
            textBoxB.Name = "textBoxB";
            textBoxB.Size = new Size(100, 23);
            textBoxB.TabIndex = 1;
            // 
            // labelHasil
            // 
            labelHasil.AutoSize = true;
            labelHasil.Location = new Point(378, 216);
            labelHasil.Name = "labelHasil";
            labelHasil.Size = new Size(32, 15);
            labelHasil.TabIndex = 3;
            labelHasil.Text = "label";
            labelHasil.Click += labelHasil_Click;
            // 
            // textBoxA
            // 
            textBoxA.Location = new Point(168, 75);
            textBoxA.Name = "textBoxA";
            textBoxA.Size = new Size(100, 23);
            textBoxA.TabIndex = 0;
            // 
            // buttonHitung
            // 
            buttonHitung.Location = new Point(338, 148);
            buttonHitung.Name = "buttonHitung";
            buttonHitung.Size = new Size(125, 23);
            buttonHitung.TabIndex = 4;
            buttonHitung.Text = "Hitung Pangkat";
            buttonHitung.UseVisualStyleBackColor = true;
            buttonHitung.Click += buttonHitung_Click;
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(800, 450);
            Controls.Add(buttonHitung);
            Controls.Add(labelHasil);
            Controls.Add(textBoxB);
            Controls.Add(textBoxA);
            Name = "Form1";
            Text = "Form1";
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private TextBox textBoxB;
        private Label labelHasil;
        private TextBox textBoxA;
        private Button buttonHitung;
    }
}
