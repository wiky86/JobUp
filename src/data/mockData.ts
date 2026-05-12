import type { User, SubjectProgress, Course, LeaderboardUser, Badge } from "../types";

export const mockUser: User = {
  name: "김지원",
  streakDays: 12,
  xp: 5340,
  plan: "Free",
  hearts: 5,
};

export const subjectProgresses: SubjectProgress[] = [
  {
    id: "aptitude",
    name: "직무적성",
    level: 3,
    accuracy: 85,
    todayChapters: 2,
    color: "bg-primary",
  },
  {
    id: "english",
    name: "비즈니스 영어",
    level: 2,
    accuracy: 72,
    todayChapters: 1,
    color: "bg-purple",
  },
  {
    id: "it",
    name: "IT 상식",
    level: 4,
    accuracy: 92,
    todayChapters: 3,
    color: "bg-success",
  },
];

export const premiumCourses: Course[] = [
  {
    id: "ncs-focus",
    title: "NCS 유형별 집중",
    category: "공기업",
    description: "공기업 필기시험 완벽 대비",
    dDay: 30,
    isPremium: true,
  },
  {
    id: "gsat-focus",
    title: "삼성 GSAT 집중",
    category: "대기업",
    description: "삼성그룹 인적성 단기 완성",
    dDay: 15,
    isPremium: true,
  },
  {
    id: "bank-focus",
    title: "은행 필기 집중",
    category: "금융권",
    description: "주요 은행권 필기 완벽 가이드",
    dDay: 45,
    isPremium: true,
  },
  {
    id: "tesat-30",
    title: "TESAT 30일 완성",
    category: "자격증",
    description: "경제이해력 검증시험 초단기 합격",
    isPremium: true,
  },
  {
    id: "finance-45",
    title: "재경관리사 45일 완성",
    category: "자격증",
    description: "국가공인 재무, 회계, 원가 자격증",
    isPremium: true,
  },
];

export const leaderboard: LeaderboardUser[] = [
  { rank: 1, name: "박*우", xp: 8200, streakDays: 45 },
  { rank: 2, name: "이*진", xp: 7950, streakDays: 32 },
  { rank: 3, name: "최*현", xp: 7800, streakDays: 28 },
  { rank: 4, name: "정*훈", xp: 7100, streakDays: 21 },
  { rank: 5, name: "강*은", xp: 6850, streakDays: 15 },
  { rank: 6, name: "조*성", xp: 6500, streakDays: 19 },
  { rank: 23, name: "김지원", xp: 5340, streakDays: 12, isMe: true },
  { rank: 24, name: "윤*호", xp: 5200, streakDays: 10 },
  { rank: 25, name: "장*미", xp: 5150, streakDays: 8 },
];

export const badges: Badge[] = [
  {
    id: "streak-7",
    title: "7일 스트릭",
    description: "7일 연속 학습 달성",
    earnedAt: "2024-05-01",
  },
  {
    id: "english-30",
    title: "영어 30회 완주",
    description: "비즈니스 영어 30회 학습 완료",
    earnedAt: "2024-04-15",
  },
  {
    id: "league-1",
    title: "리그 1위",
    description: "주간 리그 1위 달성",
    earnedAt: "2024-03-20",
  },
];
