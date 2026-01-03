import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, service, message }: ContactEmailRequest = await req.json();

    console.log("Received contact form submission:", { name, email, phone, service });

    // Validate required fields
    if (!name || !email || !message) {
      console.error("Missing required fields");
      return new Response(
        JSON.stringify({ error: "Моля, попълнете всички задължителни полета." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error("Invalid email format");
      return new Response(
        JSON.stringify({ error: "Моля, въведете валиден имейл адрес." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send notification email to the business
    console.log("Sending notification email to business...");
    const notificationRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Център Дар <info@darpsiholog.com>",
        to: ["info@dar-psiholog.com"],
        subject: `Ново запитване от ${name}`,
        html: `
          <h2>Ново запитване от уебсайта</h2>
          <p><strong>Име:</strong> ${name}</p>
          <p><strong>Имейл:</strong> ${email}</p>
          <p><strong>Телефон:</strong> ${phone || "Не е посочен"}</p>
          <p><strong>Услуга:</strong> ${service || "Не е избрана"}</p>
          <p><strong>Съобщение:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
      }),
    });

    if (!notificationRes.ok) {
      const errorData = await notificationRes.text();
      console.error("Failed to send notification email:", errorData);
    } else {
      console.log("Notification email sent successfully");
    }

    // Send confirmation email to the user
    console.log("Sending confirmation email to user...");
    const confirmationRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Център Дар <info@darpsiholog.com>",
        to: [email],
        subject: "Получихме вашето запитване | Център Дар",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #523A5E;">Благодарим ви, ${name}!</h1>
            <p>Получихме вашето запитване и ще се свържем с вас в рамките на 24 часа.</p>
            <p><strong>Вашето съобщение:</strong></p>
            <blockquote style="border-left: 4px solid #523A5E; padding-left: 16px; margin: 16px 0; color: #666;">
              ${message.replace(/\n/g, "<br>")}
            </blockquote>
            <p>Ако имате спешен въпрос, можете да ни се обадите на <a href="tel:+359887079256">+359 887 079 256</a>.</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;">
            <p style="color: #888; font-size: 14px;">
              С уважение,<br>
              Екипът на Център Дар<br>
              <a href="https://darpsiholog.bg">darpsiholog.bg</a>
            </p>
          </div>
        `,
      }),
    });

    if (!confirmationRes.ok) {
      const errorData = await confirmationRes.text();
      console.error("Failed to send confirmation email:", errorData);
    } else {
      console.log("Confirmation email sent successfully");
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Вашето запитване беше изпратено успешно!" 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: "Възникна грешка при изпращането. Моля, опитайте отново." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
