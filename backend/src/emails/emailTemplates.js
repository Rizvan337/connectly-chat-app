export function createWelcomeEmailTemplate(name, clientURL) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Connectly</title>
    <style>
      /* Reset some default styles */
      body, p, h1, h2, h3, ul, li, a {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f5f5f5;
        color: #333;
        line-height: 1.6;
        padding: 0;
        margin: 0;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 6px 20px rgba(0,0,0,0.1);
      }
      .header {
        background: linear-gradient(135deg, #36D1DC, #5B86E5);
        text-align: center;
        padding: 40px 20px;
      }
      .header img {
        width: 80px;
        height: 80px;
        margin-bottom: 20px;
        border-radius: 50%;
        background-color: #ffffff;
        padding: 10px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.15);
      }
      .header h1 {
        color: #ffffff;
        font-size: 28px;
        font-weight: 600;
      }
      .content {
        padding: 40px 35px;
      }
      .content p {
        font-size: 16px;
        margin-bottom: 20px;
      }
      .content p strong {
        color: #5B86E5;
        font-size: 18px;
      }
      .steps {
        background-color: #f8f9fa;
        padding: 25px 20px;
        border-radius: 10px;
        margin: 25px 0;
        border-left: 5px solid #36D1DC;
      }
      .steps ul {
        padding-left: 20px;
      }
      .steps li {
        margin-bottom: 12px;
        font-size: 16px;
      }
      .cta-button {
        display: inline-block;
        background: linear-gradient(135deg, #36D1DC, #5B86E5);
        color: white;
        text-decoration: none;
        padding: 14px 40px;
        border-radius: 50px;
        font-weight: 600;
        font-size: 16px;
        transition: all 0.3s ease;
      }
      .cta-button:hover {
        background: linear-gradient(135deg, #5B86E5, #36D1DC);
        transform: translateY(-2px);
      }
      .footer {
        text-align: center;
        padding: 25px 20px;
        color: #999;
        font-size: 12px;
      }
      .footer a {
        color: #5B86E5;
        text-decoration: none;
        margin: 0 8px;
        font-weight: 500;
      }
      @media screen and (max-width: 620px) {
        .content {
          padding: 30px 20px;
        }
        .header {
          padding: 30px 20px;
        }
        .cta-button {
          padding: 12px 25px;
          font-size: 15px;
        }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <img src="https://img.freepik.com/free-vector/hand-drawn-message-element-vector-cute-sticker_53876-118344.jpg?t=st=1741295028~exp=1741298628~hmac=0d076f885d7095f0b5bc8d34136cd6d64749455f8cb5f29a924281bafc11b96c&w=1480" alt="Messenger Logo">
        <h1>Welcome to Connectly!</h1>
      </div>

      <div class="content">
        <p><strong>Hello ${name},</strong></p>
        <p>We're excited to have you join our messaging platform! Connectly connects you with friends, family, and colleagues in real-time, no matter where they are.</p>
        
        <div class="steps">
          <p><strong>Get started in just a few steps:</strong></p>
          <ul>
            <li>Set up your profile picture</li>
            <li>Find and add your contacts</li>
            <li>Start a conversation</li>
            <li>Share photos, videos, and more</li>
          </ul>
        </div>

        <div style="text-align: center; margin: 30px 0;">
          <a href="${clientURL}" class="cta-button">Open Connectly</a>
        </div>

        <p>If you need any help or have questions, we're always here to assist you.</p>
        <p>Happy messaging!</p>

        <p style="margin-top: 25px;">Best regards,<br>The Connectly Team</p>
      </div>

      <div class="footer">
        <p>© 2025 Connectly. All rights reserved.</p>
        <p>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </p>
      </div>
    </div>
  </body>
  </html>
  `;
}
