import { Palette, Hammer, Package, Wrench, Sun, Battery, Zap, Wind } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            خدماتنا المتكاملة
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            نقدم حلولاً شاملة في مجالين رئيسيين لتلبية جميع احتياجاتك
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-amber-50 to-white dark:from-gray-900 dark:to-gray-900/50 rounded-3xl p-8 border-2 border-amber-200 dark:border-amber-900/30 shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  الديكورات والتشطيبات
                </h3>
                <p className="text-amber-700 dark:text-amber-400 font-medium">
                  أناقة وفخامة لا مثيل لها
                </p>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              نتخصص في توريد أرقى مواد التشطيبات، مع تقديم خدمات التصميم والتركيب الاحترافي لمنزلك أو مكتبك.
            </p>

            <div className="space-y-4">
              {[
                { icon: Package, title: 'توريد مواد التشطيبات', desc: 'بلاط، أرضيات، دهانات، ديكورات جدارية' },
                { icon: Hammer, title: 'التصميم الداخلي', desc: 'تصاميم عصرية وفريدة حسب ذوقك' },
                { icon: Wrench, title: 'التركيب والتنفيذ', desc: 'فريق محترف يضمن تنفيذاً دقيقاً' },
              ].map((service) => (
                <div key={service.title} className="flex items-start gap-4 p-4 bg-white/70 dark:bg-gray-800/70 rounded-xl">
                  <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                      {service.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-white dark:from-gray-900 dark:to-gray-900/50 rounded-3xl p-8 border-2 border-teal-200 dark:border-teal-900/30 shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center">
                <Sun className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  الطاقة البديلة
                </h3>
                <p className="text-teal-700 dark:text-teal-400 font-medium">
                  حلول مستدامة وصديقة للبيئة
                </p>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              نوفر أنظمة طاقة شمسية متكاملة عالية الكفاءة، من التصميم إلى التركيب والصيانة.
            </p>

            <div className="space-y-4">
              {[
                { icon: Sun, title: 'الألواح الشمسية', desc: 'ألواح عالية الجودة بكفاءة تحويل متقدمة' },
                { icon: Battery, title: 'بطاريات الليثيوم', desc: 'تخزين طاقة موثوق وطويل الأمد' },
                { icon: Zap, title: 'أجهزة الإنفرتر', desc: 'تحويل طاقة آمن ومستقر' },
                { icon: Wind, title: 'مكيفات شمسية', desc: 'تبريد موفر للطاقة يعمل بالطاقة الشمسية' },
              ].map((service) => (
                <div key={service.title} className="flex items-start gap-4 p-4 bg-white/70 dark:bg-gray-800/70 rounded-xl">
                  <div className="w-10 h-10 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                      {service.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
