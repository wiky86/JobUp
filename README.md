# JobUp MVP 프론트엔드 프로젝트

JobUp은 공기업·대기업·금융권 취업 준비생을 위한 챕터 기반 데일리 학습 + 자격증 과정 통합 플랫폼입니다. 본 프로젝트는 JobUp 서비스의 MVP(Minimum Viable Product) UI/UX를 보여주기 위한 프론트엔드 중심의 데모 애플리케이션입니다.

## 🚀 프로젝트 소개
* **목표**: 투자자 설명, 팀 내부 검토, 초기 사용자 피드백을 위한 "동작 가능한 웹서비스 초안"
* **주요 특징**:
  * 데일리 학습 스케줄링 (직무적성, 비즈니스 영어, IT상식)
  * 심화 과정 및 자격증 과정 카탈로그
  * 게임화 요소 (XP, 주간 리그, 연속 학습 스트릭, 배지)
  * MyRoom (가상 공부방 꾸미기)

## 🛠 기술 스택
* **Framework**: React 19 + Vite
* **Language**: TypeScript
* **Styling**: Tailwind CSS v4
* **Routing**: React Router v7 (HashRouter 적용)
* **Icons**: Lucide React
* **Deployment**: GitHub Pages (`gh-pages`)

## 📂 폴더 구조
```txt
src/
  components/       # Card, ProgressBar, Badge 등 공통 컴포넌트
  data/             # 화면 렌더링에 사용되는 Mock Data (mockData.ts)
  layouts/          # 모바일 뷰 프레임 및 하단 네비게이션이 포함된 MainLayout
  pages/            # 7개의 주요 화면 (Home, Learning, League 등)
  types/            # TypeScript 타입 정의
  utils/            # 유틸리티 함수 (cn 등)
  App.tsx           # 라우팅 설정
  main.tsx          # 진입점
```

## 📱 주요 화면 목록
1. **홈 (Home)**: 오늘의 학습 진행률, 이번 주 레벨 예측, 핵심 학습 바로가기
2. **학습 (Learning)**: 과목별(직무적성, 비즈니스 영어, IT상식) 상세 진도 확인
3. **비즈니스 영어 (BusinessEnglishDetail)**: 단어 칩 클릭 배열, 오디오 재생 UI가 포함된 상세 학습
4. **심화 (Advanced)**: 카테고리별 프리미엄 과정 목록 및 요금제 안내 (결제 모달 포함)
5. **리그 (League)**: 주간 XP 경쟁, 리더보드, 승급/강등 정보
6. **마이 (My)**: 프로필, 활동 가든 히트맵, 획득 배지, 과목별 레벨
7. **마이룸 (MyRoom)**: 학습 보상(배지)을 활용해 가상 공간을 꾸미는 게임화 요소

## ⚙️ 실행 방법

### 요구사항
* Node.js v18 이상 권장

### 로컬 실행
1. 프로젝트 클론 및 디렉토리 이동
   ```bash
   git clone https://github.com/wiky86/JobUp.git
   cd JobUp
   ```
2. 패키지 설치
   ```bash
   npm install
   ```
3. 개발 서버 실행
   ```bash
   npm run dev
   ```
4. 브라우저에서 `http://localhost:5173` 접속

## 🌍 GitHub Pages 배포 방법

본 프로젝트는 `gh-pages`를 활용해 정적 호스팅이 가능하도록 구성되어 있습니다.

1. `vite.config.ts`의 `base` 속성이 현재 GitHub Repository 이름과 일치하는지 확인합니다. (기본값: `'/JobUp/'`)
2. 터미널에서 다음 명령어를 실행합니다.
   ```bash
   npm run deploy
   ```
3. GitHub Repository의 **Settings > Pages**에서 **Source**가 `gh-pages` 브랜치로 설정되어 있는지 확인합니다.
4. 잠시 후 `https://<github-username>.github.io/JobUp/`에서 서비스되는 것을 확인할 수 있습니다.

## 📌 현재 구현된 기능 (MVP 데모 범위)
* 모든 페이지 전환 및 하단 탭 내비게이션
* 데스크톱/모바일 반응형(데스크톱에서는 모바일 프레임으로 렌더링)
* 비즈니스 영어 탭의 "단어 배열" 인터랙션 및 결과 피드백
* 심화 과정 카테고리 필터
* 결제 버튼 클릭 시 "준비 중" 모달 노출
* MyRoom 아이템 선택 시 정보 패널 변경

## 🚧 아직 구현되지 않은 기능 및 향후 개발 과제
본 MVP는 프론트엔드 UI 중심으로 개발되어 서버 연동 및 실제 데이터 처리가 제외되어 있습니다.

1. **사용자 인증 및 DB 연동**: Firebase 또는 REST API를 활용한 실제 로그인 및 데이터 저장
2. **결제 시스템 연동**: 포트원(Iamport) 등을 활용한 Premium 구독 결제
3. **콘텐츠 관리**: 실제 문제 DB 구축 및 AI 채점 로직 구현
4. **음성 인식/재생 (TTS/STT)**: 비즈니스 영어 듣기/말하기 기능 실제 연동
5. **실시간 랭킹 시스템**: 유저 간 XP 기반 리그 실시간 업데이트 및 스케줄러 처리
