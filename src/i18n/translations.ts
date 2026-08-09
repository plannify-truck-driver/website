export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

export const intlLocales: Record<Locale, string> = {
  fr: "fr-FR",
  en: "en-US",
};

export const translations = {
  fr: {
    meta: {
      title: "Plannify — Vos heures de conduite, notées sans effort",
      description:
        "Plannify est l'application gratuite et open source qui note vos heures de conduite et génère automatiquement votre relevé d'heures mensuel.",
    },
    header: {
      tryApp: "Essayer l'app",
    },
    footer: {
      tagline: "Open source · fait pour les chauffeurs routiers",
    },
    hero: {
      eyebrow: "Gratuit · Open source",
      title: "Vos heures de conduite, notées sans effort.",
      description:
        "Un bouton pour démarrer la journée, le même pour la terminer. À la fin du mois, votre relevé d'heures PDF vous attend, tout simplement.",
      ctaPrimary: "Commencer gratuitement",
      ctaSecondary: "Côté technique",
    },
    dashboard: {
      title: "Tableau de bord",
      startButton: "Commencer ma journée",
      endButton: "Terminer ma journée",
      noSession: "Aucune journée en cours",
      sessionRunning: "Journée en cours",
      today: "Aujourd’hui",
      summary: "Résumé",
      workedDays: "Jours travaillés",
      monthWork: "Travail mois",
      weekDetail: "Détail de la semaine",
    },
    howItWorks: {
      eyebrow: "Comment ça marche",
      title: "Trois gestes, pas un de plus.",
    },
    steps: [
      {
        n: "01",
        title: "Démarrez",
        text: "Au début de votre journée, appuyez sur le bouton. C'est tout — Plannify note l'heure pour vous.",
      },
      {
        n: "02",
        title: "Terminez",
        text: "Le soir, le même bouton clôture la journée. Pauses et repos nocturnes sont pris en compte.",
      },
      {
        n: "03",
        title: "Recevez votre relevé",
        text: "À la fin du mois, votre relevé d'heures PDF est généré automatiquement, prêt à transmettre.",
      },
    ],
    whyPlannify: {
      eyebrow: "Pourquoi Plannify",
      title: "Fini les heures notées sur un carnet.",
    },
    benefits: [
      {
        title: "Un relevé PDF chaque mois",
        text: "Toutes vos journées, heures de début, de fin et pauses, dans un document propre et officiel.",
      },
      {
        title: "Des relevés définitifs et fiables",
        text: "Après 3 mois, les relevés sont figés : personne ne peut les modifier, une preuve solide.",
      },
      {
        title: "Vos repos nocturnes suivis",
        text: "Plannify compte vos nuits avec repos complet, semaine après semaine.",
      },
      {
        title: "Gratuit et open source",
        text: "Pas d’abonnement caché. Le code est public, vos données vous appartiennent.",
      },
    ],
    pdfCard: {
      monthLabel: "Août 2026",
      reportType: "Relevé d'heures · PDF",
      definitive: "Définitif",
      totalMonth: "Total mois",
      totalValue: "149h 16min",
    },
    appSection: {
      eyebrow: "L'application",
      title: "Simple sur téléphone, claire sur ordinateur.",
      subtitle:
        "Votre semaine d'un coup d'œil : heures de début, de fin, pauses et total travaillé.",
    },
    trustSection: {
      eyebrow: "Vos données, respectées",
      title:
        "On prend soin de vos heures comme vous prenez soin de votre camion.",
    },
    trust: [
      {
        title: "Hébergé en Europe",
        text: "Toute l’infrastructure tourne sur des serveurs européens.",
      },
      {
        title: "Jamais vendues",
        text: "Vos données ne sont ni vendues ni partagées avec des tiers.",
      },
      {
        title: "Sauvegardées",
        text: "Des sauvegardes régulières, répliquées dans des lieux de stockage distincts.",
      },
      {
        title: "Vraiment gratuit",
        text: "Pas d’abonnement, pas de piège. Le projet est open source.",
      },
    ],
    cta: {
      title: "Prêt à démarrer votre journée ?",
      subtitle:
        "Gratuit, open source, sans engagement. Vos données restent les vôtres.",
      button: "Créer mon compte",
    },
  },
  en: {
    meta: {
      title: "Plannify — Your driving hours, tracked effortlessly",
      description:
        "Plannify is the free, open-source app that tracks your driving hours and automatically generates your monthly time report.",
    },
    header: {
      tryApp: "Try the app",
    },
    footer: {
      tagline: "Open source · built for truck drivers",
    },
    hero: {
      eyebrow: "Free · Open source",
      title: "Your driving hours, tracked effortlessly.",
      description:
        "One button to start your day, the same one to end it. At the end of the month, your PDF time report is waiting for you — that simple.",
      ctaPrimary: "Get started for free",
      ctaSecondary: "Technical side",
    },
    dashboard: {
      title: "Dashboard",
      startButton: "Start my day",
      endButton: "End my day",
      noSession: "No active session",
      sessionRunning: "Day in progress",
      today: "Today",
      summary: "Summary",
      workedDays: "Days worked",
      monthWork: "Hours this month",
      weekDetail: "This week's detail",
    },
    howItWorks: {
      eyebrow: "How it works",
      title: "Three taps, nothing more.",
    },
    steps: [
      {
        n: "01",
        title: "Start",
        text: "At the start of your day, tap the button. That's it — Plannify logs the time for you.",
      },
      {
        n: "02",
        title: "Finish",
        text: "In the evening, the same button ends your day. Breaks and night rest are accounted for.",
      },
      {
        n: "03",
        title: "Get your report",
        text: "At the end of the month, your PDF time report is generated automatically, ready to send.",
      },
    ],
    whyPlannify: {
      eyebrow: "Why Plannify",
      title: "No more hours scribbled in a notebook.",
    },
    benefits: [
      {
        title: "A PDF report every month",
        text: "All your days, start times, end times and breaks, in a clean, official document.",
      },
      {
        title: "Definitive, reliable reports",
        text: "After 3 months, reports are locked: no one can edit them — solid proof.",
      },
      {
        title: "Your night rest, tracked",
        text: "Plannify tracks your nights with full rest, week after week.",
      },
      {
        title: "Free and open source",
        text: "No hidden subscription. The code is public, your data belongs to you.",
      },
    ],
    pdfCard: {
      monthLabel: "August 2026",
      reportType: "Time report · PDF",
      definitive: "Definitive",
      totalMonth: "Total this month",
      totalValue: "149h 16min",
    },
    appSection: {
      eyebrow: "The app",
      title: "Simple on phone, clear on desktop.",
      subtitle:
        "Your week at a glance: start times, end times, breaks and total hours worked.",
    },
    trustSection: {
      eyebrow: "Your data, respected",
      title: "We take care of your hours the way you take care of your truck.",
    },
    trust: [
      {
        title: "Hosted in Europe",
        text: "All infrastructure runs on European servers.",
      },
      {
        title: "Never sold",
        text: "Your data is never sold or shared with third parties.",
      },
      {
        title: "Backed up",
        text: "Regular backups, replicated across separate storage locations.",
      },
      {
        title: "Genuinely free",
        text: "No subscription, no catch. The project is open source.",
      },
    ],
    cta: {
      title: "Ready to start your day?",
      subtitle: "Free, open source, no commitment. Your data stays yours.",
      button: "Create my account",
    },
  },
} as const satisfies Record<Locale, unknown>;
