import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  CheckCircle, 
  AlertCircle, 
  Building, 
  Users, 
  Award, 
  Shield,
  ArrowLeft,
  Info,
  Phone,
  Mail,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  const services = [
    'راهنمایی در انتخاب پروژه‌های ملکی قابل‌قبول برای ویزای طلایی',
    'بررسی حقوقی و فنی ملک (موقعیت، مجوزها، طرح‌ها)',
    'هماهنگی معاملات خرید، پرداخت‌ها و انتقالات مالی بین‌المللی',
    'جمع‌آوری مدارک مورد نیاز برای درخواست ویزای طلایی',
    'هماهنگی معاینات پزشکی، کارت امارات و سایر مراحل اداری',
    'ارسال درخواست و پیگیری‌های مرتبط تا صدور ویزا',
    'پشتیبانی پس از اخذ ویزا ("خدمات پس از فروش اقامت")، مانند تمدید، تغییر آدرس و مشاوره حقوقی',
    'ارائه گزارش شفاف هزینه‌ها و بدون هزینه مخفی',
    'پاسخگویی چند زبانه (فارسی، انگلیسی، عربی و غیره)'
  ];

  const whyChooseUs = [
    'خدمات ویزای طلایی رایگان برای خریداران ملکی واجد شرایط — ما هزینه خدمات را در قیمت ملک لحاظ می‌کنیم',
    'تیم متخصص با تجربه املاک و امور مهاجرتی در امارات',
    'مشارکت با دفاتر حقوقی، بانک‌ها و توسعه‌دهندگان معتبر',
    'تعهد به صداقت و شفافیت در معاملات',
    'پشتیبانی کامل از ابتدا تا انتهای فرآیند',
    'به‌روزرسانی مستمر شما درباره وضعیت درخواستتان'
  ];

  const processSteps = [
    'تماس اولیه یا ارسال فرم درخواست آنلاین به ما',
    'مشاوره تخصصی بر اساس اهداف و بودجه شما',
    'انتخاب پروژه ملکی واجد شرایط',
    'همکاری در جمع‌آوری مدارک و ارسال درخواست ویزا',
    'پیگیری مستمر تا صدور ویزا و ارائه پشتیبانی پس از آن'
  ];

  return (
    <Layout 
      title="درباره EivanProperties"
      description="در EivanProperties، ما باور داریم که خرید ملک در امارات باید فراتر از یک سرمایه‌گذاری باشد — باید راهی به آینده، اقامت و امنیت بلندمدت باشد."
    >
      {/* Company Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <Card className="text-center">
          <CardContent className="pt-6">
            <Building className="w-12 h-12 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-800">املاک</div>
            <div className="text-sm text-slate-600">تخصصی امارات</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <Users className="w-12 h-12 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-800">مشتریان</div>
            <div className="text-sm text-slate-600">بین‌المللی</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <Award className="w-12 h-12 text-yellow-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-800">رایگان</div>
            <div className="text-sm text-slate-600">خدمات ویزا</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <Shield className="w-12 h-12 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-800">شفافیت</div>
            <div className="text-sm text-slate-600">کامل</div>
          </CardContent>
        </Card>
      </div>

      {/* Vision and Mission */}
      <Card className="mb-8 bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200">
        <CardHeader>
          <CardTitle className="text-center text-blue-800">
            چشم‌انداز و مأموریت ما
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-slate-800 mb-3">چشم‌انداز</h4>
              <p className="text-slate-700 leading-relaxed">
                چشم‌انداز ما این است که سرمایه‌گذاری ملکی در امارات را برای مشتریان بین‌المللی به مسیر مطمئن و بدون دغدغه تبدیل کنیم، به طوری که از ابتدا تا انتها، راهنمای شما باشیم.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 mb-3">مأموریت</h4>
              <p className="text-slate-700 leading-relaxed">
                مأموریت ما ارائه مشاوره واقعی، پروژه‌های منتخب و پشتیبانی کامل در فرآیند اخذ اقامت و ویزای طلایی است.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Services */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <CheckCircle className="w-6 h-6 text-green-600 ml-2" />
            خدمات ما
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div key={index} className="flex items-start space-x-3 space-x-reverse p-3 bg-green-50 rounded-lg">
                <Badge variant="outline" className="mt-1 flex-shrink-0 bg-green-100 text-green-700">
                  {index + 1}
                </Badge>
                <span className="text-slate-700 text-sm">{service}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Why Choose Us */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Award className="w-6 h-6 text-yellow-600 ml-2" />
            چرا EivanProperties؟
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="flex items-start space-x-3 space-x-reverse">
                <CheckCircle className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                <span className="text-slate-700">{reason}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Process */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Info className="w-6 h-6 text-blue-600 ml-2" />
            نحوه شروع همکاری
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4 space-x-reverse">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <span className="text-slate-700">{step}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Legal Notice */}
      <Alert className="mb-8 border-orange-200 bg-orange-50">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          <strong>توجهات حقوقی:</strong> لازم به ذکر است که تصمیم نهایی صدور ویزا با مراجع دولتی امارات است و EivanProperties نقشی تسهیل‌کننده دارد. ما تضمین صدور ویزا نداریم، اما تمام تلاش خود را برای موفقیت پرونده شما به کار خواهیم بست.
        </AlertDescription>
      </Alert>

      {/* Contact Information */}
      <Card className="bg-gradient-to-br from-slate-50 to-blue-50 border-slate-200">
        <CardHeader>
          <CardTitle className="text-center text-slate-800">
            برای مشاوره و بررسی واجد شرایط بودن، با ما تماس بگیرید
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <Globe className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-slate-800 mb-1">وب‌سایت</h4>
              <p className="text-slate-600 text-sm">eivanproperties.ae</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <Mail className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-slate-800 mb-1">ایمیل</h4>
              <p className="text-slate-600 text-sm">info@eivanproperties.ae</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <Phone className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <h4 className="font-semibold text-slate-800 mb-1">تماس</h4>
              <p className="text-slate-600 text-sm">(بسته به آدرس دفتر در امارات)</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/property">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  شروع فرآیند ویزای طلایی
                  <ArrowLeft className="w-5 h-5 mr-2" />
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                درخواست مشاوره رایگان
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </Layout>
  );
}