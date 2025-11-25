import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface LeadData {
  name: string;
  phone: string;
  email: string;
  service: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const leadData: LeadData = await req.json();

    const emailContent = `
    طلب استشارة جديد من موقع أفكار عصرية

    الاسم: ${leadData.name}
    رقم الجوال: ${leadData.phone}
    البريد الإلكتروني: ${leadData.email}
    الخدمة المطلوبة: ${leadData.service}
    
    التاريخ والوقت: ${new Date().toLocaleString('ar-YE')}
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${Deno.env.get("RESEND_API_KEY")}`,
      },
      body: JSON.stringify({
        from: "noreply@modernideas.yemen",
        to: "modern.ideas006@gmail.com",
        subject: `طلب استشارة جديد من ${leadData.name}`,
        html: `
          <div dir="rtl" style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #0d9488;">طلب استشارة جديد من موقع أفكار عصرية</h2>
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; background-color: #f5f5f5; font-weight: bold; width: 150px;">الاسم:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${leadData.name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; background-color: #f5f5f5; font-weight: bold;">رقم الجوال:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${leadData.phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; background-color: #f5f5f5; font-weight: bold;">البريد الإلكتروني:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${leadData.email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; background-color: #f5f5f5; font-weight: bold;">الخدمة المطلوبة:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${leadData.service}</td>
              </tr>
              <tr>
                <td style="padding: 10px; background-color: #f5f5f5; font-weight: bold;">التاريخ والوقت:</td>
                <td style="padding: 10px;">${new Date().toLocaleString('ar-YE')}</td>
              </tr>
            </table>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`Email service error: ${JSON.stringify(error)}`);
    }

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
