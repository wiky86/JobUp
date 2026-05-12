import { Outlet } from 'react-router-dom';
import { BottomNav } from '../components/BottomNav';

export function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      {/* Mobile Frame Container */}
      <div className="w-full max-w-[480px] min-h-screen bg-light relative shadow-2xl flex flex-col">
        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto pb-16 no-scrollbar">
          <Outlet />
        </div>
        {/* Bottom Navigation */}
        <BottomNav />
      </div>
    </div>
  );
}
