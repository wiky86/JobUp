import { leaderboard } from '../data/mockData';
import { Card } from '../components/Card';
import { Trophy, Info, ChevronUp, ChevronDown, Minus, Gift } from 'lucide-react';

export default function League() {
  const me = leaderboard.find(user => user.isMe);
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white p-4 border-b border-gray-100 text-center sticky top-0 z-10">
        <h1 className="text-lg font-bold text-dark">주간 리그</h1>
      </div>

      <div className="p-4 space-y-6">
        {/* Current League Card */}
        <Card className="bg-gradient-to-br from-gray-800 to-gray-900 text-white text-center py-6 shadow-lg border-0 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 opacity-10">
            <Trophy size={180} />
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <Trophy size={48} className="text-gray-300 mb-2 drop-shadow-md" />
            <h2 className="text-2xl font-bold mb-1">실버 리그</h2>
            <p className="text-gray-300 text-sm mb-4">리그 초기화까지 2일 14시간</p>
            
            <div className="flex items-center gap-6 bg-white/10 px-6 py-3 rounded-2xl backdrop-blur-sm">
              <div className="text-center">
                <p className="text-[10px] text-gray-400 font-medium mb-1">내 순위</p>
                <p className="font-bold text-lg">{me?.rank}위</p>
              </div>
              <div className="w-px h-8 bg-white/20"></div>
              <div className="text-center">
                <p className="text-[10px] text-gray-400 font-medium mb-1">획득 XP</p>
                <p className="font-bold text-lg text-primary-100">{me?.xp.toLocaleString()} XP</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Weekly Rewards Preview */}
        <div>
          <h3 className="font-bold text-dark mb-3 px-1 flex items-center gap-2">
            <Gift size={18} className="text-purple" /> 주간 보상 미리보기
          </h3>
          <Card className="bg-purple/5 border border-purple/10">
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between items-center">
                <span className="text-gray-600">참여 보상</span>
                <span className="font-bold text-dark">1,000 XP</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-gray-600">상위 10% (승급)</span>
                <span className="font-bold text-primary">실버 배지</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-gray-600">상위 3%</span>
                <span className="font-bold text-purple">골드 배지 + 5,000 XP</span>
              </li>
            </ul>
          </Card>
        </div>

        {/* Promotion/Demotion Info */}
        <div className="flex gap-2 text-xs font-medium px-1">
          <div className="flex-1 bg-green-50 text-success rounded-lg p-2 flex items-center justify-center gap-1">
            <ChevronUp size={14} /> 상위 3명 승급
          </div>
          <div className="flex-1 bg-red-50 text-red-500 rounded-lg p-2 flex items-center justify-center gap-1">
            <ChevronDown size={14} /> 하위 3명 강등
          </div>
        </div>

        {/* Leaderboard */}
        <Card className="p-0 overflow-hidden shadow-sm border border-gray-100">
          <div className="p-4 bg-gray-50 border-b border-gray-100 flex items-center gap-2 text-sm font-bold text-gray-600">
            <Info size={16} /> 상위 30명이 모인 리그입니다.
          </div>
          <div className="divide-y divide-gray-100">
            {leaderboard.map((user, index) => (
              <div 
                key={index} 
                className={`flex items-center px-4 py-3 ${
                  user.isMe ? 'bg-blue-50/50' : ''
                }`}
              >
                <div className="w-8 font-bold text-center mr-3 flex justify-center">
                  {user.rank <= 3 ? (
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs text-white ${
                      user.rank === 1 ? 'bg-yellow-400' : user.rank === 2 ? 'bg-gray-300' : 'bg-orange-400'
                    }`}>
                      {user.rank}
                    </span>
                  ) : (
                    <span className={`text-sm ${user.isMe ? 'text-primary' : 'text-gray-400'}`}>
                      {user.rank}
                    </span>
                  )}
                </div>
                
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold mr-3 border-2 border-white shadow-sm">
                  {user.name.charAt(0)}
                </div>
                
                <div className="flex-1">
                  <div className={`font-bold text-sm ${user.isMe ? 'text-primary' : 'text-dark'}`}>
                    {user.name} {user.isMe && <span className="text-xs font-normal text-primary ml-1">(나)</span>}
                  </div>
                  <div className="text-xs text-gray-500 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
                    {user.streakDays}일 연속
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="font-bold text-sm text-dark">{user.xp.toLocaleString()}</div>
                  <div className="text-[10px] text-gray-400">XP</div>
                </div>
              </div>
            ))}
            
            {/* Ellipsis if me is far down */}
            <div className="px-4 py-2 flex justify-center text-gray-300">
              <Minus size={20} />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
