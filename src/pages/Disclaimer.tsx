import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  AlertTriangle, 
  Shield, 
  Info, 
  Phone, 
  Mail, 
  Globe,
  MessageCircle,
  ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DisclaimerPage() {
  const governmentEntities = [
    'اداره کل اقامت و امور خارجیان دبی (GDRFA)',
    'اداره فدرال هویت، تابعیت، گمرک و امنیت بندرها (ICP)',
    'اداره اراضی و املاک دبی (DLD)'
  ];

  const contactInfo = [
    { 
      icon: Globe, 
      label: 'وب‌سایت', 
      value: 'www.EivanProperties.ae',
      color: 'text-blue-600'
    },
    { 
      icon: MessageCircle, 
      label: 'واتساپ', 
      value: '+971 54 545 1000',
      color: 'text-green-600'
    },
    { 
      icon: Mail, 
      label: 'ایمیل', 
      value: 'info@eivanproperties.ae',
      color: 'text-purple-600'
    }
  ];

  return (
    <Layout 
      title="سلب مسئولیت و شرایط استفاده"
      description="اطلاعات مهم درباره استفاده از وب‌سایت uaevisa.vip و خدمات EivanProperties"
    >
      {/* Important Notice */}
      <Alert className="mb-8 border-red-200 bg-red-50">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          <strong>توجه مهم:</strong> لطفاً قبل از استفاده از خدمات، این صفحه را به دقت مطالعه کنید. استفاده از وب‌سایت به معنی پذیرش شرایط ذکر شده است.
        </AlertDescription>
      </Alert>

      {/* Introduction */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Info className="w-6 h-6 text-blue-600 ml-2" />
            مقدمه
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 leading-relaxed">
            به وب‌سایت <strong>uaevisa.vip</strong> خوش آمدید.
          </p>
          <p className="text-slate-700 leading-relaxed">
            هدف این وب‌سایت ارائه‌ی اطلاعات عمومی و آموزشی درباره ویزای طلایی امارات (UAE Golden Visa) و تسهیل دسترسی متقاضیان به منابع معتبر و خدمات مشاوره‌ای شرکت Eivan Properties است.
          </p>
          <Alert className="border-yellow-200 bg-yellow-50">
            <Info className="h-4 w-4" />
            <AlertDescription>
              مطالب و اطلاعات درج‌شده در این وب‌سایت صرفاً برای اطلاع‌رسانی بوده و به‌منزله‌ی مشاوره‌ی رسمی حقوقی یا مهاجرتی از سوی دولت امارات یا هر نهاد رسمی دیگر نمی‌باشد.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Section 1: Independence */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>۱. عدم وابستگی به نهادهای دولتی</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 leading-relaxed">
            وب‌سایت <strong>uaevisa.vip</strong>، برند مستقلی است و هیچ‌گونه وابستگی مستقیم یا غیرمستقیم به نهادهای دولتی امارات ندارد، از جمله:
          </p>
          <div className="bg-slate-50 p-4 rounded-lg">
            <ul className="space-y-2">
              {governmentEntities.map((entity, index) => (
                <li key={index} className="flex items-center text-slate-700">
                  <div className="w-2 h-2 bg-slate-400 rounded-full ml-3 flex-shrink-0"></div>
                  {entity}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-slate-700 leading-relaxed">
            تمامی اطلاعات درباره شرایط، مدارک و هزینه‌ها بر اساس منابع رسمی مانند <strong>u.ae</strong> و <strong>dubailand.gov.ae</strong> گردآوری شده است، اما ممکن است در گذر زمان تغییر کند.
          </p>
        </CardContent>
      </Card>

      {/* Section 2: No Guarantee */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-red-700">۲. عدم تضمین صدور ویزا</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-red-200 bg-red-50">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>هیچ‌یک از خدمات یا اطلاعات ارائه‌شده در این وب‌سایت به معنی تضمین صدور ویزا یا اقامت از سوی دولت امارات نیست.</strong>
            </AlertDescription>
          </Alert>
          <p className="text-slate-700 leading-relaxed">
            تصمیم نهایی در مورد صدور، تمدید یا رد ویزا به‌طور کامل در اختیار مراجع رسمی امارات متحده عربی است.
          </p>
          <p className="text-slate-700 leading-relaxed">
            <strong>Eivan Properties</strong> صرفاً به‌عنوان تسهیل‌کننده‌ی روند آماده‌سازی و ارسال مدارک عمل می‌کند و مسئولیتی در قبال تصمیم نهایی مقامات ندارد.
          </p>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card className="mb-8 bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200">
        <CardHeader>
          <CardTitle className="text-center text-blue-800">
            ۸. تماس با ما
          </CardTitle>
          <CardDescription className="text-center">
            اگر پرسشی درباره محتوای این صفحه یا فرآیند خدمات دارید، لطفاً با ما در تماس باشید:
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <Globe className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-slate-800 mb-1">وب‌سایت</h4>
              <p className="text-slate-600 text-sm">www.EivanProperties.ae</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <Mail className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-slate-800 mb-1">ایمیل</h4>
              <p className="text-slate-600 text-sm">info@eivanproperties.ae</p>
            </div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6 text-green-600 ml-2" />
              <span className="font-semibold text-slate-800">واتساپ: +971 54 545 1000</span>
            </div>
            <p className="text-sm text-slate-600 mb-4">📍 Eivan Properties – دفتر دبی</p>
          </div>
        </CardContent>
      </Card>

      {/* Summary Box */}
      <Card className="bg-gradient-to-br from-slate-50 to-blue-50 border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center text-center justify-center">
            <Shield className="w-6 h-6 text-slate-600 ml-2" />
            ✳️ نسخه خلاصه (برای نمایش در پاورقی وب‌سایت)
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-slate-700 leading-relaxed mb-4">
              محتوای این وب‌سایت صرفاً جهت اطلاع‌رسانی است و تضمینی برای صدور ویزا توسط دولت امارات نمی‌باشد.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              برای راهنمایی رسمی، لطفاً به <strong>EivanProperties.ae</strong> مراجعه کنید یا در واتساپ با شماره <strong>+971 54 545 1000</strong> تماس بگیرید.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/about">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  تماس با EivanProperties
                  <ArrowLeft className="w-5 h-5 mr-2" />
                </Button>
              </Link>
              <Link to="/">
                <Button variant="outline" size="lg">
                  بازگشت به صفحه اصلی
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </Layout>
  );
}