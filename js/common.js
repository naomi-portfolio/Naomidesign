/* === 多語言文案 === */
const translations = {
  'zh-TW': {
    'nav.home': '首頁',
    'nav.about': '關於我',
    'nav.portfolio': '設計',
    'nav.photography': '攝影',
    'nav.illustration': '創作',
    'nav.contact': '聯繫方式',

    'hero.eyebrow': 'UI / UX 設計師',
    'hero.title1': '用設計',
    'hero.title2': '<em>編織情感</em>',
    'hero.tagline': '專注於使用者經驗與視覺美學的平衡<br>在理性與感性之間打造令人停下腳步的設計',
    'hero.cta': '探索作品',
    'hero.scroll': '向下捲動',

    'about.eyebrow': '關於設計師',
    'about.title': '我是 <em>Naomi</em>，相信好設計能讓人停下腳步',
    'about.p1': '擁有跨領域設計經驗，專精於 UI/UX、品牌識別、插畫敘事與遊戲美術',
    'about.p2': '我的設計理念是用系統性思維，在商業邏輯與使用者情感之間取得平衡',
    'about.cta': '更認識我',

    'works.eyebrow': '精選作品',
    'works.title': '近期<em>專案</em>',
    'works.link': '查看全部作品',
    'works.1.category': '品牌設計',
    'works.1.title': '設計作品 A — 品牌識別系統',
    'works.2.category': 'UI / UX',
    'works.2.title': '設計作品 B — 行動應用程式',
    'works.3.category': '活動設計',
    'works.3.title': '設計作品 C — 展覽視覺',

    'contact.eyebrow': '一起合作',
    'contact.title': '有想法？<em>聊聊吧</em>',
    'contact.text': '不論是商業合作、專案邀約或單純交流，都歡迎透過下方按鈕與我聯繫',
    'contact.cta': '聯繫我',

    'footer.brand': 'Naomi',
    'footer.tagline': '用設計編織情感的設計師。橫跨 UI/UX、品牌、插畫、攝影與遊戲美術的多元創作者',
    'footer.col1.title': '導覽',
    'footer.col2.title': '聯絡',
    'footer.copyright': '© 2026 Naomi. 版權所有',
    'footer.location': 'Made in Taipei',

    // 關於我頁面
    'about.hero.eyebrow': '關於我',
    'about.hero.title1': 'Naomi',
    'about.hero.title2': '用設計編織',
    'about.hero.title3': '<em>情感</em>的設計師',
    'about.hero.tagline': '設計是視覺的呈現<br>更是解決問題、傳達情感、創造連結的橋樑',

    'about.story.eyebrow': '個人故事',
    'about.story.title': '在<em>理性與感性</em>之間說故事',
    'about.story.p1': '對我來說，設計從來不只是視覺問題，而是「如何讓陌生人在第一秒就理解、第二秒就被打動」的細膩工程。從 UI/UX、遊戲美術到插畫敘事，我喜歡用不同的形式去探索同一個命題：人為什麼會對某個畫面停下來？',
    'about.story.p2': '過去幾年，我從零到一打造過數位產品、品牌識別、遊戲內容與商業合作專案。這些經驗讓我深刻體會：好的設計需要設計系統的嚴謹，也需要對情感的敏銳——兩者缺一不可',
    'about.story.p3': '我相信最好的設計，是讓使用者在不察覺技術存在的同時，被故事與情感打動。這也是我每次拿起筆、打開 Figma 時，最想傳遞的事',
    'about.story.quote': '「設計的真正力量，不在於被看見，而在於被感受。」',
    'about.story.caption': 'TAIPEI · 2026',

    // 專業能力區
    'about.pro.eyebrow': '專業能力',
    'about.pro.title': 'Professional <em>Expertise</em>',
    'about.pro.tagline': '橫跨數位、平面、立體三個維度，整合視覺與技術，提供完整的設計解決方案',

    'about.pro.1.title': '整合設計專長（數位 × 平面 × 立體）',
    'about.pro.1.sub1.title': 'UI/UX 與品牌視覺',
    'about.pro.1.sub1.li1': 'App/Web 介面規劃、使用流程與高保真原型',
    'about.pro.1.sub1.li2': 'LOGO、CIS/VI 建置，行銷素材（海報、DM、Banner、社群貼圖、活動主視覺）',
    'about.pro.1.sub1.li3': '型錄、書籍、電子刊物等排版',
    'about.pro.1.sub2.title': '立體結構與產品開發',
    'about.pro.1.sub2.li1': '禮贈品、商品與包裝造型/結構設計',
    'about.pro.1.sub2.li2': '展場攤位、道具 3D 建模與空間視覺提案（Rhino/SketchUp/AutoCAD）',
    'about.pro.1.sub2.li3': 'KeyShot 渲染、雷雕與 3D 列印打樣驗證',
    'about.pro.1.sub3.title': '印刷與色彩管理',
    'about.pro.1.sub3.li1': '印前檔案製作、CMYK/專色色彩校正',
    'about.pro.1.sub3.li2': '紙材與後加工（燙金、局部光等）評估與成本控管',
    'about.pro.1.sub3.li3': '保持螢幕、印刷色彩一致性',
    'about.pro.1.tools': '主要工具：Illustrator、Photoshop、Figma、Rhino、KeyShot、SketchUp、AutoCAD',

    'about.pro.2.title': '插畫與漫畫創作專長',
    'about.pro.2.sub1.title': '插畫風格與應用',
    'about.pro.2.sub1.li1': '日系人物插畫、Q 版角色、主視覺/吉祥物繪製',
    'about.pro.2.sub1.li2': '產品插圖、卡牌、貼圖、服裝與場景設計',
    'about.pro.2.sub2.title': '漫畫敘事',
    'about.pro.2.sub2.li1': '黑白/全彩分鏡、劇情節奏與故事表現',
    'about.pro.2.sub2.li2': '短篇漫畫至完整連載皆可獨立執行',
    'about.pro.2.sub3.title': '排版與整合',
    'about.pro.2.sub3.li1': '插畫與文字排版、跨媒介視覺統整',
    'about.pro.2.tools': '主要工具：Clip Studio Paint、Photoshop',

    'about.pro.3.title': '攝影與影音製作專長',
    'about.pro.3.sub1.title': '攝影項目',
    'about.pro.3.sub1.li1': '人像、商品、活動/婚禮紀錄、形象及宣傳拍攝',
    'about.pro.3.sub2.title': '影片企劃與製作',
    'about.pro.3.sub2.li1': '動態攝影：外/內景節目、街專訪、訪談',
    'about.pro.3.sub2.li2': '長短影音企劃、剪輯、調光與基礎特效',
    'about.pro.3.sub2.li3': '形象影片、產品廣告、社群 Reels/短影音',
    'about.pro.3.sub2.li4': '快剪、情感類型成果展現',
    'about.pro.3.sub3.title': '現場與後製',
    'about.pro.3.sub3.li1': '拍攝腳本撰寫、燈光與器材運用，素材管理與版本交付',
    'about.pro.3.tools': '主要工具/設備：DaVinci Resolve、剪映、Sony α 系列相機',

    // 軟體圖示區
    'about.software.eyebrow': '常用軟體',
    'about.software.title': 'My <em>Toolkit</em>',

    // 經歷時間軸（倒序：資深 → 學歷）
    'about.exp.eyebrow': '工作經歷',
    'about.exp.title': '我走過的<em>每一步</em>',

    'about.exp.1.period': '2025 — 2026',
    'about.exp.1.role': 'UI/UX 設計師',
    'about.exp.1.company': '穎宸貿易有限公司',
    'about.exp.1.desc': '主導 Web3 產品的 UI/UX 設計與開發，負責 Cryptoldyou 與 Eggpop 兩個主要產品的介面設計與資訊架構，從零打造符合區塊鏈專案特性的視覺系統與操作流程。同時負責 NFT 數位資產設計，產出兼具收藏價值與品牌識別的視覺作品。運用 Wix 平台快速建置響應式網站，並支援社群媒體素材設計與遊戲美術製作（角色、場景、道具）',

    'about.exp.2.period': '2023 — 2025',
    'about.exp.2.role': 'UI/UX 設計師',
    'about.exp.2.company': '金融科技新創公司',
    'about.exp.2.desc': '作為團隊核心的設計整合者，主導從 UX 規劃、UI 視覺設計、遊戲美術到行銷內容製作的端對端流程。建立 Design System 統一跨產品線（區塊鏈、投資、遊戲）設計規範，將後續專案開發時間縮短 30%、前期溝通成本降低 50%。獨立負責遊戲美術（角色、場景、UI、Live2D 動畫），為公司節省超過 40 萬元委外費用',

    'about.exp.3.period': '2022 — 2023',
    'about.exp.3.role': '專案設計師',
    'about.exp.3.company': '政治公關專案團隊',
    'about.exp.3.desc': '於政治公關專案中擔任跨部門設計與溝通要職，服務對象橫跨總部、地方分部與多位公共事務候選人。在高壓的選戰期間整合視覺設計、影像製作與專案管理：建立 11 位候選人的整體視覺識別系統、節省超過 20 萬元設計成本；主導活動紀錄與形象短片製作，每支影片節省約 5 萬元委外費用；協同策劃數十場 10 至 300 人規模的地方活動',

    'about.exp.4.period': '2018 — 現在',
    'about.exp.4.role': '品牌設計師 / 創辦人',
    'about.exp.4.company': '自營工作室（個人品牌）',
    'about.exp.4.desc': '長期經營個人品牌設計工作室超過 7 年（與正職並行），整合設計、插畫、攝影與影片剪輯服務。涵蓋 LOGO 設計、UI/UX、書籍排版、宣傳物製作、日系/Q版/卡牌插畫繪製、漫畫敘事、活動紀錄攝影與紀錄片剪輯。定期參與動漫展與同人展，自組品牌攤位並策劃整體視覺與商品銷售流程',

    'about.exp.5.period': '2018',
    'about.exp.5.role': '平面設計師',
    'about.exp.5.company': '仁寶電腦工業股份有限公司',
    'about.exp.5.desc': '建立印前檢查流程，將大型活動輸出物的印製錯誤率降至趨近於零；運用 3D 建模進行展場攤位配置與視覺提案；設計並優化多項內部系統與專案網站介面 (UI)；獨立負責產品與行銷贈品包裝設計，主導從結構展開圖到量產的完整流程；統籌企業活動全系列平面設計物',

    // 作品清單區
    'about.works.eyebrow': '作品清單',
    'about.works.title': 'Selected <em>Works</em>',
    'about.works.tagline': '橫跨插畫、設計、攝影三個領域的代表性作品',

    'about.works.illustration': 'ILLUSTRATION',
    'about.works.design': 'DESIGN',
    'about.works.photo': 'PHOTO & VIDEOGRAPHY',

    'about.cta.text': '想了解更多<em>合作可能</em>嗎？',
    'about.cta.btn': '聯繫我',

    // 社群連結區（在關於我頁）
    'about.social.eyebrow': '社群連結',
    'about.social.title': '在<em>各個平台</em>找到我',
    'about.social.tagline': '歡迎在以下平台追蹤我的最新作品與設計分享',

    // 聯繫方式頁
    'contact.hero.eyebrow': '聯繫方式',
    'contact.hero.title1': '一起創造',
    'contact.hero.title2': '<em>下個故事</em>',
    'contact.hero.tagline': '無論是商業合作、專案邀約或單純交流，都歡迎透過下方表單與我聯繫',

    // 表單
    'contact.form.title': '寫封訊息給我',
    'contact.form.subtitle': '我會盡快回覆您',
    'contact.form.name': '姓名',
    'contact.form.email': 'Email',
    'contact.form.subject': '主題',
    'contact.form.message': '訊息內容',
    'contact.form.subject.placeholder': '例：品牌設計合作',
    'contact.form.submit': '送出訊息',
    'contact.form.sending': '送出中...',
    'contact.form.success': '訊息已送出！我會盡快回覆您',
    'contact.form.error': '送出失敗，請稍後再試或直接寄信給我',
    'contact.form.required': '此欄位為必填',
    'contact.form.invalid.email': '請輸入有效的 Email',
    'contact.form.demo': '表單暫為示意模式，請改以 Email 聯繫',

    // 聯絡資訊
    'contact.info.title': '其他<em>聯絡方式</em>',
    'contact.info.email.label': 'Email',
    'contact.info.email.value': 'tp6vul3vm06@gmail.com',
    'contact.info.phone.label': '電話',
    'contact.info.phone.value': '請透過 Email 聯繫',
    'contact.info.location.label': '工作地點',
    'contact.info.location.value': '台北，台灣',
    'contact.info.hours.label': '工作時間',
    'contact.info.hours.value': '每日 12:00 — 20:00',

    // 服務項目
    'contact.services.eyebrow': '提供服務',
    'contact.services.title': '我能<em>幫您做什麼</em>',
    'contact.services.tagline': '根據您的需求量身打造完整解決方案',

    'contact.service.1.title': 'UI/UX 設計',
    'contact.service.1.desc': '從使用者研究、流程設計到高保真原型，打造直覺易用的數位產品',

    'contact.service.2.title': '品牌識別系統',
    'contact.service.2.desc': 'LOGO、視覺規範、應用素材的完整建置，建立有靈魂的品牌視覺語言',

    'contact.service.3.title': '活動設計',
    'contact.service.3.desc': '從活動規劃、主視覺設計、延伸物件到供應商發包執行的全流程整合服務',

    'contact.service.4.title': '攝影與影片',
    'contact.service.4.desc': '人像、商品、活動紀錄與影片剪輯，擅長捕捉真實情感與故事感',

    'contact.service.5.title': '插畫委託',
    'contact.service.5.desc': '商業插畫、書籍封面、原創角色、漫畫敘事與私人客製委託',

    'contact.service.6.title': '網站設計開發',
    'contact.service.6.desc': '從 UI 設計、Wix/HTML 建置到上線部署的完整網站開發流程',

    // 設計頁面
    'portfolio.hero.eyebrow': '設計作品',
    'portfolio.hero.title1': '橫跨多元領域的',
    'portfolio.hero.title2': '<em>設計</em>實踐',
    'portfolio.hero.tagline': '從品牌識別、活動主視覺到 UI/UX，每個專案都是一次與客戶共同成長的旅程',

    'portfolio.filter.all': '全部',
    'portfolio.filter.branding': '品牌設計',
    'portfolio.filter.event': '活動設計',
    'portfolio.filter.uiux': 'UI / UX',

    'portfolio.count.label': '展示作品',

    'portfolio.hint': '使用',
    'portfolio.hint.suffix': '切換作品',

    'portfolio.empty': '此分類暫無作品',

    'portfolio.cta.text': '對某個<em>專案</em>感興趣嗎？',
    'portfolio.cta.btn': '聊聊合作',

    // 作品詳情頁
    'work.back': '返回作品集',
    'work.client': '客戶',
    'work.year': '年份',
    'work.role': '角色',
    'work.tools': '工具',
    'work.overview': '專案概述',
    'work.next.label': '下個作品',

    // 攝影頁面
    'photo.hero.eyebrow': '攝影作品',
    'photo.hero.title1': '用鏡頭凝結',
    'photo.hero.title2': '<em>每個瞬間</em>',
    'photo.hero.tagline': '從活動紀實到人像、商品與影片，每張照片都是時間的切片',

    'photo.filter.all': '全部',
    'photo.filter.event': '活動攝影',
    'photo.filter.portrait': '人像攝影',
    'photo.filter.product': '商品攝影',
    'photo.filter.video': '影片',

    'photo.work.1.title': '板橋群英扶輪社授證',
    'photo.work.1.desc': '扶輪社年度授證典禮的完整紀錄',
    'photo.work.2.title': '情侶人像攝影',
    'photo.work.2.desc': '捕捉情侶間最真實的互動瞬間',
    'photo.work.3.title': '商品形象攝影',
    'photo.work.3.desc': '為品牌商品打造視覺一致的形象照',
    'photo.work.4.title': '午宴動態攝影',
    'photo.work.4.desc': '商務午宴的精彩瞬間與氛圍',

    'photo.cta.text': '需要<em>攝影服務</em>嗎？',
    'photo.cta.btn': '委託拍攝',

    // 插畫頁面
    'illust.hero.eyebrow': '插畫作品',
    'illust.hero.title1': '用畫筆',
    'illust.hero.title2': '<em>說一個故事</em>',
    'illust.hero.tagline': '從商業委託、原創世界觀到私人客製，每幅作品都是獨特的視覺語言',

    'illust.filter.all': '全部',
    'illust.filter.commercial': '商業委託',
    'illust.filter.original': '原創插畫',
    'illust.filter.private': '私人委託',

    'illust.work.1.title': '《魅影之戀》封面',
    'illust.work.1.desc': '為小說量身打造的封面插畫',
    'illust.work.2.title': '《Aphur》獨立遊戲',
    'illust.work.2.desc': '原創遊戲世界觀與角色設計',
    'illust.work.3.title': '私人委託作品集',
    'illust.work.3.desc': '客製化角色與紀念肖像',

    'illust.cta.text': '想要<em>客製插畫</em>嗎？',
    'illust.cta.btn': '委託繪製',

    // 設計作品名稱
    'portfolio.work.1.title': 'EGGPOP NFT',
    'portfolio.work.1.desc': 'NFT 設計與插畫整合，建立完整視覺系統',

    'portfolio.work.2.title': '108 年淡水南瓜節',
    'portfolio.work.2.desc': '造景設計、繪製與製作，打造節慶主視覺',

    'portfolio.work.3.title': 'Cryptoldyou Website',
    'portfolio.work.3.desc': '完整的 UIUX 設計與網站建置流程',

    'portfolio.work.4.title': '民眾診聊所 LOGO',
    'portfolio.work.4.desc': 'LOGO 與影音相關延伸設計',

    'portfolio.work.5.title': '眾青雲集造浪營',
    'portfolio.work.5.desc': '主視覺與系列活動延伸物設計',

    'portfolio.work.6.title': 'EGGPOP Website',
    'portfolio.work.6.desc': 'Website 與 Search Web UIUX 設計建置',

    'portfolio.work.7.title': '海波兒童劇團',
    'portfolio.work.7.desc': 'LOGO 與 CIS 完整設計',

    'portfolio.work.8.title': '新生國小 60 周年',
    'portfolio.work.8.desc': '校慶主視覺與延伸物設計提案',

    'portfolio.work.9.title': '中華民國童軍露營',
    'portfolio.work.9.desc': 'LOGO、延伸物與設計提案',
  },
  'en': {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.portfolio': 'Design',
    'nav.photography': 'Photography',
    'nav.illustration': 'Illustration',
    'nav.contact': 'Contact',

    'hero.eyebrow': 'UI / UX Designer',
    'hero.title1': 'Designing with',
    'hero.title2': '<em>emotion at heart</em>',
    'hero.tagline': 'Crafting designs that pause people in their tracks<br>at the intersection of logic, emotion, and aesthetics',
    'hero.cta': 'Explore Work',
    'hero.scroll': 'Scroll Down',

    'about.eyebrow': 'About the Designer',
    'about.title': 'I am <em>Naomi</em>, designing to make people pause',
    'about.p1': 'A multi-disciplinary designer with experience in UI/UX, brand identity, illustration narrative, and game art.',
    'about.p2': 'My design philosophy: using systematic thinking to balance business logic and user emotion.',
    'about.cta': 'Know Me More',

    'works.eyebrow': 'Selected Works',
    'works.title': 'Recent <em>Projects</em>',
    'works.link': 'View All Works',
    'works.1.category': 'Branding',
    'works.1.title': 'Project A — Brand Identity System',
    'works.2.category': 'UI / UX',
    'works.2.title': 'Project B — Mobile Application',
    'works.3.category': 'Event Design',
    'works.3.title': 'Project C — Exhibition Visual',

    'contact.eyebrow': "Let's Collaborate",
    'contact.title': 'Got an idea? <em>Let\'s talk</em>',
    'contact.text': 'Whether for business collaboration, project inquiry, or simply to connect, feel free to reach out through the button below.',
    'contact.cta': 'Contact Me',

    'footer.brand': 'Naomi',
    'footer.tagline': 'A designer who weaves emotion through design. Multi-disciplinary creator across UI/UX, branding, illustration, photography, and game art.',
    'footer.col1.title': 'Navigation',
    'footer.col2.title': 'Contact',
    'footer.copyright': '© 2026 Naomi. All rights reserved.',
    'footer.location': 'Made in Taipei',

    // About page
    'about.hero.eyebrow': 'About Me',
    'about.hero.title1': 'Naomi',
    'about.hero.title2': 'A designer who weaves',
    'about.hero.title3': '<em>emotion</em> through design',
    'about.hero.tagline': 'Design is more than visual presentation<br>it bridges problems, emotions, and connections',

    'about.story.eyebrow': 'My Story',
    'about.story.title': 'Telling stories between <em>logic and emotion</em>',
    'about.story.p1': 'For me, design has never been just a visual problem — it\'s the delicate art of making strangers understand in the first second and be moved in the second. From UI/UX to game art to illustration narrative, I love exploring the same question through different forms: why do people pause at certain images?',
    'about.story.p2': 'Over the past few years, I\'ve built digital products, brand identities, game content, and commercial collaborations from zero to one. These experiences taught me: good design requires both the rigor of design systems and sensitivity to emotion — neither can be missing.',
    'about.story.p3': 'I believe the best design is when users are moved by story and emotion without noticing the technology behind it. That\'s what I want to convey every time I pick up a pen or open Figma.',
    'about.story.quote': '"The true power of design lies not in being seen, but in being felt."',
    'about.story.caption': 'TAIPEI · 2026',

    // Professional expertise
    'about.pro.eyebrow': 'Professional',
    'about.pro.title': 'Professional <em>Expertise</em>',
    'about.pro.tagline': 'Spanning digital, graphic, and 3D dimensions — integrating visual and technical capabilities to deliver complete design solutions.',

    'about.pro.1.title': 'Integrated Design (Digital × Graphic × 3D)',
    'about.pro.1.sub1.title': 'UI/UX & Brand Visual',
    'about.pro.1.sub1.li1': 'App/Web interface planning, user flow, high-fidelity prototyping',
    'about.pro.1.sub1.li2': 'LOGO, CIS/VI development, marketing materials (posters, DM, banners, social media graphics, event key visuals)',
    'about.pro.1.sub1.li3': 'Catalog, book, and digital publication layout',
    'about.pro.1.sub2.title': '3D Structure & Product Development',
    'about.pro.1.sub2.li1': 'Gift, merchandise, and packaging structural design',
    'about.pro.1.sub2.li2': 'Exhibition booth, prop 3D modeling and spatial visual proposals (Rhino/SketchUp/AutoCAD)',
    'about.pro.1.sub2.li3': 'KeyShot rendering, laser engraving, and 3D printing prototype validation',
    'about.pro.1.sub3.title': 'Print & Color Management',
    'about.pro.1.sub3.li1': 'Pre-press file production, CMYK/spot color calibration',
    'about.pro.1.sub3.li2': 'Paper material and post-processing (foiling, spot UV, etc.) evaluation and cost control',
    'about.pro.1.sub3.li3': 'Maintain consistency between screen and print colors',
    'about.pro.1.tools': 'Tools: Illustrator, Photoshop, Figma, Rhino, KeyShot, SketchUp, AutoCAD',

    'about.pro.2.title': 'Illustration & Comic Creation',
    'about.pro.2.sub1.title': 'Illustration Style & Application',
    'about.pro.2.sub1.li1': 'Japanese-style character illustration, chibi characters, key visuals/mascot design',
    'about.pro.2.sub1.li2': 'Product illustration, cards, stickers, costume and scene design',
    'about.pro.2.sub2.title': 'Comic Storytelling',
    'about.pro.2.sub2.li1': 'B&W/full-color storyboarding, plot pacing and narrative expression',
    'about.pro.2.sub2.li2': 'From short comics to full serializations, all executable independently',
    'about.pro.2.sub3.title': 'Layout & Integration',
    'about.pro.2.sub3.li1': 'Illustration and typography layout, cross-media visual integration',
    'about.pro.2.tools': 'Tools: Clip Studio Paint, Photoshop',

    'about.pro.3.title': 'Photography & Video Production',
    'about.pro.3.sub1.title': 'Photography Projects',
    'about.pro.3.sub1.li1': 'Portrait, product, event/wedding documentation, branding & promotional photography',
    'about.pro.3.sub2.title': 'Video Planning & Production',
    'about.pro.3.sub2.li1': 'Motion photography: outdoor/indoor shows, street interviews, dialogues',
    'about.pro.3.sub2.li2': 'Long/short video planning, editing, color grading and basic effects',
    'about.pro.3.sub2.li3': 'Brand films, product ads, social Reels/short videos',
    'about.pro.3.sub2.li4': 'Quick cuts, emotion-driven content presentation',
    'about.pro.3.sub3.title': 'On-set & Post-production',
    'about.pro.3.sub3.li1': 'Script writing, lighting and equipment operation, asset management and version delivery',
    'about.pro.3.tools': 'Tools/Equipment: DaVinci Resolve, CapCut, Sony α series cameras',

    'about.software.eyebrow': 'Software',
    'about.software.title': 'My <em>Toolkit</em>',

    // Experience timeline
    'about.exp.eyebrow': 'Experience',
    'about.exp.title': 'Every <em>step</em> I\'ve taken',

    'about.exp.1.period': '2025 — 2026',
    'about.exp.1.role': 'UI/UX Designer',
    'about.exp.1.company': 'Visionary Harvest Trading Co., Ltd.',
    'about.exp.1.desc': 'Led UI/UX design and development for Web3 products. Designed interfaces and information architecture for Cryptoldyou and Eggpop, building visual systems and user flows tailored for blockchain projects. Designed NFT digital assets that combine collectible value with brand identity. Built responsive websites on Wix, supported social media marketing visuals and 2D game art (characters, scenes, props).',

    'about.exp.2.period': '2023 — 2025',
    'about.exp.2.role': 'UI/UX Designer',
    'about.exp.2.company': 'FinTech Startup',
    'about.exp.2.desc': 'Served as the team\'s core design integrator, leading end-to-end processes from UX planning, UI/visual design, game art, to marketing content production. Established Design System unifying standards across product lines (blockchain, investment, games), reducing development time by ~30% and front-end communication costs by 50%. Independently handled all game art (characters, scenes, UI, Live2D animations), saving over NT$400,000 in outsourcing costs.',

    'about.exp.3.period': '2022 — 2023',
    'about.exp.3.role': 'Project Designer',
    'about.exp.3.company': 'Political Public Affairs Team',
    'about.exp.3.desc': 'Cross-departmental design and communication lead for political public affairs projects, working with headquarters, regional offices, and multiple public affairs candidates. During campaign periods: built visual identity systems for 11 candidates (saved over NT$200,000); led event documentation and image-building short films (saved ~NT$50,000 per video); co-planned dozens of local events ranging from 10 to 300 attendees.',

    'about.exp.4.period': '2018 — Present',
    'about.exp.4.role': 'Brand Designer / Founder',
    'about.exp.4.company': 'Independent Studio (Personal Brand)',
    'about.exp.4.desc': 'Operated an independent design studio for over 7 years (alongside full-time roles), offering integrated design, illustration, photography, and video editing services. Includes LOGO design, UI/UX, book layout, promotional materials, Japanese/chibi/card illustration, comic narrative, event photography, and documentary editing. Regular participant in anime and dōjin events with self-organized booths.',

    'about.exp.5.period': '2018',
    'about.exp.5.role': 'Graphic Designer',
    'about.exp.5.company': 'Compal Electronics, Inc.',
    'about.exp.5.desc': 'Established pre-press inspection workflows reducing print error rates to near zero. Used 3D modeling for booth layout and visual proposals at exhibitions. Designed and optimized internal systems and project website UIs. Independently handled product and promotional packaging design from structural drafting to mass production. Coordinated full-series corporate event graphics.',

    // Works list
    'about.works.eyebrow': 'Works List',
    'about.works.title': 'Selected <em>Works</em>',
    'about.works.tagline': 'Representative works spanning illustration, design, and photography.',

    'about.works.illustration': 'ILLUSTRATION',
    'about.works.design': 'DESIGN',
    'about.works.photo': 'PHOTO & VIDEOGRAPHY',

    'about.cta.text': 'Want to explore <em>collaboration possibilities</em>?',
    'about.cta.btn': 'Contact Me',

    // Social section (on about page)
    'about.social.eyebrow': 'Social Links',
    'about.social.title': 'Find me on <em>various platforms</em>',
    'about.social.tagline': 'Follow me on these platforms for the latest works and design insights.',

    // Contact page
    'contact.hero.eyebrow': 'Contact',
    'contact.hero.title1': "Let's create",
    'contact.hero.title2': '<em>the next story</em>',
    'contact.hero.tagline': 'Whether for business collaboration, project inquiry, or simply to connect, feel free to reach out through the form below.',

    // Form
    'contact.form.title': 'Send me a message',
    'contact.form.subtitle': "I'll get back to you as soon as possible.",
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.subject.placeholder': 'e.g., Brand Design Collaboration',
    'contact.form.submit': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Message sent! I will reply soon.',
    'contact.form.error': 'Failed to send. Please try again or email me directly.',
    'contact.form.required': 'This field is required',
    'contact.form.invalid.email': 'Please enter a valid email',
    'contact.form.demo': 'Form is in demo mode — please reach out via Email',

    // Contact info
    'contact.info.title': 'Other <em>ways to reach me</em>',
    'contact.info.email.label': 'Email',
    'contact.info.email.value': 'tp6vul3vm06@gmail.com',
    'contact.info.phone.label': 'Phone',
    'contact.info.phone.value': 'Please contact via Email',
    'contact.info.location.label': 'Location',
    'contact.info.location.value': 'Taipei, Taiwan',
    'contact.info.hours.label': 'Working Hours',
    'contact.info.hours.value': 'Daily  12:00 — 20:00',

    // Services
    'contact.services.eyebrow': 'Services',
    'contact.services.title': 'How <em>I can help you</em>',
    'contact.services.tagline': 'Tailored solutions based on your needs.',

    'contact.service.1.title': 'UI/UX Design',
    'contact.service.1.desc': 'From user research and flow design to high-fidelity prototypes, building intuitive digital products.',

    'contact.service.2.title': 'Brand Identity',
    'contact.service.2.desc': 'LOGO, visual guidelines, and application assets — building soulful brand visual languages.',

    'contact.service.3.title': 'Event Design',
    'contact.service.3.desc': 'End-to-end event design — from planning, key visuals, collateral, to supplier coordination and execution.',

    'contact.service.4.title': 'Photography & Video',
    'contact.service.4.desc': 'Portrait, product, event documentation, and video editing — specializing in genuine emotion and storytelling.',

    'contact.service.5.title': 'Illustration',
    'contact.service.5.desc': 'Commercial illustration, book covers, original characters, comic narratives, and private commissions.',

    'contact.service.6.title': 'Web Design & Development',
    'contact.service.6.desc': 'Complete website development from UI design, Wix/HTML implementation, to deployment.',

    // Portfolio page
    'portfolio.hero.eyebrow': 'Design Works',
    'portfolio.hero.title1': 'Design practice',
    'portfolio.hero.title2': 'across <em>multiple</em> fields',
    'portfolio.hero.tagline': 'From brand identity to event key visuals to UI/UX, every project is a journey of growth with clients.',

    'portfolio.filter.all': 'All',
    'portfolio.filter.branding': 'Branding',
    'portfolio.filter.event': 'Event',
    'portfolio.filter.uiux': 'UI / UX',

    'portfolio.count.label': 'Works Shown',

    'portfolio.hint': 'Use',
    'portfolio.hint.suffix': 'to navigate',

    'portfolio.empty': 'No works in this category yet',

    'portfolio.cta.text': 'Interested in a <em>project</em>?',
    'portfolio.cta.btn': "Let's Talk",

    // Work detail page
    'work.back': 'Back to Portfolio',
    'work.client': 'Client',
    'work.year': 'Year',
    'work.role': 'Role',
    'work.tools': 'Tools',
    'work.overview': 'Overview',
    'work.next.label': 'Next Project',

    // Photography page
    'photo.hero.eyebrow': 'Photography',
    'photo.hero.title1': 'Freezing',
    'photo.hero.title2': '<em>every moment</em>',
    'photo.hero.tagline': 'From event documentary to portrait, product, and video — every photo is a slice of time.',

    'photo.filter.all': 'All',
    'photo.filter.event': 'Event',
    'photo.filter.portrait': 'Portrait',
    'photo.filter.product': 'Product',
    'photo.filter.video': 'Video',

    'photo.work.1.title': 'Banqiao Rotary Charter',
    'photo.work.1.desc': 'Complete documentation of the Rotary Club annual charter ceremony.',
    'photo.work.2.title': 'Couple Portrait',
    'photo.work.2.desc': 'Capturing the most genuine moments between couples.',
    'photo.work.3.title': 'Product Branding',
    'photo.work.3.desc': 'Creating consistent visual imagery for brand products.',
    'photo.work.4.title': 'Luncheon Motion',
    'photo.work.4.desc': 'Highlights and atmosphere of a business luncheon.',

    'photo.cta.text': 'Need <em>photography services</em>?',
    'photo.cta.btn': 'Commission a Shoot',

    // Illustration page
    'illust.hero.eyebrow': 'Illustration',
    'illust.hero.title1': 'Telling stories',
    'illust.hero.title2': '<em>through brushstrokes</em>',
    'illust.hero.tagline': 'From commercial commissions to original worldviews to private customization — every work is a unique visual language.',

    'illust.filter.all': 'All',
    'illust.filter.commercial': 'Commercial',
    'illust.filter.original': 'Original',
    'illust.filter.private': 'Private',

    'illust.work.1.title': '"Phantom Love" Cover',
    'illust.work.1.desc': 'Custom cover illustration for a novel.',
    'illust.work.2.title': '"Aphur" Indie Game',
    'illust.work.2.desc': 'Original game worldview and character design.',
    'illust.work.3.title': 'Private Commissions',
    'illust.work.3.desc': 'Custom characters and memorial portraits.',

    'illust.cta.text': 'Want a <em>custom illustration</em>?',
    'illust.cta.btn': 'Commission Art',

    // Design work names
    'portfolio.work.1.title': 'EGGPOP NFT',
    'portfolio.work.1.desc': 'Integrated NFT design and illustration, building a complete visual system.',

    'portfolio.work.2.title': 'Tamsui Pumpkin Festival 2019',
    'portfolio.work.2.desc': 'Scene design, illustration, and production for a festive key visual.',

    'portfolio.work.3.title': 'Cryptoldyou Website',
    'portfolio.work.3.desc': 'Complete UIUX design and website development workflow.',

    'portfolio.work.4.title': 'Public Clinic LOGO',
    'portfolio.work.4.desc': 'LOGO design and related multimedia extension design.',

    'portfolio.work.5.title': 'Youth Cloud Wave Camp',
    'portfolio.work.5.desc': 'Key visual and event series collateral design.',

    'portfolio.work.6.title': 'EGGPOP Website',
    'portfolio.work.6.desc': 'Website and Search Web UIUX design and development.',

    'portfolio.work.7.title': 'Haibo Children Theatre',
    'portfolio.work.7.desc': 'Complete LOGO and CIS design.',

    'portfolio.work.8.title': 'XinSheng 60th Anniversary',
    'portfolio.work.8.desc': 'School anniversary key visual and collateral design proposal.',

    'portfolio.work.9.title': 'ROC Scout Jamboree',
    'portfolio.work.9.desc': 'LOGO, collateral, and design proposal.',
  }
};

