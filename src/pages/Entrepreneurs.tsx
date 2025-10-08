import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  CheckCircle, 
  AlertCircle, 
  Lightbulb, 
  DollarSign, 
  Clock, 
  TrendingUp,
  ArrowLeft,
  Info,
  Rocket
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EntrepreneursPage() {
  const requirements = [
    'داشتن یک پروژه یا کسب‌وکار با ارزش حداقل ۵۰۰٬۰۰۰ درهم امارات',
    'پروژه باید دارای جنبه نوآورانه یا فناوری محور باشد',
    'تأییدیه یا پذیرش از یک شرکت شتاب‌دهنده (Incubator) معتبر اماراتی یا ارزیاب مالی',
    'مدارک هویتی، معاینه پزشکی، سلامت و سوپیشینه',
    'مدارک مالی کسب‌وکار، طرح تجاری، پیش‌بینی مالی و مستندات عملکرد',
    'ممکن است نیاز به ارائه سابقه موفقیت یا گزارش عملکرد اولیه داشته باشید'
  ];

  const steps = [
    'آماده‌سازی طرح تجاری و مستندات مالی کسب‌وکار',
    'جلب تأییدیه یا پذیرش از شتاب‌دهنده‌ها یا سرمایه‌گذاران معتبر اماراتی',
    'ارسال درخواست و مدارک به مرجع مهاجرت یا واحد کسب‌وکار مرتبط',
    'ارزیابی تخصصی و فنی پروژه ممکن است انجام شود',
    'معاینه پزشکی و صدور کارت اماراتی (Emirates ID)',
    'صدور اقامت طلایی ۵ ساله برای شما و در صورت تطابق، اعضای خانواده'
  ];

  const benefits = [
    'اقامت ۵ ساله قابل تمدید',
    'امکان راه‌اندازی و اداره کسب‌وکار مستقل',
    'امکان حمایت از همسر، فرزندان و کارکنان کلیدی',
    'دسترسی به بسترهای نوآوری و اکوسیستم کارآفرینی امارات'
  ];

  const considerations = [
    'طرح تجاری و مدل درآمدی باید شفاف و منطقی باشد',
    'پروژه باید دارای نوآوری یا مزیت رقابتی باشد',
    'ممکن است نیاز به گزارش دوره‌ای عملکرد باشد',
    'هر گونه تغییر قوانین ممکن است اثرگذار باشد',
    'در تمدید، پروژه و عملکرد کسب‌وکار باید همچنان فعال و معتبر باشد'
  ];

  const businessTypes = [
    { type: 'فناوری و نرم‌افزار', description: 'استارتاپ‌های تکنولوژی، اپلیکیشن‌ها، پلتفرم‌های دیجیتال' },
    { type: 'هوش مصنوعی', description: 'راه‌حل‌های AI، یادگیری ماشین، اتوماسیون هوشمند' },
    { type: 'فین‌تک', description: 'خدمات مالی دیجیتال، پرداخت‌های نوآورانه، بلاک‌چین' },
    { type: 'سلامت دیجیتال', description: 'تله‌مدیسین، اپلیکیشن‌های سلامت، تجهیزات پزشکی نوآورانه' },
    { type: 'انرژی پاک', description: 'فناوری‌های تجدیدپذیر، راه‌حل‌های پایدار، کارایی انرژی' },
    { type: 'تجارت الکترونیک', description: 'پلتفرم‌های آنلاین، مارکت‌پلیس، لجستیک هوشمند' }
  ];

  return (
    <Layout 
      title="ویزای طلایی امارات برای کارآفرینان و نوآوران"
      description="برای کسانی که به دنبال راه‌اندازی کسب‌وکاری نوآورانه هستند یا استارتاپی در امارات اجرا می‌کنند، مسیر ویژه‌ای برای اخذ ویزای طلایی ۵ ساله در نظر گرفته شده است."
    >
      {/* Key Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <Card className="text-center">
          <CardContent className="pt-6">
            <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-800">۵۰۰K</div>
            <div className="text-sm text-slate-600">درهم حداقل سرمایه</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <Clock className="w-12 h-12 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-800">۵</div>
            <div className="text-sm text-slate-600">سال اقامت</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <Lightbulb className="w-12 h-12 text-yellow-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-800">نوآوری</div>
            <div className="text-sm text-slate-600">محور فناوری</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <Rocket className="w-12 h-12 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-800">استارتاپ</div>
            <div className="text-sm text-slate-600">کسب‌وکار نوپا</div>
          </CardContent>
        </Card>
      </div>

      {/* Innovation Alert */}
      <Alert className="mb-8 border-yellow-200 bg-yellow-50">
        <Lightbulb className="h-4 w-4" />
        <AlertDescription>
          <strong>نکته کلیدی:</strong> این ویزا برای کسب‌وکارهای نوآورانه و فناوری محور طراحی شده است. جنبه نوآوری و پتانسیل رشد پروژه شما بسیار مهم است.
        </AlertDescription>
      </Alert>

      {/* Business Types */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <TrendingUp className="w-6 h-6 text-purple-600 ml-2" />
            انواع کسب‌وکارهای واجد شرایط
          </CardTitle>
          <CardDescription>
            امارات به دنبال جذب استارتاپ‌ها و کسب‌وکارهای نوآورانه در حوزه‌های زیر است:
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {businessTypes.map((business, index) => (
              <div key={index} className="p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-slate-800 mb-2">{business.type}</h4>
                <p className="text-sm text-slate-600">{business.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Requirements */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <CheckCircle className="w-6 h-6 text-green-600 ml-2" />
            شرایط واجد صلاحیت بودن
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {requirements.map((req, index) => (
              <div key={index} className="flex items-start space-x-3 space-x-reverse">
                <Badge variant="outline" className="mt-1 flex-shrink-0 bg-green-100 text-green-700">
                  {index + 1}
                </Badge>
                <span className="text-slate-700">{req}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Process Steps */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Info className="w-6 h-6 text-blue-600 ml-2" />
            مراحل اقدام
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {steps.map((step, index) => (
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

      {/* Benefits and Considerations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-green-700">مزایا و نکات ویژه</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-2 space-x-reverse">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-orange-700">نکات احتیاط</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {considerations.map((consideration, index) => (
                <div key={index} className="flex items-start space-x-2 space-x-reverse">
                  <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">{consideration}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Incubator Info */}
      <Card className="mb-8 bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200">
        <CardHeader>
          <CardTitle className="text-center text-blue-800">
            شتاب‌دهنده‌ها و مراکز نوآوری امارات
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-slate-700 mb-4">
            برای اخذ ویزای کارآفرینی، معمولاً نیاز به تأیید از یکی از شتاب‌دهنده‌ها یا مراکز نوآوری معتبر امارات دارید. این مراکز پروژه شما را ارزیابی کرده و در صورت تأیید، پشتیبانی لازم را ارائه می‌دهند.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="p-3 bg-white rounded-lg">
              <strong>Dubai Future Accelerators</strong>
              <p className="text-slate-600 mt-1">شتاب‌دهنده رسمی دبی</p>
            </div>
            <div className="p-3 bg-white rounded-lg">
              <strong>Abu Dhabi Global Market</strong>
              <p className="text-slate-600 mt-1">مرکز مالی ابوظبی</p>
            </div>
            <div className="p-3 bg-white rounded-lg">
              <strong>Sharjah Research</strong>
              <p className="text-slate-600 mt-1">مرکز تحقیقات شارجه</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="bg-gradient-to-br from-purple-50 to-pink-100 border-purple-200">
        <CardContent className="pt-8 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            آیا ایده نوآورانه‌ای دارید؟
          </h3>
          <p className="text-lg text-slate-600 mb-6 max-w-3xl mx-auto">
            اگر استارتاپ یا کسب‌وکار فناوری محوری دارید که می‌تواند در اکوسیستم نوآوری امارات مشارکت کند، فرصت اقامت ۵ ساله را بررسی کنید.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/faq">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                سؤالات متداول
                <ArrowLeft className="w-5 h-5 mr-2" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg">
                مشاوره کسب‌وکار
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </Layout>
  );
}