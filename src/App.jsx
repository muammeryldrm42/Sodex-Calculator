import { useState, useMemo } from "react";

const t = {
  en: {
    badge: "SEASON 1 • LIVE",
    title: "SoPoints Calculator",
    subtitle: "Estimate your $SOSO airdrop value",
    quickMode: "⚡ Quick Mode",
    manualMode: "✏️ Manual Mode",
    seasonWeeks: "Season Duration (Weeks)",
    weekSuffix: " weeks",
    estTotalPoints: "Estimated Total Points",
    totalPointsLabel: "Total Points Estimate",
    totalPointsPlaceholder: "e.g. 20000000",
    myPoints: "My Points",
    myPointsPlaceholder: "e.g. 5000",
    tokenPool: "SOSO to Distribute",
    tokenPrice: "$SOSO Price",
    yourEstimate: "Your Estimated Earnings",
    poolShare: "Pool share",
    perPoint: "1 SoPoint value",
    scenarios: "📊 3 Scenario Comparison",
    withPoints: "points",
    cautious: "Cautious",
    moderate: "Moderate",
    optimistic: "Optimistic",
    shareLabel: "Pool share",
    ctaTitle: "🚀 Start Trading Now",
    ctaDesc: "Trade top Crypto and Stocks on SoDEX. Share 1M SoPoints weekly rewards. Join SoDEX Mainnet with my referral code and get a 5% SoPoints Boost!",
    ctaButton: "Trade on SoDEX",
    officialInfo: "ℹ️ Official Info",
    infos: [
      "1,000,000 SoPoints distributed weekly",
      "Season 1 max 6 months (~26 weeks)",
      "150M SOSO ecosystem incentive pool",
      "Snapshot: Saturday 00:00 UTC",
      "Distribution: Tuesday 12:00 UTC",
      "Dynamic weighting model — no fixed formula",
    ],
    disclaimer: "⚠️ This calculator is for estimation purposes only. There is no official dollar/point ratio. Data is compiled from SoDEX docs and public sources.",
  },
  tr: {
    badge: "SEZON 1 • CANLI",
    title: "SoPoints Hesaplayıcı",
    subtitle: "Tahmini $SOSO airdrop değerini hesapla",
    quickMode: "⚡ Hızlı Mod",
    manualMode: "✏️ Manuel Mod",
    seasonWeeks: "Season Süresi (Hafta)",
    weekSuffix: " hafta",
    estTotalPoints: "Tahmini Toplam Puan",
    totalPointsLabel: "Toplam Puan Tahmini",
    totalPointsPlaceholder: "ör: 20000000",
    myPoints: "Benim Puanım",
    myPointsPlaceholder: "ör: 5000",
    tokenPool: "Dağıtılacak SOSO",
    tokenPrice: "$SOSO Fiyatı",
    yourEstimate: "Tahmini Kazancın",
    poolShare: "Havuz payın",
    perPoint: "1 SoPoint değeri",
    scenarios: "📊 3 Senaryo Karşılaştırma",
    withPoints: "puan ile",
    cautious: "Temkinli",
    moderate: "Orta",
    optimistic: "İyimser",
    shareLabel: "Havuzun",
    ctaTitle: "🚀 Hemen Trade'e Başla",
    ctaDesc: "SoDEX'te en iyi kripto ve hisseleri trade et. Haftalık 1M SoPoints ödülünü paylaş. Referral kodumla SoDEX Mainnet'e katıl ve %5 SoPoints Boost kazan!",
    ctaButton: "SoDEX'te Trade Et",
    officialInfo: "ℹ️ Resmi Bilgiler",
    infos: [
      "Haftalık 1,000,000 SoPoints dağıtılıyor",
      "Season 1 max 6 ay (~26 hafta)",
      "150M SOSO ekosistem teşvik havuzu",
      "Snapshot: Cumartesi 00:00 UTC",
      "Dağıtım: Salı 12:00 UTC",
      "Dinamik ağırlık modeli — sabit formül yok",
    ],
    disclaimer: "⚠️ Bu hesaplayıcı yalnızca tahmin amaçlıdır. Resmi bir dolar/puan oranı bulunmamaktadır. Veriler SoDEX docs ve kamuya açık kaynaklardan derlenmiştir.",
  },
  es: {
    badge: "TEMPORADA 1 • EN VIVO",
    title: "Calculadora SoPoints",
    subtitle: "Estima el valor de tu airdrop de $SOSO",
    quickMode: "⚡ Modo Rápido",
    manualMode: "✏️ Modo Manual",
    seasonWeeks: "Duración de Temporada (Semanas)",
    weekSuffix: " sem.",
    estTotalPoints: "Puntos Totales Estimados",
    totalPointsLabel: "Estimación de Puntos Totales",
    totalPointsPlaceholder: "ej: 20000000",
    myPoints: "Mis Puntos",
    myPointsPlaceholder: "ej: 5000",
    tokenPool: "SOSO a Distribuir",
    tokenPrice: "Precio de $SOSO",
    yourEstimate: "Tu Ganancia Estimada",
    poolShare: "Parte del pool",
    perPoint: "Valor de 1 SoPoint",
    scenarios: "📊 Comparación de 3 Escenarios",
    withPoints: "puntos",
    cautious: "Cauteloso",
    moderate: "Moderado",
    optimistic: "Optimista",
    shareLabel: "Parte del pool",
    ctaTitle: "🚀 Empieza a Operar Ahora",
    ctaDesc: "Opera las mejores criptos y acciones en SoDEX. Comparte 1M de recompensas SoPoints semanales. ¡Únete a SoDEX Mainnet con mi código de referido y obtén un 5% de SoPoints Boost!",
    ctaButton: "Operar en SoDEX",
    officialInfo: "ℹ️ Información Oficial",
    infos: [
      "Se distribuyen 1.000.000 SoPoints cada semana",
      "Temporada 1 máx. 6 meses (~26 semanas)",
      "Pool de incentivos del ecosistema de 150M SOSO",
      "Snapshot: Sábado 00:00 UTC",
      "Distribución: Martes 12:00 UTC",
      "Modelo de ponderación dinámica — sin fórmula fija",
    ],
    disclaimer: "⚠️ Esta calculadora es solo para fines de estimación. No existe una proporción oficial de dólar/punto. Los datos provienen de los docs de SoDEX y de fuentes públicas.",
  },
  zh: {
    badge: "第一赛季 • 进行中",
    title: "SoPoints 计算器",
    subtitle: "估算你的 $SOSO 空投价值",
    quickMode: "⚡ 快速模式",
    manualMode: "✏️ 手动模式",
    seasonWeeks: "赛季时长（周）",
    weekSuffix: " 周",
    estTotalPoints: "预计总积分",
    totalPointsLabel: "总积分估算",
    totalPointsPlaceholder: "例如：20000000",
    myPoints: "我的积分",
    myPointsPlaceholder: "例如：5000",
    tokenPool: "待分配 SOSO",
    tokenPrice: "$SOSO 价格",
    yourEstimate: "你的预计收益",
    poolShare: "资金池占比",
    perPoint: "1 SoPoint 价值",
    scenarios: "📊 三种情景对比",
    withPoints: "积分",
    cautious: "保守",
    moderate: "中性",
    optimistic: "乐观",
    shareLabel: "资金池占比",
    ctaTitle: "🚀 立即开始交易",
    ctaDesc: "在 SoDEX 交易热门加密货币和股票。分享每周 100 万 SoPoints 奖励。使用我的邀请码加入 SoDEX 主网，获得 5% SoPoints 加成！",
    ctaButton: "在 SoDEX 交易",
    officialInfo: "ℹ️ 官方信息",
    infos: [
      "每周分配 1,000,000 SoPoints",
      "第一赛季最长 6 个月（约 26 周）",
      "1.5 亿 SOSO 生态激励池",
      "快照：周六 00:00 UTC",
      "分配：周二 12:00 UTC",
      "动态权重模型 — 无固定公式",
    ],
    disclaimer: "⚠️ 此计算器仅供估算参考。官方没有美元/积分比率。数据来自 SoDEX 文档及公开来源。",
  },
  ru: {
    badge: "СЕЗОН 1 • В ЭФИРЕ",
    title: "Калькулятор SoPoints",
    subtitle: "Оцените стоимость вашего airdrop $SOSO",
    quickMode: "⚡ Быстрый режим",
    manualMode: "✏️ Ручной режим",
    seasonWeeks: "Длительность сезона (недели)",
    weekSuffix: " нед.",
    estTotalPoints: "Примерно всего очков",
    totalPointsLabel: "Оценка общего числа очков",
    totalPointsPlaceholder: "напр: 20000000",
    myPoints: "Мои очки",
    myPointsPlaceholder: "напр: 5000",
    tokenPool: "SOSO к распределению",
    tokenPrice: "Цена $SOSO",
    yourEstimate: "Ваш ожидаемый доход",
    poolShare: "Доля в пуле",
    perPoint: "Стоимость 1 SoPoint",
    scenarios: "📊 Сравнение 3 сценариев",
    withPoints: "очков",
    cautious: "Осторожный",
    moderate: "Умеренный",
    optimistic: "Оптимистичный",
    shareLabel: "Доля в пуле",
    ctaTitle: "🚀 Начните торговать сейчас",
    ctaDesc: "Торгуйте топовыми криптовалютами и акциями на SoDEX. Делите 1M SoPoints еженедельных наград. Присоединяйтесь к SoDEX Mainnet по моему реферальному коду и получите буст 5% SoPoints!",
    ctaButton: "Торговать на SoDEX",
    officialInfo: "ℹ️ Официальная информация",
    infos: [
      "Еженедельно распределяется 1 000 000 SoPoints",
      "Сезон 1 — макс. 6 месяцев (~26 недель)",
      "Пул стимулов экосистемы 150M SOSO",
      "Снимок: суббота 00:00 UTC",
      "Распределение: вторник 12:00 UTC",
      "Динамическая модель весов — без фиксированной формулы",
    ],
    disclaimer: "⚠️ Этот калькулятор предназначен только для оценки. Официального соотношения доллар/очко не существует. Данные собраны из документации SoDEX и публичных источников.",
  },
  ko: {
    badge: "시즌 1 • 진행 중",
    title: "SoPoints 계산기",
    subtitle: "$SOSO 에어드랍 가치를 추정하세요",
    quickMode: "⚡ 빠른 모드",
    manualMode: "✏️ 수동 모드",
    seasonWeeks: "시즌 기간 (주)",
    weekSuffix: "주",
    estTotalPoints: "예상 총 포인트",
    totalPointsLabel: "총 포인트 추정치",
    totalPointsPlaceholder: "예: 20000000",
    myPoints: "내 포인트",
    myPointsPlaceholder: "예: 5000",
    tokenPool: "분배될 SOSO",
    tokenPrice: "$SOSO 가격",
    yourEstimate: "예상 수익",
    poolShare: "풀 점유율",
    perPoint: "1 SoPoint 가치",
    scenarios: "📊 3가지 시나리오 비교",
    withPoints: "포인트",
    cautious: "신중",
    moderate: "보통",
    optimistic: "낙관",
    shareLabel: "풀 점유율",
    ctaTitle: "🚀 지금 거래 시작하기",
    ctaDesc: "SoDEX에서 인기 암호화폐와 주식을 거래하세요. 매주 100만 SoPoints 보상을 나누세요. 제 추천 코드로 SoDEX 메인넷에 가입하고 5% SoPoints 부스트를 받으세요!",
    ctaButton: "SoDEX에서 거래하기",
    officialInfo: "ℹ️ 공식 정보",
    infos: [
      "매주 1,000,000 SoPoints 분배",
      "시즌 1 최대 6개월 (~26주)",
      "1.5억 SOSO 생태계 인센티브 풀",
      "스냅샷: 토요일 00:00 UTC",
      "분배: 화요일 12:00 UTC",
      "동적 가중치 모델 — 고정 공식 없음",
    ],
    disclaimer: "⚠️ 이 계산기는 추정 목적으로만 사용됩니다. 공식적인 달러/포인트 비율은 없습니다. 데이터는 SoDEX 문서와 공개 자료에서 수집되었습니다.",
  },
  ja: {
    badge: "シーズン1 • ライブ",
    title: "SoPoints 計算機",
    subtitle: "$SOSO エアドロップの価値を見積もる",
    quickMode: "⚡ クイックモード",
    manualMode: "✏️ 手動モード",
    seasonWeeks: "シーズン期間（週）",
    weekSuffix: "週",
    estTotalPoints: "推定合計ポイント",
    totalPointsLabel: "合計ポイント推定",
    totalPointsPlaceholder: "例: 20000000",
    myPoints: "自分のポイント",
    myPointsPlaceholder: "例: 5000",
    tokenPool: "配布される SOSO",
    tokenPrice: "$SOSO 価格",
    yourEstimate: "推定獲得額",
    poolShare: "プール内シェア",
    perPoint: "1 SoPoint の価値",
    scenarios: "📊 3シナリオ比較",
    withPoints: "ポイント",
    cautious: "慎重",
    moderate: "中立",
    optimistic: "楽観",
    shareLabel: "プール内シェア",
    ctaTitle: "🚀 今すぐ取引を始める",
    ctaDesc: "SoDEX で人気の暗号資産と株式を取引。毎週100万 SoPoints の報酬をシェア。私の紹介コードで SoDEX メインネットに参加し、5% の SoPoints ブーストを獲得！",
    ctaButton: "SoDEX で取引",
    officialInfo: "ℹ️ 公式情報",
    infos: [
      "毎週 1,000,000 SoPoints を配布",
      "シーズン1は最長6か月（約26週）",
      "1.5億 SOSO のエコシステム報酬プール",
      "スナップショット: 土曜 00:00 UTC",
      "配布: 火曜 12:00 UTC",
      "動的ウェイトモデル — 固定式なし",
    ],
    disclaimer: "⚠️ この計算機は見積もり目的のみです。公式のドル/ポイント比率はありません。データは SoDEX のドキュメントと公開情報から集計しています。",
  },
  pt: {
    badge: "TEMPORADA 1 • AO VIVO",
    title: "Calculadora SoPoints",
    subtitle: "Estime o valor do seu airdrop de $SOSO",
    quickMode: "⚡ Modo Rápido",
    manualMode: "✏️ Modo Manual",
    seasonWeeks: "Duração da Temporada (Semanas)",
    weekSuffix: " sem.",
    estTotalPoints: "Total de Pontos Estimado",
    totalPointsLabel: "Estimativa de Pontos Totais",
    totalPointsPlaceholder: "ex: 20000000",
    myPoints: "Meus Pontos",
    myPointsPlaceholder: "ex: 5000",
    tokenPool: "SOSO a Distribuir",
    tokenPrice: "Preço do $SOSO",
    yourEstimate: "Seu Ganho Estimado",
    poolShare: "Parte do pool",
    perPoint: "Valor de 1 SoPoint",
    scenarios: "📊 Comparação de 3 Cenários",
    withPoints: "pontos",
    cautious: "Cauteloso",
    moderate: "Moderado",
    optimistic: "Otimista",
    shareLabel: "Parte do pool",
    ctaTitle: "🚀 Comece a Operar Agora",
    ctaDesc: "Negocie as melhores criptos e ações na SoDEX. Compartilhe 1M de recompensas SoPoints semanais. Entre na SoDEX Mainnet com meu código de indicação e ganhe 5% de SoPoints Boost!",
    ctaButton: "Operar na SoDEX",
    officialInfo: "ℹ️ Informações Oficiais",
    infos: [
      "1.000.000 SoPoints distribuídos por semana",
      "Temporada 1 máx. 6 meses (~26 semanas)",
      "Pool de incentivos do ecossistema de 150M SOSO",
      "Snapshot: Sábado 00:00 UTC",
      "Distribuição: Terça 12:00 UTC",
      "Modelo de peso dinâmico — sem fórmula fixa",
    ],
    disclaimer: "⚠️ Esta calculadora é apenas para fins de estimativa. Não há uma proporção oficial de dólar/ponto. Os dados são compilados dos docs da SoDEX e de fontes públicas.",
  },
  fr: {
    badge: "SAISON 1 • EN DIRECT",
    title: "Calculateur SoPoints",
    subtitle: "Estimez la valeur de votre airdrop $SOSO",
    quickMode: "⚡ Mode Rapide",
    manualMode: "✏️ Mode Manuel",
    seasonWeeks: "Durée de la Saison (Semaines)",
    weekSuffix: " sem.",
    estTotalPoints: "Total de Points Estimé",
    totalPointsLabel: "Estimation du Total de Points",
    totalPointsPlaceholder: "ex : 20000000",
    myPoints: "Mes Points",
    myPointsPlaceholder: "ex : 5000",
    tokenPool: "SOSO à Distribuer",
    tokenPrice: "Prix du $SOSO",
    yourEstimate: "Votre Gain Estimé",
    poolShare: "Part du pool",
    perPoint: "Valeur d'1 SoPoint",
    scenarios: "📊 Comparaison de 3 Scénarios",
    withPoints: "points",
    cautious: "Prudent",
    moderate: "Modéré",
    optimistic: "Optimiste",
    shareLabel: "Part du pool",
    ctaTitle: "🚀 Commencez à Trader",
    ctaDesc: "Tradez les meilleures cryptos et actions sur SoDEX. Partagez 1M de récompenses SoPoints hebdomadaires. Rejoignez SoDEX Mainnet avec mon code de parrainage et obtenez un boost de 5% SoPoints !",
    ctaButton: "Trader sur SoDEX",
    officialInfo: "ℹ️ Infos Officielles",
    infos: [
      "1 000 000 SoPoints distribués chaque semaine",
      "Saison 1 max. 6 mois (~26 semaines)",
      "Pool d'incitations de l'écosystème de 150M SOSO",
      "Snapshot : Samedi 00:00 UTC",
      "Distribution : Mardi 12:00 UTC",
      "Modèle de pondération dynamique — pas de formule fixe",
    ],
    disclaimer: "⚠️ Ce calculateur est uniquement à des fins d'estimation. Il n'existe pas de ratio officiel dollar/point. Les données proviennent des docs SoDEX et de sources publiques.",
  },
  de: {
    badge: "SAISON 1 • LIVE",
    title: "SoPoints Rechner",
    subtitle: "Schätze den Wert deines $SOSO Airdrops",
    quickMode: "⚡ Schnellmodus",
    manualMode: "✏️ Manueller Modus",
    seasonWeeks: "Saisondauer (Wochen)",
    weekSuffix: " Wo.",
    estTotalPoints: "Geschätzte Gesamtpunkte",
    totalPointsLabel: "Schätzung der Gesamtpunkte",
    totalPointsPlaceholder: "z.B. 20000000",
    myPoints: "Meine Punkte",
    myPointsPlaceholder: "z.B. 5000",
    tokenPool: "Zu verteilende SOSO",
    tokenPrice: "$SOSO Preis",
    yourEstimate: "Dein geschätzter Ertrag",
    poolShare: "Pool-Anteil",
    perPoint: "Wert von 1 SoPoint",
    scenarios: "📊 3-Szenarien-Vergleich",
    withPoints: "Punkte",
    cautious: "Vorsichtig",
    moderate: "Moderat",
    optimistic: "Optimistisch",
    shareLabel: "Pool-Anteil",
    ctaTitle: "🚀 Jetzt mit dem Trading starten",
    ctaDesc: "Handle Top-Kryptos und Aktien auf SoDEX. Teile 1M SoPoints wöchentliche Belohnungen. Tritt SoDEX Mainnet mit meinem Empfehlungscode bei und erhalte 5% SoPoints Boost!",
    ctaButton: "Auf SoDEX traden",
    officialInfo: "ℹ️ Offizielle Infos",
    infos: [
      "Wöchentlich werden 1.000.000 SoPoints verteilt",
      "Saison 1 max. 6 Monate (~26 Wochen)",
      "150M SOSO Ökosystem-Anreizpool",
      "Snapshot: Samstag 00:00 UTC",
      "Verteilung: Dienstag 12:00 UTC",
      "Dynamisches Gewichtungsmodell — keine feste Formel",
    ],
    disclaimer: "⚠️ Dieser Rechner dient nur zu Schätzzwecken. Es gibt kein offizielles Dollar/Punkt-Verhältnis. Die Daten stammen aus SoDEX-Docs und öffentlichen Quellen.",
  },
};

