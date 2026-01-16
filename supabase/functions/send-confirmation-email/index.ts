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
  company?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, company, message }: ContactEmailRequest = await req.json();

    // Plain text email optimized for deliverability (no HTML, spam-friendly wording)
    const plainTextEmail = `Hello ${name},

Thank you for contacting Croydon PAT Testing Services.

We have received your enquiry and will get back to you within 1 working day.

Here is a summary of your message:
---
Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ""}
${company ? `Company: ${company}` : ""}

Your Message:
${message}
---

If you have any urgent questions, please call us on 07845 468030.

Best regards,
Will
Croydon PAT Testing Services
www.croydonpat.co.uk

---
You are receiving this email because you submitted an enquiry through our website.
`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Croydon PAT <will@croydonpat.co.uk>",
        to: [email],
        subject: "Your Croydon PAT Enquiry - Confirmation",
        text: plainTextEmail,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      throw new Error(`Resend API error: ${error}`);
    }

    const data = await res.json();
    console.log("Confirmation email sent successfully:", data);

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-confirmation-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
