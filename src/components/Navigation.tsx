import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Building, 
  Users, 
  GraduationCap, 
  Lightbulb, 
  Heart, 
  Info, 
  HelpCircle,
  Menu,
  X,
  Phone,
  Mail
} from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/property', label: 'خریداران ملک', icon: Building, color: 'text-green-600' },
    { path: '/talents', label: 'استعدادها', icon: Users, color: 'text-purple-600' },
    { path: '/students', label: 'دانشجویان', icon: GraduationCap, color: 'text-indigo-600' },
    { path: '/entrepreneurs', label: 'کارآفرینان', icon: Lightbulb, color: 'text-orange-600' },
    { path: '/humanitarian', label: 'پیشگامان بشردوست', icon: Heart, color: 'text-red-600' },
    { path: '/about', label: 'درباره EivanProperties', icon: Info, color: 'text-slate-600' },
    { path: '/faq', label: 'سؤالات متداول', icon: HelpCircle, color: 'text-yellow-600' },
  ];

  return (
    <nav className="bg-white shadow-xl border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar with Contact Info */}
        <div className="hidden lg:flex justify-between items-center py-2 border-b border-slate-100 text-xs">
          <div className="flex items-center space-x-4 space-x-reverse text-slate-600">
            <div className="flex items-center space-x-1 space-x-reverse">
              <Phone className="w-3 h-3" />
              <span dir="ltr">+971 54 545 1000</span>
            </div>
            <div className="flex items-center space-x-1 space-x-reverse">
              <Mail className="w-3 h-3" />
              <span>info@eivanproperties.ae</span>
            </div>
          </div>
          <div className="text-slate-500">
            مشاوره رایگان ۲۴/۷ در خدمت شما
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex justify-between items-center py-4 gap-4">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center space-x-3 space-x-reverse group flex-shrink-0">
            <div className="relative">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <span className="text-white font-bold text-lg lg:text-xl">U</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 lg:w-4 lg:h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
            </div>
            <div className="min-w-0">
              <h1 className="text-lg lg:text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent truncate">
                UAEVisa.vip
              </h1>
              <p className="text-xs text-slate-500 font-medium truncate">راهنمای کامل ویزای طلایی امارات</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-1 space-x-reverse flex-wrap">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    size="sm"
                    className={`flex items-center space-x-2 space-x-reverse px-3 py-2 rounded-lg transition-all duration-200 text-xs lg:text-sm ${
                      isActive 
                        ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-md hover:shadow-lg' 
                        : 'hover:bg-slate-50 text-slate-700 hover:text-slate-900'
                    }`}
                  >
                    <Icon size={14} className={isActive ? 'text-white' : item.color} />
                    <span className="font-medium whitespace-nowrap">{item.label}</span>
                  </Button>
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-2 space-x-reverse flex-shrink-0">
            <Link to="/property">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 lg:px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-sm">
                شروع فرآیند
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="xl:hidden p-2 rounded-lg flex-shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="xl:hidden pb-4 border-t border-slate-200 pt-4 bg-gradient-to-b from-white to-slate-50">
            <div className="grid grid-cols-1 gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link key={item.path} to={item.path} onClick={() => setIsMenuOpen(false)}>
                    <Button
                      variant={isActive ? "default" : "ghost"}
                      size="sm"
                      className={`w-full flex items-center space-x-3 space-x-reverse justify-start py-4 px-4 rounded-lg transition-all duration-200 ${
                        isActive 
                          ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-md' 
                          : 'hover:bg-white hover:shadow-sm text-slate-700'
                      }`}
                    >
                      <Icon size={18} className={isActive ? 'text-white' : item.color} />
                      <span className="text-sm font-medium">{item.label}</span>
                    </Button>
                  </Link>
                );
              })}
              
              {/* Mobile CTA */}
              <div className="mt-4 pt-4 border-t border-slate-200">
                <Link to="/property" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg shadow-md">
                    شروع فرآیند ویزای طلایی
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}