const langMeta = {
  en: { flag: "🇬🇧", code: "EN", name: "English" },
  tr: { flag: "🇹🇷", code: "TR", name: "Türkçe" },
  es: { flag: "🇪🇸", code: "ES", name: "Español" },
  zh: { flag: "🇨🇳", code: "ZH", name: "中文" },
  ru: { flag: "🇷🇺", code: "RU", name: "Русский" },
  ko: { flag: "🇰🇷", code: "KO", name: "한국어" },
  ja: { flag: "🇯🇵", code: "JA", name: "日本語" },
  pt: { flag: "🇧🇷", code: "PT", name: "Português" },
  fr: { flag: "🇫🇷", code: "FR", name: "Français" },
  de: { flag: "🇩🇪", code: "DE", name: "Deutsch" },
};

const REFERRAL_URL = "https://sodex.com/join/STRATEGY";

const formatNum = (n, decimals = 2) => {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(decimals) + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(decimals) + "K";
  return n.toFixed(decimals);
};

const formatUSD = (n) => {
  if (n >= 1_000_000) return "$" + (n / 1_000_000).toFixed(2) + "M";
  if (n >= 1_000) return "$" + (n / 1_000).toFixed(2) + "K";
  return "$" + n.toFixed(2);
};

const Slider = ({ label, value, onChange, min, max, step, format, suffix = "" }) => {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div style={{ marginBottom: 28 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <span style={{ fontSize: 13, color: "#8a8f98", fontFamily: "var(--f-body)", letterSpacing: "0.02em" }}>{label}</span>
        <span style={{ fontSize: 15, color: "#e4e6ea", fontFamily: "var(--f-mono)", fontWeight: 600 }}>
          {format ? format(value) : value}{suffix}
        </span>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{
          width: "100%", height: 6, borderRadius: 3, appearance: "none",
          background: `linear-gradient(90deg, #6366f1 0%, #818cf8 ${pct}%, #1e2028 ${pct}%)`,
          cursor: "pointer", outline: "none",
        }}
      />
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
        <span style={{ fontSize: 11, color: "#4a4e57" }}>{format ? format(min) : min}{suffix}</span>
        <span style={{ fontSize: 11, color: "#4a4e57" }}>{format ? format(max) : max}{suffix}</span>
      </div>
    </div>
  );
};

