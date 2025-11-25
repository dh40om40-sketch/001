import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-teal-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">أ</span>
              </div>
              <div>
                <h3 className="text-white font-bold">أفكار عصرية</h3>
                <p className="text-xs text-gray-400">للديكورات والطاقة البديلة</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              شريكك الموثوق في التشطيبات الفاخرة وحلول الطاقة المستدامة
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm hover:text-teal-400 transition-colors">
                  من نحن
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm hover:text-teal-400 transition-colors">
                  خدماتنا
                </a>
              </li>
              <li>
                <a href="#locations" className="text-sm hover:text-teal-400 transition-colors">
                  فروعنا
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-sm hover:text-teal-400 transition-colors">
                  آراء العملاء
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">خدماتنا</h4>
            <ul className="space-y-2 text-sm">
              <li>توريد مواد التشطيبات</li>
              <li>التصميم الداخلي</li>
              <li>أنظمة الطاقة الشمسية</li>
              <li>بطاريات الليثيوم</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">تواصل معنا</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span dir="ltr">775001803</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span dir="ltr">784867372</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span dir="ltr">modern.ideas006@gmail.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <span>عدن، اليمن</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2024 أفكار عصرية للديكورات والطاقة البديلة. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
