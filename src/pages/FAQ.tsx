import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  HelpCircle, 
  AlertTriangle, 
  CheckCircle, 
  DollarSign, 
  Users,
  ArrowLeft,
  Info
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FAQPage() {
  const faqs = [
    {
      id: 1,
      question: 'ویزای طلایی چیست و چه تفاوتی با ویزای معمولی دارد؟',
      answer: 'ویزای طلایی اقامت بلندمدت ۵ یا ۱۰ ساله است که به متقاضیان اجازه می‌دهد بدون نیاز به اسپانسر اماراتی، در این کشور زندگی، کار یا تحصیل کنند. برخلاف ویزاهای کاری معمولی، وابسته به قرارداد کار یا شرکت نیست.',
      category: 'عمومی'
    },
    {
      id: 2,
      question: 'چه کسانی واجد شرایط ویزای طلایی هستند؟',
      answer: 'دسته‌های اصلی شامل سرمایه‌گذاران، خریداران ملک، کارآفرینان، استعدادها / متخصصان برجسته، دانشجویان ممتاز و پیشگامان بشردوست هستند.',
      category: 'شرایط'
    },
    {
      id: 3,
      question: 'مقدار سرمایه لازم برای سرمایه‌گذاری ملک چقدر است؟',
      answer: 'حداقل مقدار معمولاً ۲٬۰۰۰٬۰۰۰ درهم امارات در املاک واجد شرایط است.',
      category: 'مالی'
    },
    {
      id: 4,
      question: 'آیا ملک تحت وام مشمول است؟',
      answer: 'بله، اگر بتوانید گواهی بانکی ارائه دهید که نشان دهد مبلغ کافی پرداخت شده است (معمولاً تا حد واجد شرایط). همچنین ملک باید معتبر و مجاز باشد.',
      category: 'مالی'
    },
    {
      id: 5,
      question: 'هزینه کل ویزای طلایی چقدر است؟',
      answer: 'هزینه‌ها ممکن است بین ۹٬۶۰۰ تا ۱۰٬۵۰۰ درهم برای حالت ملک در دبی متغیر باشد (شامل معاینه پزشکی، کارت امارات، صدور اقامت و هزینه‌های اداری). این عدد تخمینی است و بسته به امارات، منطقه و خدمات متفاوت است.',
      category: 'مالی'
    },
    {
      id: 6,
      question: 'می‌توانم اعضای خانواده‌ام را همراه کنم؟',
      answer: 'بله، در اکثر دسته‌ها امکان حمایت از همسر، فرزندان و والدین وجود دارد، مشروط بر اینکه شرایط لازم را رعایت کنند.',
      category: 'خانواده'
    },
    {
      id: 7,
      question: 'اگر دارنده ویزا فوت کند، خانواده چه وضعیتی دارند؟',
      answer: 'در بسیاری از موارد، اعضای خانواده تا پایان اعتبار ویزا می‌توانند در امارات اقامت داشته باشند.',
      category: 'خانواده'
    },
    {
      id: 8,
      question: 'آیا می‌توانم بیشتر از ۶ ماه خارج از امارات بمانم؟',
      answer: 'بله، یکی از مزایای ویزای طلایی این است که بازه اقامت خارج از امارات می‌تواند بیشتر از ۶ ماه باشد بدون اینکه اقامت لغو شود (بسته به دسته و شرایط).',
      category: 'سفر'
    },
    {
      id: 9,
      question: 'آیا قوانین ویزای طلایی تغییر می‌کنند؟',
      answer: 'بله، قوانین مهاجرت و سیاست‌های ویزا ممکن است به مرور زمان تغییر یابند. همیشه قبل از اقدام، مرجع رسمی را بررسی کنید.',
      category: 'قانونی'
    },
    {
      id: 10,
      question: 'آیا ادعاهای «ویزای طلایی مادام‌العمر با پرداخت مبلغ معین» واقعیت دارد؟',
      answer: 'خیر. در سال ۲۰۲۵ برخی شرکت‌ها مدعی برنامه جدیدی برای ویزای طلایی مادام‌العمر برای برخی ملیت‌ها شدند، اما دولت امارات رسماً این ادعاها را رد کرده و تأکید نموده که هنوز سیاست ویزای طلایی مادام‌العمر اعمال نشده است.',
      category: 'هشدار'
    },
    {
      id: 11,
      question: 'چگونه روند تمدید و تغییر وضعیت ویزای طلایی است؟',
      answer: 'برای تمدید، معمولاً باید شرایط اولیه (مثلاً مالکیت ملک، وضعیت تخصصی، کسب‌وکار فعال) همچنان برقرار باشد. در مورد تبدیل ویزا به سایر اقامت‌ها نیز ممکن است نیاز به ارائه مدارک جدید باشد.',
      category: 'تمدید'
    },
    {
      id: 12,
      question: 'اگر ملک خود را بفروشم چه اتفاقی می‌افتد؟',
      answer: 'فروختن ملک ممکن است باعث لغو یا رد تمدید ویزا شود، به‌خصوص اگر ملک شرط اصلی واجد شرایط بودن بوده باشد. بهتر است قبل از فروش با مشاور و مرجع ذی‌ربط مشورت کنید.',
      category: 'قانونی'
    },
    {
      id: 13,
      question: 'چه مدارکی ممکن است رد درخواست را سبب شوند؟',
      answer: 'عدم تطابق مدارک، نقص مستندات، اعتبار پایین ملک، سابقه کیفری، ارزیابی منفی تخصص یا کسب‌وکار و تغییر قوانین ممکن است باعث رد درخواست شود.',
      category: 'مدارک'
    },
    {
      id: 14,
      question: 'آیا ایرانیان می‌توانند برای ویزای طلایی اقدام کنند؟',
      answer: 'بله، تابع قانون مهاجرت امارات، ایرانیان نیز می‌توانند برای ویزای طلایی اقدام کنند. اما در موارد مالی و کنترل منبع سرمایه ممکن است بررسی‌های بیشتری انجام شود.',
      category: 'ملیت'
    }
  ];

  const categories = {
    'عمومی': { icon: Info, color: 'bg-blue-100 text-blue-700' },
    'شرایط': { icon: CheckCircle, color: 'bg-green-100 text-green-700' },
    'مالی': { icon: DollarSign, color: 'bg-yellow-100 text-yellow-700' },
    'خانواده': { icon: Users, color: 'bg-purple-100 text-purple-700' },
    'سفر': { icon: ArrowLeft, color: 'bg-indigo-100 text-indigo-700' },
    'قانونی': { icon: AlertTriangle, color: 'bg-orange-100 text-orange-700' },
    'هشدار': { icon: AlertTriangle, color: 'bg-red-100 text-red-700' },
    'تمدید': { icon: CheckCircle, color: 'bg-teal-100 text-teal-700' },
    'مدارک': { icon: Info, color: 'bg-slate-100 text-slate-700' },
    'ملیت': { icon: Users, color: 'bg-pink-100 text-pink-700' }
  };

  return (
    <Layout 
      title="سؤالات متداول درباره ویزای طلایی امارات"
      description="پاسخ به پرسش‌های رایج درباره ویزای طلایی امارات، شرایط، هزینه‌ها، تمدید، خانواده و نکات مهم قانونی."
    >
      {/* Important Warning */}
      <Alert className="mb-8 border-red-200 bg-red-50">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          <strong>هشدار مهم:</strong> ادعاهای «ویزای طلایی مادام‌العمر» کذب است. دولت امارات رسماً این برنامه را تکذیب کرده است. از شرکت‌های کلاهبردار احتراز کنید.
        </AlertDescription>
      </Alert>

      {/* FAQ Categories Overview */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-center">دسته‌بندی سؤالات</CardTitle>
          <CardDescription className="text-center">
            سؤالات را بر اساس موضوع جستجو کنید
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {Object.entries(categories).map(([category, config]) => {
              const Icon = config.icon;
              const count = faqs.filter(faq => faq.category === category).length;
              return (
                <div key={category} className="text-center p-3 bg-slate-50 rounded-lg">
                  <Icon className="w-6 h-6 mx-auto mb-1 text-slate-600" />
                  <div className="text-sm font-medium text-slate-800">{category}</div>
                  <Badge variant="secondary" className="text-xs mt-1">
                    {count} سؤال
                  </Badge>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* FAQ List */}
      <div className="space-y-4 mb-8">
        {faqs.map((faq) => {
          const categoryConfig = categories[faq.category as keyof typeof categories];
          const Icon = categoryConfig.icon;
          
          return (
            <Card key={faq.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg font-semibold text-slate-800 flex-1 ml-4">
                    {faq.question}
                  </CardTitle>
                  <Badge variant="secondary" className={`flex items-center space-x-1 space-x-reverse ${categoryConfig.color} flex-shrink-0`}>
                    <Icon className="w-3 h-3" />
                    <span className="text-xs">{faq.category}</span>
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Contact CTA */}
      <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200">
        <CardContent className="pt-8 text-center">
          <HelpCircle className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            سؤال شما پاسخ داده نشد؟
          </h3>
          <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
            اگر سؤال خاصی دارید که در این لیست نیست، با تیم متخصص EivanProperties تماس بگیرید. ما آماده ارائه مشاوره رایگان و پاسخ به تمام سؤالات شما هستیم.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                تماس با ما
                <ArrowLeft className="w-5 h-5 mr-2" />
              </Button>
            </Link>
            <Link to="/property">
              <Button variant="outline" size="lg">
                شروع بررسی واجد شرایط بودن
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </Layout>
  );
}