/* === 自訂游標（含游標跟隨）=== */
class CustomCursor {
  constructor() {
    this.dot = document.querySelector('.cursor-dot');
    this.ring = document.querySelector('.cursor-ring');
    // 初始位置設為螢幕中央，避免初始在左上角看不到
    this.mouseX = window.innerWidth / 2;
    this.mouseY = window.innerHeight / 2;
    this.dotX = this.mouseX;
    this.dotY = this.mouseY;
    this.ringX = this.mouseX;
    this.ringY = this.mouseY;

    // 偵測觸控裝置
    this.isTouchDevice = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    this.init();
  }

  init() {
    if (!this.dot || !this.ring || this.isTouchDevice) return;

    document.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });

    // 滑入連結時放大（涵蓋所有可互動元素）
    const interactiveSelector = 'a, button, .work-card, .magnetic, .skill-card, .filter-btn, input, textarea, .lang-switch button';
    document.querySelectorAll(interactiveSelector).forEach(el => {
      el.addEventListener('mouseenter', () => {
        this.dot.classList.add('hover');
        this.ring.classList.add('hover');
      });
      el.addEventListener('mouseleave', () => {
        this.dot.classList.remove('hover');
        this.ring.classList.remove('hover');
      });
    });

    // 滑出視窗時隱藏
    document.addEventListener('mouseleave', () => {
      this.dot.style.opacity = '0';
      this.ring.style.opacity = '0';
    });
    document.addEventListener('mouseenter', () => {
      this.dot.style.opacity = '1';
      this.ring.style.opacity = '1';
    });

    this.animate();
  }

  animate() {
    // 圓點精準跟隨（高速）
    this.dotX += (this.mouseX - this.dotX) * 0.9;
    this.dotY += (this.mouseY - this.dotY) * 0.9;

    // 圓圈緩慢跟隨（增加優雅感）
    this.ringX += (this.mouseX - this.ringX) * 0.18;
    this.ringY += (this.mouseY - this.ringY) * 0.18;

    if (this.dot) {
      this.dot.style.transform = `translate(${this.dotX}px, ${this.dotY}px) translate(-50%, -50%)`;
    }
    if (this.ring) {
      this.ring.style.transform = `translate(${this.ringX}px, ${this.ringY}px) translate(-50%, -50%)`;
    }

    requestAnimationFrame(() => this.animate());
  }
}

