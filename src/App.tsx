import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "./utils/cn";

const CTA_LINK = "https://coincarriere.com/register?type=company";
const OFFICIAL_LOGO_URL = "https://cdn.coincarriere.com/wp-content/uploads/2025/11/1762829178875-w23oav1d4pb.png";

const copy = {
  ar: {
    dir: "rtl",
    label: "العربية",
    metaTitle: "CoinCarrière - منصة التوظيف الذكية لتقنيي EV بالمغرب",
    metaDescription: "لقّي تقني EV مناسب بلا ما تضيع ساعات فـ CVs. CoinCarrière كتجيب لك غير المرشحين اللي مناسبين مع الورشة ديالك فدقائق ماشي أيام.",
    privacy: {
      title: "سياسة الخصوصية",
      lastUpdated: "آخر تحديث: 19 أفريل 2026",
      section1: "الهوية",
      company: "9558-9321 Quebec inc.، تدير تحت اسم CoinCarrière",
      contact: "للاتصال بنا: contact@coincarriere.com"
    },
    terms: {
      title: "شروط الاستخدام العامة",
      lastUpdated: "آخر تحديث: 19 أفريل 2026",
      section1: "الموضوع",
      intro: "تنظم شروط الاستخدام العامة هذه الوصول والاستخدام لمنصة CoinCarrière."
    },
    contact: {
      title: "اتصل بنا"
    },
    ctaPrimary: "جرّب دابا",
    ctaSecondary: "شوف كيفاش كتخدم",
    headerCta: "بدا دابا",
    hero: {
      line1: "لقى تقني EV مناسب…",
      line2: "بلا ما تضيع ساعات فـ CVs", 
      sub: "CoinCarrière كتجيب لك غير المرشحين اللي مناسبين مع الورشة ديالك — فـ دقائق ماشي أيام",
    },
    leadForm: {
      kicker: "ابدا دابا",
      title: "خلي معلوماتك ونرجعو ليك فدقائق",
      nameLabel: "الاسم الكامل",
      namePlaceholder: "مثال : محمد العلوي",
      phoneLabel: "رقم الهاتف",
      phonePlaceholder: "+212 6XX XX XX XX",
      specialtyLabel: "التخصص المطلوب",
      specialtyOptions: [
        { value: "", label: "اختار التخصص..." },
        { value: "diag", label: "تقني تشخيص EV" },
        { value: "battery", label: "تقني بطاريات" },
        { value: "powertrain", label: "أخصائي محركات هجينة" },
        { value: "general", label: "ميكانيكي عام EV" },
        { value: "other", label: "تخصص آخر" },
      ],
      submitBtn: "ابعث الطلب ديالك",
      submittingBtn: "كنبعتو...",
      successTitle: "تم بنجاح!",
      successText: "غادي نتواصلو معاك فدقائق. شكراً!",
      privacyNote: "معلوماتك آمنة معانا. ما كنشاركوها مع حتى حد.",
    },
    problem: {
      kicker: "المشكل",
      title: "واش هاد الشي كيعجبك؟",
      items: [
        "كتدوز ساعات كتفرّز CVs",
        "كتدير مقابلات… وفالأخير ماشي مناسبين",
        "الخدمة كتوقف حيث ما لقيتيش الناس المناسبين",
      ],
      close: "الوقت ديالك كيمشي فالتوظيف… ماشي فالورشة",
    },
    solution: {
      kicker: "الحل بسيط",
      title: "CoinCarrière كتدير عليك الخدمة الصعيبة:",
      items: [
        { title: "تصفية CVs بشكل ذكي", text: "كنفرزو السير الذاتية ونخليو غير المرشحين اللي عندهم علاقة حقيقية بمجال EV." },
        { title: "توصيلك غير بمرشحين مناسبين", text: "كتوصلك لائحة قصيرة، واضحة، ومبنية على شنو محتاجاه الورشة ديالك." },
        { title: "ربح الوقت والجهد", text: "ما تبقاش غارق فالمقابلات العشوائية. ركز على الخدمة والزبناء." },
      ],
      close: "نتي كتركّز غير على الخدمة ديالك",
    },
    interactive: {
      calculator: {
        kicker: "حاسبة التوفير (ROI)",
        title: "شحال غادي توفر مع CoinCarrière؟",
        positionsLabel: "عدد التقنيين اللي كتوظف فالعام :",
        shopRateLabel: "معدل ربح الورشة فالساعة (MAD) :",
        hoursSaved: "ساعات العمل الموفرة",
        revenueSaved: "الأرباح الضائعة اللي غاتوفر",
        efficiencyBoost: "زيادة فكفاءة التوظيف",
        timeDescription: "عوض ما تضيع 45 ساعة فالتصفية والمقابلات مع أشخاص غير مناسبين، CoinCarrière كتدير كلشي فـ دقائق.",
        moneyDescription: "كل ساعة الورشة ديالك واقفة فيها بسبب غياب تقني، كتخسر فلوس. التوظيف السريع كيرجع الورشة للعمل فوراً.",
      },
      matcher: {
        kicker: "محاكاة ذكية",
        title: "جرب محاكي المطابقة الفوري",
        roleLabel: "تخصص التقني المطلوب :",
        cityLabel: "المدينة :",
        brandsLabel: "الماركات المطلوبة :",
        btnSimulate: "ابحث عن المرشحين المناسبين",
        scanning: "جاري فرز وتصفية السير الذاتية بالذكاء الاصطناعي...",
        matchFound: "لقينا مرشحين متطابقين مع ورشتك!",
        readyBadge: "جاهز للعمل فوراً",
        matchScore: "نسبة المطابقة",
        vettedBy: "مُدقق ومضمون من CoinCarrière",
        yearsExp: "سنوات الخبرة",
        skills: "المهارات التقنية",
        certifications: "الشواهد والاعتمادات",
        brands: "ماركات السيارات المدعومة",
        ctaBook: "احجز مقابلة مع هذا المرشح",
        defaultState: "حدد المعايير أعلاه لتجربة محرك التصفية الفوري.",
        roles: [
          { value: "diag", label: "تقني تشخيص وكهرباء EV" },
          { value: "battery", label: "تقني بطاريات الجهد العالي" },
          { value: "powertrain", label: "أخصائي محركات ونواقل هجينة" }
        ],
        cities: [
          { value: "Casablanca", label: "الدار البيضاء" },
          { value: "Rabat", label: "الرباط" },
          { value: "Tangier", label: "طنجة" },
          { value: "Marrakech", label: "مراكش" }
        ]
      }
    },
    how: {
      kicker: "كيفاش كتخدم؟",
      title: "ثلاث خطوات بسيطة",
      steps: [
        { title: "دير الإعلان ديالك فدقائق", text: "كتب المنصب، المدينة، والتخصصات المطلوبة." },
        { title: "حدد شنو باغي بالضبط", text: "اختار الخبرة، نوع السيارات، والمهارات التقنية." },
        { title: "توصلك لائحة ديال المرشحين المناسبين", text: "كتشوف غير المرشحين اللي مطابقين للطلب ديالك." },
      ],
      close: "بلا صداع، بلا تضييع الوقت",
    },
    value: {
      kicker: "شنو غادي تربح؟",
      title: "القيمة المضافة لورشة سيارتك",
      items: [
        { value: "⏱", label: "توفر ساعات كل أسبوع" },
        { value: "📉", label: "تنقص الأخطاء فالتوظيف" },
        { value: "⚡", label: "تلقى الناس المناسبين بسرعة" },
      ],
      close: "خدمة أكثر… Stress أقل",
    },
    proof: {
      kicker: "شنو كيقولو الناس؟",
      title: "قصة نجاح حقيقية",
      quote: "ولّيت كنلقى تقنيين مزيانين بلا ما نضيع نهاري كامل فـ CVs. CoinCarrière بدلات طريقة التوظيف عندنا.",
      author: "مدير ورشة EV",
      city: "الدار البيضاء",
    },
    final: {
      kicker: "ما تضيعش وقتك أكثر",
      title: "كل نهار كتأخر فيه كيكلفك خدمة وفرص",
      text: "جرّب CoinCarrière دابا وبدا تخدم على خدمتك، ماشي على CVs.",
    },
    faq: {
      kicker: "أسئلة شائعة",
      title: "عندك سؤال؟",
      items: [
        { q: "واش صعيبة الاستعمال؟", a: "لا، بسيطة وكتاخد غير دقائق باش تبدا." },
        { q: "واش فعلاً كتلقى ناس مناسبين؟", a: "نعم، المنصة مركزة غير على مجال EV وHybride باش توصلك بمرشحين عندهم علاقة بالتخصص." },
        { q: "واش نقدر نجرب قبل؟", a: "أكيد، جرّب وشوف الفرق بنفسك قبل ما تاخذ أي قرار." },
      ],
    },
    footer: "منصة التوظيف الذكية لقطاع السيارات الكهربائية والهجينة.",
  },
  fr: {
    dir: "ltr",
    label: "Français",
    metaTitle: "CoinCarrière - Recrutez le bon technicien EV",
    metaDescription: "CoinCarrière vous connecte aux candidats EV adaptés à votre atelier en quelques minutes, pas en plusieurs jours.",
    privacy: {
      title: "Politique de Confidentialité",
      lastUpdated: "Dernière mise à jour : 19 avril 2026",
      section1: "Identité du responsable du traitement",
      company: "Le site coincarriere.com est exploité par : 9558-9321 Quebec inc., NEQ : 1181724304",
      contact: "Pour contacter : privacy@coincarriere.com"
    },
    terms: {
      title: "Conditions Générales d'Utilisation",
      lastUpdated: "Dernière mise à jour : 19 avril 2026",
      section1: "Objet",
      intro: "Les présentes Conditions Générales d'Utilisation régissent l'accès et l'utilisation de la plateforme CoinCarrière."
    },
    contact: {
      title: "Contactez-nous"
    },
    ctaPrimary: "Essayer maintenant",
    ctaSecondary: "Voir comment ça marche",
    headerCta: "Commencer",
    hero: {
      line1: "Trouvez le bon technicien EV…",
      line2: "sans perdre des heures dans les CVs",
      sub: "CoinCarrière vous amène uniquement les candidats qui correspondent à votre atelier - en minutes, pas en jours.",
    },
    leadForm: {
      kicker: "Démarrez maintenant",
      title: "Laissez vos coordonnées et nous vous rappelons en quelques minutes",
      nameLabel: "Nom complet",
      namePlaceholder: "ex : Mohamed El Alaoui",
      phoneLabel: "Numéro de téléphone",
      phonePlaceholder: "+212 6XX XX XX XX",
      specialtyLabel: "Spécialité recherchée",
      specialtyOptions: [
        { value: "", label: "Choisissez une spécialité..." },
        { value: "diag", label: "Technicien Diagnostic EV" },
        { value: "battery", label: "Technicien Batterie" },
        { value: "powertrain", label: "Spécialiste Hybride" },
        { value: "general", label: "Mécanicien EV généraliste" },
        { value: "other", label: "Autre spécialité" },
      ],
      submitBtn: "Envoyer ma demande",
      submittingBtn: "Envoi en cours...",
      successTitle: "Demande envoyée !",
      successText: "Nous vous contacterons dans quelques minutes. Merci !",
      privacyNote: "Vos données sont sécurisées. Nous ne les partageons avec personne.",
    },
    problem: {
      kicker: "Problème",
      title: "Ce recrutement vous coûte trop de temps ?",
      items: [
        "Vous passez des heures à trier des CVs",
        "Vous faites des entretiens pour des profils non adaptés",
        "L'atelier ralentit faute de bons techniciens",
      ],
      close: "Votre temps part dans le recrutement, pas dans l'atelier.",
    },
    solution: {
      kicker: "Solution simple",
      title: "CoinCarrière fait le travail difficile pour vous :",
      items: [
        { title: "Tri intelligent des CVs", text: "Nous filtrons les candidatures pour ne garder que les profils réellement liés à l'EV." },
        { title: "Profils adaptés seulement", text: "Vous recevez une shortlist claire, alignée avec les besoins de votre atelier." },
        { title: "Moins d'effort, plus de temps", text: "Finies les entrevues aléatoires. Vous vous concentrez sur vos clients et vos opérations." },
      ],
      close: "Vous gérez l'atelier, CoinCarrière vous aide à trouver les bons talents.",
    },
    interactive: {
      calculator: {
        kicker: "Simulateur de Gain (ROI)",
        title: "Combien allez-vous économiser ?",
        positionsLabel: "Techniciens à recruter par an :",
        shopRateLabel: "Taux horaire de l'atelier (MAD) :",
        hoursSaved: "Heures de travail économisées",
        revenueSaved: "Revenu d'atelier sécurisé",
        efficiencyBoost: "Boost d'efficacité",
        timeDescription: "Au lieu de perdre 45 heures à trier et interviewer des profils inadéquats, CoinCarrière fait tout en minutes.",
        moneyDescription: "Chaque heure de fermeture d'une baie de travail vous coûte cher. Un recrutement rapide relance immédiatement votre activité.",
      },
      matcher: {
        kicker: "Démo interactive",
        title: "Testez notre moteur de matching intelligent",
        roleLabel: "Spécialité du technicien :",
        cityLabel: "Ville :",
        brandsLabel: "Marques requises :",
        btnSimulate: "Lancer la recherche intelligente",
        scanning: "Filtrage et tri des CVs par IA en cours...",
        matchFound: "Profils qualifiés trouvés pour votre atelier !",
        readyBadge: "Prêt à démarrer immédiatement",
        matchScore: "Score de Matching",
        vettedBy: "Vérifié et garanti par CoinCarrière",
        yearsExp: "Années d'expérience",
        skills: "Compétences clés",
        certifications: "Certifications",
        brands: "Marques supportées",
        ctaBook: "Contacter ce candidat",
        defaultState: "Définissez les critères ci-dessus pour tester le moteur de matching instantané.",
        roles: [
          { value: "diag", label: "Expert Diagnostic & Électricité EV" },
          { value: "battery", label: "Technicien Batterie Haute-Tension" },
          { value: "powertrain", label: "Spécialiste Transmission Hybride" }
        ],
        cities: [
          { value: "Casablanca", label: "Casablanca" },
          { value: "Rabat", label: "Rabat" },
          { value: "Tangier", label: "Tanger" },
          { value: "Marrakech", label: "Marrakech" }
        ]
      }
    },
    how: {
      kicker: "Fonctionnement",
      title: "Trois étapes simples",
      steps: [
        { title: "Publiez votre besoin en minutes", text: "Ajoutez le poste, la ville et les spécialités recherchées." },
        { title: "Définissez le profil exact", text: "Précisez l'expérience, le type de véhicules et les compétences techniques." },
        { title: "Recevez les bons candidats", text: "Consultez uniquement les profils compatibles avec votre demande." },
      ],
      close: "Sans complexité, sans perte de temps.",
    },
    value: {
      kicker: "Valeur",
      title: "Ce que vous gagnez",
      items: [
        { value: "Heures", label: "gagnées chaque semaine" },
        { value: "Moins d'erreurs", label: "dans vos recrutements" },
        { value: "Rapidité", label: "pour trouver le bon profil" },
      ],
      close: "Plus d'activité, moins de stress.",
    },
    proof: {
      kicker: "Preuve",
      title: "Ce que disent les ateliers",
      quote: "Je trouve enfin de bons techniciens sans perdre ma journée dans des CVs. CoinCarrière a changé notre manière de recruter.",
      author: "Responsable d'atelier EV",
      city: "Casablanca",
    },
    final: {
      kicker: "Ne perdez plus de temps",
      title: "Chaque jour d'attente vous coûte des interventions et des opportunités",
      text: "Essayez CoinCarrière maintenant et travaillez sur votre activité, pas sur des piles de CVs.",
    },
    faq: {
      kicker: "FAQ",
      title: "Vos questions",
      items: [
        { q: "Est-ce facile à utiliser ?", a: "Oui. La plateforme est simple et vous pouvez lancer votre besoin en quelques minutes." },
        { q: "Les candidats sont-ils vraiment adaptés ?", a: "Oui. CoinCarrière se concentre sur les profils EV et hybrides pour vous rapprocher des bonnes compétences." },
        { q: "Puis-je essayer avant ?", a: "Oui. Vous pouvez tester la plateforme et mesurer la différence avant de vous engager." },
      ],
    },
    footer: "La plateforme de recrutement intelligente pour les véhicules électriques et hybrides.",
  },
  en: {
    dir: "ltr",
    label: "English",
    metaTitle: "CoinCarrière - Hire the right EV technician",
    metaDescription: "CoinCarrière connects your workshop with EV candidates that fit in minutes, not days.",
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: April 19, 2026",
      section1: "Data Controller Identity",
      company: "The site coincarriere.com is operated by: 9558-9321 Quebec inc., NEQ: 1181724304",
      contact: "Contact: privacy@coincarriere.com"
    },
    terms: {
      title: "Terms of Service",
      lastUpdated: "Last updated: April 19, 2026",
      section1: "Subject",
      intro: "These Terms of Service govern access to and use of the CoinCarrière platform."
    },
    contact: {
      title: "Contact Us"
    },
    ctaPrimary: "Try it now",
    ctaSecondary: "See how it works",
    headerCta: "Get started",
    hero: {
      line1: "Find the right EV technician…",
      line2: "without spending hours in CVs",
      sub: "CoinCarrière brings you only the candidates that fit your workshop - in minutes, not days.",
    },
    leadForm: {
      kicker: "Get started now",
      title: "Leave your details and we'll call you within minutes",
      nameLabel: "Full Name",
      namePlaceholder: "e.g. Mohamed El Alaoui",
      phoneLabel: "Phone Number",
      phonePlaceholder: "+212 6XX XX XX XX",
      specialtyLabel: "Required Specialty",
      specialtyOptions: [
        { value: "", label: "Choose a specialty..." },
        { value: "diag", label: "EV Diagnostic Technician" },
        { value: "battery", label: "Battery Technician" },
        { value: "powertrain", label: "Hybrid Powertrain Specialist" },
        { value: "general", label: "General EV Mechanic" },
        { value: "other", label: "Other specialty" },
      ],
      submitBtn: "Send my request",
      submittingBtn: "Sending...",
      successTitle: "Request sent!",
      successText: "We will contact you within minutes. Thank you!",
      privacyNote: "Your information is safe. We never share it with anyone.",
    },
    problem: {
      kicker: "Problem",
      title: "Is hiring taking over your workshop time?",
      items: [
        "You spend hours sorting through CVs",
        "You interview people who are not the right fit",
        "Your workshop slows down because the right talent is missing",
      ],
      close: "Your time goes into hiring instead of running the workshop.",
    },
    solution: {
      kicker: "Simple Solution",
      title: "CoinCarrière handles the hard part for you:",
      items: [
        { title: "Smart CV filtering", text: "We filter applications so you only see candidates with relevant EV experience." },
        { title: "Only matched candidates", text: "You receive a clear shortlist aligned with your workshop needs." },
        { title: "Save time and effort", text: "Stop wasting energy on random interviews. Focus on customers and operations." },
      ],
      close: "You focus on the workshop. CoinCarrière helps you find the right people.",
    },
    interactive: {
      calculator: {
        kicker: "ROI Calculator",
        title: "How much will you save with CoinCarrière?",
        positionsLabel: "Technicians recruited per year:",
        shopRateLabel: "Workshop hourly labor rate (MAD):",
        hoursSaved: "Work hours saved",
        revenueSaved: "Workshop revenue secured",
        efficiencyBoost: "Hiring Efficiency Boost",
        timeDescription: "Instead of losing 45 hours sorting CVs and conducting failed interviews, CoinCarrière handles it in minutes.",
        moneyDescription: "Every hour an empty bay sits idle costs you money. Fast hiring gets your workshop back to maximum capacity.",
      },
      matcher: {
        kicker: "Live Demo",
        title: "Try our intelligent matching engine",
        roleLabel: "Technician Specialty:",
        cityLabel: "City:",
        brandsLabel: "Required Car Brands:",
        btnSimulate: "Find Matching Candidates",
        scanning: "AI parsing and filtering CV database...",
        matchFound: "Highly-matched candidates found!",
        readyBadge: "Ready to Interview",
        matchScore: "Match Score",
        vettedBy: "Vetted by CoinCarrière",
        yearsExp: "Years of Experience",
        skills: "Core Skills",
        certifications: "Certifications",
        brands: "Brands",
        ctaBook: "Book interview with candidate",
        defaultState: "Configure the criteria above to test our live matchmaking engine.",
        roles: [
          { value: "diag", label: "EV Diagnostic & Electrical Expert" },
          { value: "battery", label: "High-Voltage Battery Technician" },
          { value: "powertrain", label: "Hybrid Powertrain & Transmission Specialist" }
        ],
        cities: [
          { value: "Casablanca", label: "Casablanca" },
          { value: "Rabat", label: "Rabat" },
          { value: "Tangier", label: "Tangier" },
          { value: "Marrakech", label: "Marrakech" }
        ]
      }
    },
    how: {
      kicker: "How it works",
      title: "Three simple steps",
      steps: [
        { title: "Post your need in minutes", text: "Add the role, city and specialties you are looking for." },
        { title: "Define the exact profile", text: "Choose the experience, vehicle type and technical skills required." },
        { title: "Get a matched shortlist", text: "Review only candidates that fit your hiring request." },
      ],
      close: "No hassle, no wasted time.",
    },
    value: {
      kicker: "Value",
      title: "What you gain",
      items: [
        { value: "Heures", label: "saved every week" },
        { value: "Fewer mistakes", label: "in hiring decisions" },
        { value: "Speed", label: "to find the right person" },
      ],
      close: "More work done, less stress.",
    },
    proof: {
      kicker: "Proof",
      title: "What workshops say",
      quote: "I now find good technicians without losing a full day in CVs. CoinCarrière changed the way we hire.",
      author: "EV workshop manager",
      city: "Casablanca",
    },
    final: {
      kicker: "Do not lose more time",
      title: "Every day you wait costs work and opportunities",
      text: "Try CoinCarrière now and work on your business, not on CV piles.",
    },
    faq: {
      kicker: "FAQ",
      title: "Questions answered",
      items: [
        { q: "Is it easy to use?", a: "Yes. The platform is simple and you can launch your hiring need in minutes." },
        { q: "Are candidates really matched?", a: "Yes. CoinCarrière focuses on EV and hybrid profiles to connect you with relevant skills." },
        { q: "Can I try it first?", a: "Yes. You can test the platform and see the difference before committing." },
      ],
    },
    footer: "The smart hiring platform for electric and hybrid vehicles.",
  },
} as const;

