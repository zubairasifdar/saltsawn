import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
    try {
        // Parse incoming JSON data from the request body
        const data = await request.json();
        
        // Extract form data and package information
        const { name, email, message, package: packageInfo } = data;

        // Log the received data
        console.log("Received form data:", { name, email, message });
        console.log("Received package information:", packageInfo);

        // Configure Nodemailer with your SMTP settings
        const transporter = nodemailer.createTransport({
            host: "smtp.tickpluswise.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: "user-328d4a5bb2009c01",
                pass: "pGYbrwAIHX3IZyBMQK7h3G9Gf7lC",
            },
        });

        // Define the email message
        const mailOptions = {
            from: "saltsawnagency@gmail.com",
            to: "saltsawnagency@gmail.com",
            subject: "New Quote Request",
            text: `
                Name: ${name}
                Email: ${email}
                Message: ${message}
                Package Information:
                Title: ${packageInfo.title}
                Price: ${packageInfo.price}
                Features: ${packageInfo.features.join(", ")}
            `,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        // Return a JSON response indicating success
        return NextResponse.json({
            success: true,
            message: "Form submitted successfully",
        });
    } catch (error) {
        // If an error occurs, return an error response
        console.error("Error processing form submission:", error);
        return NextResponse.error(new Error("Failed to process form submission"));
    }
}
