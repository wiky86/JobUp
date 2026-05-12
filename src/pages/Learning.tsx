import { useState } from 'react';
import { Card } from '../components/Card';
import { ProgressBar } from '../components/ProgressBar';
import { BookOpen, ChevronRight, CheckCircle2, Monitor, Briefcase, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Learning() {
  const [activeTab, setActiveTab] = useState<'aptitude' | 'english' | 'it'>('aptitude');

  const tabs = [
    { id: 'aptitude', label: '직무적성' },
    { id: 'english', label: '비즈니스 영어' },
    { id: 'it', label: 'IT 상식' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Top Tabs */}
      <div className="bg-white px-4 pt-4 pb-0 flex gap-4 overflow-x-auto no-scrollbar border-b border-gray-100">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`pb-3 text-sm font-bold whitespace-nowrap border-b-2 transition-colors ${
              activeTab === tab.id ? 'border-primary text-primary' : 'border-transparent text-gray-400'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-4 space-y-4">
        {/* Tab Content */}
        {activeTab === 'aptitude' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-dark">오늘의 직무적성</h2>
            <Card className="border border-blue-50">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2 text-primary">
                  <Briefcase size={20} />
                  <span className="font-bold">언어 / 수리 / 추리</span>
                </div>
                <span className="bg-blue-50 text-primary text-xs font-bold px-2 py-1 rounded-md">Lv.3</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">오늘의 학습 가능 챕터: 3개</p>
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>정확도 85%</span>
                <span>진행률 60%</span>
              </div>
              <ProgressBar progress={60} colorClass="bg-primary" />
              <button className="w-full mt-4 bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary-dark transition-colors">
                언어 챕터 시작하기
              </button>
            </Card>
          </div>
        )}

        {activeTab === 'english' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-dark">오늘의 비즈니스 영어</h2>
            <Card className="border border-purple-50">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2 text-purple">
                  <MessageCircle size={20} />
                  <span className="font-bold">상황별 실무 회화</span>
                </div>
                <span className="bg-purple-50 text-purple text-xs font-bold px-2 py-1 rounded-md">Step 3/5</span>
              </div>
              
              <div className="flex justify-between items-center mb-6">
                {['읽기', '어휘', '듣기', '말하기', '쓰기'].map((step, i) => (
                  <div key={i} className="flex flex-col items-center gap-1 relative z-10">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                      i < 2 ? 'bg-purple text-white' : i === 2 ? 'bg-purple/20 text-purple border-2 border-purple' : 'bg-gray-100 text-gray-400'
                    }`}>
                      {i < 2 ? <CheckCircle2 size={16} /> : i + 1}
                    </div>
                    <span className={`text-[10px] ${i <= 2 ? 'text-purple font-medium' : 'text-gray-400'}`}>{step}</span>
                  </div>
                ))}
              </div>
              
              <Link to="/learning/english" className="block text-center w-full bg-purple text-white py-3 rounded-xl font-bold hover:bg-purple-700 transition-colors">
                듣기 단계 이어서 학습
              </Link>
            </Card>
          </div>
        )}

        {activeTab === 'it' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-dark">오늘의 IT 상식</h2>
            <Card className="border border-green-50">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2 text-success">
                  <Monitor size={20} />
                  <span className="font-bold">AI·머신러닝 이해</span>
                </div>
                <span className="bg-green-50 text-success text-xs font-bold px-2 py-1 rounded-md">Lv.4</span>
              </div>
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="bg-gray-50 rounded-lg p-2 text-center text-xs font-medium text-gray-600 border border-gray-100">클라우드 완료</div>
                <div className="bg-gray-50 rounded-lg p-2 text-center text-xs font-medium text-gray-600 border border-gray-100">정보보안 대기</div>
                <div className="bg-gray-50 rounded-lg p-2 text-center text-xs font-medium text-gray-600 border border-gray-100">데이터 구조 완료</div>
                <div className="bg-green-50 rounded-lg p-2 text-center text-xs font-bold text-success border border-green-100">AI·머신러닝 진행중</div>
              </div>
              <button className="w-full bg-success text-white py-3 rounded-xl font-bold hover:bg-green-700 transition-colors">
                학습 시작하기
              </button>
            </Card>
          </div>
        )}

        {/* Action Links */}
        <div className="grid grid-cols-2 gap-3 pt-4">
          <Card className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-2">
              <BookOpen size={18} className="text-gray-500" />
              <span className="text-sm font-bold text-dark">오답노트</span>
            </div>
            <ChevronRight size={16} className="text-gray-400" />
          </Card>
          <Card className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-gray-500" />
              <span className="text-sm font-bold text-dark">최근 기록</span>
            </div>
            <ChevronRight size={16} className="text-gray-400" />
          </Card>
        </div>
      </div>
    </div>
  );
}