type Lang = keyof typeof copy;
type Copy = (typeof copy)[Lang];
type IconProps = { className?: string };

const languageOptions: Array<{ key: Lang; short: string }> = [
  { key: "ar", short: "AR" },
  { key: "fr", short: "FR" },
  { key: "en", short: "EN" },
];

function trackLead() {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", "Lead");
  }
}

function useInView(threshold = 0.16) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function Reveal({ children, className = "", delay = "" }: { children: ReactNode; className?: string; delay?: string }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={cn(className, inView ? "animate-fade-up" : "opacity-0", delay)}>
      {children}
    </div>
  );
}

function Svg({ children, className = "h-6 w-6", viewBox = "0 0 24 24" }: { children: ReactNode; className?: string; viewBox?: string }) {
  return (
    <svg className={className} viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

function ClockIcon({ className }: IconProps) {
  return <Svg className={className}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></Svg>;
}

function UsersIcon({ className }: IconProps) {
  return <Svg className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><path d="M20 8v6" /><path d="M23 11h-6" /></Svg>;
}

function StopIcon({ className }: IconProps) {
  return <Svg className={className}><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></Svg>;
}

function FilterIcon({ className }: IconProps) {
  return <Svg className={className}><path d="M22 3H2l8 9.5V19l4 2v-8.5L22 3Z" /></Svg>;
}

function LinkIcon({ className }: IconProps) {
  return <Svg className={className}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></Svg>;
}

function BoltIcon({ className }: IconProps) {
  return <Svg className={className}><path d="m13 2-10 12h9l-1 8 10-12h-9l1-8Z" /></Svg>;
}

function EditIcon({ className }: IconProps) {
  return <Svg className={className}><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z" /></Svg>;
}

function SettingsIcon({ className }: IconProps) {
  return <Svg className={className}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06A2 2 0 1 1 7.04 4.3l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09A1.65 1.65 0 0 0 15 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06A2 2 0 1 1 19.7 7.04l-.06.06A1.65 1.65 0 0 0 19.4 9c.14.31.49 1 1.51 1H21a2 2 0 1 1 0 4h-.09c-1.02 0-1.37.69-1.51 1Z" /></Svg>;
}

function InboxIcon({ className }: IconProps) {
  return <Svg className={className}><path d="M22 12h-6l-2 3h-4l-2-3H2" /><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11Z" /></Svg>;
}

function ChevronIcon({ className, dir }: IconProps & { dir: "rtl" | "ltr" }) {
  return dir === "rtl"
    ? <Svg className={className}><path d="m15 18-6-6 6-6" /></Svg>
    : <Svg className={className}><path d="m9 18 6-6-6-6" /></Svg>;
}

function ChevronDownIcon({ className }: IconProps) {
  return <Svg className={className}><path d="m6 9 6 6 6-6" /></Svg>;
}

function QuoteIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7.17 6C4.77 7.79 3.5 9.92 3.5 12.56V18h6v-6H6.8c.16-1.35.88-2.53 2.42-3.68L7.17 6Zm9 0c-2.4 1.79-3.67 3.92-3.67 6.56V18h6v-6h-2.7c.16-1.35.88-2.53 2.42-3.68L16.17 6Z" />
    </svg>
  );
}

