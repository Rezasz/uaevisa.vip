import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  CheckCircle, 
  AlertCircle, 
  GraduationCap, 
  Award, 
  Clock, 
  BookOpen,
  ArrowLeft,
  Info,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function StudentsPage() {
  const eligibilityCriteria = [
    'دانش‌آموزان ممتاز در دبیرستان با معدل بسیار بالا (مثلاً ۹۵٪ و بالاتر)',
    'دانشجویان یا فارغ‌التحصیلان دانشگاهی با معدل GPA ≥ 3.5 یا معادل آن، از دانشگاه‌های معتبر یا رنک بالا',
    'فارغ‌التحصیلان دانشگاه‌های برتر در سطح جهانی',
    'حداکثر زمانی که از فارغ‌التحصیلی گذشته باشد (مثلاً دو سال) در برخی شرایط',
    'مدارک تحصیلی، توصیه‌نامه از دانشگاه یا مؤسسه آموزشی',
    'مدارک هویتی، معاینه پزشکی و گواهی سلامت',
    'نبود سابقه کیفری'
  ];

  const steps = [
    'دریافت ریزنمرات تحصیلی و مدارک معتبر دانشگاهی یا دبیرستانی',
    'دریافت توصیه‌نامه یا گواهی از مؤسسه آموزشی معتبر',
    'بررسی شرایط واجد صلاحیت بودن توسط اداره مهاجرت یا مرجع ذی‌ربط',
    'ارسال درخواست اقامت طلایی همراه با مدارک',
    'انجام معاینه پزشکی، صدور کارت اماراتی (Emirates ID)',
    'صدور ویزای اقامتی طلایی (۵ یا ۱۰ سال بسته به وضعیت)'
  ];

  const benefits = [
    'اقامت بلندمدت و امکان زندگی و تحصیل آزادانه',
    'امکان حمایت از خانواده',
    'امکان تبدیل به سایر ویزاهای اقامت در آینده',
    'ثبات برای دانشجویان و برنامه‌ریزی تحصیلی بلندمدت'
  ];

  const limitations = [
    'دانشگاه یا مؤسسه آموزشی باید واجد اعتبار باشد',
    'معدل و سوابق تحصیلی باید واقعاً ممتاز باشند',
    'ممکن است محدودیت زمانی برای ارائه درخواست پس از فارغ‌التحصیلی وجود داشته باشد',
    'برای تمدید، وضعیت تحصیلی باید قابل قبول باشد',
    'تغییرات قانونی ممکن است شرایط جدیدی وضع کند'
  ];

  return (
    <Layout 
      title="ویزای طلایی امارات برای دانشجویان و فارغ‌التحصیلان ممتاز"
      description="اگر در مقطع دبیرستان یا دانشگاه معدل بسیار بالایی کسب کرده‌اید یا از دانشگاه‌های معتبر جهانی فارغ‌التحصیل شده‌اید، ممکن است واجد شرایط ویزای طلایی امارات باشید — فرصتی برای زندگی و پیشرفت در یکی از اقتصادهای پیشرفته منطقه."
    >
      {/* Key Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <Card className="text-center">
          <CardContent className="pt-6">
            <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-800">۳.۵+</div>
            <div className="text-sm text-slate-600">GPA حداقل</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <GraduationCap className="w-12 h-12 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-800">۵-۱۰</div>
            <div className="text-sm text-slate-600">سال اقامت</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <Award className="w-12 h-12 text-yellow-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-800">ممتاز</div>
            <div className="text-sm text-slate-600">دانشجویان برتر</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <BookOpen className="w-12 h-12 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-800">معتبر</div>
            <div className="text-sm text-slate-600">دانشگاه‌های برتر</div>
          </CardContent>
        </Card>
      </div>

      {/* Eligibility Alert */}
      <Alert className="mb-8 border-blue-200 bg-blue-50">
        <GraduationCap className="h-4 w-4" />
        <AlertDescription>
          <strong>نکته مهم:</strong> این ویزا برای دانشجویان و فارغ‌التحصیلان با عملکرد استثنایی طراحی شده است. معدل بالا و دانشگاه معتبر دو شرط کلیدی هستند.
        </AlertDescription>
      </Alert>

      {/* Eligibility Criteria */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <CheckCircle className="w-6 h-6 text-green-600 ml-2" />
            معیارهای واجد شرایط بودن
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {eligibilityCriteria.map((criteria, index) => (
              <div key={index} className="flex items-start space-x-3 space-x-reverse">
                <Badge variant="outline" className="mt-1 flex-shrink-0 bg-blue-100 text-blue-700">
                  {index + 1}
                </Badge>
                <span className="text-slate-700">{criteria}</span>
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

      {/* Benefits and Limitations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-green-700">مزایا</CardTitle>
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
            <CardTitle className="text-orange-700">محدودیت‌ها</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {limitations.map((limitation, index) => (
                <div key={index} className="flex items-start space-x-2 space-x-reverse">
                  <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">{limitation}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* GPA Calculator Card */}
      <Card className="mb-8 bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
        <CardHeader>
          <CardTitle className="text-center text-green-800">
            آیا معدل شما واجد شرایط است؟
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-green-600">۳.۵+</div>
              <div className="text-sm text-slate-600">GPA از ۴</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-blue-600">۹۵٪+</div>
              <div className="text-sm text-slate-600">معدل دبیرستان</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-purple-600">برتر</div>
              <div className="text-sm text-slate-600">دانشگاه معتبر</div>
            </div>
          </div>
          <p className="text-slate-600 mb-4">
            اگر معدل شما در این محدوده است و از دانشگاه معتبری فارغ‌التحصیل شده‌اید، احتمال واجد شرایط بودن بالاست.
          </p>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200">
        <CardContent className="pt-8 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            دانشجوی ممتازی هستید؟
          </h3>
          <p className="text-lg text-slate-600 mb-6 max-w-3xl mx-auto">
            اگر عملکرد تحصیلی استثنایی داشته‌اید، فرصت اقامت بلندمدت در امارات را از دست ندهید. این ویزا می‌تواند آغازی برای آینده‌ای درخشان باشد.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/faq">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                سؤالات متداول
                <ArrowLeft className="w-5 h-5 mr-2" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg">
                مشاوره تحصیلی
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </Layout>
  );
}