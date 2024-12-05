const { google } = require("googleapis");
const nodemailer = require("nodemailer");


const CLIENT_ID = process.env.OAUTH_CLIENT_ID;
const CLIENT_SECRET = process.env.OAUTH_CLIENT_SECRET;
const REDIRECT_URI = process.env.OAUTH_REDIRECT_URI;
const REFRESH_TOKEN = process.env.OAUTH_REFRESH_TOKEN;


const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendEmail(formData) {
    try {

        const accessToken = await oAuth2Client.getAccessToken();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: "miriamromaniuc@gmail.com",
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken,
            },
        });

        const mailOptions = {
            from: "miriamromaniuc@gmail.com",
            to: "miriamromaniuc@gmail.com",
            subject: "Hello from Gmail API",
            text: formData.message,            // Message from form
            html: `<h1>Hello from Gmail API</h1><p>${formData.message}</p>`,  // HTML message
        };

        const result = await transporter.sendMail(mailOptions);
        console.log("Email sent:", result);
        return result; // Return the result to the caller

    } catch (error) {
        console.error("Error sending email:", error);
    }
}

// The API route handler
export async function POST(request) {
    try {
        const formData = await request.json(); // Get form data from the request body

        const emailResult = await sendEmail(formData); // Send email

        if (emailResult.accepted) {
            return new Response(JSON.stringify({ success: true }), { status: 200 });
        } else {
            return new Response(JSON.stringify({ success: false, error: emailResult.error }), { status: 500 });
        }
    } catch (error) {
        console.error('Error in POST handler:', error);
        return new Response(JSON.stringify({ success: false, error: 'Internal Server Error' }), { status: 500 });
    }
}