const problemIcons = [ClockIcon, UsersIcon, StopIcon];
const solutionIcons = [FilterIcon, LinkIcon, BoltIcon];
const stepIcons = [EditIcon, SettingsIcon, InboxIcon];

const mockCandidatesDatabase = {
  ar: {
    diag: {
      name: "أ. اليعقوبي",
      exp: "8 سنوات",
      skills: ["تشخيص أعطال الأنظمة المعقدة", "إصلاح الدوائر الكهربائية لسيارات EV", "تحديث برمجيات أنظمة القيادة"],
      certifications: ["شهادة IMI Level 4 في تشخيص السيارات الكهربائية", "دبلوم تقني متخصص في ميكاترونيك السيارات"],
      brands: ["Tesla", "Porsche Taycan", "BMW i8"]
    },
    battery: {
      name: "ي. المرابط",
      exp: "6 سنوات",
      skills: ["إصلاح وتجديد بطاريات الجهد العالي", "موازنة خلايا البطارية (BMS)", "عزل التوصيلات الكهربائية وحماية التقنيين"],
      certifications: ["شهادة معتمدة من Tesla لإصلاح البطاريات", "شهادة السلامة للعمل مع الجهد العالي (High Voltage safety)"],
      brands: ["BYD Blade Battery", "Tesla Model 3/Y", "Nissan Leaf"]
    },
    powertrain: {
      name: "س. العلمي",
      exp: "10 سنوات",
      skills: ["إصلاح علب التروس الهجينة", "صيانة محركات الجر الكهربائية", "معايرة نظام الكبح الاستردادي (Regenerative braking)"],
      certifications: ["شهادة تخصّص في أنظمة نقل الحركة الهجينة", "اعتماد ميكانيكي كهربائي دولي"],
      brands: ["Toyota Hybrid Synergy Drive", "Renault E-Tech", "Hyundai Ioniq"]
    }
  },
  fr: {
    diag: {
      name: "A. EL YACOUBI",
      exp: "8 ans",
      skills: ["Diagnostic des pannes de systèmes complexes", "Câblage haute tension", "Mise à jour soft des calculateurs EV"],
      certifications: ["Certification IMI Level 4 - Diagnostic EV", "DTS en Mécatronique Automobile"],
      brands: ["Tesla", "Porsche Taycan", "BMW i8"]
    },
    battery: {
      name: "Y. EL MORABIT",
      exp: "6 ans",
      skills: ["Réparation de packs batterie Haute Tension", "Équilibrage de cellules (BMS)", "Habilitation sécurité Haute Tension"],
      certifications: ["Certifié réparateur batteries Tesla", "Habilitation Électrique B2VL"],
      brands: ["BYD Blade Battery", "Tesla Model 3/Y", "Nissan Leaf"]
    },
    powertrain: {
      name: "S. EL ALAMI",
      exp: "10 ans",
      skills: ["Boîtes de vitesses hybrides et réducteurs", "Maintenance des moteurs de traction", "Calibrage du freinage régénératif"],
      certifications: ["Spécialiste systèmes de transmission Hybride", "Technicien Expert certifié constructeur"],
      brands: ["Toyota Hybrid Synergy Drive", "Renault E-Tech", "Hyundai Ioniq"]
    }
  },
  en: {
    diag: {
      name: "A. EL YACOUBI",
      exp: "8 Years",
      skills: ["Complex system fault diagnosis", "High voltage EV wiring repairs", "MCU & ECU software flashing"],
      certifications: ["IMI Level 4 Certified EV Diagnostician", "Advanced Automobile Mechatronics Diploma"],
      brands: ["Tesla", "Porsche Taycan", "BMW i8"]
    },
    battery: {
      name: "Y. EL MORABIT",
      exp: "6 Years",
      skills: ["High-Voltage pack reconditioning", "Cell balancing & BMS calibration", "High voltage safety insulation"],
      certifications: ["Tesla Certified Battery repair tech", "High Voltage Safety & Insulation Badge"],
      brands: ["BYD Blade Battery", "Tesla Model 3/Y", "Nissan Leaf"]
    },
    powertrain: {
      name: "S. EL ALAMI",
      exp: "10 Years",
      skills: ["Hybrid gearboxes & reduction gears", "Traction motor mechanical overhaul", "Regenerative braking calibration"],
      certifications: ["Certified Hybrid Powertrain Specialist", "Manufacturer-endorsed Master Electrician"],
      brands: ["Toyota Hybrid Synergy Drive", "Renault E-Tech", "Hyundai Ioniq"]
    }
  }
};

