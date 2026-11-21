import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    nav: {
      brand: 'SAMURAI TALENT',
      acceleration: 'Acceleration',
      courses: 'Courses',
      certificates: 'Certificates',
      jobs: 'Jobs',
      teach: 'Teach',
      login: 'Log In',
      getStarted: 'Get Started'
    },
    hero: {
      badge: 'Technical Trade Cohorts Now Enrolling',
      titleLine1: 'From Skills to',
      titleLine2: 'Career Success',
      description: 'The modern technical & vocational career launchpad. Learn from master technicians, build real workshop installations, and land high-demand trade roles in Japan and worldwide.',
      startLearning: 'Start learning',
      howItWorks: 'How it works',
      trust1: 'Hands-on shop training',
      trust2: 'Master craftsman inspection',
      trust3: 'Certified trade credentials',
      canvasTop: 'Top 5% Talent Ready',
      canvasApplied: 'Applied Learning',
      canvasPortfolio: 'Master Craft Portfolio',
      canvasStatus: 'Interactive Learning Canvas'
    },
    stats: {
      eyebrow: 'CAREER ACCELERATION',
      headingPrefix: 'We coach, certify and',
      headingHighlight: 'connect learners to careers.',
      card1Tag: 'LIVE FEEDBACK',
      card1Response: '4h Response Time',
      step1: 'Workshop Lab',
      step2: 'Master Inspection',
      step3: 'Certified',
      card1Title: 'Master Craft Inspections',
      card1Badge: '100% Pass Rate',
      card2Tag: 'PROOF OF SKILL',
      card2Standard: 'JIS Certified Standard',
      card2Title: 'Verified Trade Portfolio',
      card2Subtitle: 'Direct Contractor Placement',
      verified: 'Verified',
      card2BottomTitle: 'Industry Employer Network',
      card2Badge: 'Direct Hiring',
      stat1Value: '10 Core',
      stat1Label: 'Technical trades',
      stat2Value: '60,000+',
      stat2Label: 'Active learners',
      stat3Value: '4.9/5',
      stat3Label: 'Average rating',
      stat4Value: '94%',
      stat4Label: 'Trade placement'
    },
    courses: {
      eyebrow: 'POPULAR TRADE PROGRAMS',
      heading: 'Master in-demand technical trades',
      searchPlaceholder: 'Search technical trades or skills...',
      all: 'All',
      catMechanical: 'Mechanical & Auto',
      catElectrical: 'Electrical & HVAC',
      catConstruction: 'Construction & Finishing',
      catWelding: 'Welding & Piping',
      weeks: 'weeks',
      viewSyllabus: 'View Syllabus',
      enrollNow: 'Enroll Now',
      noCourses: 'No courses found matching your criteria'
    },
    curriculum: {
      eyebrow: 'CURRICULUM ARCHITECTURE',
      heading: 'Everything you need, under one roof',
      certTitle: 'SAMURAI TALENT CERTIFICATE OF MASTERY',
      certSub: 'Verified Trade Credential',
      certStudent: 'Awarded to certified technical apprentice',
      certVerify: 'Cryptographically verified & tamper-proof'
    },
    steps: {
      eyebrow: 'THE JOURNEY',
      heading: 'Four steps from sign-up to first job',
      cta: 'Get started today'
    },
    features: {
      eyebrow: 'THE SAMURAI TALENT STANDARD',
      heading: 'Professional technical training that commands respect'
    },
    freeCourse: {
      tag: '100% Free · No Credit Card Required',
      title: 'Not ready to commit? Start with a free course.',
      subtitle: 'Explore safety protocols, basic tool operations, and technical blueprints before taking a full trade cohort.',
      cta: 'Claim your free track'
    },
    testimonials: {
      eyebrow: 'STUDENT VOICES',
      heading: 'Rated 4.9 out of 5 by learners worldwide'
    },
    instructor: {
      eyebrow: 'BECOME A MASTER INSTRUCTOR',
      heading: 'Train the next generation of certified technical tradesmen',
      cta: 'Teach with us'
    },
    learnerNotes: {
      eyebrow: 'PROOF OF TRANSFORMATION',
      heading: 'Notes from our learners'
    },
    cta: {
      badge: 'Next Cohort Begins Monday',
      heading: "Let's build your future.",
      subtitle: 'Join over 60,000 ambitious learners gaining in-demand technical trade skills and certified careers.',
      startLearning: 'Start learning',
      teachWithUs: 'Teach with us',
      guarantee: '✓ 14-day money-back guarantee',
      alumni: '✓ Verified alumni network',
      career: '✓ Lifetime career portal access'
    },
    footer: {
      tagline: 'The modern technical trade & vocational learning operating system. Built for ambitious craftsmen, verified by leading industrial and manufacturing employers.',
      colPrograms: 'Programs',
      colPlatform: 'Platform',
      colCommunity: 'Community',
      colLegal: 'Legal',
      copyright: '© 2026 SAMURAI TALENT Inc. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      cookies: 'Cookie Preferences'
    },
    auth: {
      welcomeBack: 'Welcome back!',
      createAccount: 'Create your account',
      loginSubtitle: 'Please login to access your learner portal, workshop labs, and job tracker.',
      signupSubtitle: 'Join over 60,000 learners mastering in-demand technical trades and certified craftsman skills.',
      fullName: 'Full Name',
      fullNamePlaceholder: 'Kenji Takahashi',
      usernameOrEmail: 'Username or Email',
      emailPlaceholder: 'Type your username or learner email',
      password: 'Password',
      passwordPlaceholder: 'Type your password',
      rememberMe: 'Remember me',
      forgotPassword: 'Forgot Password?',
      logInBtn: 'Log In',
      signUpBtn: 'Sign Up',
      orContinueWith: 'OR CONTINUE WITH',
      googleBtn: 'Continue with Google Workspace',
      noAccount: "Don't have an account?",
      haveAccount: 'Already have an account?',
      getStartedLink: 'Get started for free',
      loginLink: 'Log in',
      demoAccounts: 'Quick Demo Logins:',
      instructorDemo: 'Instructor (Kenji Takahashi)',
      studentDemo: 'Learner (Alex Morgan)'
    },
    getStarted: {
      step1Title: 'Select Your Path',
      step1Subtitle: 'How do you plan to use SAMURAI TALENT?',
      step2Title: 'Choose Your Trade Focus',
      step2Subtitle: 'Select the technical domain you want to specialize in.',
      step3Title: 'Complete Your Registration',
      step3Subtitle: 'Create your credentials to access live workshop labs & coaching.',
      roleStudent: 'Learner / Apprentice',
      roleStudentDesc: 'Learn trades & get certified',
      roleInstructor: 'Instructor / Master',
      roleInstructorDesc: 'Teach & guide apprentices',
      roleEmployer: 'Employer / Sponsor',
      roleEmployerDesc: 'Hire certified technicians',
      continueBtn: 'Continue',
      backBtn: 'Back',
      completeBtn: 'Create Account & Start Learning'
    },
    studentPortal: {
      portalBadge: 'LEARNER PORTAL',
      menu: {
        dashboard: 'Dashboard',
        explore: 'Explore Courses',
        myLearning: 'My learning',
        assignments: 'Assignments & Labs',
        quizzes: 'Quizzes & Assessments',
        certificates: 'JIS Certificates',
        history: 'Learning History',
        jobs: 'Job Board',
        notifications: 'Notifications',
        profile: 'My Profile',
        settings: 'Settings',
        support: 'Support',
        logout: 'Sign Out'
      },
      tabTitles: {
        dashboard: 'Learner Dashboard',
        explore: 'Explore Courses & Trades',
        'my-learning': 'My Learning & Active Labs',
        assignments: 'Assignments & Lab Queue',
        quizzes: 'Quizzes & Skill Check',
        certificates: 'JIS Trade Credentials',
        history: 'Learning History & Log',
        jobs: 'Industry Placement & Jobs',
        notifications: 'Notifications & Feedback',
        profile: 'Learner Profile',
        settings: 'Account Settings',
        support: 'Learner Support & Help'
      },
      searchPlaceholder: 'Search portal courses, labs, guides...',
      kpi: {
        activeCourses: 'Active courses',
        completed: 'Completed',
        pendingAssessments: 'Pending assessments',
        certificatesEarned: 'Certificates earned',
        inProgress: 'In Progress',
        passed: 'Passed',
        thisWeek: 'This Week',
        verified: 'Verified'
      },
      myLearningHeading: 'My Learning & Active Courses',
      continueLab: 'Continue Lab',
      viewAll: 'View All',
      profileVerifiedBadge: 'Verified Learner',
      editProfile: 'Edit Profile',
      logout: 'Log out',
      quizzesEyebrow: 'COMPETENCY CHECKS',
      quizzesTitle: 'Quizzes & Assessments',
      quizItemTitle: 'Quiz 04: Database Concurrency & Circuit Control',
      quizItemDesc: '15 Questions · Due in 5 days',
      startQuiz: 'Start Quiz'
    },
    instructorPortal: {
      portalBadge: 'FACULTY & INSTRUCTOR PORTAL',
      menuGroups: {
        teaching: 'Teaching & Classroom',
        finance: 'Finance & Earnings',
        account: 'Account & Support'
      },
      menu: {
        dashboard: 'Dashboard',
        courses: 'My Courses & Labs',
        workshops: 'Live Workshops',
        inspections: 'Assignments & Grading',
        apprentices: 'Students & Apprentices',
        earnings: 'Earnings & Payouts',
        notifications: 'Notifications',
        profile: 'Instructor Profile',
        settings: 'Settings',
        support: 'Help & Support',
        logout: 'Sign Out'
      },
      tabTitles: {
        dashboard: 'Instructor Dashboard',
        courses: 'My Courses & Labs',
        inspections: 'Assignments & Grading Queue',
        workshops: 'Live Workshops Studio',
        apprentices: 'Students & Apprentice Roster',
        earnings: 'Earnings & Payouts',
        notifications: 'Notifications & Alerts',
        profile: 'Instructor Profile',
        settings: 'Instructor Settings',
        support: 'Help & Faculty Support'
      },
      searchPlaceholder: 'Search labs, apprentices, submissions...',
      kpi: {
        activeApprentices: 'Active Apprentices',
        pendingInspections: 'Pending Inspections',
        credentialsIssued: 'JIS Credentials Issued',
        monthlyRoyalties: 'Monthly Royalties'
      },
      quickActions: 'Instructor Workspace Actions',
      createCourse: 'New Course Lab',
      startWorkshop: 'Go Live Studio',
      gradeSubmissions: 'Grade Queue',
      profileVerifiedBadge: 'Verified Instructor',
      profilePreferences: 'Instructor Preferences',
      profileSeal: 'Instructor Profile & JIS Seal',
      logout: 'Sign Out'
    }
  },
  ja: {
    nav: {
      brand: 'サムライタレント',
      acceleration: 'キャリア加速',
      courses: '講座一覧',
      certificates: 'JIS資格認定',
      jobs: '就職求人',
      teach: '講師募集',
      login: 'ログイン',
      getStarted: '始める'
    },
    hero: {
      badge: '実技訓練生を募集中・定員制',
      titleLine1: '確かな技術から、',
      titleLine2: '確かなキャリアへ',
      description: '日本の最前線で活躍するプロフェッショナルへ。熟練マイスターから実践技術を学び、現場で必要とされる資格とキャリアを獲得する技術教育プラットフォーム。',
      startLearning: '学習を始める',
      howItWorks: '受講の流れ',
      trust1: '実践ワークショップ研修',
      trust2: 'マイスターによる実技審査',
      trust3: 'JIS公認技術認定証',
      canvasTop: '上位5%即戦力人材',
      canvasApplied: '実践型カリキュラム',
      canvasPortfolio: '実技ポートフォリオ',
      canvasStatus: '実践ラーニングキャンバス'
    },
    stats: {
      eyebrow: 'キャリア加速プログラム',
      headingPrefix: '指導、資格認定、そして',
      headingHighlight: '確実な就職・転職へ。',
      card1Tag: 'リアルタイム指導',
      card1Response: '4時間以内の返信',
      step1: '実技ラボ',
      step2: '指導員検定',
      step3: '資格認定',
      card1Title: 'マイスター実技審査',
      card1Badge: '合格率100%',
      card2Tag: '技能証明',
      card2Standard: 'JIS日本産業規格準拠',
      card2Title: '認定技術ポートフォリオ',
      card2Subtitle: '提携企業への直接就職',
      verified: '認証済み',
      card2BottomTitle: '企業採用ネットワーク',
      card2Badge: '直接採用',
      stat1Value: '10コース',
      stat1Label: '専門技術分野',
      stat2Value: '60,000名+',
      stat2Label: '受講生',
      stat3Value: '4.9 / 5',
      stat3Label: '平均満足度',
      stat4Value: '94%',
      stat4Label: '就職・内定率'
    },
    courses: {
      eyebrow: '人気講座一覧',
      heading: '需要の高い実践的技術をマスター',
      searchPlaceholder: '講座名や技術スキルを検索...',
      all: 'すべて',
      catMechanical: '自動車・機械',
      catElectrical: '電気・空調',
      catConstruction: '建築・内装',
      catWelding: '溶接・配管',
      weeks: '週間',
      viewSyllabus: 'シラバスを見る',
      enrollNow: '今すぐ受講',
      noCourses: '該当する講座が見つかりませんでした'
    },
    curriculum: {
      eyebrow: 'カリキュラム構造',
      heading: '現場で必要なすべてを、一つのカリキュラムで',
      certTitle: 'SAMURAI TALENT 修了認定証',
      certSub: 'JIS公認技術認定証',
      certStudent: '認定技術修了生に授与',
      certVerify: '暗号技術による改ざん不可能な技能証明'
    },
    steps: {
      eyebrow: '受講ステップ',
      heading: '登録から就職までの4つのステップ',
      cta: '今すぐ始める'
    },
    features: {
      eyebrow: 'SAMURAI TALENT の基準',
      heading: '現場で信頼されるプロフェッショナル技術教育'
    },
    freeCourse: {
      tag: '完全無料 · クレジットカード不要',
      title: 'まずは無料体験講座から始めませんか？',
      subtitle: '本格的なコースを始める前に、基本安全基準、工具の扱い方、図面の読み方を体験できます。',
      cta: '無料講座を体験する'
    },
    testimonials: {
      eyebrow: '受講生の声',
      heading: '世界中の受講生から4.9 / 5の高評価'
    },
    instructor: {
      eyebrow: 'マイスター講師募集',
      heading: '次代の認定技術者を育成するプロフェッショナルへ',
      cta: '講師として応募する'
    },
    learnerNotes: {
      eyebrow: '受講生の確かな変化',
      heading: '受講生からのフィードバック'
    },
    cta: {
      badge: '次回コホートは月曜日開講',
      heading: '確かな技術で、確かな未来を。',
      subtitle: '6万人以上の仲間とともに、一生モノの技術と公認資格を手に入れましょう。',
      startLearning: '学習を始める',
      teachWithUs: '講師として参加する',
      guarantee: '✓ 14日間の返金保証',
      alumni: '✓ 認定修了生ネットワーク',
      career: '✓ キャリア支援ポータル無期限利用'
    },
    footer: {
      tagline: '熟練の職人技と最先端の工学を統合した次世代技術教育OS。現場のプロフェッショナルを育成し、国内外の優良企業と直結します。',
      colPrograms: '提供プログラム',
      colPlatform: 'プラットフォーム',
      colCommunity: 'コミュニティ',
      colLegal: '規約・方針',
      copyright: '© 2026 SAMURAI TALENT Inc. All rights reserved.',
      privacy: 'プライバシーポリシー',
      terms: '利用規約',
      cookies: 'クッキー設定'
    },
    auth: {
      welcomeBack: 'おかえりなさい！',
      createAccount: '新規アカウント作成',
      loginSubtitle: '実技ラボ、提出課題、求人管理にアクセスするにはログインしてください。',
      signupSubtitle: '6万人以上の仲間とともに、需要の高い実践的技術と公認資格を獲得しましょう。',
      fullName: 'お名前（漢字/ローマ字）',
      fullNamePlaceholder: '高橋 健二',
      usernameOrEmail: 'ユーザー名またはメールアドレス',
      emailPlaceholder: 'ユーザー名またはメールアドレスを入力',
      password: 'パスワード',
      passwordPlaceholder: 'パスワードを入力',
      rememberMe: 'ログイン状態を保持する',
      forgotPassword: 'パスワードをお忘れですか？',
      logInBtn: 'ログイン',
      signUpBtn: 'アカウント作成',
      orContinueWith: 'または別のアカウントで続行',
      googleBtn: 'Google Workspace で続行',
      noAccount: 'アカウントをお持ちでないですか？',
      haveAccount: '既にアカウントをお持ちですか？',
      getStartedLink: '無料で始める',
      loginLink: 'ログイン',
      demoAccounts: 'ワンクリック体験用アカウント:',
      instructorDemo: '指導員（高橋 健二）',
      studentDemo: '受講生（Alex Morgan）'
    },
    getStarted: {
      step1Title: '目的を選択してください',
      step1Subtitle: 'SAMURAI TALENT をどのように活用しますか？',
      step2Title: '専門技術分野を選択',
      step2Subtitle: '受講したい、または教えたい技術領域を選択してください。',
      step3Title: '登録を完了する',
      step3Subtitle: '実技ラボやマイスター指導へアクセスするためのアカウントを作成します。',
      roleStudent: '技術訓練生 / 生徒',
      roleStudentDesc: '技術を学び、JIS公認資格と就職を獲得',
      roleInstructor: 'マイスター指導員 / 講師',
      roleInstructorDesc: '技術を指導し、受講生の課題を審査',
      roleEmployer: '採用担当企業 / スポンサー',
      roleEmployerDesc: '公認技術者を直接スカウト・採用',
      continueBtn: '次へ進む',
      backBtn: '戻る',
      completeBtn: 'アカウントを作成して学習を開始'
    },
    studentPortal: {
      portalBadge: '受講生ポータル',
      menu: {
        dashboard: 'ダッシュボード',
        explore: '講座一覧',
        myLearning: '受講中の講座',
        assignments: '課題・実技審査',
        quizzes: '小テスト・評価',
        certificates: 'JIS資格認定',
        history: '学習履歴',
        jobs: '就職求人',
        notifications: 'お知らせ',
        profile: 'マイプロフィール',
        settings: 'アカウント設定',
        support: '受講生サポート',
        logout: 'ログアウト'
      },
      tabTitles: {
        dashboard: '受講生ダッシュボード',
        explore: '講座一覧・技術検索',
        'my-learning': '受講中の講座・実技ラボ',
        assignments: '課題提出・実技審査キュー',
        quizzes: '小テスト・習熟度判定',
        certificates: 'JIS公認技術資格証',
        history: '受講履歴・作業ログ',
        jobs: '企業採用・技術職求人',
        notifications: 'お知らせ・審査結果通知',
        profile: '受講生プロフィール',
        settings: 'アカウント設定',
        support: 'ヘルプ＆サポート'
      },
      searchPlaceholder: '講座、実技ラボ、技術マニュアルを検索...',
      kpi: {
        activeCourses: '受講中の講座',
        completed: '修了済み講座',
        pendingAssessments: '未提出の課題',
        certificatesEarned: '獲得資格認定',
        inProgress: '進行中',
        passed: '合格',
        thisWeek: '今週の提出',
        verified: '認証済み'
      },
      myLearningHeading: '受講中の講座＆実技ラボ',
      continueLab: '実技ラボを再開',
      viewAll: 'すべて表示',
      profileVerifiedBadge: '公認受講生',
      editProfile: 'プロフィール編集',
      logout: 'ログアウト',
      quizzesEyebrow: '習熟度判定テスト',
      quizzesTitle: '小テスト・評価一覧',
      quizItemTitle: 'テスト 04: 回路制御と安全基準',
      quizItemDesc: '全15問 · 提出期限まであと5日',
      startQuiz: 'テストを開始'
    },
    instructorPortal: {
      portalBadge: '指導員・マイスターポータル',
      menuGroups: {
        teaching: '技術指導・講義',
        finance: '報酬・財務管理',
        account: 'アカウント・支援'
      },
      menu: {
        dashboard: 'ダッシュボード',
        courses: '担当講座・実技ラボ',
        workshops: 'ライブ実技配信',
        inspections: '課題審査・採点',
        apprentices: '受講生一覧',
        earnings: '指導報酬・出金',
        notifications: '通知・アラート',
        profile: '講師プロフィール',
        settings: '講師環境設定',
        support: '教員サポート',
        logout: 'ログアウト'
      },
      tabTitles: {
        dashboard: '指導員ダッシュボード',
        courses: '担当講座・ラボ管理',
        inspections: '実技提出審査・採点キュー',
        workshops: 'ライブ実技配信スタジオ',
        apprentices: '受講生名簿・進捗管理',
        earnings: '指導報酬・振込履歴',
        notifications: '通知・システムアラート',
        profile: '指導員プロフィール',
        settings: '指導環境設定',
        support: 'ヘルプ・教員サポート'
      },
      searchPlaceholder: '実技ラボ、受講生、提出物を検索...',
      kpi: {
        activeApprentices: '指導中の受講生',
        pendingInspections: '未審査の実技提出',
        credentialsIssued: '発行済みJIS認定証',
        monthlyRoyalties: '今月分確定ロイヤリティ'
      },
      quickActions: '指導員クイック操作',
      createCourse: '新規実技ラボ作成',
      startWorkshop: 'ライブ実技配信を開始',
      gradeSubmissions: '採点キューを開く',
      profileVerifiedBadge: '公認マイスター指導員',
      profilePreferences: '指導員環境設定',
      profileSeal: '講師プロフィール・JIS認印',
      logout: 'ログアウト'
    }
  }
};

