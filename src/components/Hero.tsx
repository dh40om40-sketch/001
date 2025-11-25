import { ArrowLeft, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzE0YjhjYyIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-40"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 dark:bg-teal-900/30 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            <span className="text-sm font-medium text-teal-800 dark:text-teal-300">
              رائدون في التشطيبات الفاخرة والطاقة المستدامة
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            التشطيبات الراقية والطاقة المستدامة
            <span className="block mt-2 bg-gradient-to-r from-teal-600 to-amber-600 bg-clip-text text-transparent">
              رؤيتك... مُنجزة!
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            نقدم حلولاً متكاملة تجمع بين أرقى مواد التشطيبات والتصميم الداخلي المبتكر، مع أحدث أنظمة الطاقة الشمسية المستدامة
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white rounded-xl font-bold text-lg shadow-lg shadow-teal-500/30 transition-all duration-300 flex items-center justify-center gap-2"
            >
              اطلب استشارة مجانية الآن
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </a>

            <a
              href="#services"
              className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 hover:border-teal-600 dark:hover:border-teal-500 rounded-xl font-bold text-lg transition-all duration-300"
            >
              استكشف خدماتنا
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
            {[
              { number: '500+', label: 'مشروع مكتمل' },
              { number: '15+', label: 'سنة خبرة' },
              { number: '98%', label: 'رضا العملاء' },
              { number: '24/7', label: 'دعم فني' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
    </section>
  );
}
