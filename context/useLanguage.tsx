'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'en' | 'ar'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
  t: (key: string) => string
  dir: 'ltr' | 'rtl'
  isRTL: boolean
  isHydrated: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    // Mark as hydrated
    setIsHydrated(true)
    
    // Check for saved language preference
    const saved = localStorage.getItem('language') as Language
    if (saved && (saved === 'en' || saved === 'ar')) {
      setLanguage(saved)
    }
  }, [])

  useEffect(() => {
    if (isHydrated) {
      // Save language preference
      localStorage.setItem('language', language)
      // Update document direction and lang
      document.documentElement.lang = language
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
      // Update font family based on language
      document.documentElement.style.fontFamily = language === 'ar'
        ? "var(--font-cairo), var(--font-inter), system-ui, sans-serif"
        : "var(--font-inter), system-ui, sans-serif"
    }
  }, [language, isHydrated])

  const toggleLanguage = () => {
    setLanguage((prev) => prev === 'en' ? 'ar' : 'en')
  }

  const t = (key: string): any => {
    const keys = key.split('.')
    let value: any = translations[language]
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return key // Return key if translation not found
      }
    }
    
    return value
  }

  const dir = language === 'ar' ? 'rtl' : 'ltr'
  const isRTL = language === 'ar'

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage, 
      toggleLanguage, 
      t, 
      dir, 
      isRTL, 
      isHydrated 
    }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

