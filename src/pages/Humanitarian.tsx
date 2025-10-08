import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  CheckCircle, 
  AlertCircle, 
  Heart, 
  Award, 
  Clock, 
  Users,
  ArrowLeft,
  Info,
  Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HumanitarianPage() {
  const eligiblePersons = [
    'پزشکان، پرستاران و کارکنان شبکه سلامت که در بحران‌ها یا اپیدمی‌ها خدمات برجسته‌ای ارائه کرده‌اند',
    'افرادی که در سازمان‌های بین‌المللی یا غیرانتفاعی در زمینه بشردوستی نقش کلیدی داشته‌اند',
    'فعالان اجتماعی و انسان‌دوستانی با تأثیر بزرگ در جوامع محلی',
    'موسسان سازمان‌های NGO که پروژه‌های بزرگ انسانی اجرا کرده‌اند',
    'خیرین برجسته یا کسانی که کمک مالی گسترده به پروژه‌های بشردوستی کرده‌اند'
  ];

  const requirements = [
    'سند یا تأییدیه خدمات در حوزه بشردوستی (سازمان‌های دولتی، بین‌المللی یا NGO معتبر)',
    'تقدیرنامه، گواهی، گزارش عملکرد یا مدارک مرتبط به فعالیت‌های بشردوستی',
    'مدارک هویتی، معاینه پزشکی، سلامت و سوپیشینه',
    'اگر پروژه اجتماعی یا مالی مرتبط بوده، مدارک مالی پروژه‌ها و بودجه‌ها',
    'ممکن است نیاز به نقد و بررسی دقیق‌تر از سوی نهادهای ذی‌ربط باشد'
  ];

  const steps = [
    'جمع‌آوری مستندات خدمات بشردوستی، فعالیت‌ها و تأییدیه‌ها',
    'ارسال درخواست به مرجع مهاجرت یا نهاد مسئول امور بشردوستی',
    'ارزیابی تخصصی فعالیت‌ها، تأثیر اجتماعی و اعتبار مدارک',
    'انجام معاینه پزشکی، صدور کارت اماراتی (Emirates ID)',
    'صدور اقامت طلایی ۱۰ ساله برای دارنده و اعضای خانواده'
  ];

  const benefits = [
    'اقامت بلندمدت ۱۰ ساله',
    'حمایت خانواده و اعضای وابسته',
    'ثبات برای ادامه فعالیت‌های اجتماعی و بین‌المللی',
    'به رسمیت شناخته شدن خدمات شما توسط دولت امارات و بین‌المللی'
  ];

  const considerations = [
    'فعالیت‌های شما باید مستند و معتبر باشند',
    'ممکن است نیاز به تأیید از نهادهای دولتی یا بین‌المللی داشته باشید',
    'چنانچه خدمات شما مستمر و دارای تأثیر باشد، احتمال موفقیت بیش‌تر است',
    'قوانین ممکن است تغییر کند',
    'در تمدید، ادامه فعالیت و سابقه مثبت بشردوستی اهمیت دارد'
  ];

  const serviceAreas = [
    { area: 'سلامت و پزشکی', description: 'خدمات درمانی در بحران‌ها، اپیدمی‌ها، مناطق محروم' },
    { area: 'امداد و نجات', description: 'فعالیت در بلایای طبیعی، حوادث، امدادرسانی اضطراری' },
    { area: 'آموزش و پرورش', description: 'آموزش کودکان محروم، سوادآموزی، برنامه‌های آموزشی' },
    { area: 'کمک‌های انسانی', description: 'توزیع کمک‌های غذایی، پوشاک، مسکن برای نیازمندان' },
    { area: 'حقوق بشر', description: 'دفاع از حقوق انسان، کمک به پناهندگان، عدالت اجتماعی' },
    { area: 'محیط زیست', description: 'پروژه‌های زیست‌محیطی، حفاظت از طبیعت، توسعه پایدار' }
  ];

  return (
    <Layout 
      title="ویزای طلایی امارات برای پیشگامان بشردوست و قهرمانان خط مقدم"
      description="امارات به پاس خدمات ویژه و شایسته کسانی که در بحران‌ها، امدادرسانی، مراکز سلامت یا فعالیت‌های بشردوستی برجسته عمل کرده‌اند، مسیر ویژه‌ای برای اقامت بلندمدت طراحی کرده است."
    >
      {/* Key Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <Card className="text-center">
          <CardContent className="pt-6">
            <Heart className="w-12 h-12 text-red-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-800">۱۰</div>
            <div className="text-sm text-slate-600">سال اقامت</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <Shield className="w-12 h-12 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-800">قهرمان</div>
            <div className="text-sm text-slate-600">خط مقدم</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <Award className="w-12 h-12 text-yellow-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-800">برجسته</div>
            <div className="text-sm text-slate-600">خدمات انسانی</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <Users className="w-12 h-12 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-800">جامعه</div>
            <div className="text-sm text-slate-600">تأثیر اجتماعی</div>
          </CardContent>
        </Card>
      </div>

      {/* Recognition Alert */}
      <Alert className="mb-8 border-red-200 bg-red-50">
        <Heart className="h-4 w-4" />
        <AlertDescription>
          <strong>تقدیر ویژه:</strong> این ویزا برای تقدیر از کسانی طراحی شده که جان خود را برای خدمت به انسانیت به خطر انداخته‌اند یا خدمات استثنایی در حوزه‌های بشردوستی ارائه داده‌اند.
        </AlertDescription>
      </Alert>

      {/* Service Areas */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Heart className="w-6 h-6 text-red-600 ml-2" />
            حوزه‌های خدمات بشردوستی
          </CardTitle>
          <CardDescription>
            امارات در حوزه‌های مختلف خدمات انسانی، افراد برجسته را شناسایی و تقدیر می‌کند:
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {serviceAreas.map((service, index) => (
              <div key={index} className="p-4 bg-gradient-to-br from-red-50 to-pink-50 rounded-lg border border-red-200">
                <h4 className="font-semibold text-slate-800 mb-2 flex items-center">
                  <Badge variant="outline" className="ml-2 bg-red-100 text-red-700">
                    {index + 1}
                  </Badge>
                  {service.area}
                </h4>
                <p className="text-sm text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Eligible Persons */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="w-6 h-6 text-blue-600 ml-2" />
            چه افرادی ممکن است واجد شرایط باشند؟
          </CardTitle>
          <CardDescription>افرادی مانند:</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {eligiblePersons.map((person, index) => (
              <div key={index} className="flex items-start space-x-3 space-x-reverse">
                <Badge variant="outline" className="mt-1 flex-shrink-0 bg-blue-100 text-blue-700">
                  {index + 1}
                </Badge>
                <span className="text-slate-700">{person}</span>
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
            مدارک و شرایط لازم
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {requirements.map((req, index) => (
              <div key={index} className="flex items-start space-x-3 space-x-reverse">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
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
            فرآیند درخواست
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
            <CardTitle className="text-green-700">مزایا و شرایط خاص</CardTitle>
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
            <CardTitle className="text-orange-700">نکات حیاتی</CardTitle>
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

      {/* Recognition Examples */}
      <Card className="mb-8 bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200">
        <CardHeader>
          <CardTitle className="text-center text-blue-800">
            نمونه‌هایی از خدمات قابل تقدیر
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-800">خدمات پزشکی و سلامت:</h4>
              <ul className="space-y-1 text-slate-600">
                <li>• خدمت در خط مقدم کووید-۱۹</li>
                <li>• ماموریت‌های پزشکی در مناطق جنگی</li>
                <li>• برنامه‌های واکسیناسیون گسترده</li>
                <li>• تأسیس بیمارستان‌های خیریه</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-800">فعالیت‌های انسان‌دوستانه:</h4>
              <ul className="space-y-1 text-slate-600">
                <li>• کمک به پناهندگان و آوارگان</li>
                <li>• برنامه‌های تغذیه کودکان</li>
                <li>• پروژه‌های آب آشامیدنی</li>
                <li>• بازسازی مناطق آسیب‌دیده</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="bg-gradient-to-br from-red-50 to-pink-100 border-red-200">
        <CardContent className="pt-8 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            قهرمان انسانیت هستید؟
          </h3>
          <p className="text-lg text-slate-600 mb-6 max-w-3xl mx-auto">
            اگر خدمات برجسته‌ای در حوزه‌های بشردوستی، سلامت عمومی یا امدادرسانی ارائه داده‌اید، امارات آماده تقدیر از شماست. این ویزا نشانی از قدردانی جهانی از تلاش‌های شماست.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/faq">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                سؤالات متداول
                <ArrowLeft className="w-5 h-5 mr-2" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg">
                مشاوره تخصصی
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </Layout>
  );
}