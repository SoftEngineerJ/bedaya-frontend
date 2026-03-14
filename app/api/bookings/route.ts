import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const bookingData = await request.json();

    // Log the booking data (in production, you'd save to database)
    console.log("New booking received:", bookingData);

    // Validate required fields
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "desiredService",
    ];
    for (const field of requiredFields) {
      if (!bookingData[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 },
        );
      }
    }

    // Send confirmation email to student
    await sendConfirmationEmail(bookingData);

    // Send notification email to admin
    await sendAdminNotification(bookingData);

    // In production, you would:
    // 1. Save to database
    // 2. Create lead in CRM system
    // 3. Schedule follow-up tasks

    const successResponse = {
      success: true,
      message: "Booking submitted successfully",
      bookingId: `BK-${Date.now()}`,
      receivedAt: new Date().toISOString(),
    };

    return NextResponse.json(successResponse);
  } catch (error) {
    console.error("Booking API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

async function sendConfirmationEmail(bookingData: any) {
  try {
    const emailContent = {
      to: bookingData.email,
      subject: "تأكيد استلام طلبك - بداية",
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #1e3a8a, #3b82f6); color: white; padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 30px;">
            <h1 style="margin: 0; font-size: 28px;">شكراً لتواصلك مع بداية!</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">تم استلام طلبك بنجاح</p>
          </div>
          
          <div style="background: #f8fafc; padding: 25px; border-radius: 10px; margin-bottom: 20px;">
            <h2 style="color: #1e293b; margin-bottom: 15px;">تفاصيل طلبك:</h2>
            <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #3b82f6;">
              <p style="margin: 5px 0;"><strong>الاسم:</strong> ${bookingData.firstName} ${bookingData.lastName}</p>
              <p style="margin: 5px 0;"><strong>البريد:</strong> ${bookingData.email}</p>
              <p style="margin: 5px 0;"><strong>الهاتف:</strong> ${bookingData.phone}</p>
              <p style="margin: 5px 0;"><strong>الخدمة المطلوبة:</strong> ${bookingData.desiredService}</p>
              ${bookingData.studyLevel ? `<p style="margin: 5px 0;"><strong>المستوى الدراسي:</strong> ${bookingData.studyLevel}</p>` : ""}
              ${bookingData.message ? `<p style="margin: 5px 0;"><strong>رسالة:</strong> ${bookingData.message}</p>` : ""}
            </div>
          </div>
          
          <div style="background: #f0f9ff; padding: 20px; border-radius: 10px; border: 1px solid #bae6fd;">
            <h3 style="color: #0c4a6e; margin-top: 0;">الخطوات التالية:</h3>
            <ul style="color: #0c4a6e; line-height: 1.6;">
              <li>سيقوم فريقنا بمراجعة طلبك خلال 2-4 ساعات</li>
              <li>سنتواصل معك عبر WhatsApp أو الهاتف خلال 24 ساعة</li>
              <li>سنحدد معاً موعد الاستشارة الأولى</li>
              <li>سنبدأ في إعداد خطة مخصصة لتحقيق أهدافك</li>
            </ul>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding: 20px; background: #1e293b; border-radius: 10px;">
            <p style="color: white; margin: 0;">هل لديك أسئلة؟ تواصل معنا مباشرة:</p>
            <p style="color: #60a5fa; margin: 10px 0;">info@studentenhilfe.de</p>
            <a href="https://wa.me/49123456789" style="background: #25d366; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">WhatsApp</a>
          </div>
          
          <div style="text-align: center; margin-top: 30px; color: #64748b; font-size: 14px;">
            <p>هذه رسالة آلية من بداية - شريكك نحو المستقبل الدراسي</p>
          </div>
        </div>
      `,
      text: `
        شكراً لتواصلك مع بداية!
        
        تم استلام طلبك بنجاح:
        
        الاسم: ${bookingData.firstName} ${bookingData.lastName}
        البريد: ${bookingData.email}
        الهاتف: ${bookingData.phone}
        الخدمة: ${bookingData.desiredService}
        ${bookingData.studyLevel ? `المستوى: ${bookingData.studyLevel}` : ""}
        ${bookingData.message ? `رسالة: ${bookingData.message}` : ""}
        
        الخطوات التالية:
        - مراجعة الطلب خلال 2-4 ساعات
        - التواصل معك خلال 24 ساعة
        - تحديد موعد الاستشارة الأولى
        
        info@studentenhilfe.de
      `,
    };

    // In production, send via real email service
    const emailResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL || ""}/api/email`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emailContent),
      },
    );

    if (!emailResponse.ok) {
      console.error("Failed to send confirmation email");
    }
  } catch (error) {
    console.error("Confirmation email error:", error);
  }
}

async function sendAdminNotification(bookingData: any) {
  try {
    const notification = {
      to: "info@studentenhilfe.de", // Admin email
      subject: `طلب جديد: ${bookingData.desiredService} - ${bookingData.firstName} ${bookingData.lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: #dc2626; color: white; padding: 20px; border-radius: 10px; text-align: center; margin-bottom: 20px;">
            <h1 style="margin: 0;">🚨 طلب جديد!</h1>
            <p style="margin: 5px 0;">طلب خدمة جديد من الموقع</p>
          </div>
          
          <div style="background: #fef3c7; padding: 20px; border-radius: 10px; border: 2px solid #f59e0b;">
            <h2 style="color: #92400e; margin-top: 0;">معلومات العميل:</h2>
            <div style="background: white; padding: 15px; border-radius: 5px;">
              <p><strong>الاسم:</strong> ${bookingData.firstName} ${bookingData.lastName}</p>
              <p><strong>البريد:</strong> ${bookingData.email}</p>
              <p><strong>الهاتف:</strong> ${bookingData.phone}</p>
              <p><strong>البلد:</strong> ${bookingData.country || "غير محدد"}</p>
              <p><strong>الخدمة:</strong> ${bookingData.desiredService}</p>
              <p><strong>المستوى:</strong> ${bookingData.studyLevel || "غير محدد"}</p>
              ${bookingData.message ? `<p><strong>رسالة:</strong> ${bookingData.message}</p>` : ""}
            </div>
          </div>
          
          <div style="background: #dbeafe; padding: 20px; border-radius: 10px; margin-top: 20px;">
            <h3 style="color: #1e40af;">إجراءات فورية:</h3>
            <ol style="color: #1e40af; line-height: 1.6;">
              <li>مراجعة الطلب فوراً</li>
              <li>التواصل مع العميل خلال 24 ساعة</li>
              <li>تحديد موعد استشارة</li>
              <li>إعداد عرض سعر مخصص</li>
            </ol>
          </div>
          
          <div style="text-align: center; margin-top: 20px;">
            <a href="https://wa.me/${bookingData.phone.replace(/\D/g, "")}" style="background: #25d366; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">تواصل عبر WhatsApp</a>
            <a href="tel:${bookingData.phone}" style="background: #3b82f6; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-right: 10px;">اتصل الآن</a>
          </div>
        </div>
      `,
    };

    // In production, send via real email service
    const emailResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL || ""}/api/email`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(notification),
      },
    );

    if (!emailResponse.ok) {
      console.error("Failed to send admin notification");
    }
  } catch (error) {
    console.error("Admin notification error:", error);
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "Booking API endpoint" },
    { status: 200 },
  );
}