translations.en.learnerPortal = translations.en.studentPortal;
translations.ja.learnerPortal = translations.ja.studentPortal;

// Comprehensive English-to-Japanese UI phrases for instant translation
export const EN_TO_JA_DICT = {
  // Navigation & Core Brand
  'SAMURAI TALENT': 'サムライタレント',
  'Acceleration': 'キャリア加速',
  'Courses': '講座一覧',
  'Certificates': 'JIS資格認定',
  'Jobs': '就職求人',
  'Teach': '講師募集',
  'Log In': 'ログイン',
  'Sign Up': 'アカウント作成',
  'Get Started': '始める',
  'Sign Out': 'ログアウト',
  'Log out': 'ログアウト',
  'Edit Profile': 'プロフィール編集',
  'Verified Learner': '公認受講生',
  'Verified Student': '公認受講生',
  'Verified Instructor': '公認マイスター指導員',
  'Verified Trade Credential': 'JIS公認技術資格',
  'Learner Dashboard': '受講生ダッシュボード',
  'Student Dashboard': '受講生ダッシュボード',
  'Instructor Dashboard': '指導員ダッシュボード',
  'Learner Portal': '受講生ポータル',
  'LEARNER PORTAL': '受講生ポータル',
  'Student Portal': '受講生ポータル',
  'STUDENT PORTAL': '受講生ポータル',
  'Instructor Portal': '指導員ポータル',
  'Learner (Alex Morgan)': '受講生（Alex Morgan）',
  'Learner Account Setup': '受講生アカウント設定',
  'Create Learner Account': '受講生アカウント作成',

  // Sidebars & Tabs
  'Dashboard': 'ダッシュボード',
  'Explore Courses': '講座一覧',
  'Explore Courses & Trades': '講座一覧・技術検索',
  'My learning': '受講中の講座',
  'My Learning': '受講中の講座',
  'My Learning & Active Labs': '受講中の講座・実技ラボ',
  'Assignments & Labs': '課題・実技審査',
  'Assignments & Lab Queue': '課題提出・実技審査キュー',
  'Quizzes & Assessments': '小テスト・評価',
  'Quizzes & Skill Check': '小テスト・習熟度判定',
  'JIS Certificates': 'JIS資格認定',
  'JIS Trade Credentials': 'JIS公認技術資格証',
  'Learning History': '学習履歴',
  'Learning History & Log': '受講履歴・作業ログ',
  'Job Board': '就職求人',
  'Industry Placement & Jobs': '企業採用・技術職求人',
  'Notifications': 'お知らせ',
  'Notifications & Feedback': 'お知らせ・審査結果通知',
  'Notifications & Alerts': '通知・システムアラート',
  'My Profile': 'マイプロフィール',
  'Apprentice Profile': '受講生プロフィール',
  'Settings': '設定',
  'Account Settings': 'アカウント設定',
  'Support': 'サポート',
  'Apprentice Support & Help': 'ヘルプ＆サポート',
  'Help & Support': 'ヘルプ＆サポート',
  'Teaching & Classroom': '技術指導・講義',
  'Finance & Earnings': '報酬・財務管理',
  'Account & Support': 'アカウント・支援',
  'My Courses & Labs': '担当講座・実技ラボ',
  'Live Workshops': 'ライブ実技配信',
  'Live Workshops Studio': 'ライブ実技配信スタジオ',
  'Assignments & Grading': '課題審査・採点',
  'Assignments & Grading Queue': '実技提出審査・採点キュー',
  'Students & Apprentices': '受講生一覧',
  'Students & Apprentice Roster': '受講生名簿・進捗管理',
  'Earnings & Payouts': '指導報酬・振込履歴',
  'Instructor Profile': '指導員プロフィール',
  'Instructor Settings': '指導環境設定',
  'Help & Faculty Support': 'ヘルプ・教員サポート',

  // KPIs & Metrics
  'Active courses': '受講中の講座',
  'Active Courses': '受講中の講座',
  'Completed': '修了済み',
  'Pending assessments': '未提出の課題',
  'Certificates earned': '獲得資格認定',
  'In Progress': '進行中',
  'Passed': '合格',
  'This Week': '今週の提出',
  'Verified': '認証済み',
  'Active Apprentices': '指導中の受講生',
  'Pending Inspections': '未審査の実技提出',
  'Credentials Issued': '発行済みJIS認定証',
  'Monthly Royalties': '今月分確定ロイヤリティ',
  'Instructor Workspace Actions': '指導員クイック操作',
  'New Course Lab': '新規実技ラボ作成',
  'Go Live Studio': 'ライブ実技配信を開始',
  'Grade Queue': '採点キューを開く',

  // Categories
  'All Trades': 'すべての専門分野',
  'All': 'すべて',
  'Mechanical & Auto': '自動車・機械',
  'Electrical & HVAC': '電気・空調',
  'Construction & Finishing': '建築・内装',
  'Welding & Piping': '溶接・配管',
  'Carpentry & Joinery': '木工・建具',
  'Solar & Renewable Energy': '太陽光・再生可能エネルギー',
  'Heavy Equipment & Hydraulics': '重機・油圧機器',
  'CNC Machining & Precision Lathe': 'CNC加工・精密旋盤',
  'Aircraft Maintenance Technician': '航空機整備士',

  // Course Titles
  'Plumbing Systems & Hydraulic Pipework': '給排水衛生設備・油圧配管システム',
  'Electrical Installation & Repair': '電気工事施工・屋内配線マスタリー',
  'AC & Refrigeration Technician (HVAC)': '空調・冷凍冷蔵設備技士 (HVAC)',
  'Welding & Structural Metal Fabrication': '溶接・構造金属加工技術',
  'Welding & Metal Fabrication': '溶接・構造金属加工技術',
  'Carpentry & Architectural Woodworking': '建築大工・木工造作マスタリー',
  'Automotive Mechanic & Engine Diagnostics': '自動車整備士・エンジン診断技術',
  'Solar PV & Energy Storage Systems': '産業用太陽光発電・蓄電システム',
  'Heavy Equipment & Hydraulic Maintenance': '重機整備・油圧機器保全技術',
  'Aircraft Maintenance & Avionics Basics': '航空機整備・アビオニクス基礎',

  // Levels & Timing
  'Beginner to Pro': '未経験 〜 プロ',
  'Intermediate to Advanced': '中級 〜 上級',
  'Advanced Professional': '上級プロフェッショナル',
  '10 weeks': '10週間',
  '12 weeks': '12週間',
  '8 weeks': '8週間',
  '14 weeks': '14週間',
  '16 weeks': '16週間',
  'Week 8 of 12': '第8週 / 全12週',
  'Week 4 of 12': '第4週 / 全12週',
  'Week 6 of 10': '第6週 / 全10週',
  'Module 1 of 12': '第1単元 / 全12単元',
  'Final Capstone': '最終修了実技課題',

  // Common Buttons & Interactive Elements
  'Continue Lab': '実技ラボを再開',
  'Open Workshop Lab': '実技ラボを開く',
  'View All': 'すべて表示',
  'View Syllabus': 'シラバスを見る',
  'Enroll Now': '今すぐ受講',
  'Enrolled': '受講中',
  'Download Certificate': '認定証をダウンロード',
  'View Certificate': '認定証を表示',
  'Apply Now': '今すぐ応募',
  'Submit Assignment': '課題を提出',
  'Start Quiz': 'テストを開始',
  'Save Changes': '変更を保存',
  'Cancel': 'キャンセル',
  'Close': '閉じる',
  'Next': '次へ',
  'Back': '戻る',
  'Filter': '絞り込み',
  'Filters': 'フィルター',
  'Search': '検索',

  // Certificates View
  'Awarded to certified technical apprentice': '認定技術修了生に授与',
  'Cryptographically verified & tamper-proof': '暗号技術による改ざん不可能な技能証明',
  'SAMURAI TALENT CERTIFICATE OF MASTERY': 'SAMURAI TALENT 技能修了認定証',
  '96 Workshop Hours': '実技研修 96時間',
  '80 Workshop Hours': '実技研修 80時間',
  '72 Workshop Hours': '実技研修 72時間',
  'November 14, 2026': '2026年11月14日',
  'October 28, 2026': '2026年10月28日',
  'September 19, 2026': '2026年9月19日',
  'August 05, 2026': '2026年8月5日',
  'July 12, 2026': '2026年7月12日',

  // Jobs View
  'Full Time': '正社員',
  'Part Time': 'パート',
  'Contract': '契約社員',
  'Full Time · On-Site Workshop': '正社員 · 実地現場勤務',
  'Yokohama, Kanagawa': '神奈川県横浜市',
  'Osaka, Japan': '大阪府大阪市',
  'Chiba / Tokyo Bay': '千葉県・東京湾岸',
  'Tokyo / Kanto Region': '東京都・関東一円',
  'Kyoto, Japan': '京都府京都市',
  'Tokyo, Japan': '東京都',
  'Kanagawa, Japan': '神奈川県',
  'Toyota Motor Corporation': 'トヨタ自動車株式会社',
  'Daikin Industries, Ltd.': 'ダイキン工業株式会社',
  'JFE Steel Corporation': 'JFEスチール株式会社',
  'Takenaka Corporation': '株式会社竹中工務店',
  'Kyocera Corporation': '京セラ株式会社',
  'Komatsu Ltd.': '株式会社小松製作所',
  '2 days ago': '2日前',
  '1 day ago': '1日前',
  '3 days ago': '3日前',
  '5 days ago': '5日前',
  '1 week ago': '1週間前',

  // Profile View
  'Personal Information': '基本情報',
  'Full Name': '氏名',
  'Email Address': 'メールアドレス',
  'Phone Number': '電話番号',
  'Bio': '自己紹介',
  'Technical Domain': '専門技術分野',
  'Location': '所在地',
  'Profile Updated': 'プロフィールを更新しました',

  // Instructor Specific
  'Master Kenji Takahashi': '高橋 健二 マイスター',
  'JIS Certified Master Level 1': 'JIS認定特級マイスター',
  'Instructor Profile & JIS Seal': '講師プロフィール・JIS認印',
  'Instructor Preferences': '指導員環境設定',
  'Pass Inspection': '実技合格',
  'Request Re-Inspection': '再提出を指示',
  'Total Royalties': '累計指導報酬',
  'Available for Payout': '出金可能残高',
  'Next Scheduled Payout': '次回振込予定日',
  'Withdraw Funds': '出金申請'
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem('samurai_language') || 'en';
    } catch {
      return 'en';
    }
  });

  // Clean up any old external translate cookies
  useEffect(() => {
    try {
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      if (typeof window !== 'undefined' && window.location.hostname) {
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname}`;
      }
    } catch (e) {}
  }, []);

  const toggleLanguage = (lang) => {
    const next = lang || (language === 'en' ? 'ja' : 'en');
    setLanguage(next);
    try {
      localStorage.setItem('samurai_language', next);
    } catch {}
  };

  const t = translations[language] || translations.en;

  // Bilingual translation helper
  const trans = (enText, jaFallback) => {
    if (language === 'en') return enText;
    if (jaFallback) return jaFallback;
    if (typeof enText === 'string' && EN_TO_JA_DICT[enText]) return EN_TO_JA_DICT[enText];
    return enText;
  };

  // Safe DOM text node translation observer to ensure 100% coverage across deep subviews
  useEffect(() => {
    if (typeof document === 'undefined') return;

    // Set html lang attribute
    document.documentElement.lang = language;

    if (language !== 'ja') {
      // Revert any previously translated DOM elements
      const elements = document.querySelectorAll('[data-lang-original]');
      elements.forEach((el) => {
        const orig = el.getAttribute('data-lang-original');
        if (orig !== null) {
          el.textContent = orig;
          el.removeAttribute('data-lang-original');
        }
      });
      const inputs = document.querySelectorAll('[data-lang-placeholder-orig]');
      inputs.forEach((inp) => {
        const origP = inp.getAttribute('data-lang-placeholder-orig');
        if (origP !== null) {
          inp.placeholder = origP;
          inp.removeAttribute('data-lang-placeholder-orig');
        }
      });
      return;
    }

    // When language === 'ja', walk and translate leaf elements and inputs
    const translateTree = () => {
      // 1. Translate inputs placeholder
      const inputs = document.querySelectorAll('input[placeholder], textarea[placeholder]');
      inputs.forEach((inp) => {
        const currentP = inp.placeholder;
        if (!currentP) return;
        if (EN_TO_JA_DICT[currentP]) {
          if (!inp.hasAttribute('data-lang-placeholder-orig')) {
            inp.setAttribute('data-lang-placeholder-orig', currentP);
          }
          inp.placeholder = EN_TO_JA_DICT[currentP];
        }
      });

      // 2. TreeWalker on text nodes
      const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode(node) {
            if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
            const parent = node.parentElement;
            if (!parent) return NodeFilter.FILTER_REJECT;
            const tag = parent.tagName.toLowerCase();
            if (['script', 'style', 'code', 'pre', 'svg'].includes(tag)) return NodeFilter.FILTER_REJECT;
            return NodeFilter.FILTER_ACCEPT;
          }
        }
      );

      let textNode;
      while ((textNode = walker.nextNode())) {
        const text = textNode.nodeValue.trim();
        if (!text) continue;
        if (EN_TO_JA_DICT[text]) {
          const parent = textNode.parentElement;
          if (parent && !parent.hasAttribute('data-lang-original')) {
            parent.setAttribute('data-lang-original', textNode.nodeValue);
          }
          textNode.nodeValue = textNode.nodeValue.replace(text, EN_TO_JA_DICT[text]);
        }
      }
    };

    translateTree();

    const observer = new MutationObserver(() => {
      if (language === 'ja') {
        translateTree();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, t, trans }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    return {
      language: 'en',
      toggleLanguage: () => {},
      setLanguage: () => {},
      t: translations.en,
      trans: (en, ja) => en
    };
  }
  return ctx;
}
