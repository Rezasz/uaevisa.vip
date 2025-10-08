import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';
import { 
  Building, 
  Users, 
  GraduationCap, 
  Lightbulb, 
  Heart, 
  CheckCircle,
  ArrowLeft,
  Star,
  TrendingUp,
  Shield,
  Clock,
  Globe,
  Award,
  Target,
  Zap,
  BarChart3,
  Info,
  MessageCircle
} from 'lucide-react';
import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    // Load Zapier chatbot script
    const script = document.createElement('script');
    script.src = 'https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js';
    script.type = 'module';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const visaTypes = [
    {
      title: 'ویزای سرمایه‌گذاری',
      subtitle: 'Investor Visa',
      description: 'برای کسانی که سرمایه‌گذاری قابل توجهی در امارات انجام می‌دهند.',
      icon: Building,
      path: '/property',
      badge: '۲M+ درهم',
      color: 'from-green-400 to-green-600',
      stats: '۸۵٪ موفقیت'
    },
    {
      title: 'ویزای خریدار ملک',
      subtitle: 'Property Investor Visa',
      description: 'برای افرادی که در امارات ملکی خریداری کرده‌اند.',
      icon: Building,
      path: '/property',
      badge: 'محبوب‌ترین',
      color: 'from-blue-400 to-blue-600',
      stats: '۹۲٪ موفقیت'
    },
    {
      title: 'ویزای دانشجو ممتاز',
      subtitle: 'Student Visa',
      description: 'برای دانش‌آموزان و فارغ‌التحصیلان ممتاز با سوابق درخشان.',
      icon: GraduationCap,
      path: '/students',
      badge: 'GPA ≥ 3.5',
      color: 'from-purple-400 to-purple-600',
      stats: '۷۸٪ موفقیت'
    },
    {
      title: 'ویزای استعدادها',
      subtitle: 'Talents / Specialist Visa',
      description: 'برای پزشکان، دانشمندان، هنرمندان، متخصصان فناوری و غیره.',
      icon: Users,
      path: '/talents',
      badge: '۱۰ ساله',
      color: 'from-indigo-400 to-indigo-600',
      stats: '۸۹٪ موفقیت'
    },
    {
      title: 'ویزای کارآفرینان',
      subtitle: 'Entrepreneur Visa',
      description: 'برای صاحبان طرح‌ها و پروژه‌های نوآورانه و استارتاپی.',
      icon: Lightbulb,
      path: '/entrepreneurs',
      badge: '۵۰۰K درهم',
      color: 'from-orange-400 to-orange-600',
      stats: '۷۳٪ موفقیت'
    },
    {
      title: 'ویزای پیشگامان بشردوست',
      subtitle: 'Humanitarian / Frontline Heroes',
      description: 'برای کسانی که در حوزه‌های بشردوستی یا فعالیت‌های اجتماعی استثنایی عمل کرده‌اند.',
      icon: Heart,
      path: '/humanitarian',
      badge: 'ویژه',
      color: 'from-red-400 to-red-600',
      stats: '۹۵٪ موفقیت'
    }
  ];

  const benefits = [
    'اقامت بلندمدت قابل تمدید',
    'بدون نیاز به اسپانسر محلی',
    'امکان خروج بیش از ۶ ماه از کشور بدون ابطال اقامت',
    'امکان حمایت از اعضای خانواده (همسر، فرزندان و والدین)',
    'امکان حمایت از خدمه داخلی بدون محدودیت',
    'اگر دارنده ویزا فوت کند، اعضای خانواده تا پایان اعتبار ویزا می‌توانند در امارات بمانند'
  ];

  const stats = [
    { icon: TrendingUp, value: '۱۰۰K+', label: 'ویزای طلایی صادر شده', color: 'text-green-600' },
    { icon: Globe, value: '۱۹۰+', label: 'کشور واجد شرایط', color: 'text-blue-600' },
    { icon: Clock, value: '۳۰', label: 'روز متوسط پردازش', color: 'text-purple-600' },
    { icon: Award, value: '۱۰۰٪', label: 'نرخ موفقیت کلی', color: 'text-orange-600' }
  ];

  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
        {/* Main Content - 3 columns on desktop */}
        <div className="lg:col-span-3">
          {/* Hero Section with Background Image */}
          <div className="relative mb-12 lg:mb-16 overflow-hidden rounded-2xl">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url(/uae-golden-visa-new.webp)',
              }}
            >
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
            </div>
            
            {/* Hero Content */}
            <div className="relative z-10 text-center py-16 lg:py-24 px-4 lg:px-8">
              <div className="inline-flex items-center bg-gradient-to-r from-yellow-400/90 to-orange-400/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-lg">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 animate-pulse" />
                راهنمای کامل و تخصصی ویزای طلایی امارات
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 lg:mb-6 drop-shadow-2xl">
                خوش آمدید به UAEVisa.vip
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-white/95 max-w-4xl mx-auto mb-6 lg:mb-8 leading-relaxed drop-shadow-lg">
                آینده درخشان شما در امارات آغاز می‌شود. در UAEVisa.vip، راهنمای کامل و تخصصی تمامی مسیرهای اقامت در امارات را برای شما فراهم کرده‌ایم — از سرمایه‌گذاری و خرید ملک گرفته تا دانشجویان برتر و استعدادهای برجسته.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a 
                  href="https://wa.me/0097154541000?text=سلام، من علاقه‌مند به اطلاعات بیشتر درباره ویزای طلایی امارات هستم."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 lg:px-8 py-3 shadow-2xl hover:shadow-3xl transition-all border-0">
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                    شروع فرایند
                  </Button>
                </a>
                <Link to="/faq" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto px-6 lg:px-8 py-3 bg-white/95 backdrop-blur-sm border-white/70 text-slate-800 hover:bg-white hover:border-white shadow-xl">
                    سؤالات متداول
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Stats Infographic */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 px-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-white to-slate-50">
                  <CardContent className="pt-4 pb-4">
                    <Icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
                    <div className="text-lg sm:text-xl font-bold text-slate-800">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-slate-600">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Visa Types Section with Enhanced Infographics */}
          <div className="mb-12 lg:mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-3 sm:mb-4 px-4">
                انواع ویزاهای اقامت در امارات
              </h2>
              <div className="flex items-center justify-center mb-4">
                <div className="flex items-center space-x-2 space-x-reverse bg-blue-50 px-4 py-2 rounded-full">
                  <BarChart3 className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-blue-700 font-medium">۶ مسیر مختلف برای اقامت</span>
                </div>
              </div>
              <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto px-4">
                کشور امارات متحده عربی گزینه‌های متنوعی برای اقامت مهاجران ارائه می‌کند، هر کدام با شرایط خاص و مزایای منحصربفرد:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
              {visaTypes.map((visa, index) => {
                const Icon = visa.icon;
                return (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden group">
                    <div className={`h-2 bg-gradient-to-r ${visa.color}`}></div>
                    <CardHeader className="text-center pb-3 relative">
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                          {visa.stats}
                        </Badge>
                      </div>
                      <div className="flex justify-center mb-3 lg:mb-4">
                        <div className={`w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br ${visa.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                          <Icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                        </div>
                      </div>
                      <div className="flex justify-center mb-2">
                        <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 text-xs">
                          {visa.badge}
                        </Badge>
                      </div>
                      <CardTitle className="text-base lg:text-lg font-bold text-slate-800">
                        {visa.title}
                      </CardTitle>
                      <CardDescription className="text-xs lg:text-sm text-slate-500 font-medium">
                        {visa.subtitle}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-slate-600 text-center mb-4 leading-relaxed text-sm lg:text-base">
                        {visa.description}
                      </p>
                      <Link to={visa.path}>
                        <Button className={`w-full bg-gradient-to-r ${visa.color} hover:shadow-lg text-white text-sm lg:text-base transition-all`}>
                          <Zap className="w-3 h-3 lg:w-4 lg:h-4 ml-2" />
                          اطلاعات بیشتر
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Golden Visa Benefits with Infographics */}
          <div className="mb-12 lg:mb-16">
            <Card className="bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100 border-yellow-200 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>
              <CardHeader className="text-center relative z-10">
                <div className="flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-yellow-600 ml-2" />
                  <Award className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl sm:text-3xl font-bold text-slate-800 mb-3 sm:mb-4 px-4">
                  ویزای طلایی امارات چیست و چه مزایایی دارد؟
                </CardTitle>
                <CardDescription className="text-base sm:text-lg text-slate-600 max-w-4xl mx-auto px-4">
                  «ویزای طلایی» (Golden Visa) یک نوع اقامت بلندمدت (۵ یا ۱۰ سال) است که به متقاضیان خارجی اجازه می‌دهد بدون نیاز به اسپانسر اماراتی، در کشور زندگی، کار یا تحصیل کنند.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3 space-x-reverse bg-white/60 p-3 rounded-lg backdrop-blur-sm">
                      <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-700 text-sm lg:text-base">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* EivanProperties CTA with Infographics */}
          <div className="text-center">
            <Card className="bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 border-blue-200 overflow-hidden">
              <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full -translate-y-20 -translate-x-20 opacity-30"></div>
              <CardContent className="pt-6 lg:pt-8 relative z-10">
                <div className="flex items-center justify-center mb-4">
                  <Building className="w-8 h-8 text-blue-600 ml-2" />
                  <Star className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4 px-4">
                  خدمات ویژه EivanProperties
                </h3>
                <p className="text-base sm:text-lg text-slate-600 mb-4 sm:mb-6 max-w-3xl mx-auto px-4">
                  اگر از طریق <strong>EivanProperties.ae</strong> ملکی واجد شرایط (معمولاً به ارزش ≥ ۲ میلیون درهم) خریداری کنید، تیم ما خدمات اخذ ویزای طلایی را بدون هزینه اضافی برای شما انجام می‌دهد (مشروط به شرایط واجد صلاحیت).
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                  <Link to="/about" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 lg:px-8 shadow-lg hover:shadow-xl transition-all">
                      <Info className="w-4 h-4 lg:w-5 lg:h-5 ml-2" />
                      درباره EivanProperties
                    </Button>
                  </Link>
                  <a 
                    href="https://wa.me/0097154541000?text=سلام، من نیاز به مشاوره رایگان درباره ویزای طلایی امارات دارم."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button variant="outline" size="lg" className="w-full sm:w-auto px-6 lg:px-8 border-2 hover:bg-white/80">
                      <MessageCircle className="w-4 h-4 lg:w-5 lg:h-5 ml-2" />
                      تماس برای مشاوره رایگان
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Enhanced Chatbot Sidebar */}
        <div className="lg:col-span-1 order-first lg:order-last">
          <div className="lg:sticky lg:top-8">
            <Card className="mb-4 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-center text-base lg:text-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 ml-2 text-green-600" />
                  مشاوره آنلاین
                </CardTitle>
                <CardDescription className="text-center text-sm">
                  سؤالات خود را از ربات هوشمند بپرسید
                </CardDescription>
              </CardHeader>
            </Card>
            
            {/* Zapier Chatbot */}
            <div className="w-full">
              <zapier-interfaces-chatbot-embed 
                is-popup="false" 
                chatbot-id="cmghpvzhc000ia58fzguvp0jo" 
                height="400px"
                width="100%"
                style={{width: '100%', maxWidth: '100%', margin: '0 auto', display: 'block', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}