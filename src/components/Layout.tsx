import { ReactNode } from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title, description }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50" dir="rtl">
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {title && (
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3 sm:mb-4 leading-tight">
              {title}
            </h1>
            {description && (
              <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed px-2">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </main>
      
      {/* Footer */}
      <footer className="bg-slate-800 text-white py-6 sm:py-8 mt-12 sm:mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-4 sm:mb-6">
            {/* Company Info */}
            <div className="text-center md:text-right">
              <h3 className="text-lg sm:text-xl font-bold mb-2">UAEVisa.vip</h3>
              <p className="text-slate-300 mb-2 text-sm sm:text-base">راهنمای کامل ویزای طلایی امارات</p>
              <p className="text-xs sm:text-sm text-slate-400">
                برای مشاوره رایگان با <strong>EivanProperties.ae</strong> تماس بگیرید
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="text-center">
              <h4 className="font-semibold mb-3 text-sm sm:text-base">لینک‌های مفید</h4>
              <div className="space-y-2 text-xs sm:text-sm">
                <Link to="/faq" className="block text-slate-300 hover:text-white transition-colors">
                  سؤالات متداول
                </Link>
                <Link to="/about" className="block text-slate-300 hover:text-white transition-colors">
                  درباره EivanProperties
                </Link>
                <Link to="/disclaimer" className="block text-slate-300 hover:text-white transition-colors">
                  سلب مسئولیت
                </Link>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-3 text-sm sm:text-base">تماس با ما</h4>
              <div className="space-y-1 text-xs sm:text-sm text-slate-300">
                <p>ایمیل: info@eivanproperties.ae</p>
                <p>واتساپ: <span dir="ltr">+971 54 545 1000</span></p>
                <p>
                  وب‌سایت: 
                  <a 
                    href="https://www.eivanproperties.ae/fa" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-white transition-colors mr-1"
                  >
                    eivanproperties.ae
                  </a>
                </p>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-slate-700 pt-4 text-center">
            <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 space-y-2 sm:space-y-0">
              <div>
                © ۲۰۲۵ UAEVisa.vip - تمامی حقوق محفوظ است
              </div>
              <div className="text-center sm:text-right">
                محتوای این وب‌سایت صرفاً جهت اطلاع‌رسانی است و تضمینی برای صدور ویزا نمی‌باشد. 
                <Link to="/disclaimer" className="text-slate-300 hover:text-white mr-1">
                  متن کامل
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}