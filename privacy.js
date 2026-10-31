/* Z-IPTV privacy policy, shared by the app (Settings -> About) and the public page (site/privacy.html).
   Keep the three languages in step, and update UPDATED whenever the policy changes. */
(function () {
  'use strict';
  const Z = window.Z = window.Z || {};
  const CONTACT = 'zuhierfarah@gmail.com';
  const mail = '<a href="mailto:' + CONTACT + '" dir="ltr">' + CONTACT + '</a>';

  Z.PRIVACY = {
    updated: '2026-10-31',
    en: {
      title: 'Privacy policy',
      updated: 'Last updated',
      sections: [
        { h: 'In short', p: [
          'Z-IPTV is a video player for TVs. It does not provide any channels, films or other content: you add your own playlist or IPTV account.',
          'Z-IPTV has no user accounts, no advertising and no analytics. The developer does not collect, receive or sell any of your data.'
        ] },
        { h: 'What is stored on your TV', p: [
          'To work, the app saves the following in its own storage on your TV:',
          ['Playlist and server addresses, and the usernames and passwords you enter for them', 'Favorites, recently watched channels and where you stopped in films and episodes',
            'Your settings (language, theme, subtitle preferences and so on)', 'Your OpenSubtitles API key, username and password, if you enter them',
            'Downloaded copies of your playlist and TV guide, so the app starts faster'],
          'This information stays on the TV and is never sent to the developer. Settings → Data clears the saved playlists and guide; removing the app from the TV deletes everything.'
        ] },
        { h: 'Connections the app makes', p: [
          'The app only connects to these services:',
          ['<b>Your IPTV provider and guide (EPG) address</b>: the servers you enter, to load channels, the TV guide, artwork and video. They receive your IP address and the login details you entered. Their own privacy policies apply.',
            '<b>OpenSubtitles.com</b>: only if you add an OpenSubtitles API key. The app sends what you search for (title, year, season and episode, film IDs and languages) and, if you sign in, your username and password. The <a href="https://www.opensubtitles.com/en/privacy" dir="ltr">OpenSubtitles privacy policy</a> applies.',
            '<b>Google Fonts</b>: the font for the signature in the app’s footer is loaded from Google, which receives your IP address and standard browser information. See the <a href="https://policies.google.com/privacy" dir="ltr">Google privacy policy</a>.']
        ] },
        { h: 'Children', p: ['Z-IPTV is not directed at children under 13, and it does not collect personal data from anyone.'] },
        { h: 'Changes to this policy', p: ['If this policy changes, the new version will be published on this page with a new date.'] },
        { h: 'Contact', p: ['Questions about privacy: ' + mail] }
      ]
    },
    he: {
      title: 'מדיניות פרטיות',
      updated: 'עודכן לאחרונה',
      sections: [
        { h: 'בקצרה', p: [
          'Z-IPTV הוא נגן וידאו לטלוויזיה. הוא לא מספק ערוצים, סרטים או תוכן אחר: אתם מוסיפים רשימת ערוצים או חשבון IPTV משלכם.',
          'ב-Z-IPTV אין חשבונות משתמש, אין פרסומות ואין כלי מעקב או ניתוח. המפתח לא אוסף, לא מקבל ולא מוכר שום מידע שלכם.'
        ] },
        { h: 'מה נשמר בטלוויזיה', p: [
          'כדי לפעול, האפליקציה שומרת את הפרטים הבאים באחסון שלה בטלוויזיה:',
          ['כתובות של רשימות ושרתים, ושמות המשתמש והסיסמאות שהזנתם עבורם', 'מועדפים, ערוצים שנצפו לאחרונה והמקום שבו עצרתם בסרטים ובפרקים',
            'ההגדרות שלכם (שפה, ערכת נושא, העדפות כתוביות וכו׳)', 'מפתח ה-API, שם המשתמש והסיסמה של OpenSubtitles, אם הזנתם אותם',
            'עותקים שמורים של הרשימה ושל לוח השידורים, כדי שהאפליקציה תיפתח מהר יותר'],
          'המידע הזה נשאר בטלוויזיה ולעולם לא נשלח למפתח. ב„הגדרות ← נתונים” אפשר לנקות את הרשימות והלוחות השמורים; הסרת האפליקציה מהטלוויזיה מוחקת הכול.'
        ] },
        { h: 'לאן האפליקציה מתחברת', p: [
          'האפליקציה מתחברת רק לשירותים האלה:',
          ['<b>ספק ה-IPTV שלכם וכתובת לוח השידורים (EPG)</b>: השרתים שהזנתם, כדי לטעון ערוצים, לוח שידורים, תמונות ווידאו. הם מקבלים את כתובת ה-IP שלכם ואת פרטי ההתחברות שהזנתם, ומדיניות הפרטיות שלהם חלה עליהם.',
            '<b>OpenSubtitles.com</b>: רק אם הוספתם מפתח API של OpenSubtitles. האפליקציה שולחת את מה שחיפשתם (שם, שנה, עונה ופרק, מזהי סרטים ושפות), ואם התחברתם, גם את שם המשתמש והסיסמה. חלה <a href="https://www.opensubtitles.com/en/privacy" dir="ltr">מדיניות הפרטיות של OpenSubtitles</a>.',
            '<b>Google Fonts</b>: הגופן של החתימה בתחתית האפליקציה נטען מ-Google, שמקבלת את כתובת ה-IP שלכם ומידע רגיל על הדפדפן. ראו את <a href="https://policies.google.com/privacy" dir="ltr">מדיניות הפרטיות של Google</a>.']
        ] },
        { h: 'ילדים', p: ['Z-IPTV לא מיועדת לילדים מתחת לגיל 13, והיא לא אוספת מידע אישי מאף אחד.'] },
        { h: 'שינויים במדיניות', p: ['אם המדיניות תשתנה, הגרסה החדשה תפורסם בעמוד הזה עם תאריך חדש.'] },
        { h: 'יצירת קשר', p: ['שאלות בנושא פרטיות: ' + mail] }
      ]
    },
    ar: {
      title: 'سياسة الخصوصية',
      updated: 'آخر تحديث',
      sections: [
        { h: 'باختصار', p: [
          'Z-IPTV مشغّل فيديو لأجهزة التلفاز. لا يوفّر أي قنوات أو أفلام أو محتوى آخر: أنت تضيف قائمة القنوات أو حساب IPTV الخاص بك.',
          'لا توجد في Z-IPTV حسابات مستخدمين ولا إعلانات ولا أدوات تتبّع أو تحليل. المطوّر لا يجمع بياناتك ولا يستلمها ولا يبيعها.'
        ] },
        { h: 'ما يُحفظ على التلفاز', p: [
          'ليعمل التطبيق، يحفظ ما يلي في مساحة التخزين الخاصة به على التلفاز:',
          ['عناوين القوائم والخوادم، وأسماء المستخدمين وكلمات المرور التي أدخلتها لها', 'المفضلة والقنوات التي شاهدتها مؤخرًا والموضع الذي توقفت عنده في الأفلام والحلقات',
            'إعداداتك (اللغة والمظهر وتفضيلات الترجمة وغيرها)', 'مفتاح API واسم المستخدم وكلمة المرور الخاصة بـ OpenSubtitles، إن أدخلتها',
            'نسخ محفوظة من قائمتك ومن دليل البرامج، ليفتح التطبيق بسرعة أكبر'],
          'تبقى هذه المعلومات على التلفاز ولا تُرسل إلى المطوّر أبدًا. يمكنك مسح القوائم والأدلة المحفوظة من «الإعدادات ← البيانات»، وحذف التطبيق من التلفاز يمسح كل شيء.'
        ] },
        { h: 'الجهات التي يتصل بها التطبيق', p: [
          'يتصل التطبيق بهذه الخدمات فقط:',
          ['<b>مزوّد IPTV الخاص بك وعنوان دليل البرامج (EPG)</b>: الخوادم التي أدخلتها، لتحميل القنوات ودليل البرامج والصور والفيديو. تستلم هذه الخوادم عنوان IP الخاص بك وبيانات الدخول التي أدخلتها، وتنطبق عليها سياسات الخصوصية الخاصة بها.',
            '<b>OpenSubtitles.com</b>: فقط إذا أضفت مفتاح API لـ OpenSubtitles. يرسل التطبيق ما تبحث عنه (العنوان والسنة والموسم والحلقة ومعرّفات الأفلام واللغات)، وإذا سجّلت الدخول، يرسل أيضًا اسم المستخدم وكلمة المرور. تنطبق <a href="https://www.opensubtitles.com/en/privacy" dir="ltr">سياسة خصوصية OpenSubtitles</a>.',
            '<b>Google Fonts</b>: يُحمَّل خط التوقيع في أسفل التطبيق من Google، التي تستلم عنوان IP الخاص بك ومعلومات المتصفح المعتادة. راجع <a href="https://policies.google.com/privacy" dir="ltr">سياسة خصوصية Google</a>.']
        ] },
        { h: 'الأطفال', p: ['Z-IPTV غير موجّه للأطفال دون 13 عامًا، ولا يجمع بيانات شخصية من أي أحد.'] },
        { h: 'التغييرات على هذه السياسة', p: ['إذا تغيّرت هذه السياسة، ستُنشر النسخة الجديدة في هذه الصفحة مع تاريخ جديد.'] },
        { h: 'التواصل', p: ['للأسئلة المتعلقة بالخصوصية: ' + mail] }
      ]
    }
  };

  // Renders one language as HTML: strings become paragraphs, arrays become bullet lists.
  // plainLinks turns links into plain text (inside the TV app a link would leave the app).
  Z.privacyHtml = function (lang, plainLinks) {
    const doc = Z.PRIVACY[lang] || Z.PRIVACY.en;
    const html = doc.sections.map(s => '<h3>' + s.h + '</h3>' + s.p.map(x => Array.isArray(x)
      ? '<ul>' + x.map(li => '<li>' + li + '</li>').join('') + '</ul>'
      : '<p>' + x + '</p>').join('')).join('');
    return plainLinks ? html.replace(/<a [^>]*>([^<]*)<\/a>/g, '<span dir="ltr">$1</span>') : html;
  };
})();