const NumberInput = ({ label, value, onChange, placeholder, suffix }) => (
  <div style={{ marginBottom: 28 }}>
    <label style={{ fontSize: 13, color: "#8a8f98", fontFamily: "var(--f-body)", letterSpacing: "0.02em", display: "block", marginBottom: 8 }}>
      {label}
    </label>
    <div style={{ position: "relative" }}>
      <input
        type="number" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
        style={{
          width: "100%", padding: "12px 16px", paddingRight: suffix ? 60 : 16,
          background: "#14151a", border: "1px solid #2a2d35", borderRadius: 10,
          color: "#e4e6ea", fontSize: 16, fontFamily: "var(--f-mono)",
          outline: "none", boxSizing: "border-box", transition: "border-color 0.2s",
        }}
        onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
        onBlur={(e) => (e.target.style.borderColor = "#2a2d35")}
      />
      {suffix && (
        <span style={{
          position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)",
          color: "#4a4e57", fontSize: 13, fontFamily: "var(--f-body)",
        }}>{suffix}</span>
      )}
    </div>
  </div>
);

const ScenarioCard = ({ title, emoji, tokens, usd, share, color, delay }) => (
  <div style={{
    background: `linear-gradient(135deg, ${color}12, ${color}06)`,
    border: `1px solid ${color}30`, borderRadius: 14,
    padding: "18px 20px", flex: 1, minWidth: 140,
    animation: `fadeUp 0.5s ease ${delay}s both`,
  }}>
    <div style={{ fontSize: 11, color: "#8a8f98", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4, fontFamily: "var(--f-body)" }}>
      {emoji} {title}
    </div>
    <div style={{ fontSize: 20, fontWeight: 700, color: "#e4e6ea", fontFamily: "var(--f-mono)", lineHeight: 1.2 }}>
      {formatNum(tokens)} <span style={{ fontSize: 11, color: "#6366f1" }}>SOSO</span>
    </div>
    <div style={{ fontSize: 17, fontWeight: 600, color, fontFamily: "var(--f-mono)", marginTop: 4 }}>
      {formatUSD(usd)}
    </div>
    <div style={{ fontSize: 11, color: "#4a4e57", marginTop: 6, fontFamily: "var(--f-body)" }}>
      %{share.toFixed(4)}
    </div>
  </div>
);

