import { Award, Shield, Users, Zap } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Award,
      title: 'جودة استثنائية',
      description: 'نستخدم أفضل المواد والمنتجات العالمية لضمان تشطيبات فاخرة وأنظمة طاقة عالية الكفاءة',
    },
    {
      icon: Users,
      title: 'فريق محترف',
      description: 'مهندسون وفنيون ذوو خبرة واسعة في التصميم والتنفيذ والتركيب',
    },
    {
      icon: Zap,
      title: 'حلول متكاملة',
      description: 'مصدر واحد لجميع احتياجاتك من التشطيبات الداخلية إلى أنظمة الطاقة الشمسية',
    },
    {
      icon: Shield,
      title: 'ضمان شامل',
      description: 'نقدم ضمانات قوية على جميع منتجاتنا وخدماتنا لراحة بالك',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            من نحن
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            <strong>أفكار عصرية للديكورات والطاقة البديلة</strong> هي شركة رائدة تجمع بين عالمين: الأناقة الفاخرة في التشطيبات والتصميم الداخلي، والابتكار المستدام في حلول الطاقة الشمسية. نفخر بتقديم خدمات متكاملة عالية الجودة، من توريد مواد التشطيبات الراقية إلى تصميم وتركيب أنظمة الطاقة الشمسية المتطورة، لنكون شريكك الموثوق في تحويل رؤيتك إلى واقع مُبهر ومستدام.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-500 transition-all duration-300 hover:shadow-xl"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
