/* ============================================
   作品詳情頁：資料庫 + 動態渲染
   ============================================ */

/* === 作品資料庫 ===
 * 每個作品的完整資訊集中在這裡，方便您未來新增、修改、刪除。
 * 新增作品：複製一個物件、修改 id 與內容
 */
const WORKS_DATA = {
  /* ============ 攝影類作品（galleryStyle: 'masonry'）============ */

  'photo-rotary-2324': {
    id: 'photo-rotary-2324',
    category: 'event-photo',
    categoryLabel: { 'zh-TW': '活動攝影', 'en': 'Event Photo' },
    title: { 'zh-TW': '板橋群英扶輪社 23-24 授證', 'en': 'Banqiao Rotary 23-24 Charter' },
    tagline: {
      'zh-TW': '紀錄板橋群英扶輪社 23-24 年度授證典禮',
      'en': 'Documentary photography of the Banqiao Rotary Club 23-24 charter ceremony'
    },
    featureImage: 'images/rot-00.jpg',
    galleryStyle: 'masonry',
    info: {
      client: { 'zh-TW': '板橋群英扶輪社', 'en': 'Banqiao Rotary Club' },
      year: '2024',
      role: { 'zh-TW': '攝影師', 'en': 'Photographer' },
      tools: 'Sony α7 IV'
    },
    description: {
      heading: {
        'zh-TW': '紀錄一個社團的<em>傳承時刻</em>',
        'en': 'Documenting a club\'s <em>moment of legacy</em>'
      },
      paragraphs: {
        'zh-TW': [
          '紀錄板橋群英扶輪社 23-24 年度授證典禮'
        ],
        'en': [
          'Documentary photography of the Banqiao Rotary Club 23-24 annual charter ceremony'
        ]
      }
    },
    gallery: [
      { src: 'images/rot-00.jpg', caption: { 'zh-TW': '主視覺', 'en': 'Key Visual' } },
      { src: 'images/rot-01.jpg', caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rot-02.jpg', caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rot-03.jpg', caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rot-04.jpg', caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rot-05.jpg', caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rot-06.jpg', caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rot-07.jpg', caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rot-08.jpg', caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rot-09.jpg', caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rot-10.jpg', caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rot-11.jpg', caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rot-12.jpg', caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rot-13.jpg', caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rot-14.jpg', caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rot-15.jpg', caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rot-16.jpg', caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rot-17.jpg', caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rot-18.jpg', caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } }
    ],
    next: 'photo-couple'
  },

  'photo-couple': {
    id: 'photo-couple',
    category: 'portrait-photo',
    categoryLabel: { 'zh-TW': '人像攝影', 'en': 'Portrait Photo' },
    title: { 'zh-TW': '情侶攝影', 'en': 'Couple Photography' },
    tagline: {
      'zh-TW': '透過光影氛圍，捕捉情侶間最真實的互動瞬間',
      'en': 'Through light and atmosphere, capturing the most genuine moments between couples'
    },
    featureImage: 'images/couple-feature.jpg',
    galleryStyle: 'masonry',
    info: {
      client: { 'zh-TW': '私人委託', 'en': 'Private Commission' },
      year: '2024',
      role: { 'zh-TW': '平面攝影師', 'en': 'Photographer' },
      tools: 'Sony α7 IV'
    },
    description: {
      heading: {
        'zh-TW': '以自然互動為主軸，呈現<em>最真實的樣貌</em>',
        'en': 'Natural interaction as the core — <em>authentic moments</em>'
      },
      paragraphs: {
        'zh-TW': [
          '以自然互動為主軸，呈現最真實的樣貌'
        ],
        'en': [
          'Centered on natural interaction, revealing the couple at their most authentic.'
        ]
      }
    },
    gallery: [
      { src: 'images/couple-feature.jpg', caption: { 'zh-TW': '主視覺', 'en': 'Key Visual' } },
      { src: 'images/couple-cover.jpg',   caption: { 'zh-TW': '情侶攝影', 'en': 'Couple' } },
      { src: 'images/couple-01.jpg',      caption: { 'zh-TW': '情侶攝影', 'en': 'Couple' } },
      { src: 'images/couple-02.jpg',      caption: { 'zh-TW': '情侶攝影', 'en': 'Couple' } },
      { src: 'images/couple-03.jpg',      caption: { 'zh-TW': '情侶攝影', 'en': 'Couple' } },
      { src: 'images/couple-04.jpg',      caption: { 'zh-TW': '情侶攝影', 'en': 'Couple' } },
      { src: 'images/couple-05.jpg',      caption: { 'zh-TW': '情侶攝影', 'en': 'Couple' } },
      { src: 'images/couple-06.jpg',      caption: { 'zh-TW': '情侶攝影', 'en': 'Couple' } },
      { src: 'images/couple-07.jpg',      caption: { 'zh-TW': '情侶攝影', 'en': 'Couple' } },
      { src: 'images/couple-08.jpg',      caption: { 'zh-TW': '情侶攝影', 'en': 'Couple' } },
      { src: 'images/couple-09.jpg',      caption: { 'zh-TW': '情侶攝影', 'en': 'Couple' } },
      { src: 'images/couple-10.jpg',      caption: { 'zh-TW': '情侶攝影', 'en': 'Couple' } },
      { src: 'images/couple-11.jpg',      caption: { 'zh-TW': '情侶攝影', 'en': 'Couple' } },
      { src: 'images/couple-12.jpg',      caption: { 'zh-TW': '情侶攝影', 'en': 'Couple' } }
    ],
    next: 'photo-street'
  },

  'photo-masada': {
    id: 'photo-masada',
    category: 'event-photo',
    categoryLabel: { 'zh-TW': '活動攝影', 'en': 'Event Photo' },
    title: { 'zh-TW': 'Masada永佳捷智能電梯x林書豪', 'en': 'Masada × Jeremy Lin Press Conference' },
    tagline: {
      'zh-TW': '記者會攝影',
      'en': 'Press Conference Photography'
    },
    featureImage: 'images/masada-01.jpg',
    galleryStyle: 'masonry',
    info: {
      client: { 'zh-TW': 'Masada永佳捷智能電梯', 'en': 'Masada Intelligent Elevator' },
      year: '2024',
      role: { 'zh-TW': '平面攝影師', 'en': 'Photographer' },
      tools: 'Sony α7 IV'
    },
    description: {
      heading: {
        'zh-TW': '品牌代言人記者會的<em>視覺見證</em>',
        'en': 'The <em>visual witness</em> of a brand ambassador press conference'
      },
      paragraphs: {
        'zh-TW': [
          ''
        ],
        'en': [
          ''
        ]
      }
    },
    gallery: [
      { src: 'images/masada-01.jpg', caption: { 'zh-TW': '主視覺', 'en': 'Key Visual' } },
      { src: 'images/masada-02.jpg', caption: { 'zh-TW': '記者會現場', 'en': 'Press Conference' } },
      { src: 'images/masada-03.jpg', caption: { 'zh-TW': '記者會現場', 'en': 'Press Conference' } },
      { src: 'images/masada-04.jpg', caption: { 'zh-TW': '記者會現場', 'en': 'Press Conference' } },
      { src: 'images/masada-05.jpg', caption: { 'zh-TW': '記者會現場', 'en': 'Press Conference' } },
      { src: 'images/masada-06.jpg', caption: { 'zh-TW': '記者會現場', 'en': 'Press Conference' } },
      { src: 'images/masada-07.jpg', caption: { 'zh-TW': '記者會現場', 'en': 'Press Conference' } },
      { src: 'images/masada-08.jpg', caption: { 'zh-TW': '記者會現場', 'en': 'Press Conference' } },
      { src: 'images/masada-09.jpg', caption: { 'zh-TW': '記者會現場', 'en': 'Press Conference' } },
      { src: 'images/masada-10.jpg', caption: { 'zh-TW': '記者會現場', 'en': 'Press Conference' } },
      { src: 'images/masada-11.jpg', caption: { 'zh-TW': '記者會現場', 'en': 'Press Conference' } },
      { src: 'images/masada-12.jpg', caption: { 'zh-TW': '記者會現場', 'en': 'Press Conference' } },
      { src: 'images/masada-13.jpg', caption: { 'zh-TW': '記者會現場', 'en': 'Press Conference' } },
      { src: 'images/masada-14.jpg', caption: { 'zh-TW': '記者會現場', 'en': 'Press Conference' } }
    ],
    next: 'photo-shovelmuseum'
  },

  'photo-shovelmuseum': {
    id: 'photo-shovelmuseum',
    category: 'event-photo',
    categoryLabel: { 'zh-TW': '活動攝影', 'en': 'Event Photo' },
    title: { 'zh-TW': '鏟子超人館開幕典禮', 'en': 'Shovel Heroes Museum Opening Ceremony' },
    tagline: {
      'zh-TW': '紀錄鏟子超人館落成開幕活動',
      'en': 'Photography documentation of the Shovel Heroes Museum opening ceremony'
    },
    featureImage: 'images/rotary3490-shovelmuseum-cover.jpg',
    galleryStyle: 'masonry',
    info: {
      client: { 'zh-TW': '國際扶輪3490地區', 'en': 'Rotary International District 3490' },
      year: '2026',
      role: { 'zh-TW': '攝影師', 'en': 'Photographer' },
      tools: 'Sony α7 IV'
    },
    description: {
      heading: {
        'zh-TW': '從一把鏟子到一座紀念館的<em>感動旅程</em>',
        'en': 'The <em>moving journey</em> from a single shovel to a memorial museum'
      },
      paragraphs: {
        'zh-TW': [
          '紀錄國際扶輪3490地區於花蓮縣光復鄉舉辦的「鏟子超人館」落成開幕活動，從一把鏟子到一座紀念館，見證「鏟子超人」誕生背後的感動旅程。',
          '<a href="https://www.taiwan-rotary.org/article/detail.php?id=1298" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">地區報導</a>'
        ],
        'en': [
          'Documentation of the Shovel Heroes Museum opening ceremony held by Rotary International District 3490 in Guangfu Township, Hualien — witnessing the moving journey behind the birth of the “Shovel Heroes,” from a single shovel to a memorial museum.',
          '<a href="https://www.taiwan-rotary.org/article/detail.php?id=1298" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">District News Coverage</a>'
        ]
      }
    },
    gallery: [
      { src: 'images/rotary3490-shovelmuseum-01.jpg', caption: { 'zh-TW': '現場湧入上百位扶輪社友與地方鄉親，齊聚帳篷下見證開幕時刻', 'en': 'Hundreds of Rotarians and local residents gathered under the tent to witness the opening ceremony' } },
      { src: 'images/rotary3490-shovelmuseum-02.jpg', caption: { 'zh-TW': '剪綵揭牌儀式，各界代表齊聚見證鏟子超人紀念館正式啟用', 'en': 'Ribbon-cutting ceremony — representatives from all sectors witness the official opening of the Shovel Heroes Museum' } },
      { src: 'images/rotary3490-shovelmuseum-03.jpg', caption: { 'zh-TW': '太鼓表演揭開開幕典禮序幕', 'en': 'Taiko drum performance opens the ceremony' } },
      { src: 'images/rotary3490-shovelmuseum-04.jpg', caption: { 'zh-TW': '學童排笛演出，為典禮增添溫馨氛圍', 'en': 'Schoolchildren perform on pan flutes, adding a warm touch to the ceremony' } },
      { src: 'images/rotary3490-shovelmuseum-05.jpg', caption: { 'zh-TW': '國際扶輪3490地區代表團合影留念', 'en': 'Rotary International District 3490 delegation group photo' } },
      { src: 'images/rotary3490-shovelmuseum-06.jpg', caption: { 'zh-TW': '貴賓手持鏟子於展區合影，呼應鏟子超人的行動精神', 'en': 'Guests pose with shovels in the exhibition hall, echoing the spirit of the Shovel Heroes' } },
      { src: 'images/rotary3490-shovelmuseum-07.jpg', caption: { 'zh-TW': '光復花蓮蜜蜂志工於展區合影，記錄物資運送與救援接力的夥伴情誼', 'en': 'Guangfu Hualien Bee Volunteers pose in the exhibition, documenting the camaraderie of supply relief and rescue relay' } },
      { src: 'images/rotary3490-shovelmuseum-08.jpg', caption: { 'zh-TW': '民眾駐足細看牆面上記錄光復救災歷程的影像牆', 'en': 'A visitor pauses to view the photo wall documenting Guangfu’s disaster relief journey' } },
      { src: 'images/rotary3490-shovelmuseum-09.jpg', caption: { 'zh-TW': '展區陳列沾滿泥漿的雨鞋，訴說光復鄉親清淤救災的艱辛歷程', 'en': 'Mud-caked rain boots on display, telling the story of Guangfu residents’ arduous mud-clearing relief work' } },
      { src: 'images/rotary3490-shovelmuseum-10.jpg', caption: { 'zh-TW': '懸吊鏟子裝置藝術，呼應「鏟子超人集結」的行動足跡', 'en': 'Hanging shovel installation art echoing the footsteps of the “Shovel Heroes Assemble” movement' } },
      { src: 'images/rotary3490-shovelmuseum-11.jpg', caption: { 'zh-TW': '印有「鏟子超人」字樣的紀念T恤，成為這場全民行動的鮮明印記', 'en': 'Commemorative T-shirt printed with “Shovel Heroes,” a vivid mark of this nationwide movement' } }
    ],
    next: 'video-shovelanniversary'
  },

  'video-shovelanniversary': {
    id: 'video-shovelanniversary',
    category: 'video',
    categoryLabel: { 'zh-TW': '攝影剪輯', 'en': 'Photo & Edit' },
    title: { 'zh-TW': '鏟子超人周年感恩會 紀錄片', 'en': 'Shovel Heroes Anniversary Thanksgiving Documentary' },
    tagline: {
      'zh-TW': '【那一天，我們都是鏟子超人】國際扶輪3490地區26-27年度 鏟子超人周年感恩會 紀錄片',
      'en': '["That Day, We Were All Shovel Heroes"] Rotary International District 3490 2026-27 Shovel Heroes Anniversary Thanksgiving Gathering Documentary'
    },
    featureImage: 'images/rotary3490-shovelanniversary-cover.jpg',
    embedVideo: 'https://www.youtube.com/embed/4eoMJtLy0E0?si=TpJufkJBxQYMIW4Q',
    embedVideoWidth: 560,
    embedVideoHeight: 315,
    galleryStyle: 'masonry',
    info: {
      client: { 'zh-TW': '國際扶輪3490地區', 'en': 'Rotary International District 3490' },
      year: '2026',
      role: { 'zh-TW': '剪輯師', 'en': 'Editor' },
      tools: 'SUNO、剪映'
    },
    description: {
      heading: {
        'zh-TW': '那一天，我們都是<em>鏟子超人</em>',
        'en': 'That day, we were all <em>Shovel Heroes</em>'
      },
      paragraphs: {
        'zh-TW': [
          '整體風格以紀錄片感為主，透過當時真實救災影像、環境聲、人物細節與鏟子超人紀念館素材，重新帶觀眾回到那一天，重返花蓮縣光復鄉的救災現場與一週年感恩會現場。',
          '<a href="https://youtu.be/4eoMJtLy0E0" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">影片連結</a>'
        ],
        'en': [
          'The overall style centers on a documentary feel, using real disaster-relief footage, ambient sound, human details, and material from the Shovel Heroes Memorial Hall to bring viewers back to that day — back to the relief site and the first-anniversary thanksgiving gathering in Guangfu Township, Hualien County.',
          '<a href="https://youtu.be/4eoMJtLy0E0" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">Video Link</a>'
        ]
      }
    },
    gallery: [
      { src: 'images/rotary3490-shovelanniversary-cover.jpg', caption: { 'zh-TW': '國際扶輪3490地區 鏟子超人周年感恩會主視覺', 'en': 'Key visual for the Rotary District 3490 Shovel Heroes Anniversary Thanksgiving event' } }
    ],
    next: 'video-keelung-police'
  },

  'photo-street': {
    id: 'photo-street',
    category: 'portrait-photo',
    categoryLabel: { 'zh-TW': '人像攝影', 'en': 'Portrait Photo' },
    title: { 'zh-TW': '街拍攝影', 'en': 'Street Portrait' },
    tagline: {
      'zh-TW': '與 MD.陳婉琳 合作，拍攝於華江整宅',
      'en': 'Collaboration with MD. Wan-Leng Chen, shot at Huajiang Housing Complex'
    },
    featureImage: 'images/street-main.jpg',
    galleryStyle: 'masonry',
    info: {
      client: { 'zh-TW': '陳婉琳', 'en': 'Wan-Leng Chen' },
      year: '2024',
      role: { 'zh-TW': '平面攝影師', 'en': 'Photographer' },
      tools: 'Sony α7 IV'
    },
    description: {
      heading: {
        'zh-TW': '城市角落裡的<em>光與人</em>',
        'en': '<em>Light and people</em> in the city\'s hidden corners'
      },
      paragraphs: {
        'zh-TW': [
          ''
        ],
        'en': [
          ''
        ]
      }
    },
    gallery: [
      { src: 'images/street-cover.jpg',    caption: { 'zh-TW': '主視覺', 'en': 'Key Visual' } },
      { src: 'images/street-01.jpg',       caption: { 'zh-TW': '街拍', 'en': 'Street Portrait' } },
      { src: 'images/street-02.jpg',       caption: { 'zh-TW': '街拍', 'en': 'Street Portrait' } },
      { src: 'images/street-03.jpg',       caption: { 'zh-TW': '街拍', 'en': 'Street Portrait' } },
      { src: 'images/street-04.jpg',       caption: { 'zh-TW': '街拍', 'en': 'Street Portrait' } },
      { src: 'images/street-05.jpg',       caption: { 'zh-TW': '街拍', 'en': 'Street Portrait' } }
    ],
    next: 'photo-rotary15'
  },

  'photo-rotary15': {
    id: 'photo-rotary15',
    category: 'event-photo',
    categoryLabel: { 'zh-TW': '活動攝影', 'en': 'Event Photo' },
    title: { 'zh-TW': '板橋群英扶輪社第十五週年授證典禮', 'en': 'Banqiao Elite Rotary 15th Charter Ceremony' },
    tagline: {
      'zh-TW': '板橋群英扶輪社第十五週年授證典禮攝影紀錄',
      'en': 'Photography documentation of the Banqiao Elite Rotary Club 15th anniversary charter ceremony'
    },
    featureImage: 'images/rotary15-cover.jpg',
    galleryStyle: 'masonry',
    info: {
      client: { 'zh-TW': '板橋群英扶輪社', 'en': 'Banqiao Elite Rotary Club' },
      year: '2026',
      role: { 'zh-TW': '平面攝影師', 'en': 'Photographer' },
      tools: 'Sony α7 IV, α6400'
    },
    description: {
      heading: {
        'zh-TW': '紀錄一個社團的<em>傳承時刻</em>',
        'en': 'Documenting a club\'s <em>moment of legacy</em>'
      },
      paragraphs: {
        'zh-TW': [
          '紀錄一個社團的傳承時刻',
          '以復古為主題的十五週年授證典禮攝影紀錄'
        ],
        'en': [
          'Documenting the legacy of a club.',
          'A retro-themed photography record of the 15th anniversary charter ceremony.'
        ]
      }
    },
    gallery: [
      { src: 'images/rotary15-cover.jpg',  caption: { 'zh-TW': '主視覺', 'en': 'Key Visual' } },
      { src: 'images/rotary15-01.jpg',     caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rotary15-02.jpg',     caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rotary15-03.jpg',     caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rotary15-04.jpg',     caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rotary15-05.jpg',     caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rotary15-06.jpg',     caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rotary15-07.jpg',     caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rotary15-08.jpg',     caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rotary15-09.jpg',     caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rotary15-10.jpg',     caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rotary15-11.jpg',     caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rotary15-12.jpg',     caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rotary15-13.jpg',     caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rotary15-14.jpg',     caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rotary15-15.jpg',     caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rotary15-16.jpg',     caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rotary15-17.jpg',     caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } },
      { src: 'images/rotary15-18.jpg',     caption: { 'zh-TW': '授證典禮', 'en': 'Charter Ceremony' } }
    ],
    next: 'photo-coophub'
  },

  'photo-coophub': {
    id: 'photo-coophub',
    category: 'event-photo',
    categoryLabel: { 'zh-TW': '活動攝影', 'en': 'Event Photo' },
    title: { 'zh-TW': 'CoopHub 合作事業青年培力暨創業構想競賽', 'en': 'CoopHub Youth Empowerment & Startup Competition' },
    tagline: {
      'zh-TW': '競賽活動頒獎典禮平面攝影',
      'en': 'Official photography for the CoopHub award ceremony'
    },
    featureImage: 'images/coophub-cover.jpg',
    galleryStyle: 'masonry',
    info: {
      client: { 'zh-TW': '有限責任新北市原住民電腦資訊勞動合作社', 'en': 'ACIC New Taipei Indigenous IT Cooperative' },
      year: '2025',
      role: { 'zh-TW': '平面攝影師', 'en': 'Photographer' },
      tools: 'Sony α7 IV'
    },
    description: {
      heading: {
        'zh-TW': '青年創業構想的<em>高光時刻</em>',
        'en': 'The <em>spotlight moment</em> for youth entrepreneurship'
      },
      paragraphs: {
        'zh-TW': [
          '競賽活動頒獎典禮平面攝影紀錄',
          '<a href="https://www.acic.tw/coophub%E9%9D%92%E5%B9%B4%E5%9F%B9%E5%8A%9B%E6%9A%A8%E5%89%B5%E6%A5%AD%E6%A7%8B%E6%83%B3%E7%AB%B6%E8%B3%BD" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">官網活動介紹</a>'
        ],
        'en': [
          'Official photography documentation of the CoopHub award ceremony.',
          '<a href="https://www.acic.tw/coophub%E9%9D%92%E5%B9%B4%E5%9F%B9%E5%8A%9B%E6%9A%A8%E5%89%B5%E6%A5%AD%E6%A7%8B%E6%83%B3%E7%AB%B6%E8%B3%BD" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">Official Event Page</a>'
        ]
      }
    },
    gallery: [
      { src: 'images/coophub-cover.jpg', caption: { 'zh-TW': '主視覺', 'en': 'Key Visual' } },
      { src: 'images/coophub-01.jpg',    caption: { 'zh-TW': '活動紀錄', 'en': 'Event Documentation' } },
      { src: 'images/coophub-02.jpg',    caption: { 'zh-TW': '活動紀錄', 'en': 'Event Documentation' } },
      { src: 'images/coophub-03.jpg',    caption: { 'zh-TW': '活動紀錄', 'en': 'Event Documentation' } },
      { src: 'images/coophub-04.jpg',    caption: { 'zh-TW': '活動紀錄', 'en': 'Event Documentation' } },
      { src: 'images/coophub-05.jpg',    caption: { 'zh-TW': '活動紀錄', 'en': 'Event Documentation' } },
      { src: 'images/coophub-06.jpg',    caption: { 'zh-TW': '活動紀錄', 'en': 'Event Documentation' } },
      { src: 'images/coophub-07.jpg',    caption: { 'zh-TW': '活動紀錄', 'en': 'Event Documentation' } },
      { src: 'images/coophub-08.jpg',    caption: { 'zh-TW': '活動紀錄', 'en': 'Event Documentation' } },
      { src: 'images/coophub-09.jpg',    caption: { 'zh-TW': '活動紀錄', 'en': 'Event Documentation' } },
      { src: 'images/coophub-10.jpg',    caption: { 'zh-TW': '活動紀錄', 'en': 'Event Documentation' } },
      { src: 'images/coophub-11.jpg',    caption: { 'zh-TW': '活動紀錄', 'en': 'Event Documentation' } },
      { src: 'images/coophub-12.jpg',    caption: { 'zh-TW': '活動紀錄', 'en': 'Event Documentation' } },
      { src: 'images/coophub-13.jpg',    caption: { 'zh-TW': '活動紀錄', 'en': 'Event Documentation' } },
      { src: 'images/coophub-14.jpg',    caption: { 'zh-TW': '活動紀錄', 'en': 'Event Documentation' } },
      { src: 'images/coophub-15.jpg',    caption: { 'zh-TW': '活動紀錄', 'en': 'Event Documentation' } },
      { src: 'images/coophub-16.jpg',    caption: { 'zh-TW': '活動紀錄', 'en': 'Event Documentation' } },
      { src: 'images/coophub-17.jpg',    caption: { 'zh-TW': '活動紀錄', 'en': 'Event Documentation' } },
      { src: 'images/coophub-18.jpg',    caption: { 'zh-TW': '活動紀錄', 'en': 'Event Documentation' } }
    ],
    next: 'photo-rotary-2324'
  },

  'yinqing': {
    id: 'yinqing',
    category: 'branding',
    categoryLabel: { 'zh-TW': '品牌設計', 'en': 'Branding' },
    title: { 'zh-TW': '吟清酌', 'en': 'Yin Qing Zhuo' },
    tagline: {
      'zh-TW': '日本清酒品牌 VI 品牌設計',
      'en': 'Japanese Sake Brand VI Identity Design'
    },
    featureImage: 'images/yq-01.jpg',
    info: {
      client: { 'zh-TW': '吟清酌', 'en': 'Yin Qing Zhuo' },
      year: '2023',
      role: { 'zh-TW': '品牌設計師', 'en': 'Brand Designer' },
      tools: 'Illustrator, Photoshop'
    },
    description: {
      heading: {
        'zh-TW': '吟是浪漫，清是純粹，酌是<em>分享</em>',
        'en': 'Gin is romance, Sei is purity, Shaku is <em>sharing</em>'
      },
      paragraphs: {
        'zh-TW': [
          '吟清酌相信每一杯酒都承載著故事與溫度。從清雅的日本清酒到溫潤的梅酒與果實酒，每一滴都蘊含了日本匠人的心意與文化。品牌希望帶給消費者不只是酒的滋味，而是細膩的相聚時光，讓舌尖的品味化作心裡的記憶'
        ],
        'en': [
          'Yin Qing Zhuo believes every glass of sake carries a story and warmth. From delicate nihonshu to rich umeshu and fruit wines, every drop embodies the spirit and culture of Japanese artisans. The brand aspires to offer not just flavor, but refined moments of connection — turning taste into lasting memories.'
        ]
      }
    },
    gallery: [
      { src: 'images/yq-01.jpg', caption: { 'zh-TW': '主視覺', 'en': 'Key Visual' } },
      { src: 'images/yq-02.jpg', caption: { 'zh-TW': '品牌概念', 'en': 'Brand Concept' } },
      { src: 'images/yq-03.jpg', caption: { 'zh-TW': 'LOGO 字型系統', 'en': 'LOGO & Typography' } },
      { src: 'images/yq-05.jpg', caption: { 'zh-TW': '品牌色彩系統', 'en': 'Brand Color System' } },
      { src: 'images/yq-06.jpg', caption: { 'zh-TW': '品牌情境', 'en': 'Brand Mood' } },
      { src: 'images/yq-07.jpg', caption: { 'zh-TW': '輔助圖形', 'en': 'Supporting Graphic' } },
      { src: 'images/yq-08.jpg', caption: { 'zh-TW': '信頭紙 & 名片', 'en': 'Letterhead & Business Card' } },
      { src: 'images/yq-09.jpg', caption: { 'zh-TW': '提袋設計', 'en': 'Shopping Bag' } },
      { src: 'images/yq-10.jpg', caption: { 'zh-TW': '吊牌設計', 'en': 'Hang Tag' } },
      { src: 'images/yq-11.jpg', caption: { 'zh-TW': '活動頁面應用', 'en': 'Event Page' } },
      { src: 'images/yq-12.jpg', caption: { 'zh-TW': '社群媒體素材', 'en': 'Social Media Assets' } },
      { src: 'images/yq-13.jpg', caption: { 'zh-TW': 'X-Banner 設計', 'en': 'X-Banner' } }
    ],
    next: 'kenja'
  },


  'tpp-app-redesign': {
    id: 'tpp-app-redesign',
    category: 'uiux',
    categoryLabel: { 'zh-TW': 'UI / UX', 'en': 'UI / UX' },
    title: { 'zh-TW': '民眾黨 APP Redesign', 'en': 'TPP APP Redesign' },
    tagline: {
      'zh-TW': '民眾黨黨員應用程式重新設計',
      'en': "Taiwan People's Party Member App Redesign"
    },
    featureImage: 'images/tpp-01.jpg',
    figmaPrototype: 'https://embed.figma.com/proto/EgTseeAoPXfryAl8LV485r/%E6%B0%91%E7%9C%BE%E9%BB%A8app?node-id=4853-1073&starting-point-node-id=4850%3A1070&embed-host=share',
    info: {
      client: { 'zh-TW': '台灣民眾黨', 'en': "Taiwan People's Party" },
      year: '2022',
      role: { 'zh-TW': 'UI / UX 設計師', 'en': 'UI / UX Designer' },
      tools: 'Figma'
    },
    description: {
      heading: {
        'zh-TW': '不只是美化介面，而是一次<em>策略性重塑</em>',
        'en': 'Not just a facelift — a <em>strategic rebuild</em>'
      },
      paragraphs: {
        'zh-TW': [
          '舊版 App 面臨下載量與黨員基數嚴重脫節、介面設計不良、體驗不佳等問題，根源在於破碎的資訊架構、過時的視覺設計，以及缺乏核心使用者價值。這次重製的目的不僅是美化介面，而是一次由內而外的策略性重塑'
        ],
        'en': [
          'The original App suffered from poor downloads relative to its large member base, plagued by fragmented information architecture, outdated visual design, and lack of core user value. This redesign goes beyond aesthetics — it is a strategic rebuild from the inside out.'
        ]
      }
    },
    gallery: [
      { src: 'images/tpp-01.jpg', caption: { 'zh-TW': '主視覺', 'en': 'Key Visual' } },
      { src: 'images/tpp-02.jpg', caption: { 'zh-TW': '設計背景', 'en': 'Design Background' } },
      { src: 'images/tpp-03.jpg', caption: { 'zh-TW': '使用者研究', 'en': 'User Research' } },
      { src: 'images/tpp-04.jpg', caption: { 'zh-TW': '資訊架構', 'en': 'Information Architecture' } },
      { src: 'images/tpp-05.jpg', caption: { 'zh-TW': '視覺設計', 'en': 'Visual Design' } },
      { src: 'images/tpp-06.jpg', caption: { 'zh-TW': '介面展示', 'en': 'UI Showcase' } },
      { src: 'images/tpp-07.jpg', caption: { 'zh-TW': '介面展示 2', 'en': 'UI Showcase 2' } },
      { src: 'images/tpp-08.jpg', caption: { 'zh-TW': '介面展示 3', 'en': 'UI Showcase 3' } },
      { src: 'images/tpp-09.jpg', caption: { 'zh-TW': '介面展示 4', 'en': 'UI Showcase 4' } },
      { src: 'images/tpp-10.jpg', caption: { 'zh-TW': '介面展示 5', 'en': 'UI Showcase 5' } },
      { src: 'images/tpp-11.jpg', caption: { 'zh-TW': '成果總覽', 'en': 'Final Overview' } }
    ],
    next: 'yinqing'
  },
  'kenja': {
    id: 'kenja',
    category: 'branding',
    categoryLabel: { 'zh-TW': '品牌設計', 'en': 'Branding' },
    title: { 'zh-TW': '先智 KenJa', 'en': 'KenJa' },
    tagline: {
      'zh-TW': 'WEB3 區塊鏈礦機品牌設計',
      'en': 'WEB3 Blockchain Mining Brand Design'
    },
    featureImage: 'images/kj-01.jpg',
    info: {
      client: { 'zh-TW': '先智 KenJa', 'en': 'KenJa' },
      year: '2023',
      role: { 'zh-TW': '品牌設計師 / UIUX', 'en': 'Brand Designer / UIUX' },
      tools: 'Illustrator, Photoshop, Figma'
    },
    description: {
      heading: {
        'zh-TW': '以礦機外型結合 KJ，打造<em>科技識別</em>',
        'en': 'Mining hardware meets KJ — a bold <em>tech identity</em>'
      },
      paragraphs: {
        'zh-TW': [
          '以礦機外型結合 KJ 字母，打造科技感兼具識別性的品牌標誌，配色融合科技藍與挖礦綠，整合品牌識別至名片、Banner、官網與社群的完整視覺系統'
        ],
        'en': [
          'Combining mining hardware forms with the KJ lettermark, the brand identity balances technological edge with strong recognizability. Tech blue and mining green anchor the color system, extending across name cards, event banners, the cloud mining website, and social media posts.'
        ]
      }
    },
    gallery: [
      { src: 'images/kj-01.jpg', caption: { 'zh-TW': '主視覺 / LOGO 色彩系統', 'en': 'Key Visual / LOGO Color System' } },
      { src: 'images/kj-02.jpg', caption: { 'zh-TW': '名片設計', 'en': 'Business Card Design' } },
      { src: 'images/kj-03.jpg', caption: { 'zh-TW': 'KASPA 廣告貼文設計', 'en': 'KASPA Ad Post Design' } },
      { src: 'images/kj-04.jpg', caption: { 'zh-TW': 'KASPA Accupass 活動頁', 'en': 'KASPA Accupass Event Page' } },
      { src: 'images/kj-05.jpg', caption: { 'zh-TW': '雲礦機 X-Banner', 'en': 'Cloud Mining X-Banner' } },
      { src: 'images/kj-06.jpg', caption: { 'zh-TW': '先智雲礦機官網 UIUX', 'en': 'Cloud Mining Website UIUX' } },
      { src: 'images/kj-07.jpg', caption: { 'zh-TW': 'IG & FB 版面設計', 'en': 'IG & FB Post Layout' } },
      { src: 'images/kj-08.jpg', caption: { 'zh-TW': '宣傳手冊', 'en': 'Promotional Brochure' } }
    ],
    next: 'childscout'
  },

  'childscout': {
    id: 'childscout',
    category: 'branding',
    categoryLabel: { 'zh-TW': '品牌設計', 'en': 'Branding' },
    title: { 'zh-TW': '童心．同心', 'en': 'Heart & Unity' },
    tagline: {
      'zh-TW': '中華民國童軍第 12 次全國大露營品牌識別設計',
      'en': 'Brand identity for the 12th National Scout Jamboree of R.O.C.'
    },
    featureImage: 'images/cs-01.jpg',
    info: {
      client: { 'zh-TW': '—', 'en': '—' },
      year: '2024',
      role: { 'zh-TW': '品牌設計師', 'en': 'Brand Designer' },
      tools: 'Illustrator, Photoshop'
    },
    description: {
      heading: {
        'zh-TW': '童心、同心，猶如同心結般<em>團結一心</em>',
        'en': 'United hearts, like a knot of unity — <em>one spirit</em>'
      },
      paragraphs: {
        'zh-TW': [
          '童心、同心，猶如同心結般團結一心。大家環環相扣，形成無邊際的圓，邁向永續，環抱國際'
        ],
        'en': [
          'Hearts of youth, united as one — like a knot of solidarity. Everyone interlinked, forming a boundless circle, striding toward sustainability and embracing the world.'
        ]
      }
    },
    gallery: [
      { src: 'images/cs-01.jpg', caption: { 'zh-TW': '主視覺', 'en': 'Key Visual' } },
      { src: 'images/cs-02.jpg', caption: { 'zh-TW': '品牌概念', 'en': 'Brand Concept' } },
      { src: 'images/cs-03.jpg', caption: { 'zh-TW': 'LOGO 系統', 'en': 'LOGO System' } },
      { src: 'images/cs-04.jpg', caption: { 'zh-TW': '色彩系統', 'en': 'Color Palette' } },
      { src: 'images/cs-05.jpg', caption: { 'zh-TW': '字型與輔助圖形', 'en': 'Typography & Supporting Graphic' } },
      { src: 'images/cs-06.jpg', caption: { 'zh-TW': '榮譽胸章', 'en': 'Honor Badge' } },
      { src: 'images/cs-07.jpg', caption: { 'zh-TW': '應用素材', 'en': 'Applications' } },
      { src: 'images/cs-08.jpg', caption: { 'zh-TW': '旗幟設計', 'en': 'Flag Design' } }
    ],
    next: 'swap'
  },

  'xinsheng': {
    id: 'xinsheng',
    category: 'branding',
    categoryLabel: { 'zh-TW': '品牌設計', 'en': 'Branding' },
    title: { 'zh-TW': '新生國小60周年校慶', 'en': 'XinSheng 60th Anniversary' },
    tagline: {
      'zh-TW': '校慶主視覺識別設計',
      'en': '60th Anniversary School Celebration CIS Design'
    },
    featureImage: 'images/xs-01.jpg',
    info: {
      client: { 'zh-TW': '—', 'en': '—' },
      year: '2023',
      role: { 'zh-TW': '主視覺設計師', 'en': 'Key Visual Designer' },
      tools: 'Illustrator, Photoshop'
    },
    description: {
      heading: {
        'zh-TW': '新生樹人，<em>心繫六十</em>',
        'en': 'Nurturing a generation, <em>hearts at sixty</em>'
      },
      paragraphs: {
        'zh-TW': [
          '新生樹人，心繫六十'
        ],
        'en': [
          'Nurturing a generation, hearts at sixty.'
        ]
      }
    },
    gallery: [
      { src: 'images/xs-01.jpg', caption: { 'zh-TW': '主視覺', 'en': 'Key Visual' } },
      { src: 'images/xs-02.jpg', caption: { 'zh-TW': '學校特色研究', 'en': 'School Character Research' } },
      { src: 'images/xs-03.jpg', caption: { 'zh-TW': 'LOGO 系統', 'en': 'LOGO System' } },
      { src: 'images/xs-04.jpg', caption: { 'zh-TW': '識別元素', 'en': 'Brand Elements' } },
      { src: 'images/xs-05.jpg', caption: { 'zh-TW': '輔助識別', 'en': 'Secondary Elements' } },
      { src: 'images/xs-06.jpg', caption: { 'zh-TW': '色彩系統', 'en': 'Color System' } },
      { src: 'images/xs-07.jpg', caption: { 'zh-TW': 'EDM 與海報設計', 'en': 'EDM & Poster Design' } },
      { src: 'images/xs-08.jpg', caption: { 'zh-TW': '旗幟與服裝設計', 'en': 'Flag & Apparel Design' } },
      { src: 'images/xs-09.jpg', caption: { 'zh-TW': '校慶紀念品', 'en': 'Anniversary Merchandise' } }
    ],
    next: 'clip-zhongqing'
  },

  'swap': {
    id: 'swap',
    category: 'branding',
    categoryLabel: { 'zh-TW': '品牌設計', 'en': 'Branding' },
    title: { 'zh-TW': 'SWAP', 'en': 'SWAP' },
    tagline: {
      'zh-TW': '區塊鏈金融品牌 LOGO 設計',
      'en': 'Blockchain financial brand LOGO design'
    },
    featureImage: 'images/swap_01-01.jpg',
    // 設計類預設滿版無間距，不寫 galleryStyle
    info: {
      client: { 'zh-TW': 'SWAP 平台', 'en': 'SWAP Platform' },
      year: '2024',
      role: { 'zh-TW': 'LOGO 設計師', 'en': 'LOGO Designer' },
      tools: 'Illustrator'
    },
    description: {
      heading: {
        'zh-TW': '此作品<em>內容待補</em>',
        'en': 'Content <em>coming soon</em>'
      },
      paragraphs: {
        'zh-TW': [
          '此作品的詳細內容尚在整理中，後續會補上完整的專案敘述',
          '若您對此作品感興趣，歡迎透過聯繫方式與我交流，我會分享更多細節'
        ],
        'en': [
          'Detailed content for this project is being organized and will be added soon.',
          'If you are interested, please reach out via the contact page for more details.'
        ]
      }
    },
    gallery: [
      { src: 'images/swap_01-01.jpg', caption: { 'zh-TW': 'LOGO 設計', 'en': 'LOGO Design' } },
      { src: 'images/swap_01-02.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/swap_01-03.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/swap_01-04.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/swap_01-05.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/swap_01-06.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/swap_01-07.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/swap_01-08.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/swap_01-09.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/swap_01-10.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/swap_01-11.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/swap_01-12.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/swap_01-13.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } }
    ],
    next: 'tpp-app-redesign'
  },

  'video-keelung-police': {
    id: 'video-keelung-police',
    category: 'video',
    categoryLabel: { 'zh-TW': '微電影', 'en': 'Short Film' },
    title: { 'zh-TW': '基隆市警察局反詐微電影', 'en': 'Keelung Police Anti-Fraud Short Film' },
    tagline: {
      'zh-TW': '與基隆市警察局、吳怡霈合作，拍攝反詐微電影',
      'en': 'Anti-fraud short film produced in collaboration with Keelung Police Department and artist Wu Yi-Pei'
    },
    featureImage: 'images/antiscam-01.png',
    embedVideo: 'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fkcpb110%2Fvideos%2F475165201999063%2F&show_text=false&width=560&t=0',
    embedVideoWidth: 560,
    embedVideoHeight: 314,
    galleryStyle: 'masonry',
    info: {
      client: { 'zh-TW': '基隆市警察局', 'en': 'Keelung Police Department' },
      year: '2024',
      role: { 'zh-TW': '攝影助理 / 剪輯', 'en': 'Camera Assistant / Editor' },
      tools: 'Sony α7 IV, DaVinci Resolve'
    },
    description: {
      heading: {
        'zh-TW': '讓反詐意識<em>深入人心</em>',
        'en': 'Making anti-fraud awareness <em>resonate</em>'
      },
      paragraphs: {
        'zh-TW': [
          ''
        ],
        'en': [
          ''
        ]
      }
    },
    gallery: [
      { src: 'images/antiscam-01.png', caption: { 'zh-TW': '主視覺', 'en': 'Key Visual' } },
      { src: 'images/antiscam-02.png', caption: { 'zh-TW': '影片截圖', 'en': 'Video Screenshot' } },
      { src: 'images/antiscam-03.png', caption: { 'zh-TW': '影片截圖', 'en': 'Video Screenshot' } },
      { src: 'images/antiscam-04.png', caption: { 'zh-TW': '影片截圖', 'en': 'Video Screenshot' } },
      { src: 'images/antiscam-05.png', caption: { 'zh-TW': '影片截圖', 'en': 'Video Screenshot' } },
      { src: 'images/antiscam-06.png', caption: { 'zh-TW': '影片截圖', 'en': 'Video Screenshot' } },
      { src: 'images/antiscam-07.png', caption: { 'zh-TW': '影片截圖', 'en': 'Video Screenshot' } },
      { src: 'images/antiscam-08.png', caption: { 'zh-TW': '影片截圖', 'en': 'Video Screenshot' } },
      { src: 'images/antiscam-09.png', caption: { 'zh-TW': '影片截圖', 'en': 'Video Screenshot' } },
      { src: 'images/antiscam-10.png', caption: { 'zh-TW': '影片截圖', 'en': 'Video Screenshot' } },
      { src: 'images/antiscam-11.png', caption: { 'zh-TW': '影片截圖', 'en': 'Video Screenshot' } },
      { src: 'images/antiscam-12.png', caption: { 'zh-TW': '影片截圖', 'en': 'Video Screenshot' } }
    ],
    next: 'clip-zhongqing'
  },

  'clip-zhongqing': {
    id: 'clip-zhongqing',
    category: 'video',
    categoryLabel: { 'zh-TW': '攝影剪輯', 'en': 'Photo & Edit' },
    title: { 'zh-TW': '眾青雲集造浪營', 'en': 'Zhongqing Wave Camp' },
    tagline: {
      'zh-TW': '眾青雲集造浪營活動短影片剪輯',
      'en': 'Short video editing for the Zhongqing Wave Camp event'
    },
    featureImage: 'images/wave-cover.png',
    galleryStyle: 'masonry',
    info: {
      client: { 'zh-TW': '民眾黨青年委員會', 'en': 'TPP Youth Committee' },
      year: '2023',
      role: { 'zh-TW': '活動視覺設計 / 主持人 / 剪輯', 'en': 'Visual Designer / Host / Editor' },
      tools: 'DaVinci Resolve'
    },
    description: {
      heading: {
        'zh-TW': '風掀浪起，眾青<em>雲集</em>',
        'en': 'Waves rising, youth <em>gathering</em>'
      },
      paragraphs: {
        'zh-TW': [
          '風掀浪起，眾青雲集！參與營隊，帶你認識政治選戰工作。模擬選戰 × 議題辯論 × 政治幕僚，不隨波逐流，學青？社青？來展現實力一同較勁！',
          '<a href="https://youtube.com/playlist?list=PL5m94OYv97Zt-vvOVnDuby_CnVENkFrE5&si=8XdUCz6uqmjwz75T" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">影片連結</a>'
        ],
        'en': [
          "Waves rising, youth gathering! Join the camp and explore the world of political campaigns. Simulated elections x issue debates x political strategy — not going with the flow. Come and show what you're made of!",
          '<a href="https://youtube.com/playlist?list=PL5m94OYv97Zt-vvOVnDuby_CnVENkFrE5&si=8XdUCz6uqmjwz75T" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">Video Playlist</a>'
        ]
      }
    },
    gallery: [
      { src: 'images/wave-cover.png', caption: { 'zh-TW': '主視覺', 'en': 'Key Visual' } },
      { src: 'images/wave-01.png', caption: { 'zh-TW': '影片截圖', 'en': 'Video Screenshot' } },
      { src: 'images/wave-02.png', caption: { 'zh-TW': '影片截圖', 'en': 'Video Screenshot' } },
      { src: 'images/wave-03.png', caption: { 'zh-TW': '影片截圖', 'en': 'Video Screenshot' } },
      { src: 'images/wave-04.png', caption: { 'zh-TW': '影片截圖', 'en': 'Video Screenshot' } },
      { src: 'images/wave-05.png', caption: { 'zh-TW': '影片截圖', 'en': 'Video Screenshot' } },
      { src: 'images/wave-06.png', caption: { 'zh-TW': '影片截圖', 'en': 'Video Screenshot' } }
    ],
    next: 'video-shovelmuseum-anniversary'
  },

  'video-shovelmuseum-anniversary': {
    id: 'video-shovelmuseum-anniversary',
    category: 'video',
    categoryLabel: { 'zh-TW': '攝影剪輯', 'en': 'Photo & Edit' },
    title: { 'zh-TW': '鏟子超人周年感恩會 紀錄片', 'en': 'Shovel Heroes Anniversary Thanksgiving Ceremony Documentary' },
    tagline: {
      'zh-TW': '【那一天，我們都是鏟子超人】國際扶輪3490地區26-27年度 鏟子超人周年感恩會 紀錄片',
      'en': '["That Day, We Were All Shovel Heroes"] Rotary International District 3490, 2026–27, Shovel Heroes Anniversary Thanksgiving Ceremony Documentary'
    },
    featureImage: 'images/rotary3490-shovelmuseum-anniversary-cover.jpg',
    embedVideo: 'https://www.youtube.com/embed/4eoMJtLy0E0?si=TpJufkJBxQYMIW4Q',
    embedVideoWidth: 560,
    embedVideoHeight: 315,
    info: {
      client: { 'zh-TW': '國際扶輪3490地區', 'en': 'Rotary International District 3490' },
      year: '2026',
      role: { 'zh-TW': '剪輯師', 'en': 'Editor' },
      tools: 'SUNO, 剪映'
    },
    description: {
      heading: {
        'zh-TW': '那一天，我們都是<em>鏟子超人</em>',
        'en': 'That day, we were all <em>Shovel Heroes</em>'
      },
      paragraphs: {
        'zh-TW': [
          '整體風格以紀錄片感為主，透過當時真實救災影像、環境聲、人物細節與鏟子超人紀念館素材，重新帶觀眾回到那一天。',
          '紀錄國際扶輪3490地區26-27年度於花蓮縣光復鄉舉辦的鏟子超人周年感恩會，向投入救災與重建的鏟子超人致敬。',
          '<a href="https://youtu.be/4eoMJtLy0E0" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">影片連結</a>'
        ],
        'en': [
          'The overall style centers on a documentary sensibility, drawing on real disaster-relief footage, ambient sound, and personal details from that time, together with material from the Shovel Heroes Memorial Hall, to bring viewers back to that day.',
          'Documents the Shovel Heroes Anniversary Thanksgiving Ceremony held by Rotary International District 3490 (2026–27) in Guangfu Township, Hualien County, paying tribute to the Shovel Heroes who took part in disaster relief and reconstruction.',
          '<a href="https://youtu.be/4eoMJtLy0E0" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">Video Link</a>'
        ]
      }
    },
    gallery: [],
    next: 'clip-rotary3490-thanksgiving'
  },

  'clip-rotary3490-thanksgiving': {
    id: 'clip-rotary3490-thanksgiving',
    category: 'video',
    categoryLabel: { 'zh-TW': '攝影剪輯', 'en': 'Photo & Edit' },
    title: { 'zh-TW': '國際扶輪3490地區感恩餐會', 'en': 'Rotary International District 3490 Thanksgiving Banquet' },
    tagline: {
      'zh-TW': '【國際扶輪3490地區感恩餐會】主題曲創作與活動影片剪輯',
      'en': '[Rotary International District 3490 Thanksgiving Banquet] Theme Song Composition and Event Video Editing'
    },
    featureImage: 'images/rotary3490-thanksgiving-cover.jpg',
    info: {
      client: { 'zh-TW': '國際扶輪3490地區', 'en': 'Rotary International District 3490' },
      year: '2026',
      role: { 'zh-TW': '剪輯師', 'en': 'Editor' },
      tools: 'SUNO, 剪映'
    },
    description: {
      heading: {
        'zh-TW': '以歌聲與影像，記錄<em>感恩的時刻</em>',
        'en': 'Recording a <em>moment of gratitude</em> through song and image'
      },
      paragraphs: {
        'zh-TW': [
          '為國際扶輪3490地區感恩餐會創作主題曲，並剪輯活動紀錄影片，以音樂與畫面重現餐會現場的互動與氛圍。',
          '<a href="https://youtu.be/lJiZy6YJyBI" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">影片連結</a>'
        ],
        'en': [
          'Composed the theme song for the Rotary International District 3490 Thanksgiving Banquet and edited the event documentary video, using music and footage to recreate the interactions and atmosphere of the banquet.',
          '<a href="https://youtu.be/lJiZy6YJyBI" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">Video Link</a>'
        ]
      }
    },
    gallery: [],
    next: 'clip-rotary3490-interact'
  },

  'clip-rotary3490-interact': {
    id: 'clip-rotary3490-interact',
    category: 'video',
    categoryLabel: { 'zh-TW': '攝影剪輯', 'en': 'Photo & Edit' },
    title: { 'zh-TW': '國際扶輪3490地區扶少團 台日聯合參訪活動', 'en': 'Rotary International District 3490 Interact Club Taiwan–Japan Joint Visit' },
    tagline: {
      'zh-TW': '【國際扶輪3490地區扶少團】台日聯合參訪活動 活動主題曲與影片剪輯',
      'en': '[Rotary International District 3490 Interact Club] Taiwan–Japan Joint Visit Theme Song and Video Editing'
    },
    featureImage: 'images/rotary3490-interact-cover.jpg',
    info: {
      client: { 'zh-TW': '國際扶輪3490地區扶少團', 'en': 'Rotary International District 3490 Interact Club' },
      year: '2026',
      role: { 'zh-TW': '剪輯師', 'en': 'Editor' },
      tools: 'SUNO, 剪映'
    },
    description: {
      heading: {
        'zh-TW': '跨越海峽，<em>共創交流</em>',
        'en': 'Across the strait, <em>creating exchange together</em>'
      },
      paragraphs: {
        'zh-TW': [
          '為國際扶輪3490地區扶少團台日聯合參訪活動創作主題曲並剪輯活動影片，記錄台日青年交流互動的過程。',
          '<a href="https://youtu.be/LacNdolXqyY" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">影片連結</a>'
        ],
        'en': [
          "Composed the theme song and edited the event video for the Rotary International District 3490 Interact Club's Taiwan–Japan Joint Visit, documenting the exchange between Taiwanese and Japanese youth.",
          '<a href="https://youtu.be/LacNdolXqyY" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">Video Link</a>'
        ]
      }
    },
    gallery: [],
    next: 'video-keelung-police'
  },

  'zhongqing': {
    id: 'zhongqing',
    category: 'event',
    categoryLabel: { 'zh-TW': '活動設計', 'en': 'Event Design' },
    title: { 'zh-TW': '眾青雲集造浪營', 'en': 'Zhongqing Wave Camp' },
    tagline: {
      'zh-TW': '民眾黨青年委員會青年營隊規劃設計',
      'en': 'TPP Youth Committee Camp Planning & Design'
    },
    featureImage: 'images/zq-01.jpg',
    info: {
      client: { 'zh-TW': '民眾黨青年委員會', 'en': 'TPP Youth Committee' },
      year: '2023',
      role: { 'zh-TW': '活動視覺設計', 'en': 'Event Visual Designer' },
      tools: 'Illustrator, Photoshop'
    },
    description: {
      heading: {
        'zh-TW': '風掀浪起，眾青<em>雲集</em>',
        'en': 'Waves rising, youth <em>gathering</em>'
      },
      paragraphs: {
        'zh-TW': [
          '風掀浪起，眾青雲集！參與營隊，帶你認識政治選戰工作。模擬選戰 × 議題辯論 × 政治幕僚，不隨波逐流，學青？社青？來展現實力一同較勁！',
          '<a href="https://www.acic.tw/coophub%E9%9D%92%E5%B9%B4%E5%89%B5%E6%A5%AD%E6%9A%A8%E5%89%B5%E6%96%B0%E5%89%B5%E6%A5%AD%E7%A7%BB" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">官網活動介紹</a>'
        ],
        'en': [
          "Waves rising, youth gathering! Join the camp and explore the world of political campaigns. Simulated elections x issue debates x political strategy — not going with the flow.",
          '<a href="https://www.acic.tw/coophub%E9%9D%92%E5%B9%B4%E5%89%B5%E6%A5%AD%E6%9A%A8%E5%89%B5%E6%96%B0%E5%89%B5%E6%A5%AD%E7%A7%BB" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">Official Event Page</a>'
        ]
      }
    },
    gallery: [
      { src: 'images/zq-01.jpg', caption: { 'zh-TW': '主視覺', 'en': 'Key Visual' } },
      { src: 'images/zq-02.jpg', caption: { 'zh-TW': '活動設計', 'en': 'Event Design' } },
      { src: 'images/zq-03.jpg', caption: { 'zh-TW': '活動設計', 'en': 'Event Design' } },
      { src: 'images/zq-04.jpg', caption: { 'zh-TW': '活動設計', 'en': 'Event Design' } },
      { src: 'images/zq-05.jpg', caption: { 'zh-TW': '活動設計', 'en': 'Event Design' } },
      { src: 'images/zq-06.jpg', caption: { 'zh-TW': '活動設計', 'en': 'Event Design' } },
      { src: 'images/zq-07.jpg', caption: { 'zh-TW': '活動設計', 'en': 'Event Design' } },
      { src: 'images/zq-08.jpg', caption: { 'zh-TW': '活動設計', 'en': 'Event Design' } },
      { src: 'images/zq-09.jpg', caption: { 'zh-TW': '活動設計', 'en': 'Event Design' } },
      { src: 'images/zq-10.jpg', caption: { 'zh-TW': '活動設計', 'en': 'Event Design' } },
      { src: 'images/zq-11.jpg', caption: { 'zh-TW': '活動設計', 'en': 'Event Design' } },
      { src: 'images/zq-12.jpg', caption: { 'zh-TW': '活動設計', 'en': 'Event Design' } },
      { src: 'images/zq-13.jpg', caption: { 'zh-TW': '活動設計', 'en': 'Event Design' } },
      { src: 'images/zq-14.jpg', caption: { 'zh-TW': '活動設計', 'en': 'Event Design' } },
      { src: 'images/zq-15.jpg', caption: { 'zh-TW': '活動設計', 'en': 'Event Design' } },
      { src: 'images/zq-16.jpg', caption: { 'zh-TW': '活動設計', 'en': 'Event Design' } },
      { src: 'images/zq-17.jpg', caption: { 'zh-TW': '活動設計', 'en': 'Event Design' } }
    ],
    next: 'xinsheng'
  },

  'defi': {
    id: 'defi',
    category: 'branding',
    categoryLabel: { 'zh-TW': '品牌設計', 'en': 'Branding' },
    title: { 'zh-TW': 'DeFi', 'en': 'DeFi' },
    tagline: {
      'zh-TW': 'DeFi 金融產品 LOGO 設計',
      'en': 'DeFi financial product LOGO design'
    },
    featureImage: 'images/defi-01.jpg',
    info: {
      client: { 'zh-TW': 'DeFi', 'en': 'DeFi' },
      year: '2024',
      role: { 'zh-TW': 'LOGO 設計師', 'en': 'LOGO Designer' },
      tools: 'Illustrator'
    },
    description: {
      heading: {
        'zh-TW': '此作品<em>內容待補</em>',
        'en': 'Content <em>coming soon</em>'
      },
      paragraphs: {
        'zh-TW': [
          '此作品的詳細內容尚在整理中，後續會補上完整的專案敘述',
          '若您對此作品感興趣，歡迎透過聯繫方式與我交流，我會分享更多細節'
        ],
        'en': [
          'Detailed content for this project is being organized and will be added soon.',
          'If you are interested, please reach out via the contact page for more details.'
        ]
      }
    },
    gallery: [
      { src: 'images/defi-01.jpg', caption: { 'zh-TW': 'LOGO 設計', 'en': 'LOGO Design' } },
      { src: 'images/defi-02.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/defi-03.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/defi-04.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/defi-05.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/defi-06.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/defi-07.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/defi-08.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/defi-09.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/defi-10.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/defi-11.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/defi-12.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } }
    ],
    next: 'swap'
  },

  'logo-collection': {
    id: 'logo-collection',
    category: 'graphic',
    categoryLabel: { 'zh-TW': '平面設計', 'en': 'Graphic Design' },
    title: { 'zh-TW': 'LOGO Collection', 'en': 'LOGO Collection' },
    tagline: {
      'zh-TW': '多元 LOGO 設計作品合集',
      'en': 'Diverse LOGO design collection'
    },
    featureImage: '',
    info: {
      client: { 'zh-TW': '各品牌客戶', 'en': 'Various Clients' },
      year: '2023 — 2024',
      role: { 'zh-TW': 'LOGO 設計師', 'en': 'LOGO Designer' },
      tools: 'Illustrator'
    },
    description: {
      heading: {
        'zh-TW': '此作品<em>內容待補</em>',
        'en': 'Content <em>coming soon</em>'
      },
      paragraphs: {
        'zh-TW': [
          '此作品的詳細內容尚在整理中，後續會補上完整的專案敘述'
        ],
        'en': [
          'Detailed content for this project is being organized and will be added soon.'
        ]
      }
    },
    gallery: [],
    next: 'xinsheng'
  },

  'election': {
    id: 'election',
    category: 'graphic',
    categoryLabel: { 'zh-TW': '平面設計', 'en': 'Graphic Design' },
    title: { 'zh-TW': '縣市議員選舉文宣設計', 'en': 'City Council Election Campaign Design' },
    tagline: {
      'zh-TW': '新北市議員候選人選舉設計物',
      'en': 'Campaign materials for New Taipei City council candidates'
    },
    featureImage: '',
    info: {
      client: { 'zh-TW': '新北市議員候選人', 'en': 'New Taipei City Council Candidates' },
      year: '2022 — 2023',
      role: { 'zh-TW': '平面設計師', 'en': 'Graphic Designer' },
      tools: 'Illustrator, Photoshop'
    },
    description: {
      heading: {
        'zh-TW': '此作品<em>內容待補</em>',
        'en': 'Content <em>coming soon</em>'
      },
      paragraphs: {
        'zh-TW': [
          '此作品的詳細內容尚在整理中，後續會補上完整的專案敘述'
        ],
        'en': [
          'Detailed content for this project is being organized and will be added soon.'
        ]
      }
    },
    gallery: [],
    next: 'logo-collection'
  },

  'food-yuanqi': {
    id: 'food-yuanqi',
    category: 'branding',
    categoryLabel: { 'zh-TW': '餐飲品牌全案設計', 'en': 'F&B Branding, End to End' },
    title: { 'zh-TW': '元氣十盅 日常料理小食堂', 'en': 'Yuan Qi Daily Kitchen' },
    tagline: {
      'zh-TW': '品牌識別・菜單・招牌・美食印象製作',
      'en': 'Brand Identity · Menu · Signage · Food Imagery'
    },
    featureImage: 'images/yuanqi-01.jpg',
    info: {
      client: { 'zh-TW': '元氣十盅', 'en': 'Yuan Qi' },
      year: '2026',
      role: { 'zh-TW': '品牌設計師', 'en': 'Brand Designer' },
      tools: 'Illustrator'
    },
    description: {
      heading: {
        'zh-TW': '元氣<em>十盅</em>，日常料理小食堂',
        'en': 'Yuan Qi <em>Daily Kitchen</em>'
      },
      paragraphs: {
        'zh-TW': [
          '一盅熱湯、一碗拌麵、一碟家常小菜，如家一般的溫柔款待，讓好好吃飯成為一家人最期待的溫馨日常'
        ],
        'en': [
          'A bowl of warm soup, a plate of noodles, a dish of home-style sides — gentle hospitality like home, making every meal a cherished daily moment for the family.'
        ]
      }
    },
    gallery: [
      { src: 'images/yuanqi-01.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/yuanqi-02.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/yuanqi-03.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/yuanqi-04.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/yuanqi-05.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/yuanqi-06.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/yuanqi-07.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/yuanqi-08.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/yuanqi-09.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/yuanqi-10.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/yuanqi-11.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/yuanqi-12.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/yuanqi-13.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/yuanqi-14.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/yuanqi-15.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/yuanqi-16.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/yuanqi-17.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/yuanqi-18.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/yuanqi-19.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } }
    ],
    next: 'food-jiuzai'
  },

  'food-jiuzai': {
    id: 'food-jiuzai',
    category: 'branding',
    categoryLabel: { 'zh-TW': '餐飲品牌全案設計', 'en': 'F&B Branding, End to End' },
    title: { 'zh-TW': '玖在一方 北方手做麵餃', 'en': 'Jiuzai Yifang — Northern Handmade Noodles & Dumplings' },
    tagline: {
      'zh-TW': '品牌識別・菜單・招牌・空間設計',
      'en': 'Brand Identity · Menu · Signage · Interior Space'
    },
    featureImage: 'images/jiuzai-01.jpg',
    info: {
      client: { 'zh-TW': '玖在一方', 'en': 'Jiuzai Yifang' },
      year: '2026',
      role: { 'zh-TW': '品牌設計師', 'en': 'Brand Designer' },
      tools: 'Illustrator'
    },
    description: {
      heading: {
        'zh-TW': '一方圓滿，長<em>玖</em>相伴',
        'en': 'A place of fulfillment, <em>lasting</em> companionship'
      },
      paragraphs: {
        'zh-TW': [
          '傳承佟記小北平近四十年的歲月火候，將揉捻麵糰的職人溫度，化作款待四方來客的真誠。將緣分與人情溫暖交織、讓旅人與在地客都能安心歇腳的一方天地'
        ],
        'en': [
          "Inheriting nearly four decades of culinary heritage from Tong\'s Xiao Bei Ping, transforming the artisan warmth of hand-kneaded dough into sincere hospitality for guests from all directions — weaving together fate and human warmth, creating a haven where travelers and locals alike can rest easy."
        ]
      }
    },
    gallery: [
      { src: 'images/jiuzai-01.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/jiuzai-02.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/jiuzai-03.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/jiuzai-04.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/jiuzai-05.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/jiuzai-06.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/jiuzai-07.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/jiuzai-08.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/jiuzai-09.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/jiuzai-10.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/jiuzai-11.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/jiuzai-12.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/jiuzai-13.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/jiuzai-14.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/jiuzai-15.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/jiuzai-16.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/jiuzai-17.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } }
    ],
    next: 'food-zhengzheng'
  },

  'food-zhengzheng': {
    id: 'food-zhengzheng',
    category: 'branding',
    categoryLabel: { 'zh-TW': '餐飲品牌全案設計', 'en': 'F&B Branding, End to End' },
    title: { 'zh-TW': '蒸蒸日饗 地中海健康餐盒', 'en': 'Zheng Zheng Ri Xiang — Mediterranean Healthy Meals' },
    tagline: {
      'zh-TW': '品牌識別・菜單・招牌・美食印象製作',
      'en': 'Brand Identity · Menu · Signage · Food Imagery'
    },
    featureImage: 'images/zhengzheng-01.jpg',
    info: {
      client: { 'zh-TW': '蒸蒸日饗', 'en': 'Zheng Zheng Ri Xiang' },
      year: '2026',
      role: { 'zh-TW': '品牌設計師', 'en': 'Brand Designer' },
      tools: 'Illustrator'
    },
    description: {
      heading: {
        'zh-TW': '減法日常，純粹<em>日饗</em>',
        'en': 'Subtraction in daily life, pure <em>daily delights</em>'
      },
      paragraphs: {
        'zh-TW': [
          '捨去繁雜調味，以地中海均衡哲學，淬鍊食材最純粹的鮮甜。'
        ],
        'en': [
          'Letting go of complex seasonings, embracing the Mediterranean philosophy of balance, distilling the purest sweetness from every ingredient.'
        ]
      }
    },
    gallery: [
      { src: 'images/zhengzheng-01.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/zhengzheng-02.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/zhengzheng-03.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/zhengzheng-04.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/zhengzheng-05.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/zhengzheng-06.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/zhengzheng-07.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/zhengzheng-08.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/zhengzheng-09.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/zhengzheng-10.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/zhengzheng-11.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/zhengzheng-12.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/zhengzheng-13.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/zhengzheng-14.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/zhengzheng-15.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } },
      { src: 'images/zhengzheng-16.jpg', caption: { 'zh-TW': '品牌設計', 'en': 'Branding' } }
    ],
    next: 'food-yuanqi'
  },

  'galaxy-domain': {
    id: 'galaxy-domain',
    category: 'uiux',
    categoryLabel: { 'zh-TW': 'UI / UX', 'en': 'UI / UX' },
    title: { 'zh-TW': '星塵領域 Galaxy Domain', 'en': 'Galaxy Domain' },
    tagline: {
      'zh-TW': '一款將 DeFi 質押機制包裝成療癒系模擬經營遊戲的 App，搭配完整的 B 端營運管理後台，讓零區塊鏈經驗的玩家也能無痛遊玩。',
      'en': 'A healing simulation game app that wraps DeFi staking mechanics, with a complete B-side operations dashboard, enabling zero-blockchain-experience players to play effortlessly.'
    },
    featureImage: 'images/galaxy-hero.jpg',
    info: {
      client: { 'zh-TW': '—', 'en': '—' },
      year: '2025',
      role: { 'zh-TW': 'UIUX 設計師 / 美術設計', 'en': 'UIUX Designer / Art Director' },
      tools: 'Figma'
    },
    description: {
      heading: {
        'zh-TW': '不只是一款遊戲，而是一次金融體驗的<em>遊戲化翻譯</em>',
        'en': 'Not just a game, but a <em>gamified translation</em> of financial experience'
      },
      paragraphs: {
        'zh-TW': [
          '傳統 DeFi 產品存在極高的認知門檻——質押、流動性挖礦、年化報酬率等術語，讓超過 90% 的潛在用戶在註冊前就已流失。問題的根源不在功能不足，而在於整套體驗是「為懂的人設計的」。',
          '這次設計的目的不是在金融介面上貼一層遊戲皮，而是一次由底層心智模型出發的體驗架構重構——用模擬經營取代操作報表，用收成動畫取代交易確認，讓零區塊鏈經驗的玩家也能無痛遊玩。'
        ],
        'en': [
          'Traditional DeFi products have an extremely high cognitive barrier — terminology like staking, liquidity mining, and APY causes over 90% of potential users to drop off before even registering. The root cause is not a lack of features, but that the entire experience is "designed for those who already understand."',
          "This design's purpose is not to slap a game skin onto a financial interface, but to restructure the experience from the ground up — replacing dashboards with simulation management, replacing transaction confirmations with harvest animations, enabling zero-blockchain-experience players to play effortlessly."
        ]
      }
    },
    gallery: [
      { src: 'images/galaxy-02.jpg', caption: { 'zh-TW': '專案背景與設計策略', 'en': 'Project Background & Design Strategy' } },
      { src: 'images/galaxy-03.jpg', caption: { 'zh-TW': '核心人物誌', 'en': 'Primary Persona' } },
      { src: 'images/galaxy-05.jpg', caption: { 'zh-TW': '人物誌', 'en': 'Persona' } },
      { src: 'images/galaxy-06.jpg', caption: { 'zh-TW': '人物誌', 'en': 'Persona' } },
      { src: 'images/galaxy-07.jpg', caption: { 'zh-TW': '使用者旅程地圖', 'en': 'User Journey Map' } },
      { src: 'images/galaxy-04.jpg', caption: { 'zh-TW': '核心機制與互動邏輯', 'en': 'Core Loop & Mechanics' } },
      { src: 'images/galaxy-08.jpg', caption: { 'zh-TW': '資訊架構與導航策略', 'en': 'Information Architecture' } },
      { src: 'images/galaxy-09.jpg', caption: { 'zh-TW': '導航設計', 'en': 'Navigation Design' } },
      { src: 'images/galaxy-10.jpg', caption: { 'zh-TW': '最終介面展示 — 角色設計', 'en': 'High-fidelity UI — Character Design' } },
      { src: 'images/galaxy-11.jpg', caption: { 'zh-TW': '最終介面展示 — 星核中樞', 'en': 'High-fidelity UI — Star Hub' } },
      {
        src: 'images/galaxy-12.jpg',
        caption: { 'zh-TW': '最終介面展示', 'en': 'High-fidelity UI' },
        // 動圖要剛好蓋在圖上的黑色方框：位置是量黑框得到的（佔整張圖的百分比）
        overlays: [
          { gif: 'images/galaxy-gif-walk.gif', top: 67.46, left: 6.29, width: 26.77, height: 20.01 },
          { gif: 'images/galaxy-gif-wave.gif', top: 67.46, left: 36.61, width: 26.78, height: 20.01 },
          { gif: 'images/galaxy-gif-idle.gif', top: 67.46, left: 66.94, width: 26.77, height: 20.01 }
        ]
      },
      { src: 'images/galaxy-13.jpg', caption: { 'zh-TW': '後台管理系統', 'en': 'Admin Dashboard' } },
      {
        src: 'images/galaxy-14.jpg',
        caption: { 'zh-TW': '後台管理系統', 'en': 'Admin Dashboard' },
        overlays: [
          { gif: 'images/galaxy-gif-noinput.gif', top: 2.79, left: 12.42, width: 33.23, height: 16.25 },
          { gif: 'images/galaxy-gif-hub.gif', top: 2.79, left: 54.35, width: 33.23, height: 16.25 }
        ]
      },
      { src: 'images/galaxy-15.jpg', caption: { 'zh-TW': '後台管理系統', 'en': 'Admin Dashboard' } }
    ],
    galleryEndVideo: 'https://www.youtube.com/embed/a8-dP7L9G7E?si=9p_Xqz9LY81un5Jq',
    next: 'tpp-app-redesign'
  },
  'photo-weiya': {
    id: 'photo-weiya',
    category: 'event-photo',
    categoryLabel: { 'zh-TW': '活動攝影', 'en': 'Event Photo' },
    title: { 'zh-TW': '公司尾牙攝影', 'en': 'Company Year-end Party Photography' },
    tagline: {
      'zh-TW': '公司尾牙活動紀錄',
      'en': 'Event coverage of a company year-end party'
    },
    featureImage: 'images/weiya-cover.jpg',
    galleryStyle: 'masonry',
    info: {
      client: { 'zh-TW': '富京科技', 'en': 'Fujing Technology' },
      year: '2025',
      role: { 'zh-TW': '平面動態攝影', 'en': 'Photo & Video' },
      tools: 'Sony α7 IV'
    },
    description: {
      heading: {
        'zh-TW': '',
        'en': ''
      },
      paragraphs: {
        'zh-TW': [
          '公司尾牙活動紀錄'
        ],
        'en': [
          'Event coverage of a company year-end party'
        ]
      }
    },
    gallery: [
      { src: 'images/weiya-01.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/weiya-02.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/weiya-03.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/weiya-04.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/weiya-05.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/weiya-06.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/weiya-07.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/weiya-08.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/weiya-09.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/weiya-10.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/weiya-11.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/weiya-12.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/weiya-13.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/weiya-14.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/weiya-15.jpg', caption: { 'zh-TW': '', 'en': '' } }
    ],
    next: 'photo-rotary-2425'
  },
  'photo-rotary-2425': {
    id: 'photo-rotary-2425',
    category: 'event-photo',
    categoryLabel: { 'zh-TW': '活動攝影', 'en': 'Event Photo' },
    title: { 'zh-TW': '板橋群英扶輪社 24-25 授證', 'en': 'Banqiao Rotary 24-25 Charter' },
    tagline: {
      'zh-TW': '紀錄板橋群英扶輪社 24-25 年度授證典禮',
      'en': 'Documentary photography of the Banqiao Rotary Club 24-25 charter ceremony'
    },
    featureImage: 'images/rotary2425-cover.jpg',
    galleryStyle: 'masonry',
    info: {
      client: { 'zh-TW': '板橋群英扶輪社', 'en': 'Banqiao Rotary Club' },
      year: '',
      role: { 'zh-TW': '平面動態攝影', 'en': 'Photo & Video' },
      tools: 'Sony α7 IV'
    },
    description: {
      heading: {
        'zh-TW': '',
        'en': ''
      },
      paragraphs: {
        'zh-TW': [
          '紀錄板橋群英扶輪社 24-25 年度授證典禮'
        ],
        'en': [
          'Documentary photography of the Banqiao Rotary Club 24-25 charter ceremony'
        ]
      }
    },
    gallery: [
      { src: 'images/rotary2425-01.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/rotary2425-02.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/rotary2425-03.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/rotary2425-04.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/rotary2425-05.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/rotary2425-06.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/rotary2425-07.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/rotary2425-08.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/rotary2425-09.jpg', caption: { 'zh-TW': '', 'en': '' } }
    ],
    next: 'photo-rotary-qiuya'
  },
  'photo-rotary-qiuya': {
    id: 'photo-rotary-qiuya',
    category: 'event-photo',
    categoryLabel: { 'zh-TW': '活動攝影', 'en': 'Event Photo' },
    title: { 'zh-TW': '板橋群英扶輪社 × 球芽基金 社區服務', 'en': 'Banqiao Rotary × Qiuya Foundation Community Service' },
    tagline: {
      'zh-TW': '紀錄板橋群英扶輪社與球芽基金公益服務活動',
      'en': 'Documenting the charity service event by Banqiao Rotary Club and the Qiuya Foundation'
    },
    featureImage: 'images/qiuya-cover.jpg',
    embedVideo: 'https://www.youtube.com/embed/z6YVgP3w88g',
    galleryStyle: 'masonry',
    info: {
      client: { 'zh-TW': '板橋群英扶輪社', 'en': 'Banqiao Rotary Club' },
      year: '2025',
      role: { 'zh-TW': '平面攝影', 'en': 'Photographer' },
      tools: 'Sony α7 IV'
    },
    description: {
      heading: {
        'zh-TW': '',
        'en': ''
      },
      paragraphs: {
        'zh-TW': [
          '紀錄板橋群英扶輪社與球芽基金公益服務活動'
        ],
        'en': [
          'Documenting the charity service event by Banqiao Rotary Club and the Qiuya Foundation'
        ]
      }
    },
    gallery: [
      { src: 'images/qiuya-01.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/qiuya-02.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/qiuya-03.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/qiuya-04.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/qiuya-05.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/qiuya-06.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/qiuya-07.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/qiuya-08.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/qiuya-09.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/qiuya-10.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/qiuya-11.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/qiuya-12.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/qiuya-13.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/qiuya-14.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/qiuya-15.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/qiuya-16.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/qiuya-17.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/qiuya-18.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/qiuya-19.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/qiuya-20.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/qiuya-21.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/qiuya-22.jpg', caption: { 'zh-TW': '', 'en': '' } }
    ],
    next: 'photo-rotary-xile'
  },
  'photo-rotary-xile': {
    id: 'photo-rotary-xile',
    category: 'event-photo',
    categoryLabel: { 'zh-TW': '活動攝影', 'en': 'Event Photo' },
    title: { 'zh-TW': '板橋群英扶輪社 × 喜樂小田田 社區服務', 'en': 'Banqiao Rotary × Xile Xiaotiantian Community Service' },
    tagline: {
      'zh-TW': '',
      'en': ''
    },
    featureImage: 'images/xile-cover.jpg',
    galleryStyle: 'masonry',
    info: {
      client: { 'zh-TW': '板橋群英扶輪社', 'en': 'Banqiao Rotary Club' },
      year: '',
      role: { 'zh-TW': '', 'en': '' },
      tools: ''
    },
    description: {
      heading: {
        'zh-TW': '',
        'en': ''
      },
      paragraphs: {
        'zh-TW': [],
        'en': []
      }
    },
    gallery: [
      { src: 'images/xile-01.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/xile-02.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/xile-03.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/xile-04.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/xile-05.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/xile-06.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/xile-07.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/xile-08.jpg', caption: { 'zh-TW': '', 'en': '' } }
    ],
    next: 'photo-blackmoon-yikou'
  },
  'photo-blackmoon-yikou': {
    id: 'photo-blackmoon-yikou',
    category: 'product-photo',
    categoryLabel: { 'zh-TW': '商品攝影', 'en': 'Product Photo' },
    title: { 'zh-TW': '黑月亮 一口幸福 食物攝影', 'en': 'Black Moon Bite-size Treats Food Photography' },
    tagline: {
      'zh-TW': '',
      'en': ''
    },
    featureImage: 'images/blackmoon-yikou-cover.jpg',
    galleryStyle: 'masonry',
    info: {
      client: { 'zh-TW': '黑月亮', 'en': 'Black Moon' },
      year: '',
      role: { 'zh-TW': '', 'en': '' },
      tools: ''
    },
    description: {
      heading: {
        'zh-TW': '',
        'en': ''
      },
      paragraphs: {
        'zh-TW': [],
        'en': []
      }
    },
    gallery: [
      { src: 'images/blackmoon-yikou-01.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/blackmoon-yikou-02.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/blackmoon-yikou-03.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/blackmoon-yikou-04.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/blackmoon-yikou-05.jpg', caption: { 'zh-TW': '', 'en': '' } }
    ],
    next: 'photo-blackmoon-toast'
  },
  'photo-blackmoon-toast': {
    id: 'photo-blackmoon-toast',
    category: 'product-photo',
    categoryLabel: { 'zh-TW': '商品攝影', 'en': 'Product Photo' },
    title: { 'zh-TW': '黑月亮 吐司 食物攝影', 'en': 'Black Moon Toast Food Photography' },
    tagline: {
      'zh-TW': '',
      'en': ''
    },
    featureImage: 'images/blackmoon-toast-cover.jpg',
    galleryStyle: 'masonry',
    info: {
      client: { 'zh-TW': '黑月亮', 'en': 'Black Moon' },
      year: '',
      role: { 'zh-TW': '', 'en': '' },
      tools: ''
    },
    description: {
      heading: {
        'zh-TW': '',
        'en': ''
      },
      paragraphs: {
        'zh-TW': [],
        'en': []
      }
    },
    gallery: [
      { src: 'images/blackmoon-toast-01.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/blackmoon-toast-02.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/blackmoon-toast-03.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/blackmoon-toast-04.jpg', caption: { 'zh-TW': '', 'en': '' } }
    ],
    next: 'photo-blackmoon-yolk'
  },
  'photo-blackmoon-yolk': {
    id: 'photo-blackmoon-yolk',
    category: 'product-photo',
    categoryLabel: { 'zh-TW': '商品攝影', 'en': 'Product Photo' },
    title: { 'zh-TW': '黑月亮 蛋黃酥 食物攝影', 'en': 'Black Moon Egg Yolk Pastry Food Photography' },
    tagline: {
      'zh-TW': '',
      'en': ''
    },
    featureImage: 'images/blackmoon-yolk-cover.jpg',
    galleryStyle: 'masonry',
    info: {
      client: { 'zh-TW': '黑月亮', 'en': 'Black Moon' },
      year: '',
      role: { 'zh-TW': '', 'en': '' },
      tools: ''
    },
    description: {
      heading: {
        'zh-TW': '',
        'en': ''
      },
      paragraphs: {
        'zh-TW': [],
        'en': []
      }
    },
    gallery: [
      { src: 'images/blackmoon-yolk-01.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/blackmoon-yolk-02.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/blackmoon-yolk-03.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/blackmoon-yolk-04.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/blackmoon-yolk-05.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/blackmoon-yolk-06.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/blackmoon-yolk-07.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/blackmoon-yolk-08.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/blackmoon-yolk-09.jpg', caption: { 'zh-TW': '', 'en': '' } }
    ],
    next: 'photo-shangweitai'
  },
  'photo-shangweitai': {
    id: 'photo-shangweitai',
    category: 'product-photo',
    categoryLabel: { 'zh-TW': '商品攝影', 'en': 'Product Photo' },
    title: { 'zh-TW': '上味泰 食物攝影', 'en': 'Shang Wei Tai Food Photography' },
    tagline: {
      'zh-TW': '',
      'en': ''
    },
    featureImage: 'images/shangweitai-cover.jpg',
    galleryStyle: 'masonry',
    info: {
      client: { 'zh-TW': '上味泰', 'en': 'Shang Wei Tai' },
      year: '',
      role: { 'zh-TW': '', 'en': '' },
      tools: ''
    },
    description: {
      heading: {
        'zh-TW': '',
        'en': ''
      },
      paragraphs: {
        'zh-TW': [
          '<a href="https://www.facebook.com/photo/?fbid=122159434184279528&set=pcb.122159434298279528&locale=zh_TW" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">作品連結</a>'
        ],
        'en': [
          '<a href="https://www.facebook.com/photo/?fbid=122159434184279528&set=pcb.122159434298279528&locale=zh_TW" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">Photo Link</a>'
        ]
      }
    },
    gallery: [],
    next: 'clip-rotary3490-leadership'
  },
  'clip-rotary3490-leadership': {
    id: 'clip-rotary3490-leadership',
    category: 'video',
    categoryLabel: { 'zh-TW': '攝影剪輯', 'en': 'Photo & Edit' },
    title: { 'zh-TW': '國際扶輪3490地區 25-26 扶少團領袖營 蘇澳海事場', 'en': 'Rotary District 3490 25-26 Interact Leadership Camp, Su-ao' },
    tagline: {
      'zh-TW': '',
      'en': ''
    },
    featureImage: 'images/rotary-leadership-cover.jpg',
    embedVideo: 'https://www.youtube.com/embed/HCyoDoYhiPo',
    galleryStyle: 'masonry',
    info: {
      client: { 'zh-TW': '國際扶輪3490地區', 'en': 'Rotary International District 3490' },
      year: '',
      role: { 'zh-TW': '', 'en': '' },
      tools: ''
    },
    description: {
      heading: {
        'zh-TW': '',
        'en': ''
      },
      paragraphs: {
        'zh-TW': [],
        'en': []
      }
    },
    gallery: [],
    next: 'clip-rotary3490-drawing'
  },
  'clip-rotary3490-drawing': {
    id: 'clip-rotary3490-drawing',
    category: 'video',
    categoryLabel: { 'zh-TW': '攝影剪輯', 'en': 'Photo & Edit' },
    title: { 'zh-TW': '國際扶輪3490地區 畫我家鄉暨板橋我家 繪畫比賽影片', 'en': 'Rotary District 3490 "Draw My Hometown" Student Art Contest Videos' },
    tagline: {
      'zh-TW': '',
      'en': ''
    },
    featureImage: 'images/rotary-drawing-cover.jpg',
    embedVideo: 'https://www.youtube.com/embed/AREwa1Vs0TI',
    galleryStyle: 'masonry',
    info: {
      client: { 'zh-TW': '國際扶輪3490地區', 'en': 'Rotary International District 3490' },
      year: '',
      role: { 'zh-TW': '', 'en': '' },
      tools: ''
    },
    description: {
      heading: {
        'zh-TW': '',
        'en': ''
      },
      paragraphs: {
        'zh-TW': [
          '評審講評定機拍攝，影片剪輯及簡易動畫',
          '<a href="https://youtu.be/kgJIF79P900" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">影片 2</a>',
          '<a href="https://youtu.be/dNfkAuJvy90" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">影片 3</a>',
          '<a href="https://youtu.be/vXWWoHFbH2c" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">影片 4</a>'
        ],
        'en': [
          'Fixed-camera filming of the judges\' comments, video editing and simple animation',
          '<a href="https://youtu.be/kgJIF79P900" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">Video 2</a>',
          '<a href="https://youtu.be/dNfkAuJvy90" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">Video 3</a>',
          '<a href="https://youtu.be/vXWWoHFbH2c" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">Video 4</a>'
        ]
      }
    },
    gallery: [],
    next: 'clip-rotary3490-wcs'
  },
  'clip-rotary3490-wcs': {
    id: 'clip-rotary3490-wcs',
    category: 'video',
    categoryLabel: { 'zh-TW': '攝影剪輯', 'en': 'Photo & Edit' },
    title: { 'zh-TW': '國際扶輪3490地區 WCS 服務計畫 訪談及影片剪輯', 'en': 'Rotary District 3490 WCS Service Project Interviews & Editing' },
    tagline: {
      'zh-TW': '',
      'en': ''
    },
    featureImage: 'images/rotary-wcs-cover.jpg',
    embedVideo: 'https://www.youtube.com/embed/DChgWn4F6us',
    galleryStyle: 'masonry',
    info: {
      client: { 'zh-TW': '國際扶輪3490地區', 'en': 'Rotary International District 3490' },
      year: '',
      role: { 'zh-TW': '', 'en': '' },
      tools: ''
    },
    description: {
      heading: {
        'zh-TW': '',
        'en': ''
      },
      paragraphs: {
        'zh-TW': [],
        'en': []
      }
    },
    gallery: [
      { src: 'images/rotary-wcs-01.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/rotary-wcs-02.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/rotary-wcs-03.jpg', caption: { 'zh-TW': '', 'en': '' } },
      { src: 'images/rotary-wcs-04.jpg', caption: { 'zh-TW': '', 'en': '' } }
    ],
    next: 'clip-yinbao'
  },
  'clip-yinbao': {
    id: 'clip-yinbao',
    category: 'video',
    categoryLabel: { 'zh-TW': '攝影剪輯', 'en': 'Photo & Edit' },
    title: { 'zh-TW': '吳怡霈 × 銀寶善存 微廣告', 'en': 'Wu Yi-Pei × Centrum Silver Micro Ad' },
    tagline: {
      'zh-TW': '',
      'en': ''
    },
    featureImage: 'images/yinbao-cover.jpg',
    galleryStyle: 'masonry',
    info: {
      client: { 'zh-TW': '銀寶善存', 'en': 'Centrum Silver' },
      year: '',
      role: { 'zh-TW': '', 'en': '' },
      tools: ''
    },
    description: {
      heading: {
        'zh-TW': '',
        'en': ''
      },
      paragraphs: {
        'zh-TW': [
          '<a href="https://www.facebook.com/reel/364268499785179" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">影片連結</a>'
        ],
        'en': [
          '<a href="https://www.facebook.com/reel/364268499785179" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">Video Link</a>'
        ]
      }
    },
    gallery: [],
    next: 'clip-luup'
  },
  'clip-luup': {
    id: 'clip-luup',
    category: 'video',
    categoryLabel: { 'zh-TW': '攝影剪輯', 'en': 'Photo & Edit' },
    title: { 'zh-TW': '吳怡霈 × LUUP 使用教學影片', 'en': 'Wu Yi-Pei × LUUP Tutorial Video' },
    tagline: {
      'zh-TW': '',
      'en': ''
    },
    featureImage: 'images/luup-cover.jpg',
    galleryStyle: 'masonry',
    info: {
      client: { 'zh-TW': 'LUUP', 'en': 'LUUP' },
      year: '',
      role: { 'zh-TW': '', 'en': '' },
      tools: ''
    },
    description: {
      heading: {
        'zh-TW': '',
        'en': ''
      },
      paragraphs: {
        'zh-TW': [],
        'en': []
      }
    },
    gallery: [],
    next: 'clip-luncheon'
  },
  'clip-luncheon': {
    id: 'clip-luncheon',
    category: 'video',
    categoryLabel: { 'zh-TW': '攝影剪輯', 'en': 'Photo & Edit' },
    title: { 'zh-TW': '午宴 動態攝影', 'en': 'Luncheon Video' },
    tagline: {
      'zh-TW': '',
      'en': ''
    },
    featureImage: 'images/luncheon-cover.jpg',
    galleryStyle: 'masonry',
    info: {
      client: { 'zh-TW': '', 'en': '' },
      year: '',
      role: { 'zh-TW': '', 'en': '' },
      tools: ''
    },
    description: {
      heading: {
        'zh-TW': '',
        'en': ''
      },
      paragraphs: {
        'zh-TW': [],
        'en': []
      }
    },
    gallery: [],
    next: 'photo-rotary-2324'
  }
};

/* === 作品詳情頁渲染器 === */
class WorkDetailRenderer {
  constructor() {
    // 從 URL 取得作品 id（例如 ?id=galaxy-domain）
    const urlParams = new URLSearchParams(window.location.search);
    this.workId = urlParams.get('id') || 'galaxy-domain'; // 預設第一個

    this.work = WORKS_DATA[this.workId];
    this.lang = localStorage.getItem('lang') || 'zh-TW';

    this.init();
  }

  init() {
    if (!this.work) {
      this.renderNotFound();
      return;
    }

    this.renderContent();
    this.setupGalleryReveal();
    this.bindLanguageSwitch();
  }

  /* 雙語取值輔助函式 */
  t(value) {
    if (typeof value === 'object' && value !== null) {
      return value[this.lang] || value['zh-TW'] || '';
    }
    return value;
  }

  renderContent() {
    const w = this.work;

    // 標題
    this.setText('.work-hero-eyebrow-text', this.t(w.categoryLabel));
    this.setText('.work-hero-title-text', this.t(w.title));
    this.setText('.work-hero-tagline', this.t(w.tagline));

    // 主視覺
    const featureImg = document.querySelector('.work-feature-image img');
    if (featureImg) {
      if (w.featureIsVideo && w.embedVideo) {
        // 音樂/影片作品：頂部主圖用 YouTube iframe 替代
        const featureInner = featureImg.closest('.work-feature-image-inner') || featureImg.parentElement;
        featureInner.innerHTML = `
          <div style="position:relative;width:100%;padding-bottom:56.25%;background:#000;">
            <iframe
              style="position:absolute;top:0;left:0;width:100%;height:100%;border:none;"
              src="${w.embedVideo}"
              title="${this.t(w.title)}"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              loading="lazy"
            ></iframe>
          </div>
        `;
      } else {
        featureImg.src = w.featureImage;
        featureImg.alt = this.t(w.title);
      }
    }

    // 專案資訊
    this.setText('.work-info-client', this.t(w.info.client));
    this.setText('.work-info-year', w.info.year);
    this.setText('.work-info-role', this.t(w.info.role));
    this.setText('.work-info-tools', w.info.tools);

    // 專案敘述
    this.setHTML('.work-description-content h3', this.t(w.description.heading));
    const paragraphsContainer = document.querySelector('.work-description-paragraphs');
    if (paragraphsContainer) {
      paragraphsContainer.innerHTML = '';
      this.t(w.description.paragraphs).forEach(p => {
        const pEl = document.createElement('p');
        pEl.innerHTML = p;
        paragraphsContainer.appendChild(pEl);
      });
    }

    // 圖片區
    const galleryContainer = document.querySelector('.work-gallery-inner');
    if (galleryContainer) {
      // 套用圖片區樣式
      galleryContainer.classList.remove('gallery-spaced', 'gallery-masonry');
      if (w.galleryStyle === 'spaced') {
        galleryContainer.classList.add('gallery-spaced');
      } else if (w.galleryStyle === 'masonry') {
        galleryContainer.classList.add('gallery-masonry');
      }

      galleryContainer.innerHTML = '';
      w.gallery.forEach((item, index) => {
        const sizeClass = item.size && item.size !== 'wide' ? `size-${item.size}` : '';
        const itemEl = document.createElement('div');
        itemEl.className = `work-gallery-item ${sizeClass}`.trim();

        // 支援 GIF overlay：在基底圖上疊加動畫
        let overlayHTML = '';
        if (item.overlays && item.overlays.length > 0) {
          overlayHTML = item.overlays.map(o =>
            `<img src="${o.gif}" alt="" loading="lazy" style="position:absolute;top:${o.top}%;left:${o.left}%;width:${o.width}%;height:${o.height}%;object-fit:contain;pointer-events:none;">`
          ).join('');
        }

        const wrapStyle = item.overlays ? 'position:relative;' : '';
        itemEl.innerHTML = `
          <div style="${wrapStyle}">
            <img src="${item.src}" alt="${this.t(item.caption)}" loading="lazy" style="display:block;width:100%;">
            ${overlayHTML}
          </div>
          <div class="work-gallery-caption">
            <div class="work-gallery-caption-title">${this.t(item.caption)}</div>
            <div class="work-gallery-caption-meta">${String(index + 1).padStart(2, '0')} / ${String(w.gallery.length).padStart(2, '0')}</div>
          </div>
        `;
        galleryContainer.appendChild(itemEl);
      });
    }

    // Gallery 結尾影片嵌入（YouTube）
    const existingEndVideo = document.querySelector('.work-gallery-end-video');
    if (existingEndVideo) existingEndVideo.remove();
    if (w.galleryEndVideo) {
      const endVideoSection = document.createElement('section');
      endVideoSection.className = 'work-gallery-end-video';
      endVideoSection.style.cssText = 'padding: 0; background: #000;';
      endVideoSection.innerHTML = `
        <div style="position:relative; width:100%; padding-bottom:56.25%; overflow:hidden; background:#000;">
          <iframe
            style="position:absolute;top:0;left:0;width:100%;height:100%;border:none;"
            src="${w.galleryEndVideo}"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            loading="lazy"
          ></iframe>
        </div>
      `;
      const gallerySection = document.querySelector('.work-gallery');
      if (gallerySection) {
        gallerySection.parentNode.insertBefore(endVideoSection, gallerySection.nextSibling);
      }
    }

    // Figma 原型嵌入（僅限民眾黨 APP）
    const existingProto = document.querySelector('.work-prototype-section');
    if (existingProto) existingProto.remove();
    if (w.figmaPrototype) {
      const protoSection = document.createElement('section');
      protoSection.className = 'work-prototype-section';
      protoSection.style.cssText = 'padding: 4rem 0 6rem; background: var(--color-bg-soft);';
      protoSection.innerHTML = `
        <div style="max-width: 900px; margin: 0 auto; padding: 0 var(--container-padding);">
          <p style="font-family: var(--font-mono); font-size: 0.7rem; letter-spacing: 0.3em; text-transform: uppercase; color: var(--color-text-muted); margin-bottom: 2rem;">— Interactive Prototype</p>
          <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 2.5rem; color: var(--color-text);">可操作原型</h3>
          <div style="border-radius: 16px; overflow: hidden; border: 1px solid var(--color-border); background: #1e1e1e;">
            <iframe
              style="border: none; width: 100%; height: 80vh; display: block;"
              src="${w.figmaPrototype}"
              allowfullscreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      `;
      const nextSection = document.querySelector('.work-next');
      if (nextSection) {
        nextSection.parentNode.insertBefore(protoSection, nextSection);
      }
    }

    // embedVideo 嵌入（FB/YouTube iframe）：顯示在 gallery 上方
    const existingEmbed = document.querySelector('.work-embed-video-section');
    if (existingEmbed) existingEmbed.remove();
    if (w.embedVideo) {
      const embedSection = document.createElement('section');
      embedSection.className = 'work-embed-video-section';
      embedSection.style.cssText = 'padding: 4rem 0; background: var(--color-bg-soft);';
      const w2 = w.embedVideoWidth || 560;
      const h2 = w.embedVideoHeight || 315;
      const ratio = (h2 / w2 * 100).toFixed(2);
      embedSection.innerHTML = `
        <div style="max-width: 900px; margin: 0 auto; padding: 0 var(--container-padding);">
          <div style="position:relative; width:100%; padding-bottom:${ratio}%; border-radius:12px; overflow:hidden; background:#111;">
            <iframe
              style="position:absolute;top:0;left:0;width:100%;height:100%;border:none;"
              src="${w.embedVideo}"
              scrolling="no"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      `;
      // 插在 work-gallery 之前
      const gallerySection = document.querySelector('.work-gallery');
      if (gallerySection) {
        gallerySection.parentNode.insertBefore(embedSection, gallerySection);
      }
    }

    // 歌詞區塊（僅音樂類作品）
    const existingLyrics = document.querySelector('.work-lyrics-section');
    if (existingLyrics) existingLyrics.remove();
    if (w.lyrics) {
      const lyricsText = this.t(w.lyrics);
      const lyricsSection = document.createElement('section');
      lyricsSection.className = 'work-lyrics-section';
      lyricsSection.style.cssText = 'padding: 5rem 0; background: var(--color-bg);';
      lyricsSection.innerHTML = `
        <div style="max-width: 680px; margin: 0 auto; padding: 0 var(--container-padding);">
          <p style="font-family: var(--font-mono); font-size: 0.7rem; letter-spacing: 0.3em; text-transform: uppercase; color: var(--color-text-muted); margin-bottom: 2rem;">— Lyrics</p>
          <pre style="font-family: inherit; font-size: 1rem; line-height: 2.1; color: var(--color-text); white-space: pre-wrap; word-break: break-word; margin: 0;">${lyricsText}</pre>
        </div>
      `;
      const gallerySection2 = document.querySelector('.work-gallery');
      if (gallerySection2) {
        gallerySection2.parentNode.insertBefore(lyricsSection, gallerySection2);
      }
    }

    // 下一個作品
    if (w.next && WORKS_DATA[w.next]) {
      const nextWork = WORKS_DATA[w.next];
      this.setHTML('.work-next-title', this.t(nextWork.title));
      this.setText('.work-next-meta', this.t(nextWork.categoryLabel) + ' · ' + nextWork.info.year);
      const nextLink = document.querySelector('.work-next-link');
      if (nextLink) {
        nextLink.href = `work-detail.html?id=${nextWork.id}`;
      }
    }

    // 更新頁面標題
    document.title = `${this.t(w.title)} — Naomi`;

    // 更新 SEO / social share 標籤（canonical、meta description、Open Graph、Twitter Card）
    const seoTitle = `${this.t(w.title)} — Naomi`;
    const seoDesc = this.t(w.tagline) || '設計師 Naomi 的作品案例';
    const seoUrl = `https://naomi-portfolio.github.io/Naomidesign/work-detail.html?id=${w.id}`;
    const seoImage = w.featureImage
      ? `https://naomi-portfolio.github.io/Naomidesign/${w.featureImage}`
      : 'https://naomi-portfolio.github.io/Naomidesign/images/galaxy-cover.jpg';

    const upsertMeta = (attr, key, value) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', seoUrl);

    upsertMeta('name', 'description', seoDesc);
    upsertMeta('property', 'og:title', seoTitle);
    upsertMeta('property', 'og:description', seoDesc);
    upsertMeta('property', 'og:url', seoUrl);
    upsertMeta('property', 'og:image', seoImage);
    upsertMeta('property', 'og:type', 'article');
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', seoTitle);
    upsertMeta('name', 'twitter:description', seoDesc);
    upsertMeta('name', 'twitter:image', seoImage);

  }

  setText(selector, text) {
    const el = document.querySelector(selector);
    if (el) el.textContent = text;
  }

  setHTML(selector, html) {
    const el = document.querySelector(selector);
    if (el) el.innerHTML = html;
  }

  /* 圖片區滾動進場 */
  setupGalleryReveal() {
    // 等動態渲染完成後再觀察
    setTimeout(() => {
      const items = document.querySelectorAll('.work-gallery-item');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
      });
      items.forEach(item => observer.observe(item));
    }, 100);
  }

  /* 監聽語言切換並重新渲染 */
  bindLanguageSwitch() {
    document.querySelectorAll('.lang-switch button').forEach(btn => {
      btn.addEventListener('click', () => {
        // 等 LanguageSwitcher 切換完成後再更新
        setTimeout(() => {
          this.lang = localStorage.getItem('lang') || 'zh-TW';
          this.renderContent();
          // 重新觀察進場
          this.setupGalleryReveal();
        }, 50);
      });
    });
  }

  renderNotFound() {
    const main = document.querySelector('main') || document.body;
    main.innerHTML = `
      <section style="min-height: 80vh; display: flex; align-items: center; justify-content: center; text-align: center; padding: 8rem 2rem;">
        <div>
          <h1 style="font-family: var(--font-display); font-size: 4rem; font-weight: 500; margin-bottom: 1rem; color: var(--color-text-muted);">404</h1>
          <p style="color: var(--color-text-muted); font-size: 1.1rem; margin-bottom: 2rem;">作品不存在 / Work not found</p>
          <a href="portfolio.html" style="color: var(--color-accent); font-size: 0.85rem; letter-spacing: 0.2em; text-transform: uppercase;">← 返回作品集 / Back</a>
        </div>
      </section>
    `;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new WorkDetailRenderer();
});
