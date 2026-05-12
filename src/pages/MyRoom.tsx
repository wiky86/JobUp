import { useState } from 'react';
import { badges } from '../data/mockData';
import { Badge } from '../components/Badge';
import { ChevronLeft, Share2, Package, Coins } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function MyRoom() {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState<string | null>(badges[0]?.id || null);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white p-4 flex items-center justify-between border-b border-gray-100 sticky top-0 z-20">
        <button onClick={() => navigate(-1)} className="p-1 -ml-1 text-gray-500">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-lg font-bold text-dark absolute left-1/2 -translate-x-1/2">MyRoom</h1>
        <div className="flex gap-2">
          <div className="flex items-center gap-1 bg-yellow-50 text-yellow-600 px-2 py-1 rounded-full text-xs font-bold">
            <Coins size={14} /> 1,200
          </div>
        </div>
      </div>

      {/* Virtual Room Area (CSS Mockup) */}
      <div className="relative h-64 bg-blue-50 border-b-4 border-gray-200 overflow-hidden">
        {/* Wall & Floor division */}
        <div className="absolute bottom-0 w-full h-16 bg-[#DBC29E]"></div>
        
        {/* Desk */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 h-20 bg-[#E5D3B3] rounded-t-lg shadow-md border-b-8 border-[#C9B390]">
          {/* Laptop */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-16 h-10 bg-gray-300 rounded-t-md">
            <div className="w-full h-full bg-white rounded-t-md border-4 border-gray-300"></div>
          </div>
          {/* Trophy (Decoration) */}
          <div className="absolute bottom-4 right-4 w-6 h-8 bg-yellow-400 rounded-t-md shadow-sm flex items-center justify-center">
            <span className="text-[10px] text-yellow-800 font-black">1</span>
          </div>
        </div>

        {/* Chair */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-16 h-16 bg-gray-700 rounded-t-full shadow-lg"></div>

        {/* Window */}
        <div className="absolute top-8 left-8 w-20 h-24 bg-white rounded-md border-4 border-blue-200 shadow-inner overflow-hidden">
          <div className="w-full h-full bg-blue-100 flex items-center justify-center relative">
            <div className="w-full h-1 bg-blue-200 absolute top-1/2"></div>
            <div className="w-1 h-full bg-blue-200 absolute left-1/2"></div>
          </div>
        </div>

        {/* Calendar on Wall */}
        <div className="absolute top-12 right-12 w-12 h-14 bg-white rounded-sm shadow-md flex flex-col">
          <div className="h-3 bg-red-400 rounded-t-sm w-full"></div>
          <div className="flex-1 flex items-center justify-center text-red-500 font-bold text-xs">7</div>
        </div>
      </div>

      {/* Item Selection Panel */}
      <div className="flex-1 p-4 bg-gray-50 pb-24">
        <h3 className="font-bold text-dark mb-3 px-1">배치 가능한 아이템</h3>
        
        <div className="grid grid-cols-4 gap-3 mb-6">
          {badges.map((badge) => (
            <button
              key={badge.id}
              onClick={() => setSelectedItem(badge.id)}
              className={`aspect-square rounded-xl flex flex-col items-center justify-center gap-1 p-2 bg-white transition-all ${
                selectedItem === badge.id 
                  ? 'border-2 border-primary shadow-md' 
                  : 'border border-gray-100 shadow-sm opacity-70'
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 mb-1">
                <Package size={16} />
              </div>
              <span className="text-[10px] font-bold text-dark line-clamp-1 text-center w-full">{badge.title}</span>
            </button>
          ))}
          {/* Locked Items */}
          <div className="aspect-square rounded-xl flex flex-col items-center justify-center gap-1 p-2 bg-gray-100 border border-gray-200 border-dashed opacity-50">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 mb-1">
              <Package size={16} />
            </div>
            <span className="text-[10px] font-medium text-gray-500 line-clamp-1">목표 달성</span>
          </div>
        </div>

        {/* Selected Item Detail */}
        {selectedItem && (
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-primary/20 flex gap-4 items-center animate-in fade-in slide-in-from-bottom-2">
            <div className="w-16 h-16 bg-yellow-50 text-yellow-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Package size={32} />
            </div>
            <div className="flex-1">
              <Badge variant="primary" className="mb-1 text-[10px]">장식품</Badge>
              <h4 className="font-bold text-dark mb-1">{badges.find(b => b.id === selectedItem)?.title}</h4>
              <p className="text-xs text-gray-500">{badges.find(b => b.id === selectedItem)?.description}</p>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Actions */}
      <div className="fixed bottom-0 w-full max-w-[480px] bg-white border-t border-gray-100 p-4 z-50 flex gap-3">
        <button className="w-14 h-14 bg-gray-100 text-dark rounded-xl flex items-center justify-center shadow-sm hover:bg-gray-200 transition-colors">
          <Share2 size={20} />
        </button>
        <button className="flex-1 bg-primary text-white font-bold rounded-xl shadow-md hover:bg-primary-dark transition-colors">
          배치하기
        </button>
      </div>
    </div>
  );
}
