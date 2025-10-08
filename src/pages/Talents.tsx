import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  CheckCircle, 
  AlertCircle, 
  Users, 
  Award, 
  Clock, 
  BookOpen,
  ArrowLeft,
  Info,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TalentsPage() {
  const eligibleCategories = [
    'پزشکان و پژوهشگران با سوابق علمی برتر یا تحقیقات بین‌المللی',
    'دانشمندان، مخترعان یا مهندسان دارای نوآوری‌ها یا اختراعات ثبت‌شده',
    'متخصصان فناوری، هوش مصنوعی، داده، رباتیک',
    'هنرمندان، موسیقی‌دانان، نویسندگان و فعالان فرهنگی با آثار شناخته‌شده',
    'محققان دانشگاهی با انتشار مقالات بین‌المللی و مشارکت علمی',
    'مدیران ارشد و مدیران با سابقه کاری و دستاوردهای برجسته'
  ];

  const requirements = [
    'مدارک تحصیلی معتبر (لیسانس، فوق‌لیسانس، دکتری) مرتبط با تخصص شما',
    'رزومه کاری، سوابق حرفه‌ای و نمونه کارها (مقالات، پروژه، اختراع)',
    'گواهی یا تاییدیه از مراجع علمی، دانشگاه‌ها، سازمان‌های تخصصی داخلی یا بین‌المللی',
    'جوایز علمی، تقدیرنامه، عضویت در انجمن‌های حرفه‌ای بین‌المللی',
    'معاینه پزشکی و گواهی سلامت',
    'سوپیشینه کیفری پاک',
    'مدارک هویتی و شناسایی (پاسپورت، عکس، در صورت داشتن اقامت فعلی مدارک مربوطه)'
  ];

  const steps = [
    'ارزیابی تخصص و مدارک خود برای اطمینان از تطابق با معیارهای تخصصی',
    'جمع‌آوری مدارک علمی، کاری، پروژه‌ها و تأییدیه‌ها',
    'ارسال درخواست به واحد مربوطه مهاجرت یا وزارتخانه‌های ذی‌ربط که بخش استعدادها را مدیریت می‌کنند',
    'ممکن است بررسی تخصصی، مصاحبه یا ارزیابی فنی انجام شود',
    'انجام معاینه پزشکی و صدور کارت اماراتی (Emirates ID)',
    'صدور ویزای اقامتی طلایی (معمولاً ۱۰ ساله)'
  ];

  const benefits = [
    'اقامت بلندمدت ۱۰ ساله قابل تمدید',
    'امکان زندگی و کار مستقل بدون نیاز به اسپانسر',
    'حمایت اعضای خانواده (همسر، فرزندان)',
    'ثبات شغلی و فرصت مشارکت در پروژه‌های ملی و بین‌المللی'
  ];

  const considerations = [
    'مدارک تخصصی باید معتبر و قابل تأیید باشند',
    'ممکن است نیاز به تأیید از نهادهای علمی یا وزارتخانه‌های مرتبط باشد',
    'اگر تخصص شما در رشته‌ای جدید یا بین‌رشته‌ای است، مستندسازی خوب پروژه‌ها اهمیت دارد',
    'هر گونه تغییر در قانون مهاجرت ممکن است شرایط را اثر دهد',
    'در زمان تمدید، باید سطح تخصصی شما همچنان قابل اثبات باشد'
  ];

  return (
    <Layout 
      title="ویزای طلایی امارات برای استعدادها و متخصصان برجسته"
      description="دولت امارات برای جذب بهترین استعدادها از سراسر جهان، مسیر ویژه‌ای را طراحی کرده است تا افراد متخصص در زمینه‌های علمی، فناوری، پزشکی، هنری و نوآوری بتوانند اقامت بلندمدت در امارات داشته باشند."
    >
      {/* Key Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <Card className="text-center">
          <CardContent className="pt-6">
            <Users className="w-12 h-12 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-800">۱۰</div>
            <div className="text-sm text-slate-600">سال اقامت</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <Award className="w-12 h-12 text-yellow-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-800">برتر</div>
            <div className="text-sm text-slate-600">استعدادهای جهانی</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-800">علمی</div>
            <div className="text-sm text-slate-600">مدارک معتبر</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <Star className="w-12 h-12 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-800">بین‌المللی</div>
            <div className="text-sm text-slate-600">شناخت جهانی</div>
          </CardContent>
        </Card>
      </div>

      {/* Eligible Categories */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="w-6 h-6 text-purple-600 ml-2" />
            چه کسانی واجد شرایط هستند؟
          </CardTitle>
          <CardDescription>
            پوشش این دسته معمولاً شامل موارد زیر است:
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {eligibleCategories.map((category, index) => (
              <div key={index} className="flex items-start space-x-3 space-x-reverse p-3 bg-purple-50 rounded-lg">
                <Badge variant="outline" className="mt-1 flex-shrink-0 bg-purple-100 text-purple-700">
                  {index + 1}
                </Badge>
                <span className="text-slate-700">{category}</span>
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
            شرایط و مدارک مورد نیاز
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
            <CardTitle className="text-orange-700">نکات احتیاطی</CardTitle>
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

      {/* Call to Action */}
      <Card className="bg-gradient-to-br from-purple-50 to-indigo-100 border-purple-200">
        <CardContent className="pt-8 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            آیا استعداد برجسته‌ای هستید؟
          </h3>
          <p className="text-lg text-slate-600 mb-6 max-w-3xl mx-auto">
            اگر در زمینه علوم، فناوری، پزشکی، هنر یا سایر حوزه‌های تخصصی فعالیت می‌کنید و دارای مدارک و سوابق معتبری هستید، ممکن است واجد شرایط ویزای طلایی ۱۰ ساله باشید.
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
                مشاوره تخصصی
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </Layout>
  );
}