function PrimaryCTA({ children, dir, compact = false }: { children: ReactNode; dir: "rtl" | "ltr"; compact?: boolean }) {
  return (
    <a
      href={CTA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackLead}
      className={cn(
        "cta-primary inline-flex items-center justify-center gap-3 rounded-full font-black",
        compact ? "px-6 py-3 text-sm" : "px-8 py-4 text-base sm:px-10 sm:py-5 sm:text-lg"
      )}
    >
      <span className="relative z-10">{children}</span>
      <span className="relative z-10"><ChevronIcon className="h-5 w-5" dir={dir} /></span>
    </a>
  );
}

function SecondaryCTA({ children }: { children: ReactNode }) {
  return (
    <a href="#how" className="cta-secondary inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-bold sm:text-lg">
      {children}
    </a>
  );
}

function CoinCarriereLogo({ className = "", white = false }: { className?: string; white?: boolean }) {
  return (
    <img
      src={OFFICIAL_LOGO_URL}
      alt="CoinCarrière"
      className={cn("block w-auto", white && "logo-white", className)}
    />
  );
}

function Header({ lang, setLang, t }: { lang: Lang; setLang: (lang: Lang) => void; t: Copy }) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-brand-navy/10 bg-white/95 backdrop-blur-xl shadow-sm" dir="ltr">
      <div className="flex w-full items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center" aria-label="CoinCarrière">
          <CoinCarriereLogo className="h-14 sm:h-16 lg:h-[72px]" />
        </a>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex rounded-full border border-brand-navy/10 bg-brand-navy/5 p-1" aria-label="Language selector">
            {languageOptions.map((option) => (
              <button
                key={option.key}
                onClick={() => setLang(option.key)}
                className={cn(
                  "rounded-full px-3 py-1.5 text-xs font-extrabold transition sm:px-4",
                  lang === option.key ? "bg-brand-navy text-brand-lime" : "text-brand-navy/70 hover:bg-brand-navy/10 hover:text-brand-navy"
                )}
              >
                {option.short}
              </button>
            ))}
          </div>
          <div className="hidden sm:block">
            <PrimaryCTA dir={t.dir} compact>{t.headerCta}</PrimaryCTA>
          </div>
        </div>
      </div>
    </header>
  );
}

function HeroIllustration() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-[46%] overflow-hidden md:block" aria-hidden="true">
      <svg className="absolute inset-x-0 bottom-0 h-full w-full" viewBox="0 0 1440 520" fill="none" preserveAspectRatio="xMidYMax slice">
        {/* Abstract flowing lines - no car */}
        <path d="M0 446C220 380 391 407 586 336C826 249 1038 211 1440 284" stroke="#0094D9" strokeOpacity="0.10" strokeWidth="120" />
        <path d="M0 500C200 430 395 446 620 372C897 280 1105 285 1440 342" stroke="#0B3F59" strokeOpacity="0.10" strokeWidth="90" />
        {/* Decorative abstract circles */}
        <circle className="float-soft animate-pulse" cx="1138" cy="151" r="14" fill="#a3d900" />
        <circle className="float-soft animate-pulse" style={{ animationDelay: "0.8s" }} cx="315" cy="278" r="10" fill="#0094D9" />
        <circle className="float-soft animate-pulse" style={{ animationDelay: "1.2s" }} cx="1200" cy="350" r="8" fill="#a3d900" />
        <circle className="float-soft animate-pulse" style={{ animationDelay: "0.5s" }} cx="200" cy="400" r="12" fill="#0094D9" />
      </svg>
    </div>
  );
}

function LeadForm({ t }: { t: Copy }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [blocked, setBlocked] = useState(false);

  const normalizeMoroccanPhone = (value: string) => value.replace(/\s+/g, "").replace(/^\+212/, "0");
  const isValidMoroccanPhone = (value: string) => /^(06|07)\d{8}$/.test(normalizeMoroccanPhone(value));

  const getAttempts = () => {
    try {
      return JSON.parse(localStorage.getItem("coincarriere_phone_attempts") || "{}");
    } catch {
      return {};
    }
  };

  const saveAttempts = (data: Record<string, number>) => {
    localStorage.setItem("coincarriere_phone_attempts", JSON.stringify(data));
  };

  const getLastSubmitAt = () => Number(localStorage.getItem("coincarriere_rate_limit") || "0");
  const isRateLimited = () => Date.now() - getLastSubmitAt() < 5 * 60 * 1000;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const normalizedPhone = normalizeMoroccanPhone(phone);

    if (!name.trim() || !normalizedPhone.trim() || !specialty) {
      setError(t.dir === "rtl" ? "عمر جميع الخانات." : t.label === "Français" ? "Veuillez remplir tous les champs." : "Please fill all fields.");
      return;
    }

    if (!isValidMoroccanPhone(normalizedPhone)) {
      const attempts = getAttempts();
      attempts[normalizedPhone] = (attempts[normalizedPhone] || 0) + 1;
      saveAttempts(attempts);
      if (attempts[normalizedPhone] >= 3) {
        setBlocked(true);
        return;
      }
      setError(t.dir === "rtl" ? "رقم الهاتف المغربي غير صحيح. خاصو يبدا بـ 06 أو 07." : t.label === "Français" ? "Numéro marocain invalide. Il doit commencer par 06 ou 07." : "Invalid Moroccan phone number. It must start with 06 or 07.");
      return;
    }

    const attempts = getAttempts();
    if (attempts[normalizedPhone] >= 3 || localStorage.getItem(`coincarriere_registered_${normalizedPhone}`) === "1") {
      setBlocked(true);
      return;
    }

    if (isRateLimited()) {
      setError(t.dir === "rtl" ? "تم إرسال طلب مؤخراً. حاول بعد 5 دقائق." : t.label === "Français" ? "Une demande a déjà été envoyée. Réessayez dans 5 minutes." : "A request was already sent. Try again in 5 minutes.");
      return;
    }

    setSubmitting(true);
    trackLead();

    setTimeout(() => {
      localStorage.setItem("coincarriere_rate_limit", String(Date.now()));
      localStorage.setItem(`coincarriere_registered_${normalizedPhone}`, "1");
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  if (blocked) {
    return (
      <div className="rounded-3xl border border-red-500/20 bg-[#081018] p-8 text-center shadow-2xl space-y-4">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10 text-red-400 text-2xl font-black">404</div>
        <h3 className="text-2xl font-black text-white">{t.dir === "rtl" ? "تم تسجيلك سابقاً" : t.label === "Français" ? "Déjà enregistré" : "Already registered"}</h3>
        <p className="text-sm font-semibold text-white/65">{t.dir === "rtl" ? "هذا الرقم مسجل من قبل أو تم حظره بسبب تكرار المحاولات." : t.label === "Français" ? "Ce numéro a déjà été enregistré ou bloqué après plusieurs tentatives." : "This number has already been registered or blocked after repeated attempts."}</p>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-brand-lime/20 bg-[#081018] p-8 text-center shadow-2xl space-y-4">
        <div className="mx-auto h-16 w-16 rounded-full bg-brand-lime/15 flex items-center justify-center">
          <svg className="h-8 w-8 text-brand-lime" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
        </div>
        <h3 className="text-2xl font-black text-white">{t.leadForm.successTitle}</h3>
        <p className="text-base font-semibold text-white/70">{t.leadForm.successText}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-white/10 bg-[#081018] p-6 sm:p-7 shadow-2xl space-y-4 text-start">
      <div className="text-start mb-2">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-lime mb-2">{t.leadForm.kicker}</p>
        <h3 className="text-xl font-black text-white leading-tight">{t.leadForm.title}</h3>
      </div>

      <div>
        <label className="block text-xs font-black text-white/75 mb-1.5 uppercase tracking-wider">{t.leadForm.nameLabel}</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder={t.leadForm.namePlaceholder} required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-bold text-white placeholder:text-white/35 focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 transition" />
      </div>

      <div>
        <label className="block text-xs font-black text-white/75 mb-1.5 uppercase tracking-wider">{t.leadForm.phoneLabel}</label>
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={t.leadForm.phonePlaceholder} required dir="ltr" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-bold text-white placeholder:text-white/35 focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 transition" />
      </div>

      <div>
        <label className="block text-xs font-black text-white/75 mb-1.5 uppercase tracking-wider">{t.leadForm.specialtyLabel}</label>
        <select
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-bold text-white focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 transition appearance-none cursor-pointer"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: t.dir === "rtl" ? "left 12px center" : "right 12px center",
            paddingRight: t.dir === "rtl" ? "16px" : "40px",
            paddingLeft: t.dir === "rtl" ? "40px" : "16px",
          }}
        >
          {t.leadForm.specialtyOptions.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.value === ""} className="text-brand-ink">{opt.label}</option>
          ))}
        </select>
      </div>

      {error ? <div className="rounded-2xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm font-bold text-red-300">{error}</div> : null}

      <button type="submit" disabled={submitting} className="cta-primary w-full flex items-center justify-center gap-2 rounded-full py-4 text-base font-black mt-2 disabled:opacity-70">
        <BoltIcon className="h-5 w-5" />
        <span>{submitting ? t.leadForm.submittingBtn : t.leadForm.submitBtn}</span>
      </button>

      <p className="text-[11px] text-white/45 font-semibold text-center pt-1 leading-relaxed">🔒 {t.leadForm.privacyNote}</p>
    </form>
  );
}

