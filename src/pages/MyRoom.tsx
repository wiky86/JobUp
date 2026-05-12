import { useState } from 'react';
import { ChevronLeft, Share2, Diamond, Palette, Box, Trophy, Crown, Target, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function MyRoom() {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState<'가구' | '장식' | '보상'>('보상');
  const [selectedItem, setSelectedItem] = useState<string>('english-30');

  const rewards = [
    { 
      id: 'english-30', 
      title: '영어 30회 완주', 
      desc: '비즈니스 영어 강의를\n30회 이상 완주했어요!',
      date: '2024.05.01',
      icon: <div className="w-10 h-14 bg-emerald-400/80 rounded-md border-b-4 border-emerald-600 flex flex-col items-center justify-center text-white text-[8px] font-bold shadow-md relative overflow-hidden"><div className="absolute top-0 w-full h-1/2 bg-white/20"></div><span className="z-10">영어</span><span className="z-10 text-emerald-100 mt-1">Aa</span></div>,
      color: 'bg-emerald-50'
    },
    { 
      id: 'streak-7', 
      title: '7일 스트릭', 
      desc: '7일 연속 학습을\n달성했어요!',
      date: '2024.05.05',
      icon: <div className="w-10 h-12 bg-white rounded border-2 border-blue-500 flex flex-col shadow-sm"><div className="h-3 bg-blue-500 w-full"></div><div className="flex-1 flex items-center justify-center text-orange-500 font-black">🔥</div></div>,
      color: 'bg-blue-50'
    },
    { 
      id: 'league-1', 
      title: '리그 1위', 
      desc: '주간 리그에서 1위를\n달성했어요!',
      date: '2024.04.20',
      icon: <Trophy size={32} className="text-yellow-500 drop-shadow-md" fill="#EAB308" />,
      color: 'bg-yellow-50'
    },
    { 
      id: 'premium', 
      title: 'Premium 구독', 
      desc: '프리미엄 요금제를\n구독 중입니다.',
      date: '2024.04.01',
      icon: <div className="w-12 h-10 bg-blue-600 rounded-md border-b-4 border-blue-800 flex items-center justify-center text-yellow-400 shadow-md"><Crown size={20} fill="currentColor" /></div>,
      color: 'bg-blue-50'
    },
    { 
      id: 'first-goal', 
      title: '첫 목표 달성', 
      desc: '첫 번째 학습 목표를\n달성했어요!',
      date: '2024.03.15',
      icon: <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center shadow-inner border-2 border-purple-400"><Target size={24} className="text-white" /></div>,
      color: 'bg-purple-50'
    },
  ];

  const currentReward = rewards.find(r => r.id === selectedItem);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white p-4 flex items-center justify-between sticky top-0 z-20">
        <button onClick={() => navigate(-1)} className="p-1 -ml-1 text-dark">
          <ChevronLeft size={28} />
        </button>
        <h1 className="text-lg font-bold text-dark absolute left-1/2 -translate-x-1/2">MyRoom</h1>
        <div className="flex items-center gap-1 text-dark font-medium">
          <Diamond size={16} fill="#3B82F6" className="text-blue-500" /> 1,240
        </div>
      </div>

      {/* 3D Room Area */}
      <div className="relative w-full h-[45vh] bg-blue-50">
        {/* Placeholder for the generated 3D image */}
        <img 
          src="/JobUp/myroom-bg.png" 
          alt="MyRoom 3D" 
          className="w-full h-full object-cover"
          onError={(e) => {
             // Fallback if base path mapping fails locally
            (e.target as HTMLImageElement).src = '/myroom-bg.png';
          }}
        />
      </div>

      {/* Bottom Sheet */}
      <div className="flex-1 bg-white rounded-t-[32px] -mt-6 z-10 relative px-6 pt-8 pb-24 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        
        {/* Selected Item Card */}
        {currentReward && (
          <div className="flex gap-4 mb-8">
            {/* Visual Box */}
            <div className={`w-28 h-32 rounded-2xl flex items-center justify-center shadow-sm ${currentReward.color}`}>
              {currentReward.icon}
            </div>
            
            {/* Details */}
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-[17px] font-bold text-dark mb-1">{currentReward.title}</h2>
              <p className="text-sm text-gray-500 leading-snug mb-3 whitespace-pre-line">
                {currentReward.desc}
              </p>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-md text-[11px] font-bold">
                  완료일 {currentReward.date}
                </span>
                <button className="px-3 py-1.5 bg-white border border-gray-200 text-gray-700 rounded-lg text-xs font-medium shadow-sm active:bg-gray-50">
                  배치 해제
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="flex border-b border-gray-100 mb-6">
          {['가구', '장식', '보상'].map(tab => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab as any)}
              className={`flex-1 pb-3 text-sm font-medium transition-colors ${
                selectedTab === tab 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-400'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Item List */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-4 -mx-6 px-6">
          {rewards.map(reward => {
            const isSelected = selectedItem === reward.id;
            return (
              <button
                key={reward.id}
                onClick={() => setSelectedItem(reward.id)}
                className={`relative min-w-[85px] flex flex-col items-center justify-center p-3 rounded-2xl transition-all ${
                  isSelected 
                    ? 'border-2 border-blue-600 bg-white' 
                    : 'border border-gray-100 bg-white shadow-sm'
                }`}
              >
                {isSelected && (
                  <div className="absolute -top-2 -right-2 bg-white rounded-full">
                    <CheckCircle2 size={20} className="text-blue-600" fill="white" />
                  </div>
                )}
                <div className="h-16 flex items-center justify-center mb-2">
                  {reward.icon}
                </div>
                <span className="text-[10px] text-dark font-medium line-clamp-1">{reward.title}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Bottom Nav / Actions */}
      <div className="fixed bottom-0 w-full max-w-[480px] bg-white border-t border-gray-100 px-6 py-3 pb-safe z-50 flex justify-between">
        <button className="flex flex-col items-center justify-center gap-1 w-16 text-blue-600">
          <Palette size={24} strokeWidth={2.5} />
          <span className="text-[11px] font-bold">꾸미기</span>
        </button>
        <button className="flex flex-col items-center justify-center gap-1 w-16 text-gray-400">
          <Box size={24} strokeWidth={2} />
          <span className="text-[11px] font-medium text-gray-500">보관함</span>
        </button>
        <button className="flex flex-col items-center justify-center gap-1 w-16 text-gray-400">
          <Share2 size={24} strokeWidth={2} />
          <span className="text-[11px] font-medium text-gray-500">공유</span>
        </button>
      </div>
      
      {/* pb-safe simulation for mobile bottom */}
      <div className="fixed bottom-0 w-full max-w-[480px] h-6 bg-white z-40"></div>
    </div>
  );
}