/* === 滾動進度條 === */
class ScrollProgress {
  constructor() {
    this.bar = document.querySelector('.scroll-progress');
    this.init();
  }

  init() {
    if (!this.bar) return;
    window.addEventListener('scroll', () => this.update(), { passive: true });
    this.update();
  }

  update() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    this.bar.style.width = `${progress}%`;
  }
}

/* === 語言切換 === */
class LanguageSwitcher {
  constructor() {
    this.currentLang = localStorage.getItem('lang') || 'zh-TW';
    this.init();
  }

  init() {
    this.applyLanguage(this.currentLang);
    this.bindEvents();
    this.updateButtonState();
  }

  bindEvents() {
    document.querySelectorAll('.lang-switch button').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const lang = e.target.dataset.lang;
        if (lang && lang !== this.currentLang) {
          this.switchLanguage(lang);
        }
      });
    });
  }

  switchLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem('lang', lang);
    this.applyLanguage(lang);
    this.updateButtonState();
  }

  applyLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    document.documentElement.lang = lang;
  }

  updateButtonState() {
    document.querySelectorAll('.lang-switch button').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === this.currentLang);
    });
  }
}

/* === 導覽列滾動效果 === */
class NavbarScroll {
  constructor() {
    this.navbar = document.querySelector('.navbar');
    this.init();
  }

