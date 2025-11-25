import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'أحمد العتيبي',
      role: 'مالك فيلا سكنية',
      service: 'تشطيبات وديكورات',
      rating: 5,
      text: 'تعاملت مع أفكار عصرية لتشطيب فيلتي بالكامل، والنتيجة فاقت كل توقعاتي. الفريق محترف جداً، والمواد المستخدمة عالية الجودة، والتصميم الداخلي كان مبهراً. أنصح الجميع بالتعامل معهم.',
      image: '🏠',
    },
    {
      name: 'فهد المطيري',
      role: 'صاحب مشروع تجاري',
      service: 'نظام طاقة شمسية',
      rating: 5,
      text: 'ركبت نظام طاقة شمسية متكامل لمشروعي التجاري مع بطاريات ليثيوم وإنفرتر عالي الكفاءة. الفريق كان دقيقاً في التصميم والتنفيذ، والآن أوفر أكثر من 60% من فاتورة الكهرباء. استثمار يستحق كل ريال!',
      image: '☀️',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            آراء عملائنا
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            نفخر بثقة عملائنا ورضاهم عن خدماتنا
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-amber-100 dark:from-teal-900/30 dark:to-amber-900/30 rounded-full flex items-center justify-center text-3xl">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <div className="inline-block px-3 py-1 bg-teal-100 dark:bg-teal-900/30 rounded-full mb-4">
                <span className="text-sm font-medium text-teal-700 dark:text-teal-400">
                  {testimonial.service}
                </span>
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
