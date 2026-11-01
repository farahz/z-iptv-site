/* Shared by the public pages (index.html, privacy.html): language (en/he/ar, RTL), theme
   (system/light/dark) and the footer year. Page text uses data-t="key" from STRINGS below. */
(function () {
  'use strict';
  var STRINGS = {
    en: {
      tagline: 'IPTV player for LG and Samsung smart TVs',
      intro: 'Watch your own IPTV playlists on the big screen: live TV with a programme guide, movies and series, and subtitles from the web. Z-IPTV Player is a player only; it does not provide any channels or content.',
      f1: 'M3U playlists and Xtream Codes accounts', f2: 'Live TV, TV guide and catch-up', f3: 'Movies and series with resume',
      f4: 'Subtitles from OpenSubtitles or any web address', f5: 'English, Hebrew and Arabic',
      privacy: 'Privacy policy', home: 'Z-IPTV Player home', madeBy: 'Made by', language: 'Language',
      theme: 'Theme', theme_system: 'System', theme_light: 'Light', theme_dark: 'Dark'
    },
    he: {
      tagline: 'נגן IPTV לטלוויזיות חכמות של LG ו-Samsung',
      intro: 'צפו ברשימות ה-IPTV שלכם על המסך הגדול: שידור חי עם לוח שידורים, סרטים וסדרות, וכתוביות מהרשת. Z-IPTV Player הוא נגן בלבד; הוא לא מספק ערוצים או תוכן.',
      f1: 'רשימות M3U וחשבונות Xtream Codes', f2: 'שידור חי, לוח שידורים וצפייה לאחור', f3: 'סרטים וסדרות עם המשך צפייה',
      f4: 'כתוביות מ-OpenSubtitles או מכל כתובת אינטרנט', f5: 'אנגלית, עברית וערבית',
      privacy: 'מדיניות פרטיות', home: 'הדף הראשי של Z-IPTV Player', madeBy: 'נוצר על ידי', language: 'שפה',
      theme: 'ערכת נושא', theme_system: 'לפי המערכת', theme_light: 'בהירה', theme_dark: 'כהה'
    },
    ar: {
      tagline: 'مشغّل IPTV لأجهزة تلفاز LG وSamsung الذكية',
      intro: 'شاهد قوائم IPTV الخاصة بك على الشاشة الكبيرة: بث مباشر مع دليل البرامج، أفلام ومسلسلات، وترجمة من الإنترنت. Z-IPTV Player مشغّل فقط، ولا يوفّر أي قنوات أو محتوى.',
      f1: 'قوائم M3U وحسابات Xtream Codes', f2: 'بث مباشر ودليل البرامج والمشاهدة اللاحقة', f3: 'أفلام ومسلسلات مع متابعة المشاهدة',
      f4: 'ترجمة من OpenSubtitles أو من أي عنوان ويب', f5: 'الإنجليزية والعبرية والعربية',
      privacy: 'سياسة الخصوصية', home: 'الصفحة الرئيسية لـ Z-IPTV Player', madeBy: 'صُنع بواسطة', language: 'اللغة',
      theme: 'المظهر', theme_system: 'حسب النظام', theme_light: 'فاتح', theme_dark: 'داكن'
    }
  };
  var root = document.documentElement;
  function get(k) { try { return JSON.parse(localStorage.getItem('ziptv-site.' + k)); } catch (e) { return null; } }
  function put(k, v) { try { localStorage.setItem('ziptv-site.' + k, JSON.stringify(v)); } catch (e) { /* ignore */ } }

  var lang = get('lang');
  if (!STRINGS[lang]) { var n = (navigator.language || 'en').slice(0, 2); lang = STRINGS[n] ? n : n === 'iw' ? 'he' : 'en'; }
  var THEMES = ['system', 'light', 'dark'];
  var ICONS = {
    system: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor"/></svg>',
    light: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
    dark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>'
  };
  var theme = THEMES.indexOf(get('theme')) >= 0 ? get('theme') : 'system';

  function render() {
    var s = STRINGS[lang];
    root.lang = lang;
    root.dir = lang === 'en' ? 'ltr' : 'rtl';
    [].forEach.call(document.querySelectorAll('[data-t]'), function (el) { el.textContent = s[el.getAttribute('data-t')]; });
    var sel = document.getElementById('lang');
    sel.value = lang;
    sel.setAttribute('aria-label', s.language);
    var btn = document.getElementById('theme');
    var label = s.theme + ': ' + s['theme_' + theme];
    btn.innerHTML = ICONS[theme];
    btn.setAttribute('aria-label', label);
    btn.title = label;
    if (theme === 'system') root.removeAttribute('data-theme'); else root.setAttribute('data-theme', theme);
    document.getElementById('year').textContent = '© ' + new Date().getFullYear();
    if (window.onSiteRender) window.onSiteRender(lang);
  }

  document.getElementById('lang').addEventListener('change', function (e) { lang = e.target.value; put('lang', lang); render(); });
  document.getElementById('theme').addEventListener('click', function () {
    theme = THEMES[(THEMES.indexOf(theme) + 1) % THEMES.length]; put('theme', theme); render();
  });
  render();
})();
