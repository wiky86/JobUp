import { useState } from 'react';
import { premiumCourses } from '../data/mockData';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { Crown, AlertCircle, X, ChevronRight } from 'lucide-react';

export default function Advanced() {
  const [activeCategory, setActiveCategory] = useState<string>('전체');
  const [showModal, setShowModal] = useState(false);

  const categories = ['전체', '공기업', '대기업', '금융권', '자격증'];

  const filteredCourses = activeCategory === '전체' 
    ? premiumCourses 
    : premiumCourses.filter(c => c.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pb-20">
      {/* Header Banner */}
      <div className="bg-dark text-white p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Crown size={120} />
        </div>
        <div className="relative z-10">
          <Badge variant="primary" className="bg-primary text-white border-0 mb-3 text-[10px]">PREMIUM</Badge>
          <h1 className="text-2xl font-bold mb-2">취업 준비를 더 깊게,<br/>합격을 더 빠르게.</h1>
          <p className="text-gray-400 text-sm">목표 기업 맞춤형 심화 과정으로<br/>완벽하게 대비하세요.</p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white px-4 py-3 flex gap-2 overflow-x-auto no-scrollbar border-b border-gray-100 sticky top-0 z-20">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-1.5 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${
              activeCategory === category 
                ? 'bg-dark text-white' 
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="p-4 space-y-4">
        {/* Course List */}
        <div className="space-y-3">
          {filteredCourses.map(course => (
            <Card key={course.id} className="flex flex-col border border-gray-100 hover:border-primary/30 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <Badge variant="gray" className="mb-1">{course.category}</Badge>
                {course.dDay && (
                  <Badge variant="outline" className="text-primary border-primary/20">D-{course.dDay}</Badge>
                )}
              </div>
              <h3 className="font-bold text-lg text-dark mb-1">{course.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{course.description}</p>
              
              <button 
                onClick={() => setShowModal(true)}
                className="w-full py-3 rounded-xl font-bold text-sm bg-gray-50 text-dark hover:bg-gray-100 flex items-center justify-center gap-1 transition-colors"
              >
                자세히 보기 <ChevronRight size={16} />
              </button>
            </Card>
          ))}
        </div>
        
        {/* Pricing Info */}
        <div className="mt-8">
          <h3 className="font-bold text-dark mb-3 px-1">요금제 안내</h3>
          <div className="grid gap-3">
            <Card className="flex items-center justify-between opacity-60">
              <div>
                <h4 className="font-bold text-dark">Free</h4>
                <p className="text-xs text-gray-500">기본 데일리 학습</p>
              </div>
              <span className="font-bold">현재 이용중</span>
            </Card>
            <Card className="flex items-center justify-between border-2 border-primary relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-white text-[10px] px-2 py-0.5 rounded-bl-lg font-bold">추천</div>
              <div>
                <h4 className="font-bold text-dark flex items-center gap-1">Premium <Crown size={14} className="text-primary"/></h4>
                <p className="text-xs text-gray-500">모든 심화 과정 무제한</p>
              </div>
              <button 
                onClick={() => setShowModal(true)}
                className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary-dark"
              >
                구독하기
              </button>
            </Card>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <Card className="w-full max-w-sm relative animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center mb-4">
                <AlertCircle size={24} />
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">결제 기능 준비 중</h3>
              <p className="text-sm text-gray-600 mb-6">
                결제 기능은 MVP 2단계에서 연동 예정입니다.<br/>조금만 기다려주세요!
              </p>
              <button 
                onClick={() => setShowModal(false)}
                className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary-dark"
              >
                확인
              </button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