  init() {
    if (!this.navbar) return;
    // 動態設定 --navbar-height 供 filter-section sticky top 使用
    const updateNavHeight = () => {
      const h = this.navbar.getBoundingClientRect().height;
      document.documentElement.style.setProperty('--navbar-height', h + 'px');
    };
    updateNavHeight();
    window.addEventListener('scroll', () => {
      this.navbar.classList.toggle('scrolled', window.scrollY > 50);
      updateNavHeight();
    }, { passive: true });
    window.addEventListener('resize', updateNavHeight, { passive: true });
  }
}

/* === 漢堡選單 === */
class MobileMenu {
  constructor() {
    this.toggle = document.querySelector('.menu-toggle');
    this.menu = document.querySelector('.nav-right');
    this.init();
  }

  init() {
    if (!this.toggle || !this.menu) return;

    this.toggle.addEventListener('click', () => {
      this.toggle.classList.toggle('active');
      this.menu.classList.toggle('active');
      document.body.style.overflow = this.menu.classList.contains('active') ? 'hidden' : '';
    });

    this.menu.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        this.toggle.classList.remove('active');
        this.menu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }
}

/* === 滾動進場動畫 === */
class ScrollReveal {
  constructor() {
    this.elements = document.querySelectorAll('.reveal');
    this.init();
  }

