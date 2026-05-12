import { NavLink } from 'react-router-dom';
import { Home, BookOpen, Compass, Trophy, User } from 'lucide-react';

export function BottomNav() {
  const navItems = [
    { to: '/', icon: Home, label: '홈' },
    { to: '/learning', icon: BookOpen, label: '학습' },
    { to: '/advanced', icon: Compass, label: '심화' },
    { to: '/league', icon: Trophy, label: '리그' },
    { to: '/my', icon: User, label: 'MY' },
  ];

  return (
    <div className="fixed bottom-0 w-full max-w-[480px] bg-white border-t border-gray-100 flex justify-around items-center h-16 px-2 z-50">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center w-16 h-full gap-1 transition-colors ${
                isActive ? 'text-primary' : 'text-gray-400 hover:text-gray-600'
              }`
            }
          >
            <Icon size={24} strokeWidth={2} />
            <span className="text-[10px] font-medium">{item.label}</span>
          </NavLink>
        );
      })}
    </div>
  );
}
