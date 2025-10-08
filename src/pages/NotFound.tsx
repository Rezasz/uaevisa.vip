import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';
import { 
  Home, 
  Search, 
  ArrowLeft, 
  AlertCircle,
  Phone,
  Mail,
  MessageCircle
} from 'lucide-react';

export default function NotFoundPage() {
  const popularPages = [
    { path: '/', label: 'صفحه اصلی', icon: Home },
    { path: '/property', label: 'خریداران ملک', icon: Search },
    { path: '/faq', label: 'سؤالات متداول', icon: AlertCircle },
    { path: '/about', label: 'درباره EivanProperties', icon: Phone },
  ];

  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-8xl sm:text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent leading-none">
              ۴۰۴
            </h1>
          </div>

          {/* Error Message */}
          <div className="mb-8 space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800">
              صفحه مورد نظر یافت نشد
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed px-4">
              متأسفانه صفحه‌ای که دنبال آن می‌گردید وجود ندارد یا ممکن است منتقل شده باشد.
            </p>
          </div>

          {/* Search Suggestions */}
          <Card className="mb-8 mx-4 sm:mx-0">
            <CardHeader>
              <CardTitle className="flex items-center justify-center text-lg sm:text-xl">
                <Search className="w-5 h-5 sm:w-6 sm:h-6 ml-2" />
                صفحات محبوب
              </CardTitle>
              <CardDescription className="text-center">
                ممکن است به دنبال یکی از این صفحات باشید:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {popularPages.map((page, index) => {
                  const Icon = page.icon;
                  return (
                    <Link key={index} to={page.path}>
                      <Button 
                        variant="outline" 
                        className="w-full h-auto py-3 px-4 flex items-center justify-start space-x-2 space-x-reverse hover:bg-yellow-50 hover:border-yellow-300 transition-colors"
                      >
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600" />
                        <span className="text-sm sm:text-base">{page.label}</span>
                      </Button>
                    </Link>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 px-4 sm:px-0">
            <Link to="/">
              <Button size="lg" className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-white px-6 sm:px-8 py-3">
                بازگشت به صفحه اصلی
                <Home className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              </Button>
            </Link>
            <Link to="/faq">
              <Button variant="outline" size="lg" className="w-full sm:w-auto px-6 sm:px-8 py-3">
                سؤالات متداول
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              </Button>
            </Link>
          </div>

          {/* Contact Help */}
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200 mx-4 sm:mx-0">
            <CardContent className="pt-6">
              <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-4">
                نیاز به کمک دارید؟
              </h3>
              <p className="text-slate-600 mb-4 text-sm sm:text-base leading-relaxed">
                اگر همچنان نمی‌توانید آنچه را که دنبالش هستید پیدا کنید، با تیم پشتیبانی EivanProperties تماس بگیرید.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-xs sm:text-sm font-medium text-slate-800">تماس</div>
                  <div className="text-xs text-slate-600">مشاوره رایگان</div>
                </div>
                <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mx-auto mb-2" />
                  <div className="text-xs sm:text-sm font-medium text-slate-800">واتساپ</div>
                  <div className="text-xs text-slate-600">+971 54 545 1000</div>
                </div>
                <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 mx-auto mb-2" />
                  <div className="text-xs sm:text-sm font-medium text-slate-800">ایمیل</div>
                  <div className="text-xs text-slate-600">info@eivanproperties.ae</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}