  init() {
    if (!this.elements.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -80px 0px'
    });

    this.elements.forEach(el => observer.observe(el));
  }
}

/* === 文字逐字浮現動畫 === */
class TextSplitReveal {
  constructor() {
    this.elements = document.querySelectorAll('.split-text');
    this.init();
  }

  init() {
    if (!this.elements.length) return;

    // 將文字拆成單個字元
    this.elements.forEach(el => {
      const text = el.textContent;
      el.textContent = '';
      [...text].forEach((char, i) => {
        const span = document.createElement('span');
        span.className = 'char';
        span.style.transitionDelay = `${i * 0.03}s`;
        span.textContent = char === ' ' ? '\u00A0' : char;
        el.appendChild(span);
      });
    });

    // 進場觀察
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    this.elements.forEach(el => observer.observe(el));
  }
}

/* === 磁吸按鈕（Magnetic Effect）=== */
class MagneticButton {
  constructor() {
    this.elements = document.querySelectorAll('.magnetic');
    this.init();
  }

  init() {
    if (!this.elements.length) return;

    this.elements.forEach(el => {
      const inner = el.querySelector('.magnetic-inner') || el;

      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        // 磁吸強度（越大跟隨越強）
        const strength = 0.35;
        el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
        // 內層額外位移，產生雙層磁吸感
        if (inner !== el) {
          inner.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
        }
      });

      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
        if (inner !== el) inner.style.transform = '';
      });
    });
  }
}

