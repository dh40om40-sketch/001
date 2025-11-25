import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error: dbError } = await supabase.from('leads').insert([
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
        },
      ]);

      if (dbError) throw dbError;

      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-lead-email`;
      const emailResponse = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(formData),
      });

      if (!emailResponse.ok) {
        console.error('Email sending failed, but lead was saved');
      }

      setSubmitStatus('success');
      setFormData({ name: '', phone: '', email: '', service: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ابدأ مشروعك معنا اليوم
            </h2>
            <p className="text-lg text-teal-100">
              املأ النموذج وسيتواصل معك أحد خبرائنا خلال 24 ساعة
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl">
            {submitStatus === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  تم استلام طلبك بنجاح!
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  شكراً لتواصلك معنا. سيقوم فريقنا بالرد عليك في أقرب وقت ممكن.
                </p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-medium transition-colors"
                >
                  إرسال طلب آخر
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold text-gray-900 dark:text-white mb-2"
                  >
                    الاسم الكامل *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-teal-500 dark:focus:border-teal-500 focus:outline-none transition-colors"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-bold text-gray-900 dark:text-white mb-2"
                  >
                    رقم الجوال *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-teal-500 dark:focus:border-teal-500 focus:outline-none transition-colors"
                    placeholder="05XXXXXXXX"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-gray-900 dark:text-white mb-2"
                  >
                    البريد الإلكتروني *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-teal-500 dark:focus:border-teal-500 focus:outline-none transition-colors"
                    placeholder="example@email.com"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-bold text-gray-900 dark:text-white mb-2"
                  >
                    الخدمة المطلوبة *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-teal-500 dark:focus:border-teal-500 focus:outline-none transition-colors"
                  >
                    <option value="">اختر الخدمة</option>
                    <option value="تشطيبات وديكورات">تشطيبات وديكورات</option>
                    <option value="نظام طاقة شمسية">نظام طاقة شمسية</option>
                    <option value="كلاهما">كلاهما (تشطيبات وطاقة شمسية)</option>
                  </select>
                </div>

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
                    <p className="text-red-800 dark:text-red-300 text-sm">
                      حدث خطأ أثناء إرسال النموذج. يرجى المحاولة مرة أخرى.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 disabled:from-gray-400 disabled:to-gray-500 text-white rounded-xl font-bold text-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    'جاري الإرسال...'
                  ) : (
                    <>
                      تحدث مع خبيرنا لبدء مشروعك
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