// Translations
const translations = {
  en: {
    nav: {
      home: 'Home',
      products: 'Products',
      features: 'Services',
      solutions: 'Solutions',
      about: 'About',
      contact: 'Contact',
      getStarted: 'Contact Us',
    },
    hero: {
      badge: 'Leading Digital Financial Solutions',
      title: 'Leading Digital Financial',
      titleHighlight: 'Solutions in Sudan & Region',
      description: 'We don\'t just develop software; we build secure and innovative financial bridges connecting individuals and institutions to the future of digital payments.',
      descriptionBold: 'SanadPay',
      descriptionEnd: '– your trusted e-wallet and payment gateway.',
      ctaPrimary: 'Explore Our Products',
      ctaSecondary: 'Contact Us',
      badge1: 'PCI-DSS Compliant',
      badge2: '256-bit Encryption',
      badge3: '24/7 Support',
      scrollDown: 'Scroll to explore',
    },
    about: {
      subtitle: 'Why Sanad-Soft?',
      title: 'Enabling the',
      titleHighlight: 'Digital Economy',
      paragraph1: 'We are not here just to develop software. We are here to build a secure, fast, and easy software infrastructure.',
      paragraph2: 'Our flagship product,',
      paragraph2Bold: 'SanadPay',
      paragraph2End: ', represents years of research, development, and deep understanding of regional payment needs. We\'re not just building technology – we\'re building bridges to financial inclusion.',
      points: [
        'Deep technical expertise, flexible and scalable architecture',
        'Local expertise combined with international technology partners',
        'Dedicated 24/7 support team for seamless operations',
        'Deep understanding of local market needs',
      ],
      stats: {
        businesses: 'Business Partners',
        transactions: 'Transactions Processed',
        uptime: 'Platform Uptime',
        countries: 'Countries Served',
      },
      missionTitle: 'Our Mission',
      mission: 'Enabling the digital economy by building software infrastructure characterized by security, speed, and ease of use.',
      values: {
        mission: {
          title: 'Our Mission',
          description: 'Enabling the digital economy by building software infrastructure characterized by security, speed, and ease of use.'
        },
        vision: {
          title: 'Our Vision',
          description: 'To be the first technical engine for financial transformation in emerging markets across the Middle East and Africa.'
        },
        values: {
          title: 'Why Choose Us?',
          description: 'Deep technical expertise, flexible and scalable architecture, and deep understanding of local market needs.'
        },
        team: {
          title: 'Our Team',
          description: 'The company is led by elite engineers with over a decade of experience in developing banking systems and complex technical solutions.'
        },
      },
    },
    journey: {
      subtitle: 'Our Journey',
      title: 'Milestones',
      titleHighlight: '& Growth',
      items: [
        { year: '2018', title: 'Company Founded', desc: 'Started with a vision to transform payments in Sudan' },
        { year: '2019', title: 'SanadPay Launch', desc: 'Launched our flagship payment gateway' },
        { year: '2021', title: 'Sanadak Launch', desc: 'Introduced our smart digital wallet' },
        { year: '2023', title: 'SanadNotify Launch', desc: 'Completed our ecosystem with notifications' },
        { year: '2024', title: 'Regional Expansion', desc: 'Expanding to serve the MENA region' },
      ],
    },
    products: {
      subtitle: 'Our Products',
      title: 'Ready-Made',
      titleHighlight: 'Payment Solutions',
      description: 'Three powerful products ready to transform your payment infrastructure with global security standards',
      buttons: {
        sanadpay: 'SanadPay',
        sanadak: 'Sanadak',
        sanadnotify: 'SanadNotify',
      },
      getStarted: 'Get Started',
      learnMore: 'Learn More',
      sanadpay: {
        tagline: 'Integrated Payment Gateway',
        description: 'A comprehensive payment gateway for stores and businesses with global security standards. Accept payments securely and reliably.',
        features: [
          { title: 'Multi-currency support', desc: 'Support for SDG, USD, EUR, and other major currencies.' },
          { title: 'PCI DSS Level 1 compliance', desc: 'Bank-level security ensuring your transactions are protected 24/7.' },
          { title: 'Real-time fraud detection', desc: 'Advanced security measures to protect from fraudulent activities.' },
          { title: 'Instant settlement options', desc: 'Process thousands of transactions per second with sub-second confirmation.' },
          { title: 'Developer-friendly APIs', desc: 'RESTful APIs with comprehensive documentation.' },
          { title: 'Comprehensive reporting dashboard', desc: 'Comprehensive insights into your transaction patterns and business performance.' }
        ],
      },
      sanadak: {
        tagline: 'Smart Digital Wallet',
        description: 'The smart digital wallet that empowers users to manage their finances, make payments, and transfer money with ease and security.',
        features: [
          { title: 'Instant P2P transfers', desc: 'Store, send, and receive money instantly with our secure e-wallet solution.' },
          { title: 'QR code payments', desc: 'Convenient QR code payment system for quick transactions.' },
          { title: 'Bill payments & top-ups', desc: 'Pay bills and top-up services directly from your wallet.' },
          { title: 'Virtual & physical cards', desc: 'Access both virtual and physical card options.' },
          { title: 'Spending insights & analytics', desc: 'Track your spending patterns with detailed analytics.' },
          { title: 'Multi-account management', desc: 'Manage multiple accounts from a single platform.' }
        ],
      },
      sanadnotify: {
        tagline: 'Advanced Notification Center',
        description: 'An advanced notification center for integration with various systems. Keep your users informed with real-time alerts across multiple channels.',
        features: [
          { title: 'Multi-channel delivery', desc: 'SMS, Email, and Push notifications across multiple platforms.' },
          { title: 'Smart scheduling & automation', desc: 'Automated scheduling system for optimal delivery timing.' },
          { title: 'Personalization engine', desc: 'Customize notifications based on user preferences and behavior.' },
          { title: 'Delivery analytics', desc: 'Comprehensive analytics on notification delivery and engagement.' },
          { title: 'Template management', desc: 'Easy-to-use template system for consistent messaging.' },
          { title: 'Webhook integrations', desc: 'Reliable webhook delivery for backend integrations and automation.' }
        ],
      },
      merchant: {
        tagline: 'Empower Your Business',
        description: 'Complete merchant solution for businesses of all sizes. Accept in-store and online payments with powerful tools to manage your operations.',
        features: [
          { title: 'POS Integration', desc: 'Seamless integration with point-of-sale systems.' },
          { title: 'Customer Management', desc: 'Build and manage your customer relationships.' },
          { title: 'Sales Analytics', desc: 'Track performance and optimize your business.' },
        ],
      },
      business: {
        tagline: 'Enterprise Solutions',
        description: 'Tailored financial infrastructure for large enterprises. Custom integrations, dedicated support, and scalable architecture.',
        features: [
          { title: 'Custom Security', desc: 'Enterprise-grade security with custom configurations.' },
          { title: 'API Access', desc: 'Full API access for custom integrations.' },
          { title: 'Dedicated Support', desc: '24/7 dedicated account management team.' },
        ],
      },
    },
    services: {
      subtitle: 'Our Services',
      title: 'Professional',
      titleHighlight: 'Services',
      description: 'We provide comprehensive technical solutions to help businesses achieve digital transformation',
      items: [
        {
          title: 'FinTech Solutions Development',
          desc: 'Building payment gateways and e-wallet systems with global security standards (PCI-DSS compliant).',
          features: ['Card payments (Visa, Mastercard)', 'Mobile money integration', 'Bank transfers', 'Real-time settlement'],
        },
        {
          title: 'Software Infrastructure',
          desc: 'Designing scalable systems using the latest technologies with flexible Microservices architecture.',
          features: ['Instant P2P transfers', 'Bill payments', 'Top-up services', 'Multi-currency support'],
        },
        {
          title: 'Technical Consulting',
          desc: 'Helping companies with digital transformation and choosing the right technology for their projects.',
          features: ['Direct bank connections', 'Account verification', 'Automated reconciliation', 'Regulatory compliance'],
        },
        {
          title: 'Deep Local Market Understanding',
          desc: 'Our biggest advantage is understanding the Sudanese market and emerging markets needs.',
          features: ['AI-powered detection', 'Real-time monitoring', 'Risk scoring', 'Chargeback management'],
        },
        {
          title: 'Real-Time Analytics',
          desc: 'Comprehensive dashboards with actionable insights, custom reports, and predictive analytics.',
          features: ['Custom dashboards', 'Transaction reports', 'Customer insights', 'Export capabilities'],
        },
        {
          title: '24/7 Local Support',
          desc: 'Round-the-clock technical support with dedicated account managers for enterprise clients.',
          features: ['RESTful APIs', 'SDKs for major platforms', 'Webhooks support', 'Sandbox environment'],
        },
      ],
      ctaTitle: 'Ready to transform your business digitally?',
      ctaDesc: 'Our team of experts can design and implement tailored financial solutions that perfectly match your business requirements and goals.',
      ctaButton: 'Request Service',
    },
    solutions: {
      subtitle: 'Pricing Plans',
      title: 'Choose Your',
      titleHighlight: 'Plan',
      description: 'Flexible pricing plans designed to meet the needs of businesses at every stage',
      items: [
        {
          industry: 'Banking & Finance',
          title: 'Starter',
          desc: 'Perfect for startups and small projects looking to get started with digital payments.',
          benefits: ['Basic payment gateway', 'Email support', 'Standard APIs', 'Monthly reports'],
        },
        {
          industry: 'E-Commerce',
          title: 'Business',
          desc: 'For medium-sized companies that need advanced integration and more features.',
          benefits: ['Advanced integration', 'Priority support', 'Custom APIs', 'Real-time analytics'],
        },
        {
          industry: 'Retail',
          title: 'Enterprise',
          desc: 'Custom solutions for large companies and banks with dedicated technical support.',
          benefits: ['Custom solutions', 'Dedicated support', 'SLA guarantee', 'On-premise option'],
        },
        {
          industry: 'Telecommunications',
          title: 'Education',
          desc: 'Streamlined fee collection and financial management for schools, universities, and e-learning platforms.',
          benefits: ['Installment plans', 'Scholarship management', 'Parent portals', 'Automated reminders'],
        },
        {
          industry: 'Healthcare',
          title: 'Travel & Hospitality',
          desc: 'Multi-currency payment processing for airlines, hotels, and travel agencies worldwide.',
          benefits: ['Dynamic currency conversion', 'Split payments', 'Refund automation', 'Loyalty integration'],
        },
        {
          industry: 'Government',
          title: 'Healthcare',
          desc: 'Compliant payment solutions for hospitals, clinics, and telehealth providers.',
          benefits: ['Insurance verification', 'Payment plans', 'HSA/FSA support', 'Patient portals'],
        },
      ],
      partnersText: 'Integrated with leading platforms and partners',
    },
    testimonials: {
      subtitle: 'Testimonials',
      title: 'Trusted by',
      titleHighlight: 'Industry Leaders',
      description: 'See what our clients say about their experience with Sanad-Soft',
      items: [
        {
          name: 'Ahmed Hassan',
          role: 'CEO',
          company: 'TechStart Sudan',
          content: 'SanadPay has transformed how we handle payments. The integration was seamless, and the support team is exceptional. Our transaction success rate improved by 40% since switching.',
        },
        {
          name: 'Fatima Al-Rashid',
          role: 'CFO',
          company: 'Khartoum Retail Group',
          content: 'As a retail chain operating across Sudan, we needed a reliable payment partner. Sanad-Soft delivered exactly that. Their POS solutions and analytics have been game-changers for our business.',
        },
        {
          name: 'Omar Khalil',
          role: 'Head of Digital',
          company: 'Sudan Telecom',
          content: 'The API documentation is excellent, and the sandbox environment made testing a breeze. We integrated SanadPay into our mobile app within weeks, and our customers love it.',
        },
        {
          name: 'Sara Mohammed',
          role: 'Founder',
          company: 'E-Shop Sudan',
          content: 'Starting an e-commerce business in Sudan seemed challenging until we found SanadPay. They understand the local market and provide solutions that actually work here.',
        },
        {
          name: 'Yusuf Ibrahim',
          role: 'Operations Director',
          company: 'Nile Bank',
          content: 'Sanad-Soft\'s banking integration solutions helped us modernize our digital services. Their expertise in the MENA financial landscape is unmatched.',
        },
      ],
      stats: {
        rating: 'Customer Rating',
        satisfaction: 'Customer Satisfaction',
        clients: 'Happy Clients',
        support: 'Support Available',
      },
    },
    contact: {
      subtitle: 'Get In Touch',
      title: 'Let\'s Build the',
      titleHighlight: 'Future Together',
      description: 'Ready to transform your payment infrastructure? Our team is here to help',
      info: {
        visit: 'Visit Us',
        email: 'Email Us',
        call: 'Call Us',
        address: 'Dubai, UAE',
        emailAddress: 'info@sanadsoft.com',
        phone: '+249 123 456 789',
      },
      officeHours: 'Office Hours',
      hours: {
        weekdays: 'Sunday - Thursday: 8:00 AM - 6:00 PM',
        weekend: 'Friday - Saturday: Closed',
        support: '24/7 Technical Support',
        supportDesc: 'available for enterprise clients',
      },
      form: {
        name: 'Full Name',
        email: 'Email Address',
        company: 'Company',
        subject: 'Subject',
        message: 'Message',
        selectSubject: 'Select a subject',
        subjects: {
          sanadpay: 'Sales Inquiry',
          partnership: 'Partnership',
          support: 'Technical Support',
          demo: 'Request a Demo',
          other: 'Other',
        },
        send: 'Send Message',
        sending: 'Sending...',
        namePlaceholder: 'John Doe',
        emailPlaceholder: 'john@company.com',
        companyPlaceholder: 'Your Company',
        messagePlaceholder: 'Tell us about your project or inquiry...',
      },
      success: {
        title: 'Thank you for your message!',
        description: 'We will get back to you soon.',
      },
    },
    footer: {
      description: 'Enabling the digital economy by building secure, fast, and reliable software infrastructure for the future of payments.',
      sections: {
        products: {
          title: 'Products',
          links: ['SanadPay', 'Payment Gateway', 'E-Wallet', 'Mobile Banking'],
        },
        company: {
          title: 'Company',
          links: ['About Us', 'Careers', 'Blog', 'Press'],
        },
        resources: {
          title: 'Resources',
          links: ['Documentation', 'API Reference', 'Support', 'Contact'],
        },
      },
      copyright: 'All rights reserved.',
      legal: {
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
      },
      madeWith: 'Made by Sanad Team',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      products: 'المنتجات',
      features: 'الخدمات',
      solutions: 'الخطط',
      about: 'من نحن',
      contact: 'تواصل معنا',
      getStarted: 'تواصل معنا',
    },
    hero: {
      badge: 'ريادة الحلول المالية الرقمية',
      title: 'ريادة الحلول المالية',
      titleHighlight: 'الرقمية في السودان والمنطقة',
      description: 'نحن لا نطور برمجيات فحسب، بل نبني جسوراً مالية آمنة ومبتكرة تربط الأفراد والمؤسسات بمستقبل الدفع الرقمي.',
      descriptionBold: 'ساند باي',
      descriptionEnd: '– محفظتك الإلكترونية وبوابة الدفع الموثوقة.',
      ctaPrimary: 'استكشف منتجاتنا',
      ctaSecondary: 'تواصل معنا',
      badge1: 'متوافق مع PCI-DSS',
      badge2: 'تشفير 256 بت',
      badge3: 'دعم على مدار الساعة',
      scrollDown: 'تمرير للاستكشاف',
    },
    about: {
      subtitle: 'لماذا Sanad-Soft؟',
      title: 'تمكين',
      titleHighlight: 'الاقتصاد الرقمي',
      paragraph1: 'نحن لسنا هنا لتطوير البرمجيات فقط. نحن هنا لبناء بنية تحتية برمجية تتسم بالأمان، السرعة، والسهولة.',
      paragraph2: 'منتجنا الرئيسي،',
      paragraph2Bold: 'ساند باي',
      paragraph2End: '، يمثل سنوات من البحث والتطوير والفهم العميق لاحتياجات الدفع الإقليمية. نحن لا نبني التكنولوجيا فحسب - بل نبني جسوراً للشمول المالي.',
      points: [
        'خبرة تقنية عميقة، بنية مرنة وقابلة للتوسع',
        'خبرة محلية مدمجة مع شركاء تكنولوجيا دوليين',
        'فريق دعم مخصص على مدار الساعة للعمليات السلسة',
        'فهم عميق لاحتياجات السوق المحلي',
      ],
      stats: {
        businesses: 'شريك تجاري',
        transactions: 'معاملات تمت معالجتها',
        uptime: 'وقت تشغيل المنصة',
        countries: 'دولة يتم خدمتها',
      },
      missionTitle: 'مهمتنا',
      mission: 'تمكين الاقتصاد الرقمي من خلال بناء بنية تحتية برمجية تتسم بالأمان، السرعة، والسهولة.',
      values: {
        mission: {
          title: 'مهمتنا',
          description: 'تمكين الاقتصاد الرقمي من خلال بناء بنية تحتية برمجية تتسم بالأمان، السرعة، والسهولة.'
        },
        vision: {
          title: 'رؤيتنا',
          description: 'أن نكون المحرك التقني الأول للتحول المالي في الأسواق الناشئة بالشرق الأوسط وأفريقيا.'
        },
        values: {
          title: 'لماذا نحن؟',
          description: 'خبرة تقنية عميقة، بنية مرنة وقابلة للتوسع، وفهم عميق لاحتياجات السوق المحلي.'
        },
        team: {
          title: 'فريقنا',
          description: 'يقود الشركة نخبة من المهندسين بخبرات تمتد لأكثر من عقد في تطوير الأنظمة البنكية والحلول التقنية المعقدة.'
        },
      },
    },
    journey: {
      subtitle: 'رحلتنا',
      title: 'محطات رئيسية',
      titleHighlight: 'ونمو',
      items: [
        { year: '2018', title: 'تأسيس الشركة', desc: 'بدأنا برؤية لتحويل المدفوعات في السودان' },
        { year: '2019', title: 'إطلاق ساند باي', desc: 'أطلقنا بوابة الدفع الرئيسية لدينا' },
        { year: '2021', title: 'إطلاق سانداك', desc: 'قدمنا محفظتنا الرقمية الذكية' },
        { year: '2023', title: 'إطلاق ساند نوتيفاي', desc: 'أكملنا نظامنا البيئي بخدمة الإشعارات' },
        { year: '2024', title: 'التوسع الإقليمي', desc: 'نتوسع لخدمة منطقة الشرق الأوسط' },
      ],
    },
    products: {
      subtitle: 'منتجاتنا',
      title: 'حلول دفع',
      titleHighlight: 'جاهزة',
      description: 'ثلاثة منتجات قوية جاهزة لتحويل البنية التحتية للمدفوعات بمعايير أمان عالمية',
      buttons: {
        sanadpay: 'ساند باي',
        sanadak: 'سانداك',
        sanadnotify: 'ساند نوتيفاي',
      },
      getStarted: 'ابدأ الآن',
      learnMore: 'اعرف المزيد',
      sanadpay: {
        tagline: 'بوابة الدفع المتكاملة',
        description: 'بوابة الدفع المتكاملة للمتاجر والشركات بمعايير أمان عالمية. استقبل المدفوعات بأمان وموثوقية.',
        features: [
          { title: 'دعم عملات متعددة', desc: 'دعم للجنيه السوداني والدولار الأمريكي واليورو والعملات الرئيسية الأخرى.' },
          { title: 'متوافق مع PCI DSS المستوى الأول', desc: 'أمان على مستوى البنوك يضمن حماية معاملاتك على مدار الساعة.' },
          { title: 'كشف الاحتيال في الوقت الفعلي', desc: 'تدابير أمنية متقدمة للحماية من الأنشطة الاحتيالية.' },
          { title: 'خيارات تسوية فورية', desc: 'معالجة آلاف المعاملات في الثانية مع تأكيد أقل من ثانية.' },
          { title: 'واجهات برمجة صديقة للمطورين', desc: 'واجهات RESTful مع توثيق شامل.' },
          { title: 'لوحة تحكم شاملة للتقارير', desc: 'رؤى شاملة حول أنماط المعاملات وأداء الأعمال.' }
        ],
      },
      sanadak: {
        tagline: 'المحفظة الرقمية الذكية',
        description: 'المحفظة الرقمية الذكية التي تمكّن المستخدمين من إدارة أموالهم وإجراء المدفوعات وتحويل الأموال بسهولة وأمان.',
        features: [
          { title: 'تحويلات فورية بين الأشخاص', desc: 'تخزين وإرسال واستقبال الأموال على الفور بحل المحفظة الإلكترونية الآمن.' },
          { title: 'مدفوعات برمز QR', desc: 'نظام دفع مريح برمز QR للمعاملات السريعة.' },
          { title: 'دفع الفواتير والشحن', desc: 'ادفع الفواتير وخدمات الشحن مباشرة من محفظتك.' },
          { title: 'بطاقات افتراضية وفعلية', desc: 'الوصول إلى خيارات البطاقات الافتراضية والفعلية.' },
          { title: 'تحليلات ورؤى الإنفاق', desc: 'تتبع أنماط الإنفاق الخاصة بك مع تحليلات مفصلة.' },
          { title: 'إدارة حسابات متعددة', desc: 'إدارة حسابات متعددة من منصة واحدة.' }
        ],
      },
      sanadnotify: {
        tagline: 'مركز الإشعارات المتطور',
        description: 'مركز الإشعارات المتطور للربط مع الأنظمة المختلفة. ابقِ مستخدميك على اطلاع بتنبيهات فورية عبر قنوات متعددة.',
        features: [
          { title: 'توصيل متعدد القنوات', desc: 'الرسائل النصية والبريد الإلكتروني والإشعارات عبر منصات متعددة.' },
          { title: 'جدولة ذكية وأتمتة', desc: 'نظام جدولة آلي لتوقيت التوصيل الأمثل.' },
          { title: 'محرك التخصيص', desc: 'تخصيص الإشعارات بناءً على تفضيلات المستخدم وسلوكه.' },
          { title: 'تحليلات التوصيل', desc: 'تحليلات شاملة حول توصيل الإشعارات والتفاعل معها.' },
          { title: 'إدارة القوالب', desc: 'نظام قوالب سهل الاستخدام للرسائل المتسقة.' },
          { title: 'تكاملات Webhook', desc: 'توصيل webhook موثوق للتكاملات الخلفية والأتمتة.' }
        ],
      },
      merchant: {
        tagline: 'تمكين عملك',
        description: 'حل تاجر كامل للشركات من جميع الأحجام. قبول المدفوعات في المتجر وعبر الإنترنت مع أدوات قوية لإدارة عملياتك.',
        features: [
          { title: 'تكامل نقاط البيع', desc: 'تكامل سلس مع أنظمة نقاط البيع.' },
          { title: 'إدارة العملاء', desc: 'بناء وإدارة علاقاتك مع العملاء.' },
          { title: 'تحليلات المبيعات', desc: 'تتبع الأداء وتحسين عملك.' },
        ],
      },
      business: {
        tagline: 'حلول المؤسسات',
        description: 'بنية تحتية مالية مخصصة للمؤسسات الكبيرة. تكاملات مخصصة، ودعم مخصص، وهندسة معمارية قابلة للتوسع.',
        features: [
          { title: 'أمان مخصص', desc: 'أمان على مستوى المؤسسات مع تكوينات مخصصة.' },
          { title: 'الوصول إلى API', desc: 'وصول كامل إلى API للتكاملات المخصصة.' },
          { title: 'دعم مخصص', desc: 'فريق إدارة حسابات مخصص على مدار الساعة.' },
        ],
      },
    },
    services: {
      subtitle: 'خدماتنا',
      title: 'خدمات',
      titleHighlight: 'احترافية',
      description: 'نقدم حلولاً تقنية شاملة لمساعدة الشركات على التحول الرقمي',
      items: [
        {
          title: 'تطوير الأنظمة المالية',
          desc: 'بناء بوابات الدفع وأنظمة المحافظ الإلكترونية بمعايير أمان عالمية (متوافق مع PCI-DSS).',
          features: ['مدفوعات البطاقات (فيزا، ماستركارد)', 'تكامل الأموال المتنقلة', 'التحويلات المصرفية', 'التسوية في الوقت الفعلي'],
        },
        {
          title: 'البنية التحتية البرمجية',
          desc: 'تصميم أنظمة قابلة للتوسع باستخدام أحدث التقنيات وبنية Microservices مرنة.',
          features: ['التحويلات الفورية بين الأشخاص', 'دفع الفواتير', 'خدمات الشحن', 'دعم متعدد العملات'],
        },
        {
          title: 'الاستشارات التقنية',
          desc: 'مساعدة الشركات على التحول الرقمي واختيار التكنولوجيا المناسبة لمشاريعهم.',
          features: ['اتصالات مصرفية مباشرة', 'التحقق من الحساب', 'التسوية الآلية', 'الامتثال التنظيمي'],
        },
        {
          title: 'فهم السوق المحلي',
          desc: 'ميزتنا الكبرى هي فهمنا للسوق السوداني والأسواق الناشئة.',
          features: ['الكشف المدعوم بالذكاء الاصطناعي', 'المراقبة في الوقت الفعلي', 'تسجيل المخاطر', 'إدارة استرداد المبالغ'],
        },
        {
          title: 'تحليلات فورية',
          desc: 'لوحات تحكم شاملة مع رؤى قابلة للتنفيذ، وتقارير مخصصة، وتحليلات تنبؤية.',
          features: ['لوحات تحكم مخصصة', 'تقارير المعاملات', 'رؤى العملاء', 'قدرات التصدير'],
        },
        {
          title: 'دعم محلي 24/7',
          desc: 'دعم فني على مدار الساعة مع مديري حسابات مخصصين لعملاء المؤسسات.',
          features: ['واجهات RESTful', 'SDKs للمنصات الرئيسية', 'دعم Webhooks', 'بيئة Sandbox'],
        },
      ],
      ctaTitle: 'هل أنت مستعد لتحويل عملك رقمياً؟',
      ctaDesc: 'يمكن لفريق الخبراء لدينا تصميم وتنفيذ حلول مالية مخصصة تتطابق تماماً مع متطلبات عملك وأهدافه.',
      ctaButton: 'اطلب الخدمة',
    },
    solutions: {
      subtitle: 'الخطط والأسعار',
      title: 'اختر',
      titleHighlight: 'خطتك',
      description: 'خطط أسعار مرنة مصممة لتلبية احتياجات الشركات في كل مرحلة',
      items: [
        {
          industry: 'البنوك والمالية',
          title: 'Starter',
          desc: 'مثالية للشركات الناشئة والمشاريع الصغيرة التي تتطلع للبدء بالمدفوعات الرقمية.',
          benefits: ['بوابة دفع أساسية', 'دعم بريد إلكتروني', 'APIs قياسية', 'تقارير شهرية'],
        },
        {
          industry: 'التجارة الإلكترونية',
          title: 'Business',
          desc: 'للشركات المتوسطة التي تحتاج لربط متقدم ومميزات أكثر.',
          benefits: ['ربط متقدم', 'دعم أولوية', 'APIs مخصصة', 'تحليلات فورية'],
        },
        {
          industry: 'البيع بالتجزئة',
          title: 'Enterprise',
          desc: 'حلول مخصصة للشركات الكبرى والبنوك مع دعم فني مخصص.',
          benefits: ['حلول مخصصة', 'دعم مخصص', 'ضمان SLA', 'خيار On-premise'],
        },
        {
          industry: 'الاتصالات',
          title: 'التعليم',
          desc: 'تحصيل رسوم مبسط وإدارة مالية للمدارس والجامعات ومنصات التعلم الإلكتروني.',
          benefits: ['خطط التقسيط', 'إدارة المنح', 'بوابات الأولياء', 'تذكيرات آلية'],
        },
        {
          industry: 'الرعاية الصحية',
          title: 'السفر والضيافة',
          desc: 'معالجة مدفوعات متعددة العملات لشركات الطيران والفنادق ووكالات السفر.',
          benefits: ['تحويل العملات الديناميكي', 'مدفوعات مقسمة', 'أتمتة الاسترداد', 'تكامل الولاء'],
        },
        {
          industry: 'الحكومة',
          title: 'الرعاية الصحية',
          desc: 'حلول دفع متوافقة للمستشفيات والعيادات ومقدمي الرعاية الصحية.',
          benefits: ['التحقق من التأمين', 'خطط الدفع', 'دعم HSA/FSA', 'بوابات المرضى'],
        },
      ],
      partnersText: 'متكامل مع المنصات والشركاء الرائدين',
    },
    testimonials: {
      subtitle: 'آراء العملاء',
      title: 'موثوق من قبل',
      titleHighlight: 'قادة الصناعة',
      description: 'اطلع على ما يقوله عملاؤنا عن تجربتهم مع Sanad-Soft',
      items: [
        {
          name: 'أحمد حسن',
          role: 'الرئيس التنفيذي',
          company: 'تك ستارت السودان',
          content: 'غيّر ساند باي طريقة تعاملنا مع المدفوعات. كان التكامل سلساً، وفريق الدعم استثنائي. تحسن معدل نجاح المعاملات لدينا بنسبة 40٪ منذ التبديل.',
        },
        {
          name: 'فاطمة الرشيد',
          role: 'المدير المالي',
          company: 'مجموعة الخرطوم للبيع بالتجزئة',
          content: 'كسلسلة بيع بالتجزئة تعمل في جميع أنحاء السودان، كنا بحاجة إلى شريك دفع موثوق. قدمت ساند سوفت ذلك بالضبط. كانت حلول نقاط البيع والتحليلات الخاصة بهم تغيير قواعد اللعبة لأعمالنا.',
        },
        {
          name: 'عمر خليل',
          role: 'رئيس الرقمية',
          company: 'سودا تل',
          content: 'توثيق API ممتاز، وبيئة Sandbox جعلت الاختبار سهلاً. قمنا بدمج ساند باي في تطبيق الهاتف المحمول الخاص بنا في غضون أسابيع، وعملاؤنا يحبونه.',
        },
        {
          name: 'سارة محمد',
          role: 'المؤسس',
          company: 'إي شوب السودان',
          content: 'بدء عمل تجارة إلكترونية في السودان بدا تحدياً حتى وجدنا ساند باي. إنهم يفهمون السوق المحلي ويقدمون حلولاً تعمل فعلاً هنا.',
        },
        {
          name: 'يوسف إبراهيم',
          role: 'مدير العمليات',
          company: 'بنك النيل',
          content: 'ساعدتنا حلول التكامل المصرفي من ساند سوفت في تحديث خدماتنا الرقمية. خبرتهم في المشهد المالي لمنطقة الشرق الأوسط وشمال أفريقيا لا مثيل لها.',
        },
      ],
      stats: {
        rating: 'تقييم العملاء',
        satisfaction: 'رضا العملاء',
        clients: 'عملاء سعداء',
        support: 'الدعم المتاح',
      },
    },
    contact: {
      subtitle: 'تواصل معنا',
      title: 'لنبني',
      titleHighlight: 'المستقبل معاً',
      description: 'هل أنت مستعد لتحويل البنية التحتية للمدفوعات؟ فريقنا هنا للمساعدة',
      info: {
        visit: 'زرنا',
        email: 'راسلنا',
        call: 'اتصل بنا',
        address: 'دبي، الإمارات',
        emailAddress: 'info@sanadsoft.com',
        phone: '+249 123 456 789',
      },
      officeHours: 'ساعات المكتب',
      hours: {
        weekdays: 'الأحد - الخميس: 8:00 ص - 6:00 م',
        weekend: 'الجمعة - السبت: مغلق',
        support: 'دعم فني على مدار الساعة',
        supportDesc: 'متاح لعملاء المؤسسات',
      },
      form: {
        name: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        company: 'الشركة',
        subject: 'الموضوع',
        message: 'الرسالة',
        selectSubject: 'اختر موضوعاً',
        subjects: {
          sanadpay: 'استفسار مبيعات',
          partnership: 'شراكة',
          support: 'الدعم الفني',
          demo: 'طلب عرض توضيحي',
          other: 'أخرى',
        },
        send: 'إرسال الرسالة',
        sending: 'جاري الإرسال...',
        namePlaceholder: 'أحمد محمد',
        emailPlaceholder: 'ahmad@company.com',
        companyPlaceholder: 'شركتك',
        messagePlaceholder: 'أخبرنا عن مشروعك أو استفسارك...',
      },
      success: {
        title: 'شكراً لرسالتك!',
        description: 'سنتواصل معك قريباً.',
      },
    },
    footer: {
      description: 'تمكين الاقتصاد الرقمي من خلال بناء بنية تحتية برمجية آمنة وسريعة وموثوقة لمستقبل المدفوعات.',
      sections: {
        products: {
          title: 'المنتجات',
          links: ['ساند باي', 'بوابة الدفع', 'المحفظة الإلكترونية', 'الخدمات المصرفية المتنقلة'],
        },
        company: {
          title: 'الشركة',
          links: ['من نحن', 'الوظائف', 'المدونة', 'الصحافة'],
        },
        resources: {
          title: 'الموارد',
          links: ['التوثيق', 'مرجع API', 'الدعم', 'تواصل معنا'],
        },
      },
      copyright: 'جميع الحقوق محفوظة.',
      legal: {
        privacy: 'سياسة الخصوصية',
        terms: 'شروط الخدمة',
      },
      madeWith: 'صنع بواسطة فريق سند',
    },
  },
}