/* === 3D 卡片傾斜效果 === */
class TiltCard {
  constructor() {
    this.cards = document.querySelectorAll('.work-card');
    this.init();
  }

  init() {
    if (!this.cards.length) return;
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;

    this.cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // 計算傾斜角度（最大 6 度，優雅範圍）
        const rotateX = ((centerY - y) / centerY) * 6;
        const rotateY = ((x - centerX) / centerX) * 6;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      });
    });
  }
}

/* === 平滑滾動（Lenis 業界標準函式庫）===
 * 文件：https://github.com/darkroomengineering/lenis
 * 透過 CDN 在 HTML 中引入後，window.Lenis 即可使用
 */
class LenisSmoothScroll {
  constructor() {
    this.lenis = null;
    this.isTouchDevice = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    this.init();
  }

  init() {
    // 若 Lenis 未載入，跳過（會自動使用瀏覽器原生滾動）
    if (typeof Lenis === 'undefined') {
      console.warn('Lenis 函式庫未載入，使用瀏覽器原生滾動');
      return;
    }

    // 觸控裝置使用原生滾動
    if (this.isTouchDevice) return;

    // 初始化 Lenis（Apple/Stripe 風格參數）
    this.lenis = new Lenis({
      duration: 1.2,           // 動畫時長（秒）
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // ease-out-expo
      smoothWheel: true,       // 平滑滾輪
      wheelMultiplier: 1.0,    // 滾輪倍率（保持原生靈敏度）
      touchMultiplier: 2,      // 觸控倍率
      infinite: false,
    });

    // 啟動動畫迴圈
    const raf = (time) => {
      this.lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // 攔截錨點連結
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href === '#') return;
        const targetEl = document.querySelector(href);
        if (targetEl) {
          e.preventDefault();
          this.lenis.scrollTo(targetEl, { duration: 1.4 });
        }
      });
    });
  }

  /* 公開方法：滾動到指定位置（給其他類別使用） */
  scrollTo(target, options = {}) {
    if (this.lenis) {
      this.lenis.scrollTo(target, { duration: 1.4, ...options });
    } else {
      // 降級方案：使用瀏覽器原生
      window.scrollTo({
        top: typeof target === 'number' ? target : 0,
        behavior: 'smooth'
      });
    }
  }

  stop() {
    if (this.lenis) this.lenis.stop();
  }

  start() {
    if (this.lenis) this.lenis.start();
  }
}

