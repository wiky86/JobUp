export type User = {
  name: string;
  streakDays: number;
  xp: number;
  plan: "Free" | "Light" | "Premium";
  hearts: number;
};

export type SubjectProgress = {
  id: string;
  name: string;
  level: number;
  accuracy: number;
  todayChapters: number;
  color: string;
};

export type Course = {
  id: string;
  title: string;
  category: "공기업" | "대기업" | "금융권" | "자격증";
  description: string;
  dDay?: number;
  isPremium: boolean;
};

export type LeaderboardUser = {
  rank: number;
  name: string;
  xp: number;
  streakDays: number;
  isMe?: boolean;
};

export type Badge = {
  id: string;
  title: string;
  description: string;
  earnedAt: string;
};