function Hero({ t }: { t: Copy }) {
  const quickPoints = t.dir === "rtl"
    ? [
        "فرز أسرع للمرشحين",
        "مرشحين مناسبين أكثر",
        "وقت أقل فالتوظيف"
      ]
    : t.label === "Français"
      ? [
          "Tri plus rapide",
          "Meilleurs profils",
          "Moins de temps perdu"
        ]
      : [
          "Faster screening",
          "Better-fit candidates",
          "Less hiring time"
        ];

  return (
    <section id="top" className="hero-surface brand-grid relative min-h-screen overflow-hidden">
      <HeroIllustration />
      <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-brand-cyan via-brand-lime to-brand-blue" />
      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:px-8 min-h-screen flex items-center">
        <div className="grid w-full gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 text-center lg:text-start">
            <Reveal className="mb-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-navy/10 bg-white/80 px-5 py-2 text-sm font-black text-brand-navy shadow-sm">
                <BoltIcon className="h-4 w-4 text-brand-cyan animate-pulse" />
                CoinCarrière EV / Hybrid
              </div>
            </Reveal>
            <Reveal delay="delay-100">
              <h1 className="text-4xl font-black leading-[1.12] tracking-tight text-brand-ink sm:text-5xl md:text-6xl lg:text-6xl">
                {t.hero.line1}
                <span className="mt-3 block brand-gradient-text">{t.hero.line2}</span>
              </h1>
            </Reveal>
            <Reveal delay="delay-200">
              <p className="mt-6 max-w-2xl mx-auto lg:mx-0 text-lg leading-8 text-brand-navy/80 sm:text-xl font-medium">{t.hero.sub}</p>
            </Reveal>
            <Reveal delay="delay-300">
              <div className="mt-8 flex flex-col items-center lg:items-start justify-start gap-3 sm:flex-row sm:flex-wrap">
                <PrimaryCTA dir={t.dir}>{t.ctaPrimary}</PrimaryCTA>
                <SecondaryCTA>{t.ctaSecondary}</SecondaryCTA>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay="delay-200">
              <div className="rounded-3xl border border-white/10 bg-[#081018]/90 p-6 sm:p-7 shadow-2xl backdrop-blur text-start">
                <div className="mb-5">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-lime mb-2">
                    {t.dir === "rtl" ? "شنو غادي تربح" : t.label === "Français" ? "Ce que vous gagnez" : "What you gain"}
                  </p>
                  <h3 className="text-2xl font-black text-white leading-tight">
                    {t.dir === "rtl"
                      ? "توظيف أوضح، أسرع، وبدون صداع"
                      : t.label === "Français"
                        ? "Un recrutement plus clair, plus rapide, sans friction"
                        : "Clearer, faster hiring without the friction"}
                  </h3>
                </div>
                <div className="space-y-3">
                  {quickPoints.map((item, index) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/5 px-4 py-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-lime/12 text-brand-lime font-black text-sm">
                        0{index + 1}
                      </div>
                      <p className="text-sm sm:text-base font-bold text-white/85">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ kicker, title, light = false }: { kicker: string; title: string; light?: boolean }) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className={cn("mb-4 text-sm font-black uppercase tracking-[0.25em]", light ? "text-brand-lime" : "text-brand-cyan")}>
        {kicker}
      </p>
      <h2 className={cn("text-3xl font-black leading-tight sm:text-4xl md:text-5xl", light ? "text-white" : "text-brand-ink")}>
        {title}
      </h2>
      <div className="lime-underline mt-6 h-1.5 w-28 rounded-full" />
    </div>
  );
}