/* === 首頁按鈕智慧行為 ===
 * - 在首頁時：點擊「首頁」連結平滑滾動回頂，並有過場動畫
 * - 在其他頁面時：正常導向首頁
 */
class HomeLinkBehavior {
  constructor(smoothScrollInstance) {
    this.smoothScroll = smoothScrollInstance;
    // 判斷目前是否在首頁
    const path = window.location.pathname;
    const filename = path.split('/').pop() || 'index.html';
    this.isHomePage = (filename === '' || filename === 'index.html' || filename === '/');

    this.init();
  }

  init() {
    // 抓取所有指向 index.html 或根目錄的連結（包含 logo 與首頁導覽連結）
    const homeLinks = document.querySelectorAll(
      'a[href="index.html"], a[href="/"], a[href="./"], a[href="./index.html"]'
    );

    homeLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        if (this.isHomePage) {
          // 在首頁時：阻止跳轉，改為平滑滾動回頂 + 動畫效果
          e.preventDefault();
          this.scrollToTopWithEffect();
        }
        // 不在首頁時：讓瀏覽器正常導航至 index.html（會觸發頁面載入動畫）
      });
    });
  }

  scrollToTopWithEffect() {
    // 觸發頁面進出動畫（淡出）
    document.body.classList.add('page-transition-out');

    setTimeout(() => {
      // 平滑滾動到頂部（Lenis 接管）
      this.smoothScroll.scrollTo(0, { duration: 1.4 });

      // 切換到淡入動畫
      setTimeout(() => {
        document.body.classList.remove('page-transition-out');
        document.body.classList.add('page-transition-in');

        // 動畫結束後清除 class
        setTimeout(() => {
          document.body.classList.remove('page-transition-in');
        }, 1000);
      }, 250);
    }, 150);
  }
}

/* === 初始化 === */
document.addEventListener('DOMContentLoaded', () => {
  new CustomCursor();
  new ScrollProgress();
  new LanguageSwitcher();
  new NavbarScroll();
  new MobileMenu();
  new ScrollReveal();
  new TextSplitReveal();
  new MagneticButton();
  new TiltCard();

  // Lenis 平滑滾動實例
  const smoothScroll = new LenisSmoothScroll();
  // 首頁按鈕智慧行為（傳入 SmoothScroll 實例）
  new HomeLinkBehavior(smoothScroll);

  // 觸發頁面進入動畫（從其他頁面進來時）
  requestAnimationFrame(() => {
    document.body.classList.add('page-loaded');
  });
});
