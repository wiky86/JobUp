import { mockUser, subjectProgresses, badges } from '../data/mockData';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { Settings, Flame, Star, Crown, ChevronRight, Grid } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function My() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white p-4 border-b border-gray-100 flex justify-between items-center sticky top-0 z-10">
        <h1 className="text-lg font-bold text-dark">마이페이지</h1>
        <button className="text-gray-400 hover:text-gray-600">
          <Settings size={24} />
        </button>
      </div>

      <div className="p-4 space-y-6">
        {/* Profile Card */}
        <Card className="flex items-center p-5">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-primary font-bold text-2xl mr-4 border-2 border-white shadow-sm">
            {mockUser.name.charAt(0)}
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-dark mb-1 flex items-center gap-2">
              {mockUser.name}
              <Badge variant="primary" className="text-[10px] py-0">{mockUser.plan}</Badge>
            </h2>
            <div className="flex gap-3 text-sm font-medium">
              <div className="flex items-center gap-1 text-orange-500">
                <Flame size={16} /> {mockUser.streakDays}일 연속
              </div>
              <div className="flex items-center gap-1 text-primary">
                <Star size={16} /> {mockUser.xp.toLocaleString()} XP
              </div>
            </div>
          </div>
        </Card>

        {/* Activity Garden */}
        <Card>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-dark flex items-center gap-2">
              <Grid size={18} className="text-success" /> 활동 가든
            </h3>
            <span className="text-xs text-gray-500 font-medium">최근 30일</span>
          </div>
          <div className="flex justify-end mb-2 gap-1 text-[10px] text-gray-400">
            <span>적음</span>
            <div className="w-3 h-3 bg-gray-100 rounded-sm"></div>
            <div className="w-3 h-3 bg-success/30 rounded-sm"></div>
            <div className="w-3 h-3 bg-success/60 rounded-sm"></div>
            <div className="w-3 h-3 bg-success rounded-sm"></div>
            <span>많음</span>
          </div>
          <div className="grid grid-cols-10 gap-1.5">
            {Array.from({ length: 30 }).map((_, i) => (
              <div 
                key={i} 
                className={`w-full aspect-square rounded-sm ${
                  Math.random() > 0.4 
                    ? (Math.random() > 0.7 ? 'bg-success' : (Math.random() > 0.5 ? 'bg-success/60' : 'bg-success/30')) 
                    : 'bg-gray-100'
                }`}
              />
            ))}
          </div>
        </Card>

        {/* Subject Levels */}
        <div>
          <h3 className="font-bold text-dark mb-3 px-1">과목별 레벨</h3>
          <div className="grid grid-cols-2 gap-3">
            {subjectProgresses.map(subject => (
              <Card key={subject.id} className="flex items-center justify-between p-4">
                <span className="text-sm font-bold text-gray-700">{subject.name}</span>
                <span className="text-sm font-black text-primary">Lv.{subject.level}</span>
              </Card>
            ))}
          </div>
        </div>

        {/* Earned Badges */}
        <div>
          <div className="flex justify-between items-center mb-3 px-1">
            <h3 className="font-bold text-dark">획득 배지</h3>
            <Link to="/myroom" className="text-xs text-primary font-bold flex items-center">
              마이룸 가기 <ChevronRight size={14} />
            </Link>
          </div>
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
            {badges.map(badge => (
              <Card key={badge.id} className="min-w-[120px] flex flex-col items-center justify-center p-4 text-center border border-gray-100">
                <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mb-2 shadow-inner">
                  <Star size={24} fill="currentColor" />
                </div>
                <h4 className="text-sm font-bold text-dark leading-tight mb-1">{badge.title}</h4>
                <p className="text-[10px] text-gray-400">{badge.earnedAt}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Subscription Info */}
        <Card className="bg-dark text-white border-0 flex items-center justify-between p-5 relative overflow-hidden">
          <div className="absolute -right-4 -bottom-4 opacity-10">
            <Crown size={80} />
          </div>
          <div className="relative z-10">
            <h3 className="font-bold text-lg mb-1 flex items-center gap-1">
              JobUp Premium <Crown size={16} className="text-yellow-400"/>
            </h3>
            <p className="text-xs text-gray-400">모든 심화 학습과 모의고사를 무제한으로!</p>
          </div>
          <button className="relative z-10 bg-white text-dark text-sm font-bold px-4 py-2 rounded-full">
            알아보기
          </button>
        </Card>
      </div>
    </div>
  );
}