function Problem({ t }: { t: Copy }) {
  return (
    <section className="bg-white py-20 sm:py-24 border-b border-brand-navy/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          {/* Content Column */}
          <div className="lg:col-span-7">
            <Reveal><SectionHeading kicker={t.problem.kicker} title={t.problem.title} /></Reveal>
            <div className="divide-y divide-brand-navy/12 border-y border-brand-navy/12">
              {t.problem.items.map((item, index) => {
                const Icon = problemIcons[index];
                return (
                  <Reveal key={item} delay={`delay-${(index + 1) * 100}`}>
                    <div className="flex items-center gap-5 py-7 text-start">
                      <div className="flex h-13 w-13 flex-none items-center justify-center rounded-2xl bg-brand-navy text-white shadow-md">
                        <Icon className="h-6 w-6" />
                      </div>
                      <p className="text-xl font-extrabold text-brand-ink sm:text-2xl">{item}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
            <Reveal delay="delay-400">
              <p className="mt-10 text-2xl font-black leading-snug text-brand-blue">{t.problem.close}</p>
            </Reveal>
          </div>

          {/* Ad Image 1 Column */}
          <div className="lg:col-span-5 relative">
            <Reveal delay="delay-200">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-brand-navy/10 group aspect-[4/5] max-w-md mx-auto">
                <img
                  src="/images/awareness_tech.jpg"
                  alt="Stressed EV Technician surrounded by CVs"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6 text-start">
                  <div className="flex items-center gap-2 text-brand-lime font-black text-xs uppercase tracking-widest mb-1 bg-brand-ink/40 px-3 py-1 rounded-full w-max">
                    <span className="h-2 w-2 rounded-full bg-brand-lime animate-ping" />
                    {t.problem.kicker}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function LiveMatcher({ t, lang }: { t: Copy; lang: Lang }) {
  const [selectedRole, setSelectedRole] = useState<string>("diag");
  const [selectedCity, setSelectedCity] = useState<string>("Casablanca");
  const [selectedBrand, setSelectedBrand] = useState<string>("Tesla");
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);

  const handleSimulate = () => {
    setIsScanning(true);
    setShowResult(false);
    setTimeout(() => {
      setIsScanning(false);
      setShowResult(true);
    }, 1800);
  };

  const candidate = mockCandidatesDatabase[lang][selectedRole as "diag" | "battery" | "powertrain"];

  return (
    <section className="bg-white py-20 sm:py-24 border-y border-brand-navy/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading kicker={t.interactive.matcher.kicker} title={t.interactive.matcher.title} />
        </Reveal>

        <div className="mt-8 grid gap-10 lg:grid-cols-12 items-start">
          {/* Left: Interactive Matching Controls & Output */}
          <div className="lg:col-span-8 grid gap-8 md:grid-cols-12">
            {/* Filter Panel */}
            <div className="md:col-span-5 bg-paper rounded-3xl p-6 border border-brand-navy/10 shadow-lg text-start">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-black text-brand-navy/80 uppercase tracking-wider mb-2">
                    {t.interactive.matcher.roleLabel}
                  </label>
                  <div className="grid gap-2">
                    {t.interactive.matcher.roles.map((role) => (
                      <button
                        key={role.value}
                        onClick={() => {
                          setSelectedRole(role.value);
                          setShowResult(false);
                        }}
                        className={cn(
                          "w-full text-start px-4 py-3 rounded-2xl text-xs font-bold border transition-all duration-200",
                          selectedRole === role.value
                            ? "bg-brand-navy text-white border-brand-navy shadow-md"
                            : "bg-white text-brand-navy/70 border-brand-navy/10 hover:border-brand-cyan/40"
                        )}
                      >
                        {role.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-black text-brand-navy/80 uppercase tracking-wider mb-2">
                    {t.interactive.matcher.cityLabel}
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {t.interactive.matcher.cities.map((city) => (
                      <button
                        key={city.value}
                        onClick={() => {
                          setSelectedCity(city.value);
                          setShowResult(false);
                        }}
                        className={cn(
                          "px-3 py-2.5 rounded-2xl text-xs font-bold border text-center transition-all duration-200",
                          selectedCity === city.value
                            ? "bg-brand-navy text-white border-brand-navy shadow-sm"
                            : "bg-white text-brand-navy/70 border-brand-navy/10 hover:border-brand-cyan/40"
                        )}
                      >
                        {city.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-black text-brand-navy/80 uppercase tracking-wider mb-2">
                    {t.interactive.matcher.brandsLabel}
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {["Tesla", "Porsche", "BMW i", "BYD", "Renault E-Tech"].map((brand) => (
                      <button
                        key={brand}
                        onClick={() => {
                          setSelectedBrand(brand);
                          setShowResult(false);
                        }}
                        className={cn(
                          "px-2.5 py-1.5 rounded-full text-xs font-bold border transition-all duration-200",
                          selectedBrand === brand
                            ? "bg-brand-cyan text-white border-brand-cyan shadow-sm"
                            : "bg-white text-brand-navy/70 border-brand-navy/10 hover:border-brand-cyan/40"
                        )}
                      >
                        {brand}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleSimulate}
                  disabled={isScanning}
                  className="w-full mt-2 bg-brand-cyan text-white hover:bg-brand-blue py-3.5 px-6 rounded-2xl font-black text-sm shadow-lg shadow-brand-cyan/20 flex items-center justify-center gap-2 transition-all duration-200"
                >
                  <BoltIcon className="h-4 w-4 text-brand-lime" />
                  {t.interactive.matcher.btnSimulate}
                </button>
              </div>
            </div>

            {/* Results Area */}
            <div className="md:col-span-7 min-h-[460px] flex flex-col justify-center bg-[#071322] border border-brand-navy/30 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />

              {!isScanning && !showResult && (
                <div className="text-center relative z-10 max-w-xs mx-auto space-y-4">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/5 text-brand-lime">
                    <SettingsIcon className="h-7 w-7 animate-spin" />
                  </div>
                  <h4 className="text-sm font-black text-white">{t.interactive.matcher.defaultState}</h4>
                </div>
              )}

              {isScanning && (
                <div className="text-center relative z-10 space-y-6">
                  <div className="relative mx-auto h-20 w-20">
                    <div className="absolute inset-0 rounded-full border-4 border-brand-lime/10" />
                    <div className="absolute inset-0 rounded-full border-4 border-brand-lime border-t-transparent animate-spin" />
                  </div>
                  <p className="text-brand-lime font-black text-base animate-pulse">{t.interactive.matcher.scanning}</p>
                  {/* Laser scan animation */}
                  <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-cyan to-transparent animate-bounce" />
                </div>
              )}

              {showResult && (
                <div className="space-y-5 relative z-10 animate-fade-in text-start">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-3">
                    <div>
                      <span className="text-xs font-black uppercase tracking-widest text-brand-lime bg-brand-lime/10 px-3 py-1.5 rounded-full">
                        {t.interactive.matcher.matchFound}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white/60">{t.interactive.matcher.matchScore}:</span>
                      <span className="text-xl font-black text-brand-lime">98%</span>
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-12">
                    <div className="sm:col-span-4 bg-white/5 rounded-2xl p-4 border border-white/5 flex flex-col justify-center items-center text-center">
                      <div className="h-12 w-12 rounded-full bg-brand-cyan/20 text-brand-cyan flex items-center justify-center font-black text-lg mb-2 border border-brand-cyan/30">
                        C
                      </div>
                      <p className="text-base font-black text-white">{candidate.name}</p>
                      <p className="text-xs font-bold text-white/50 mt-1">{t.interactive.matcher.readyBadge}</p>
                    </div>

                    <div className="sm:col-span-8 space-y-3">
                      <div>
                        <h5 className="text-[10px] font-black text-brand-cyan uppercase tracking-wider mb-1">{t.interactive.matcher.certifications}</h5>
                        <div className="flex flex-col gap-1">
                          {candidate.certifications.map((cert) => (
                            <div key={cert} className="flex items-start gap-1.5 text-xs text-white/85">
                              <span className="text-brand-lime mt-0.5 font-bold">✓</span>
                              <span>{cert}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h5 className="text-[10px] font-black text-brand-cyan uppercase tracking-wider mb-1">{t.interactive.matcher.skills}</h5>
                        <div className="flex flex-wrap gap-1">
                          {candidate.skills.map((skill) => (
                            <span key={skill} className="text-[10px] font-bold bg-white/5 text-white/80 px-2 py-0.5 rounded border border-white/5">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h5 className="text-[10px] font-black text-brand-cyan uppercase tracking-wider mb-1">{t.interactive.matcher.brands}</h5>
                        <div className="flex flex-wrap gap-1">
                          {candidate.brands.map((brand) => (
                            <span
                              key={brand}
                              className={cn(
                                "text-[10px] font-black px-2 py-0.5 rounded-full border",
                                brand.toLowerCase().includes(selectedBrand.toLowerCase())
                                  ? "bg-brand-lime/10 text-brand-lime border-brand-lime/35"
                                  : "bg-white/5 text-white/60 border-white/5"
                              )}
                            >
                              {brand}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <p className="text-[10px] text-white/50 flex items-center gap-1 font-bold">
                      <BoltIcon className="h-3.5 w-3.5 text-brand-lime animate-pulse" />
                      {t.interactive.matcher.vettedBy}
                    </p>
                    <a
                      href={CTA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={trackLead}
                      className="bg-brand-lime hover:bg-[#b5f200] text-brand-ink px-4 py-2.5 rounded-xl text-xs font-black text-center transition-all duration-200 shadow-md"
                    >
                      {t.interactive.matcher.ctaBook}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right: Ad Image 2 Column */}
          <div className="lg:col-span-4 relative h-full">
            <Reveal delay="delay-300" className="h-full">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-brand-navy/10 group aspect-[4/5] max-w-sm mx-auto h-full">
                <img
                  src="/images/consideration_comparison.jpg"
                  alt="Unqualified Resumes vs Organized EV profiles comparison"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6 text-start">
                  <div className="flex items-center gap-2 text-brand-lime font-black text-xs uppercase tracking-widest mb-1 bg-brand-ink/40 px-3 py-1 rounded-full w-max">
                    <span className="h-2 w-2 rounded-full bg-brand-lime animate-ping" />
                    CoinCarrière Match Maker
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Solution({ t }: { t: Copy }) {
  return (
    <section className="section-dark py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal><SectionHeading kicker={t.solution.kicker} title={t.solution.title} light /></Reveal>
        <div className="grid gap-10 md:grid-cols-3">
          {t.solution.items.map((item, index) => {
            const Icon = solutionIcons[index];
            return (
              <Reveal key={item.title} delay={`delay-${(index + 1) * 100}`}>
                <div className="text-start">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-lime text-brand-ink shadow-xl shadow-brand-lime/20">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-black text-white">{item.title}</h3>
                  <p className="mt-4 text-base leading-8 text-white/72 font-medium">{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay="delay-400">
          <p className="mt-12 max-w-3xl text-2xl font-black leading-snug text-brand-lime">{t.solution.close}</p>
        </Reveal>
      </div>
    </section>
  );
}

function HowItWorks({ t }: { t: Copy }) {
  return (
    <section id="how" className="bg-paper py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal><SectionHeading kicker={t.how.kicker} title={t.how.title} /></Reveal>
        <div className="relative grid gap-8 md:grid-cols-3">
          <div className="absolute top-9 hidden h-1 w-full rounded-full bg-gradient-to-r from-brand-cyan via-brand-lime to-brand-blue opacity-30 md:block" />
          {t.how.steps.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <Reveal key={step.title} delay={`delay-${(index + 1) * 100}`}>
                <div className="relative bg-paper text-start">
                  <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-full border-8 border-paper bg-brand-ink text-brand-lime shadow-lg shadow-brand-navy/10">
                    <Icon className="h-8 w-8" />
                  </div>
                  <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-brand-cyan">0{index + 1}</p>
                  <h3 className="text-2xl font-black text-brand-ink">{step.title}</h3>
                  <p className="mt-3 leading-7 text-brand-navy/72 font-medium">{step.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay="delay-400">
          <p className="mt-12 text-2xl font-black text-brand-blue">{t.how.close}</p>
        </Reveal>
      </div>
    </section>
  );
}

function RoiCalculator({ t, lang }: { t: Copy; lang: Lang }) {
  const [positions, setPositions] = useState<number>(3);
  const [hourlyRate, setHourlyRate] = useState<number>(150);

  // Constants
  const hoursPerTraditionalHire = 45; // 30 hrs sorting + 15 hrs interviewing
  const hoursPerCoinCarriereHire = 3;

  const hoursSavedPerHire = hoursPerTraditionalHire - hoursPerCoinCarriereHire;
  const totalHoursSaved = hoursSavedPerHire * positions;
  const revenueSaved = totalHoursSaved * hourlyRate;
  const efficiencyMultiplier = 15; // 15x faster

  return (
    <section className="bg-paper py-20 sm:py-24 border-y border-brand-navy/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-brand-cyan">{t.interactive.calculator.kicker}</p>
            <h2 className="text-3xl font-black leading-tight text-brand-ink sm:text-4xl md:text-5xl">{t.interactive.calculator.title}</h2>
            <div className="lime-underline mt-6 h-1.5 w-28 rounded-full" />
          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-12 items-center">
          {/* Controls Panel */}
          <div className="lg:col-span-5 space-y-8 bg-white rounded-3xl p-6 sm:p-8 border border-brand-navy/5 shadow-lg text-start">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-black text-brand-navy/80 uppercase tracking-wider">{t.interactive.calculator.positionsLabel}</span>
                <span className="text-2xl font-black text-brand-cyan bg-brand-cyan/10 px-3 py-1 rounded-xl">{positions}</span>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                value={positions}
                onChange={(e) => setPositions(parseInt(e.target.value))}
                className="w-full h-2 bg-brand-navy/10 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
              />
              <div className="flex justify-between text-xs font-bold text-brand-navy/40">
                <span>1</span>
                <span>20</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-black text-brand-navy/80 uppercase tracking-wider">{t.interactive.calculator.shopRateLabel}</span>
                <span className="text-2xl font-black text-brand-cyan bg-brand-cyan/10 px-3 py-1 rounded-xl">{hourlyRate} MAD</span>
              </div>
              <input
                type="range"
                min="50"
                max="500"
                step="10"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                className="w-full h-2 bg-brand-navy/10 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
              />
              <div className="flex justify-between text-xs font-bold text-brand-navy/40">
                <span>50 MAD</span>
                <span>500 MAD</span>
              </div>
            </div>
          </div>

          {/* Dials / Results Display */}
          <div className="lg:col-span-7 grid gap-6 sm:grid-cols-3">
            <div className="bg-white rounded-3xl p-6 border border-brand-navy/5 shadow-md text-start flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="h-10 w-10 rounded-xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center mb-4">
                  <ClockIcon className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-black text-brand-navy/60 uppercase tracking-wider">{t.interactive.calculator.hoursSaved}</h4>
              </div>
              <div className="mt-4">
                <p className="text-4xl font-black text-brand-cyan">{totalHoursSaved}</p>
                <p className="text-xs text-brand-navy/50 font-semibold mt-1">{t.interactive.calculator.timeDescription}</p>
              </div>
            </div>

            <div className="bg-brand-navy rounded-3xl p-6 border border-white/5 shadow-xl text-start flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="h-10 w-10 rounded-xl bg-brand-lime/10 text-brand-lime flex items-center justify-center mb-4">
                  <BoltIcon className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-black text-white/60 uppercase tracking-wider">{t.interactive.calculator.revenueSaved}</h4>
              </div>
              <div className="mt-4">
                <p className="text-3xl font-black text-brand-lime">{revenueSaved.toLocaleString()} MAD</p>
                <p className="text-xs text-white/50 font-semibold mt-1">{t.interactive.calculator.moneyDescription}</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-brand-navy/5 shadow-md text-start flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="h-10 w-10 rounded-xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center mb-4">
                  <UsersIcon className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-black text-brand-navy/60 uppercase tracking-wider">{t.interactive.calculator.efficiencyBoost}</h4>
              </div>
              <div className="mt-4">
                <p className="text-4xl font-black text-brand-cyan">{efficiencyMultiplier}x</p>
                <p className="text-xs text-brand-navy/50 font-bold mt-1">
                  {lang === "ar" ? "توظيف أسرع بكثير" : lang === "fr" ? "Recrutement ultra-rapide" : "Ultra-fast hiring turnaround"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Value({ t }: { t: Copy }) {
  return (
    <section className="bg-brand-lime py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-brand-blue">{t.value.kicker}</p>
            <h2 className="text-3xl font-black leading-tight text-brand-ink sm:text-4xl md:text-5xl">{t.value.title}</h2>
          </div>
        </Reveal>
        <div className="grid gap-8 md:grid-cols-3">
          {t.value.items.map((item, index) => (
            <Reveal key={item.label} delay={`delay-${(index + 1) * 100}`}>
              <div className="border-t-2 border-brand-ink/18 pt-6 text-start">
                <p className="text-4xl font-black text-brand-ink sm:text-5xl">{item.value}</p>
                <p className="mt-3 text-lg font-bold text-brand-ink/72">{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay="delay-400">
          <p className="mt-12 text-2xl font-black text-brand-ink">{t.value.close}</p>
        </Reveal>
      </div>
    </section>
  );
}

function Proof({ t }: { t: Copy }) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal><SectionHeading kicker={t.proof.kicker} title={t.proof.title} /></Reveal>
        <Reveal delay="delay-200">
          <div className="relative border-s-4 border-brand-lime ps-8 text-start">
            <QuoteIcon className="mb-6 h-12 w-12 text-brand-cyan" />
            <blockquote className="text-2xl font-black leading-snug text-brand-ink sm:text-4xl">"{t.proof.quote}"</blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-navy text-xl font-black text-brand-lime shadow-md">C</div>
              <div>
                <p className="font-black text-brand-ink">{t.proof.author}</p>
                <p className="text-brand-navy/62 font-bold">{t.proof.city}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FinalCTA({ t }: { t: Copy }) {
  return (
    <section className="section-dark py-20 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(163,217,0,0.05),transparent_40%)] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 text-start">
            <Reveal>
              <p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-brand-lime">{t.final.kicker}</p>
              <h2 className="text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">{t.final.title}</h2>
            </Reveal>
            <Reveal delay="delay-200">
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 font-medium">{t.final.text}</p>
            </Reveal>
            <Reveal delay="delay-300">
              <div className="mt-10">
                <PrimaryCTA dir={t.dir}>{t.ctaPrimary}</PrimaryCTA>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 relative">
            <Reveal delay="delay-200">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group aspect-[4/5] max-w-md mx-auto">
                <img
                  src="/images/conversion_success.jpg"
                  alt="Confident workshop manager and dashboard"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6 text-start">
                  <div className="flex items-center gap-2 text-brand-lime font-black text-xs uppercase tracking-widest mb-1 bg-brand-ink/40 px-3 py-1 rounded-full w-max">
                    <span className="h-2 w-2 rounded-full bg-brand-lime animate-ping" />
                    CoinCarrière Success
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}


function LeadSection({ t }: { t: Copy }) {
  return (
    <section className="bg-[#050b12] py-20 sm:py-24 border-y border-white/6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5 text-start">
            <Reveal>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-brand-lime">
                {t.dir === "rtl" ? "الفورم" : t.label === "Français" ? "Formulaire" : "Lead form"}
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                {t.dir === "rtl"
                  ? "من بعد ما قريتي كلشي، خَلّي معلوماتك هنا"
                  : t.label === "Français"
                    ? "Après lecture complète, laissez vos coordonnées ici"
                    : "After reading everything, leave your details here"}
              </h2>
            </Reveal>

          </div>
          <div className="lg:col-span-7">
            <Reveal delay="delay-300">
              <LeadForm t={t} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-panel rounded-3xl">
      <button onClick={() => setOpen((value) => !value)} className="flex w-full items-center justify-between gap-5 p-6 text-start">
        <span className="text-lg font-black text-brand-ink sm:text-xl">{question}</span>
        <span className={cn("flex-none text-brand-cyan transition-transform duration-300", open ? "rotate-180" : "")}>
          <ChevronDownIcon className="h-5 w-5" />
        </span>
      </button>
      <div className={cn("overflow-hidden transition-all duration-300", open ? "max-h-40 pb-6" : "max-h-0")}>
        <p className="px-6 text-start leading-8 text-brand-navy/74 font-semibold">{answer}</p>
      </div>
    </div>
  );
}

function FAQ({ t }: { t: Copy }) {
  return (
    <section className="bg-paper py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal><SectionHeading kicker={t.faq.kicker} title={t.faq.title} /></Reveal>
        <div className="space-y-4">
          {t.faq.items.map((item, index) => (
            <Reveal key={item.q} delay={`delay-${(index + 1) * 100}`}>
              <FAQItem question={item.q} answer={item.a} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer({ t }: { t: Copy }) {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <footer className="bg-white py-8">
        <div className="brand-divider mb-8" />
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:px-6 sm:text-start lg:px-8">
          <CoinCarriereLogo className="h-12" />
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <p className="text-sm font-extrabold text-brand-navy/68">{t.footer}</p>
            <div className="flex items-center gap-4 text-xs font-bold">
              <button onClick={() => setShowPrivacy(true)} className="text-brand-navy/60 hover:text-brand-cyan transition-colors">{t.privacy.title}</button>
              <span className="text-brand-navy/20">|</span>
              <button onClick={() => setShowTerms(true)} className="text-brand-navy/60 hover:text-brand-cyan transition-colors">{t.terms.title}</button>
              <span className="text-brand-navy/20">|</span>
              <button onClick={() => setShowContact(true)} className="text-brand-navy/60 hover:text-brand-cyan transition-colors">{t.contact.title}</button>
            </div>
          </div>
        </div>
      </footer>

      <Modal open={showPrivacy} onClose={() => setShowPrivacy(false)} title={t.privacy.title} lang={t.dir}>
        <PrivacyContent t={t} />
      </Modal>

      <Modal open={showTerms} onClose={() => setShowTerms(false)} title={t.terms.title} lang={t.dir}>
        <TermsContent t={t} />
      </Modal>

      <Modal open={showContact} onClose={() => setShowContact(false)} title={t.contact.title} lang={t.dir}>
        <ContactContent t={t} />
      </Modal>
    </>
  );
}

function Modal({ open, onClose, title, children, lang }: { open: boolean; onClose: () => void; title: string; children: ReactNode; lang: "rtl" | "ltr" }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" dir={lang}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative max-w-3xl w-full max-h-[85vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-brand-navy/10">
        <div className="sticky top-0 bg-white/95 backdrop-blur-xl border-b border-brand-navy/10 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-black text-brand-ink">{title}</h2>
          <button onClick={onClose} className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy/5 text-brand-navy hover:bg-brand-cyan hover:text-white transition">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6 sm:p-8 text-start">
          {children}
        </div>
      </div>
    </div>
  );
}

function PrivacyContent({ t }: { t: Copy }) {
  const isRTL = t.dir === "rtl";
  return (
    <div className="space-y-6 text-sm leading-relaxed" dir={t.dir}>
      <p className="text-xs font-bold text-brand-navy/50">{t.privacy.lastUpdated}</p>
      
      <div>
        <h3 className="text-lg font-black text-brand-ink mb-3">{t.privacy.section1}</h3>
        <p className="text-brand-navy/80">
          {t.privacy.company}<br />
          {t.privacy.contact}
        </p>
      </div>

      <div>
        <h3 className="text-lg font-black text-brand-ink mb-3">
          {isRTL ? "معالجة البيانات" : t.label === "Français" ? "Traitement des données" : "Data Processing"}
        </h3>
        <p className="text-brand-navy/80">
          {isRTL 
            ? "نجمع معلوماتك الشخصية فقط لتوفير خدمات التوظيف وتحسين منصتنا. تشمل البيانات التي نجمعها: الاسم والبريد الإلكتروني ورقم الهاتف والمهارات المهنية."
            : t.label === "Français"
            ? "Nous collectons vos informations personnelles uniquement pour fournir les services de recrutement et améliorer notre plateforme. Les données incluent: nom, email, téléphone et compétences professionnelles."
            : "We collect your personal information solely to provide recruitment services and improve our platform. Data includes: name, email, phone and professional skills."}
        </p>
      </div>

      <div>
        <h3 className="text-lg font-black text-brand-ink mb-3">
          {isRTL ? "حقوقك" : t.label === "Français" ? "Vos droits" : "Your Rights"}
        </h3>
        <p className="text-brand-navy/80">
          {isRTL 
            ? "يحق لك طلب الوصول إلى بياناتك، تصحيحها، أو حذفها. لمزيد من المعلومات يرجى زيارة موقعنا أو مراسلتنا."
            : t.label === "Français"
            ? "Vous avez le droit d'accéder à vos données, de les corriger ou de les supprimer. Pour plus d'informations, veuillez consulter notre site ou nous contacter."
            : "You have the right to access your data, correct it, or delete it. For more information, please visit our site or contact us."}
        </p>
      </div>

      <p className="text-xs text-brand-navy/50 pt-4 border-t border-brand-navy/10">
        © 2026 CoinCarrière. {isRTL ? "جميع الحقوق محفوظة" : "Tous droits réservés"}
      </p>
    </div>
  );
}

function TermsContent({ t }: { t: Copy }) {
  const isRTL = t.dir === "rtl";
  return (
    <div className="space-y-6 text-sm leading-relaxed" dir={t.dir}>
      <p className="text-xs font-bold text-brand-navy/50">{t.terms.lastUpdated}</p>
      
      <div>
        <h3 className="text-lg font-black text-brand-ink mb-3">{t.terms.section1}</h3>
        <p className="text-brand-navy/80">{t.terms.intro}</p>
      </div>

      <div>
        <h3 className="text-lg font-black text-brand-ink mb-3">
          {isRTL ? "الالتزامات" : t.label === "Français" ? "Obligations" : "Obligations"}
        </h3>
        <p className="text-brand-navy/80">
          {isRTL 
            ? "يجب على المستخدمين احترام القوانين واللوائح المعمولة بالمغرب والولايات المتحدة والكندا والاتحاد الأوروبي."
            : t.label === "Français"
            ? "Les utilisateurs doivent respecter les lois et réglementations en vigueur au Maroc, aux États-Unis, au Canada et dans l'Union européenne."
            : "Users must comply with laws and regulations in Morocco, the United States, Canada and the European Union."}
        </p>
      </div>

      <div>
        <h3 className="text-lg font-black text-brand-ink mb-3">
          {isRTL ? "المحتوى" : t.label === "Français" ? "Contenu" : "Content"}
        </h3>
        <p className="text-brand-navy/80">
          {isRTL 
            ? "المحتوى الذي تنشره تبقى ملكك، ولكنك تمنحنا ترخيصًا غير حصري لاستخدامه ضمن خدماتنا."
            : t.label === "Français"
            ? "Le contenu que vous publiez vous appartient, mais vous nous accordez une licence non exclusive pour l'utiliser dans le cadre de nos services."
            : "The content you publish remains yours, but you grant us a non-exclusive license to use it within our services."}
        </p>
      </div>

      <p className="text-xs text-brand-navy/50 pt-4 border-t border-brand-navy/10">
        © 2026 CoinCarrière. {isRTL ? "جميع الحقوق محفوظة" : "Tous droits réservés"}
      </p>
    </div>
  );
}

function ContactContent({ t }: { t: Copy }) {
  const isRTL = t.dir === "rtl";
  return (
    <div className="space-y-6 text-sm leading-relaxed" dir={t.dir}>
      <p className="text-brand-navy/80">
        {isRTL ? "نحن هنا للإجابة على استفساراتكم." : t.label === "Français" ? "Nous sommes là pour répondre à vos questions." : "We are here to answer your questions."}
      </p>
      
      <div>
        <h3 className="text-lg font-black text-brand-ink mb-3">
          {isRTL ? "معلومات الاتصال" : t.label === "Français" ? "Coordonnées" : "Contact Information"}
        </h3>
        <p className="text-brand-navy/80">
          {isRTL ? "البريد الإلكتروني" : t.label === "Français" ? "Email" : "Email"}: contact@coincarriere.com<br />
          {isRTL ? "العنوان" : t.label === "Français" ? "Adresse" : "Address"}: {isRTL ? "كيبك، كندا" : "Quebec, QC, Canada"}
        </p>
      </div>

      <div className="bg-paper rounded-2xl p-5 border border-brand-navy/10">
        <p className="text-brand-navy/70 text-xs">
          {isRTL ? "نرد خلال 24-48 ساعة في أيام العمل." : t.label === "Français" ? "Nous répondons sous 24-48h en jours ouvrables." : "We respond within 24-48 hours on business days."}
        </p>
      </div>

      <p className="text-xs text-brand-navy/50 pt-4 border-t border-brand-navy/10">
        © 2026 CoinCarrière. {isRTL ? "جميع الحقوق محفوظة" : "Tous droits réservés"}
      </p>
    </div>
  );
}

function MobileStickyCTA({ t }: { t: Copy }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden">
      <div className="h-4 bg-gradient-to-t from-brand-ink/90 to-transparent pointer-events-none" />
      <div className="bg-brand-ink/95 backdrop-blur-xl border-t border-brand-lime/20 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <a
          href={CTA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackLead}
          className="cta-primary flex items-center justify-center gap-2 w-full rounded-full py-3.5 text-sm font-black animate-pulse-glow"
        >
          <span className="relative z-10">{t.ctaPrimary}</span>
          <span className="relative z-10">
            <ChevronIcon className="h-4 w-4" dir={t.dir} />
          </span>
        </a>
      </div>
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState<Lang>("ar");
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;
    document.title = t.metaTitle;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.metaDescription);
  }, [lang, t]);

  return (
    <div dir={t.dir} className="min-h-screen bg-paper font-cairo text-brand-ink pb-20 sm:pb-0">
      <Header lang={lang} setLang={setLang} t={t} />
      <Hero t={t} />
      <Problem t={t} />
      {/* <LiveMatcher t={t} lang={lang} /> */}
      <Solution t={t} />
      <HowItWorks t={t} />
      <RoiCalculator t={t} lang={lang} />
      <Value t={t} />
      <Proof t={t} />
      <FinalCTA t={t} />
      {/* <LeadSection t={t} /> */}
      <FAQ t={t} />
      <Footer t={t} />
      <MobileStickyCTA t={t} />
    </div>
  );
}
