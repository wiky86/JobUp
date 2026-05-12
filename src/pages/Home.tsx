import { mockUser } from '../data/mockData';
import { Card } from '../components/Card';
import { ProgressBar } from '../components/ProgressBar';
import { ChevronRight, Flame, Star, Trophy, Briefcase, MessageCircle, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center pt-4">
        <div>
          <h1 className="text-2xl font-bold text-dark">
            <span className="text-primary">{mockUser.name}</span>님,
            <br />오늘도 JobUp!
          </h1>
        </div>
        <div className="flex gap-3">
          <div className="flex items-center gap-1 text-orange-500 font-bold bg-orange-50 px-2 py-1 rounded-full text-sm">
            <Flame size={16} fill="currentColor" /> {mockUser.streakDays}
          </div>
          <div className="flex items-center gap-1 text-primary font-bold bg-primary/10 px-2 py-1 rounded-full text-sm">
            <Star size={16} fill="currentColor" /> {mockUser.xp.toLocaleString()}
          </div>
        </div>
      </div>

      {/* Today's Progress */}
      <Card className="bg-gradient-to-br from-primary to-primary-dark text-white shadow-md">
        <div className="flex justify-between items-end mb-4">
          <div>
            <p className="text-primary-100 text-sm font-medium mb-1">오늘의 학습</p>
            <h2 className="text-xl font-bold">6 / 12 챕터 완료</h2>
          </div>
          <Link to="/learning" className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
            이어하기
          </Link>
        </div>
        <ProgressBar progress={50} colorClass="bg-white" className="bg-primary-dark" />
      </Card>

      {/* Core Subjects */}
      <div>
        <h3 className="font-bold text-dark mb-3">핵심 학습</h3>
        <div className="grid grid-cols-3 gap-3">
          <Link to="/learning" className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center gap-2 shadow-sm border border-gray-50">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-primary flex items-center justify-center">
              <Briefcase size={20} />
            </div>
            <span className="text-xs font-medium text-dark">직무적성</span>
          </Link>
          <Link to="/learning/english" className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center gap-2 shadow-sm border border-gray-50">
            <div className="w-10 h-10 rounded-full bg-purple-50 text-purple flex items-center justify-center">
              <MessageCircle size={20} />
            </div>
            <span className="text-xs font-medium text-dark">비즈니스 영어</span>
          </Link>
          <Link to="/learning" className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center gap-2 shadow-sm border border-gray-50">
            <div className="w-10 h-10 rounded-full bg-green-50 text-success flex items-center justify-center">
              <Monitor size={20} />
            </div>
            <span className="text-xs font-medium text-dark">IT 상식</span>
          </Link>
        </div>
      </div>

      {/* Level Prediction & Heatmap */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-sm text-dark">이번 주 레벨 예측</h3>
            <ChevronRight size={16} className="text-gray-400" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-gray-600">언어</span>
              <span className="font-bold text-primary">Lv.3</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-gray-600">수리</span>
              <span className="font-bold text-primary">Lv.2</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-gray-600">추리</span>
              <span className="font-bold text-primary">Lv.2</span>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-sm text-dark">활동 가든</h3>
            <ChevronRight size={16} className="text-gray-400" />
          </div>
          <div className="grid grid-cols-5 gap-1 pt-1">
            {Array.from({ length: 15 }).map((_, i) => (
              <div 
                key={i} 
                className={`w-full aspect-square rounded-sm ${
                  Math.random() > 0.3 ? (Math.random() > 0.5 ? 'bg-success' : 'bg-success/40') : 'bg-gray-100'
                }`}
              />
            ))}
          </div>
        </Card>
      </div>

      {/* League Preview */}
      <Card className="mb-4 bg-gray-900 text-white border-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Trophy size={80} />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-1">
            <Trophy size={16} className="text-yellow-400" />
            <span className="text-xs font-medium text-gray-300">실버 리그</span>
          </div>
          <h3 className="font-bold text-lg mb-1">상위 10% 진입까지 450 XP</h3>
          <p className="text-xs text-gray-400 mb-3">현재 23위 • 남은 시간 2일</p>
          <Link to="/league" className="text-xs font-medium bg-white text-dark px-3 py-1.5 rounded-full inline-block">
            리그 현황 보기
          </Link>
        </div>
      </Card>
    </div>
  );
}