export default function App() {
  const [lang, setLang] = useState("en");
  const [langOpen, setLangOpen] = useState(false);
  const l = t[lang];

  const [mode, setMode] = useState("quick");
  const [weeks, setWeeks] = useState(16);
  const [manualTotalPoints, setManualTotalPoints] = useState("");
  const [myPoints, setMyPoints] = useState("");
  const [tokenPool, setTokenPool] = useState(30_000_000);
  const [price, setPrice] = useState(0.4);

  const totalPoints = useMemo(() => {
    if (mode === "quick") return weeks * 1_000_000;
    return Number(manualTotalPoints) || 0;
  }, [mode, weeks, manualTotalPoints]);

  const myPts = Number(myPoints) || 0;

  const results = useMemo(() => {
    if (!totalPoints || !myPts) return null;
    const share = myPts / totalPoints;
    return { share, tokens: share * tokenPool, usd: share * tokenPool * price };
  }, [totalPoints, myPts, tokenPool, price]);

  const scenarios = useMemo(() => {
    if (!myPts) return null;
    return [
      { title: l.cautious, emoji: "🛡️", pool: 15_000_000, totalPts: 26_000_000, price: 0.25, color: "#f59e0b" },
      { title: l.moderate, emoji: "⚖️", pool: 30_000_000, totalPts: 20_000_000, price: 0.40, color: "#6366f1" },
      { title: l.optimistic, emoji: "🚀", pool: 60_000_000, totalPts: 14_000_000, price: 0.60, color: "#22c55e" },
    ].map((c) => {
      const share = (myPts / c.totalPts) * 100;
      const tokens = (myPts / c.totalPts) * c.pool;
      return { ...c, share, tokens, usd: tokens * c.price };
    });
  }, [myPts, lang]);

  return (
    <div style={{
      "--f-body": "'DM Sans', sans-serif",
      "--f-mono": "'JetBrains Mono', monospace",
      minHeight: "100vh", background: "#0c0d10", color: "#e4e6ea",
      fontFamily: "var(--f-body)", display: "flex", justifyContent: "center",
      padding: "40px 16px",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0c0d10; }
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none; width: 18px; height: 18px; border-radius: 50%;
          background: #6366f1; border: 3px solid #0c0d10; box-shadow: 0 0 10px #6366f180; cursor: pointer;
        }
        input[type=range]::-moz-range-thumb {
          width: 18px; height: 18px; border-radius: 50%;
          background: #6366f1; border: 3px solid #0c0d10; box-shadow: 0 0 10px #6366f180; cursor: pointer;
        }
        input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button { -webkit-appearance: none; }
        input[type=number] { -moz-appearance: textfield; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
        @keyframes pulse { 0%,100%{opacity:1;} 50%{opacity:0.6;} }
        .lang-item:hover { background: #6366f11a !important; }
      `}</style>

      {/* Click-away overlay for language dropdown */}
      {langOpen && (
        <div
          onClick={() => setLangOpen(false)}
          style={{ position: "fixed", inset: 0, zIndex: 15 }}
        />
      )}

      <div style={{ maxWidth: 520, width: "100%", position: "relative" }}>

        {/* Language Selector */}
        <div style={{ position: "absolute", top: 0, right: 0, zIndex: 20 }}>
          <button
            onClick={() => setLangOpen((o) => !o)}
            style={{
              background: "#14151a", border: "1px solid #2a2d35", borderRadius: 8,
              padding: "6px 12px", cursor: "pointer", display: "flex", alignItems: "center", gap: 6,
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#6366f1")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#2a2d35")}
          >
            <span style={{ fontSize: 14 }}>{langMeta[lang].flag}</span>
            <span style={{ fontSize: 12, fontWeight: 600, color: "#818cf8", fontFamily: "var(--f-mono)", letterSpacing: "0.04em" }}>
              {langMeta[lang].code}
            </span>
            <span style={{ fontSize: 9, color: "#4a4e57", marginLeft: 2, transform: langOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>
              ▼
            </span>
          </button>

          {langOpen && (
            <div style={{
              position: "absolute", top: "calc(100% + 6px)", right: 0,
              background: "#14151a", border: "1px solid #2a2d35", borderRadius: 10,
              padding: 6, minWidth: 168, boxShadow: "0 10px 30px #00000070",
              maxHeight: 340, overflowY: "auto",
            }}>
              {Object.keys(langMeta).map((code) => (
                <button
                  key={code}
                  className="lang-item"
                  onClick={() => { setLang(code); setLangOpen(false); }}
                  style={{
                    width: "100%", display: "flex", alignItems: "center", gap: 10,
                    padding: "9px 10px", border: "none", borderRadius: 8, cursor: "pointer",
                    background: code === lang ? "#6366f126" : "transparent",
                    color: code === lang ? "#e4e6ea" : "#8a8f98",
                    fontSize: 13, fontFamily: "var(--f-body)", textAlign: "left",
                    transition: "background 0.15s",
                  }}
                >
                  <span style={{ fontSize: 16 }}>{langMeta[code].flag}</span>
                  <span style={{ flex: 1, fontWeight: code === lang ? 600 : 400 }}>{langMeta[code].name}</span>
                  <span style={{ fontSize: 10, color: "#4a4e57", fontFamily: "var(--f-mono)" }}>{langMeta[code].code}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40, animation: "fadeUp 0.4s ease both" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: "linear-gradient(135deg, #6366f115, #818cf810)",
            border: "1px solid #6366f130", borderRadius: 50, padding: "6px 16px", marginBottom: 16,
          }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", animation: "pulse 2s infinite" }} />
            <span style={{ fontSize: 12, color: "#818cf8", letterSpacing: "0.06em" }}>{l.badge}</span>
          </div>
          <h1 style={{
            fontSize: 28, fontWeight: 700, margin: 0,
            background: "linear-gradient(135deg, #e4e6ea, #818cf8)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            letterSpacing: "-0.02em",
          }}>
            {l.title}
          </h1>
          <p style={{ fontSize: 13, color: "#4a4e57", marginTop: 6 }}>{l.subtitle}</p>
        </div>

        {/* Mode Toggle */}
        <div style={{
          display: "flex", background: "#14151a", borderRadius: 12,
          padding: 4, marginBottom: 32, border: "1px solid #1e2028",
        }}>
          {[
            { key: "quick", label: l.quickMode },
            { key: "manual", label: l.manualMode },
          ].map((m) => (
            <button key={m.key} onClick={() => setMode(m.key)}
              style={{
                flex: 1, padding: "10px 0", border: "none", borderRadius: 10,
                background: mode === m.key ? "#6366f1" : "transparent",
                color: mode === m.key ? "#fff" : "#6b7080",
                fontSize: 13, fontWeight: 600, cursor: "pointer",
                fontFamily: "var(--f-body)", transition: "all 0.2s",
              }}
            >{m.label}</button>
          ))}
        </div>

        {/* Inputs Card */}
        <div style={{
          background: "#111218", border: "1px solid #1e2028",
          borderRadius: 18, padding: "28px 24px", marginBottom: 24,
        }}>
          {mode === "quick" ? (
            <>
              <Slider label={l.seasonWeeks} value={weeks} onChange={setWeeks}
                min={8} max={26} step={1} suffix={l.weekSuffix} />
              <div style={{
                background: "#6366f110", border: "1px solid #6366f120",
                borderRadius: 10, padding: "10px 14px", marginBottom: 28,
                display: "flex", justifyContent: "space-between", alignItems: "center",
              }}>
                <span style={{ fontSize: 12, color: "#8a8f98" }}>{l.estTotalPoints}</span>
                <span style={{ fontSize: 15, color: "#818cf8", fontFamily: "var(--f-mono)", fontWeight: 600 }}>
                  {formatNum(totalPoints, 0)}
                </span>
              </div>
            </>
          ) : (
            <NumberInput label={l.totalPointsLabel} value={manualTotalPoints}
              onChange={setManualTotalPoints} placeholder={l.totalPointsPlaceholder} suffix="pts" />
          )}
          <NumberInput label={l.myPoints} value={myPoints}
            onChange={setMyPoints} placeholder={l.myPointsPlaceholder} suffix="pts" />
          <Slider label={l.tokenPool} value={tokenPool} onChange={setTokenPool}
            min={1_000_000} max={150_000_000} step={1_000_000} format={(v) => formatNum(v, 0)} />
          <Slider label={l.tokenPrice} value={price} onChange={setPrice}
            min={0.05} max={1.5} step={0.01} format={(v) => "$" + v.toFixed(2)} />
        </div>

        {/* Result */}
        {results && (
          <div style={{
            background: "linear-gradient(135deg, #6366f112, #818cf808)",
            border: "1px solid #6366f130", borderRadius: 18,
            padding: "28px 24px", marginBottom: 24,
            animation: "fadeUp 0.4s ease both",
          }}>
            <div style={{ fontSize: 12, color: "#8a8f98", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>
              {l.yourEstimate}
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap" }}>
              <span style={{
                fontSize: 36, fontWeight: 700, fontFamily: "var(--f-mono)",
                background: "linear-gradient(135deg, #818cf8, #6366f1)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>
                {formatUSD(results.usd)}
              </span>
              <span style={{ fontSize: 14, color: "#4a4e57", fontFamily: "var(--f-mono)" }}>
                ({formatNum(results.tokens)} SOSO)
              </span>
            </div>
            <div style={{
              marginTop: 14, padding: "8px 12px", background: "#0c0d10",
              borderRadius: 8, display: "flex", justifyContent: "space-between",
            }}>
              <span style={{ fontSize: 12, color: "#4a4e57" }}>{l.poolShare}</span>
              <span style={{ fontSize: 13, color: "#818cf8", fontFamily: "var(--f-mono)" }}>
                %{(results.share * 100).toFixed(4)}
              </span>
            </div>
            <div style={{
              marginTop: 8, padding: "8px 12px", background: "#0c0d10",
              borderRadius: 8, display: "flex", justifyContent: "space-between",
            }}>
              <span style={{ fontSize: 12, color: "#4a4e57" }}>{l.perPoint}</span>
              <span style={{ fontSize: 13, color: "#818cf8", fontFamily: "var(--f-mono)" }}>
                ≈ {formatUSD(myPts ? results.usd / myPts : 0)}
              </span>
            </div>
          </div>
        )}

        {/* Referral CTA */}
        <a
          href={REFERRAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block", textDecoration: "none", marginBottom: 24,
            background: "linear-gradient(135deg, #6366f118, #818cf810)",
            border: "1px solid #6366f130", borderRadius: 16,
            padding: "20px 22px",
            transition: "border-color 0.2s, transform 0.2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#6366f1"; e.currentTarget.style.transform = "translateY(-2px)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#6366f130"; e.currentTarget.style.transform = "translateY(0)"; }}
        >
          <div style={{ fontSize: 15, fontWeight: 700, color: "#e4e6ea", marginBottom: 6 }}>
            {l.ctaTitle}
          </div>
          <div style={{ fontSize: 12, color: "#8a8f98", lineHeight: 1.5, marginBottom: 14 }}>
            {l.ctaDesc}
          </div>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: "#6366f1", borderRadius: 10, padding: "10px 20px",
            fontSize: 13, fontWeight: 600, color: "#fff", fontFamily: "var(--f-body)",
          }}>
            {l.ctaButton}
            <span style={{ fontSize: 16 }}>→</span>
          </div>
        </a>

        {/* Info */}
        <div style={{
          background: "#111218", border: "1px solid #1e2028",
          borderRadius: 14, padding: "16px 18px", marginBottom: 24,
        }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: "#6b7080", marginBottom: 10 }}>
            {l.officialInfo}
          </div>
          {l.infos.map((txt, i) => (
            <div key={i} style={{
              fontSize: 12, color: "#4a4e57", padding: "4px 0",
              display: "flex", alignItems: "center", gap: 8,
            }}>
              <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#6366f140", flexShrink: 0 }} />
              {txt}
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p style={{ fontSize: 11, color: "#2a2d35", textAlign: "center", lineHeight: 1.5, padding: "0 12px" }}>
          {l.disclaimer}
        </p>
      </div>
    </div>
  );
}
