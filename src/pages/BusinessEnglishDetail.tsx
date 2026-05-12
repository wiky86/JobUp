import { useState } from 'react';
import { Card } from '../components/Card';
import { ProgressBar } from '../components/ProgressBar';
import { ChevronLeft, Volume2, Heart, Star, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function BusinessEnglishDetail() {
  const navigate = useNavigate();
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  
  const targetSentence = ["Could", "we", "move", "the", "meeting", "to", "tomorrow", "morning", "?"];
  const wordChips = ["we", "tomorrow", "meeting", "Could", "?", "morning", "to", "move", "the"];
  
  const handleWordClick = (word: string) => {
    if (!selectedWords.includes(word)) {
      setSelectedWords([...selectedWords, word]);
    }
  };

  const handleSelectedWordClick = (wordToRemove: string) => {
    setSelectedWords(selectedWords.filter(w => w !== wordToRemove));
  };

  const isComplete = selectedWords.length === targetSentence.length;
  const isCorrect = isComplete && selectedWords.join(' ') === targetSentence.join(' ');

  return (
    <div className="flex flex-col min-h-screen bg-white pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-white z-10 px-4 py-3 flex items-center justify-between border-b border-gray-100">
        <button onClick={() => navigate(-1)} className="p-1 -ml-1 text-gray-500">
          <ChevronLeft size={24} />
        </button>
        <div className="flex-1 px-4">
          <ProgressBar progress={60} colorClass="bg-purple" />
        </div>
        <div className="flex items-center gap-1 text-red-500 font-bold text-sm">
          <Heart size={16} fill="currentColor" /> 5
        </div>
      </div>

      <div className="flex-1 p-4 flex flex-col">
        <div className="text-center mb-6">
          <span className="inline-block px-3 py-1 bg-purple/10 text-purple rounded-full text-xs font-bold mb-2">
            STEP 3 / 5 : 듣기
          </span>
          <h1 className="text-xl font-bold text-dark">빈칸에 알맞은 단어를 배열하세요.</h1>
        </div>

        <Card className="bg-gray-50 border-0 shadow-none mb-6">
          <p className="text-xs text-gray-500 font-medium mb-1">상황: 회의에서 일정 변경을 조율할 때</p>
          <p className="text-sm font-bold text-dark mb-4">"회의를 내일 오전으로 옮길 수 있을까요?"</p>
          <div className="flex justify-center my-4">
            <button className="w-14 h-14 bg-purple text-white rounded-full flex items-center justify-center shadow-lg hover:bg-purple-700 transition-colors">
              <Volume2 size={28} />
            </button>
          </div>
        </Card>

        {/* Selected Words Area */}
        <div className="min-h-[80px] border-b-2 border-gray-200 mb-6 p-2 flex flex-wrap gap-2 items-start content-start">
          {selectedWords.map((word, i) => (
            <button 
              key={i} 
              onClick={() => handleSelectedWordClick(word)}
              className="px-3 py-2 bg-white border border-gray-300 rounded-lg shadow-sm font-medium text-dark active:scale-95 transition-transform"
            >
              {word}
            </button>
          ))}
        </div>

        {/* Word Chips Area */}
        <div className="flex flex-wrap gap-2 justify-center mt-auto">
          {wordChips.map((word, i) => {
            const isSelected = selectedWords.includes(word);
            return (
              <button 
                key={i}
                onClick={() => handleWordClick(word)}
                disabled={isSelected}
                className={`px-3 py-2 rounded-lg font-medium transition-all ${
                  isSelected 
                    ? 'bg-gray-100 text-transparent border-gray-200' 
                    : 'bg-white border-2 border-gray-200 text-dark hover:border-purple hover:text-purple active:bg-purple/5 shadow-sm'
                }`}
              >
                {word}
              </button>
            )
          })}
        </div>
      </div>

      {/* Bottom Action Area (Sticky) */}
      <div className="fixed bottom-0 w-full max-w-[480px] bg-white border-t border-gray-100 p-4 pb-8 z-50">
        {isComplete ? (
          isCorrect ? (
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2 text-success font-bold text-lg">
                <CheckCircle2 size={24} /> 정답입니다!
              </div>
              <div className="flex items-center gap-1 text-primary font-bold">
                <Star size={16} fill="currentColor" /> +15 XP
              </div>
            </div>
          ) : (
            <div className="text-red-500 font-bold mb-4">
              순서가 맞지 않습니다. 다시 시도해보세요.
            </div>
          )
        ) : null}
        
        <button 
          className={`w-full py-4 rounded-2xl font-bold text-lg transition-colors ${
            isComplete && isCorrect 
              ? 'bg-success text-white hover:bg-green-600' 
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
          disabled={!isComplete || !isCorrect}
        >
          다음 단계
        </button>
      </div>
    </div>
  );
}
