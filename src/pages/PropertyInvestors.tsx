import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  CheckCircle, 
  AlertCircle, 
  Building, 
  DollarSign, 
  Clock, 
  Users,
  ArrowLeft,
  Info
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PropertyInvestorsPage() {
  const requirements = [
    'مالکیت یک یا چند ملک در امارات به ارزش حداقل ۲٬۰۰۰٬۰۰۰ درهم امارات',
    'ملک باید در یکی از اماراتی باشد که سیاست ویزای طلایی ملک در آن اجرا شده است (مثلاً در شهر دبی تحت نظارت بخش املاک دبی / DLD)',
    'اگر ملک تحت وام بانکی (mortgage) باشد، ارایه گواهی بانکی مبنی بر پرداخت حداقل مبلغ تعیین‌شده مجاز است',
    'معمولاً ملک باید برای حداقل ۲ سال مالکیت مستمر نگهداری شود تا در تمدید ویزا دچار مشکل نشوید',
    'وجود مدارک هویتی معتبر متقاضی (پاسپورت، عکس، مدرک اقامت فعلی اگر موجود باشد)',
    'معمولاً نداشتن سوپیشینه کیفری و داشتن سلامت بدنی جهت معاینه پزشکی',
    'ممکن است نیاز به سایر مستندات مانند اظهارنامه بانکی، سند مالکیت یا سند الکترونیکی (e-title) داشته باشد'
  ];

  const steps = [
    'انتخاب ملک مناسب با ارزش کافی و بررسی اینکه ملک در منطقه یا پروژه واجد شرایط است',
    'تأیید مالکیت و جمع‌آوری مدارک مانند سند مالکیت یا قرارداد خرید، گواهی بانکی، مدارک هویتی',
    'ارسال درخواست به مراجع مربوطه مانند اداره املاک (در دبی: DLD – بخش ویزای سرمایه‌گذار ملک) یا اداره مهاجرت امارات',
    'انجام معاینه پزشکی و اخذ بیمه سلامت معتبر',
    'صدور کارت شناسایی اماراتی (Emirates ID) برای متقاضی',
    'صدور ویزای اقامتی طلایی (۵ یا ۱۰ ساله) و ارسال آن برای دارنده از راه الکترونیکی یا حضوری'
  ];

  const costs = [
    { item: 'معاینه پزشکی', amount: '۷۰۰–۹۰۰ درهم' },
    { item: 'کارت امارات (۱۰ سال)', amount: '۱٬۱۵۳ درهم' },
    { item: 'صدور اقامت', amount: '۲٬۸۵۶.۷۵ درهم' },
    { item: 'هزینه خدمات اداره املاک / DLD', amount: '۴٬۰۲۰ درهم' },
    { item: 'هزینه‌های اداری داخلی', amount: '۱٬۱۵۵ درهم' },
  ];

  const benefits = [
    'اقامت بلندمدت (۵ یا ۱۰ سال) قابل تمدید',
    'امکان خروج از امارات بیش از ۶ ماه بدون لغو اقامت',
    'حمایت از همسر، فرزندان و والدین',
    'ثبات حقوقی و امکان برنامه‌ریزی بلندمدت',
    'عدم نیاز به اسپانسر کاری یا محلی'
  ];

  const limitations = [
    'ملک باید در منطقه‌ای باشد که سیاست ویزای طلایی ملک در آن اجرا شده باشد (مثلاً دبی). ملک‌های برخی امارات ممکن است پوشش‌دهی نداشته باشند',
    'باید مالکیت را حداقل برای زمانی نگه داشت',
    'اگر ملک در پروژه خام (off-plan) باشد، شرایط تکمیل پروژه و ارائه سند نهایی ممکن است اثر داشته باشد',
    'در روند تجدید ویزا، لازم است شرایط اولیه حفظ شده باشند',
    'هرگونه تغییر در قوانین مهاجرت ممکن است شرایط را تغییر دهد — لازم است وضعیت قانون را در زمان اقدام بررسی کنید'
  ];

  return (
    <Layout 
      title="ویزای طلایی امارات برای خریداران ملک"
      description="یکی از محبوب‌ترین مسیرهای اخذ ویزای طلایی امارات، از طریق سرمایه‌گذاری ملکی است. اگر ملکی با ارزش قابل‌توجهی در امارات خریداری کرده‌اید، می‌توانید از مزایای اقامت بلندمدت بهره‌مند شوید."
    >
      {/* Key Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <Card className="text-center">
          <CardContent className="pt-6">
            <Building className="w-12 h-12 text-yellow-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-800">۲M+</div>
            <div className="text-sm text-slate-600">درهم حداقل سرمایه</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <Clock className="w-12 h-12 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-800">۵-۱۰</div>
            <div className="text-sm text-slate-600">سال اقامت</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-800">~۱۰K</div>
            <div className="text-sm text-slate-600">درهم هزینه کل</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <Users className="w-12 h-12 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-800">خانواده</div>
            <div className="text-sm text-slate-600">قابل حمایت</div>
          </CardContent>
        </Card>
      </div>

      {/* Requirements */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <CheckCircle className="w-6 h-6 text-green-600 ml-2" />
            شرایط اصلی واجد شرایط بودن
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {requirements.map((req, index) => (
              <div key={index} className="flex items-start space-x-3 space-x-reverse">
                <Badge variant="outline" className="mt-1 flex-shrink-0">{index + 1}</Badge>
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

      {/* Costs */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <DollarSign className="w-6 h-6 text-green-600 ml-2" />
            هزینه‌ها و نکات مالی
          </CardTitle>
          <CardDescription>
            هزینه‌های دقیق ممکن است بسته به موقعیت امارات، منطقه ملک و خدمات اضافی متفاوت باشد. با این حال، در دبی موارد زیر رایج‌اند:
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 mb-6">
            {costs.map((cost, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                <span className="text-slate-700">{cost.item}</span>
                <Badge variant="secondary">{cost.amount}</Badge>
              </div>
            ))}
          </div>
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              <strong>جمع کلی تقریباً ۹٬۶۰۰ تا ۱۰٬۵۰۰ درهم</strong> برای ویزای ۱۰ ساله (بسته به منطقه و خدمات). هزینه حمایت اعضای خانواده (همسر، فرزندان، والدین) نیز به صورت مجزا محاسبه می‌شود.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Benefits and Limitations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-green-700">مزایا</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-2 space-x-reverse">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-orange-700">محدودیت‌ها و نکات احتیاطی</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {limitations.map((limitation, index) => (
                <div key={index} className="flex items-start space-x-2 space-x-reverse">
                  <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 text-sm">{limitation}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* EivanProperties CTA */}
      <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200">
        <CardHeader>
          <CardTitle className="text-center text-blue-800">
            چگونه با EivanProperties همراه شوید
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-slate-700 mb-6 leading-relaxed">
            اگر ملکی واجد شرایط را از طریق <strong>EivanProperties.ae</strong> خریداری کنید، تیم ما خدمات کامل فرآیند ویزا را برای شما بدون هزینه اضافی اجرا می‌کند — از جمع‌آوری مدارک تا ارسال درخواست و پیگیری‌های نهایی. توجه داشته باشید که تأیید نهایی و صدور ویزا به عهده مراجع رسمی امارات است و خدمات ما صرفاً تسهیل‌کننده هستند.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                درباره EivanProperties
                <ArrowLeft className="w-5 h-5 mr-2" />
              </Button>
            </Link>
            <Button variant="outline" size="lg">
              مشاوره رایگان
            </Button>
          </div>
        </CardContent>
      </Card>
    </Layout>
  );
}