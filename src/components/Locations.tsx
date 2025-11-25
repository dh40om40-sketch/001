import { MapPin, Phone, Map } from 'lucide-react';

export default function Locations() {
  const branch = {
    name: 'فرع أفكار عصرية',
    address: 'عدن - شارع التسعين - جولة العمري - قتحت شارع الخمسين',
    phones: ['775001803', '784867372'],
    mapUrl: 'https://maps.app.goo.gl/XG2veYjD55711e5FA',
  };

  return (
    <section id="locations" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            فروعنا
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            موقعنا الرئيسي في عدن
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-500 transition-all duration-300 hover:shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {branch.name}
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {branch.address}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 flex-wrap">
                {branch.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="flex items-center gap-3 px-4 py-2 bg-teal-50 dark:bg-teal-900/20 rounded-lg hover:bg-teal-100 dark:hover:bg-teal-900/40 transition-colors"
                  >
                    <Phone className="w-5 h-5 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                    <span className="text-teal-700 dark:text-teal-300 font-medium" dir="ltr">
                      {phone}
                    </span>
                  </a>
                ))}
              </div>

              <a
                href={branch.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white rounded-lg font-bold transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Map className="w-5 h-5" />
                الموقع على الخريطة
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-3xl mx-auto bg-gradient-to-r from-teal-50 to-amber-50 dark:from-gray-800 dark:to-gray-800/50 rounded-2xl p-8 text-center border border-gray-200 dark:border-gray-700">
          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            نطاق الخدمة
          </h4>
          <p className="text-gray-700 dark:text-gray-300">
            نخدم جميع أنحاء اليمن بالإضافة إلى فروعنا، نقدم خدمات التوصيل والتركيب لجميع مناطق والمحافظات
          </p>
        </div>
      </div>
    </section>
  );
}
