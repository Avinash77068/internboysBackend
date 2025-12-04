// backend/utils/email/templates.js

export const emailTemplatesForInterview = {

    meetingSchedule: (meetingDate, meetingTime) => ({
        subject: "Internboys.online | Internship Selection & Meeting Schedule",

        html: `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </head>
      <body style="margin:0;padding:0;background-color:#f4f6f8;font-family:Arial,Helvetica,sans-serif;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:40px auto;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,0.08)">
          <tr>
            <td style="padding:24px;text-align:center;background:linear-gradient(90deg,#1e88e5,#5c6bc0);color:#ffffff;">
              <h1 style="margin:0;font-size:20px;">Internboys.online</h1>
              <p style="margin:6px 0 0 0;font-size:14px;opacity:0.95;">Internship Selection & Meeting Schedule</p>
            </td>
          </tr>

          <tr>
            <td style="padding:24px;">
              <h2>Hello,</h2>
              <p>Congratulations! 🎉 You have been selected for the internship at <strong>Internboys.online</strong>.</p>
              <p>Your meeting has been scheduled. See the details below:</p>

              <table width="100%" style="margin:16px 0;">
                <tr>
                  <td style="padding:8px;background:#f1f5f9;border-radius:6px;">
                    <p><strong>Meeting Date:</strong> ${meetingDate}</p>
                    <p><strong>Time:</strong> ${meetingTime}</p>
                    <p><strong>Platform:</strong> Google Meet / Zoom</p>
                  </td>
                </tr>
              </table>

              <p>The meeting will cover your role and internship process. Please join on time.</p>

              <hr style="margin:20px 0;" />
              <p>Thank you,<br/><strong>Team Internboys.online</strong></p>
            </td>
          </tr>

          <tr>
            <td style="padding:14px;background:#f9fafb;text-align:center;font-size:12px;color:#9ca3af;">
              © ${new Date().getFullYear()} Internboys.online — All rights reserved.
            </td>
          </tr>
        </table>
      </body>
    </html>
    `,

        text: `
Hello,

Congratulations! You have been selected for the internship at Internboys.online.

Meeting Date: ${meetingDate}
Time: ${meetingTime}
Platform: Google Meet / Zoom

The meeting will cover your role and internship process.

Thank you,
Team Internboys.online
    `
    }),


    // -----------------------------
    // FUTURE: Forgot Password Email
    // -----------------------------
    forgotPassword: (otp) => ({
        subject: "Internboys.online | Reset Your Password",

        html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
            .container {
                max-width: 480px;
                margin: auto;
                background: #ffffff;
                padding: 25px;
                border-radius: 10px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                font-family: Arial, sans-serif;
                color: #333;
            }
            .title {
                text-align: center;
                color: #1e88e5;
                font-size: 26px;
                margin-bottom: 10px;
            }
            .otp-box {
                font-size: 32px;
                letter-spacing: 6px;
                font-weight: bold;
                text-align: center;
                padding: 15px 0;
                background: #f4f8ff;
                border-radius: 8px;
                margin: 20px 0;
                border: 1px solid #dce7ff;
                color: #1e88e5;
            }
            .footer {
                text-align: center;
                margin-top: 25px;
                font-size: 13px;
                color: #777;
            }
        </style>
    </head>

    <body style="background:#f2f2f2;padding:20px;">
        <div class="container">
            <h1 class="title">Reset Your Password</h1>

            <p>Hello,</p>

            <p>You requested to reset your password. Use the OTP given below:</p>

            <div class="otp-box">${otp}</div>

            <p>This OTP is valid for the next <b>10 minutes</b>.  
            If you didn’t request this, please ignore the email.</p>

            <div class="footer">
                © Internboys.online • All Rights Reserved
            </div>
        </div>
    </body>
    </html>
    `,

        text: `
Reset Your Password

Your OTP: ${otp}

Use this OTP to reset your password. It is valid for 10 minutes.

If you didn’t request this reset, you can ignore this email.

- Internboys.online
    `
    })
,
    // -----------------------------
    // Future: Visitor Email
    // -----------------------------
    visitor: (email) => ({
        subject: "Internboys.online | Thank You for Visiting Our Website",

        html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
            .container {
                max-width: 480px;
                margin: auto;
                background: #ffffff;
                padding: 25px;
                border-radius: 10px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                font-family: Arial, sans-serif;
                color: #333;
            }
            .title {
                text-align: center;
                color: #1e88e5;
                font-size: 26px;
                margin-bottom: 10px;
            }
            .footer {
                text-align: center;
                margin-top: 25px;
                font-size: 13px;
                color: #777;
            }
        </style>
    </head>

    <body style="background:#f2f2f2;padding:20px;">
        <div class="container">
            <h1 class="title">Thank You for Visiting Our Website</h1>

            <p>Hello,</p>

            <p>Thank you for visiting our website ${email}.  We appreciate your interest in Internboys.online. you can apply for internships and can expect a response within 24 hours.</p>

            <div class="footer">
                © Internboys.online • All Rights Reserved
            </div>
        </div>
    </body>
    </html>
    `,

        text: `
Thank You for Visiting Our Website

Thank you for visiting our website ${email}. We appreciate your interest in Internboys.online. you can apply for internships and can expect a response within 24 hours.

- Internboys.online
    `
    })
};