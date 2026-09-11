export type LocalizedText = {
  tr: string;
  en: string;
};

export const profile = {
  name: "Sadık Ünal Çokünlü",
  role: {
    tr: "Senior Backend Developer",
    en: "Senior Backend Developer",
  } as LocalizedText,
  location: {
    tr: "İstanbul, Türkiye",
    en: "İstanbul, Turkey",
  } as LocalizedText,
  email: "sadikunal@cokunlu.dev",
  availability: {
    tr: "Yeni fırsatlara açık",
    en: "Open to new opportunities",
  } as LocalizedText,
  intro: {
    tr: "Kurumsal projelerde yüksek erişilebilirlikli, Event-Driven mimariler kuruyor; karmaşık entegrasyonları (ödeme sistemleri, pazaryerleri) sürdürülebilir, temiz kod tabanlarına dönüştürüyorum.",
    en: "I design highly available, event-driven architectures for enterprise projects; transforming complex integrations (payment systems, marketplaces) into maintainable, clean codebases.",
  } as LocalizedText,
  social: {
    github: "https://github.com/unalman",
    linkedin: "https://www.linkedin.com/in/sadikunalcokunlu",
  },
};

export const about = {
  paragraphs: [
    {
      tr: "8+ yıllık deneyime sahip bir Backend Developer'ım. Ağırlıklı olarak .NET ve MongoDB ekosisteminde çalışıyor; e-ticaret platformları, ödeme sistemleri ve pazaryeri entegrasyonları geliştiriyorum.",
      en: "I'm a Backend Developer with 8+ years of experience. I primarily work with the .NET and MongoDB ecosystems, developing e-commerce platforms, payment systems, and marketplace integrations.",
    } as LocalizedText,
    {
      tr: "Kariyerim boyunca yalnızca özellik geliştirmekten ziyade, karmaşık iş süreçlerini sadeleştiren, performanslı ve sürdürülebilir backend sistemleri tasarlamaya odaklandım. API mimarileri, veritabanı optimizasyonları, ödeme ve pazaryeri entegrasyonları gibi farklı ölçeklerdeki problemlerde uçtan uca sorumluluk aldım.",
      en: "Throughout my career, I've focused on designing performant and maintainable backend systems that simplify complex business processes. I've taken end-to-end ownership of problems across different scales, including API architectures, database optimizations, and payment and marketplace integrations.",
    } as LocalizedText,
    {
      tr: "Teknik tarafta C#, .NET, ASP.NET Core ve MongoDB başta olmak üzere PostgreSQL, RabbitMQ, Redis ve Docker gibi teknolojilerle çalışıyorum. Özellikle sistem tasarımı, veri erişimi ve performans optimizasyonu konularına ilgi duyuyorum.",
      en: "I work with technologies like C#, .NET, ASP.NET Core, and MongoDB. I'm particularly interested in system design, data access, and performance optimization.",
    } as LocalizedText,
    {
      tr: "Kod yazmanın ötesinde; açık kaynak projelere katkı sağlıyor, 16 yıldır klasik piyano çalıyor, Japon kültürü/dili ile ilgileniyor ve Napoliten pizza teknikleri üzerine araştırmalar yapıyorum.",
      en: "Beyond coding, I contribute to open-source projects, have been playing the classical piano for 16 years, am interested in Japanese culture and language, and research Neapolitan pizza techniques.",
    } as LocalizedText,
  ],
  facts: [
    {
      label: { tr: "Konum", en: "Based in" } as LocalizedText,
      value: {
        tr: "İstanbul, Türkiye",
        en: "İstanbul, Turkey",
      } as LocalizedText,
    },
    {
      label: { tr: "Deneyim", en: "Experience" } as LocalizedText,
      value: { tr: "8 yıl", en: "8 years" } as LocalizedText,
    },
    {
      label: { tr: "Odak", en: "Focus" } as LocalizedText,
      value: {
        tr: "Backend Sistemleri, API'ler & Entegrasyonlar",
        en: "Backend Systems, APIs & Integrations",
      } as LocalizedText,
    },
    {
      label: { tr: "Durum", en: "Currently" } as LocalizedText,
      value: {
        tr: "Yeni fırsatlara açık",
        en: "Open to new opportunities",
      } as LocalizedText,
    },
  ],
};

export type Skill = {
  name: string;
  note?: { tr: string; en: string };
  /** Proficiency on a 1–5 scale, rendered as small bars. */
  level: number;
};

export type SkillCategory = {
  id: string;
  label: string;
  title: LocalizedText;
  description: LocalizedText;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    label: "languages",
    title: { tr: "Diller", en: "Languages" },
    description: {
      tr: "Servis ve araçlar yazdığım diller.",
      en: "The languages I write services and tooling in.",
    },
    skills: [
      { name: "C#", note: { tr: "birincil", en: "primary" }, level: 5 },
      { name: "JavaScript", level: 4 },
      { name: "TypeScript", level: 3 },
      { name: "Go", level: 1 },
    ],
  },
  {
    id: "backend",
    label: "backend-apis",
    title: { tr: "Backend & API'ler", en: "Backend & APIs" },
    description: {
      tr: "Servislerin birbirleriyle nasıl konuştuğu ve davrandığı.",
      en: "How services talk to each other and behave.",
    },
    skills: [
      { name: "ASP.NET Core", level: 5 },
      { name: "REST API Design", level: 4 },
      { name: "RabbitMq", level: 4 },
      { name: "Microservices", level: 4 },
    ],
  },
  {
    id: "data",
    label: "data-storage",
    title: { tr: "Veri & Depolama", en: "Data & Storage" },
    description: {
      tr: "State'in nerede yaşadığı ve nasıl hareket ettiği.",
      en: "Where state lives and how it moves.",
    },
    skills: [
      { name: "MongoDB", level: 3 },
      { name: "PostgreSQL", level: 5 },
      { name: "Redis", level: 4 },
      { name: "Oracle", level: 4 },
    ],
  },
  {
    id: "infra",
    label: "infra-ops",
    title: { tr: "Altyapı & Operasyonlar", en: "Infrastructure & Ops" },
    description: {
      tr: "Yazılımın nasıl çalıştığı — ve production'da ayakta kaldığı.",
      en: "How software runs — and stays up — in production.",
    },
    skills: [
      { name: "Linux", level: 5 },
      { name: "Docker", level: 5 },
      { name: "Azure", level: 4 },
      { name: "CI/CD", level: 4 },
    ],
  },
];

// Scrolling strip of technologies shown under the skill cards.
export const marqueeTechnologies = [
  "C#",
  "JavaScript",
  "TypeScript",
  "Go",
  "ASP.NET Core",
  "REST API Design",
  "xUnit",
  "Testcontainers",
  "MSTest",
  "RabbitMQ",
  "Microservices",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "Oracle",
  "Linux",
  "Docker",
  "Azure DevOps | CI/CD",
];

export type Experience = {
  company: string;
  role: LocalizedText;
  period: LocalizedText;
  summary: LocalizedText;
  highlights: LocalizedText[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "Digi Solutions İnternet Teknolojileri A.Ş.",
    role: { tr: "Senior Backend Developer", en: "Senior Backend Developer" },
    period: { tr: "Şubat 2019 — Mayıs 2026", en: "February 2019 — May 2026" },
    summary: {
      tr: "Ajansların kendi son kullanıcılarına kod bilgisi gerektirmeden site oluşturma ve özelleştirme imkânı sunan; e-ticaret, kurumsal web ve pazaryeri entegrasyonu hizmetlerini veren platform.",
      en: "A platform that allows agencies to create and customize websites for their end users without requiring coding knowledge, offering e-commerce, corporate web, and marketplace integration services.",
    },
    highlights: [
      {
        tr: "Sipariş, ödeme, stok rezervasyonu ve iade süreçlerinin iş akışlarını tasarlayıp geliştirdim.",
        en: "Designed and developed workflows for order, payment, inventory reservation, and return processes.",
      },
      {
        tr: "MongoDB indeksleme ve aggregation optimizasyon süreçlerini yönettim; performans iyileştirmeleri konusunda ekibe liderlik ettim.",
        en: "Managed MongoDB indexing and aggregation optimization processes; led the team in performance improvements.",
      },
      {
        tr: "E-ticaret platformunun API mimarisinin tasarımına liderlik ederek sistem tasarımı ve kod kalite standartlarını belirledim; JWT tabanlı kimlik doğrulama ve rate limiting mekanizmalarını entegre ettim.",
        en: "Led the design of the e-commerce platform's API architecture, defining system design and code quality standards; integrated JWT-based authentication and rate limiting mechanisms. ",
      },
      {
        tr: "Legacy ürün filtreleme modülünü modernize ederek kod tabanını %73 oranında küçülttüm; indeksleme ve sorgu optimizasyonlarıyla sistem performansını ve sürdürülebilirliğini iyileştirdim.",
        en: "Modernized the legacy product filtering module, reducing the codebase by 73%; improved system performance and maintainability through indexing and query optimization.",
      },
      {
        tr: "Trendyol, Hepsiburada ve N11 pazaryerleriyle çift yönlü entegrasyonlar kurarak ürün gönderme, çekme, güncelleme ve silme operasyonları ile çok kanallı stok ve sipariş senkronizasyon süreçlerini hayata geçirdim.",
        en: "Established bidirectional integrations with Trendyol, Hepsiburada, and N11 marketplaces, enabling product shipment, retrieval, update, and deletion operations across multiple channels.",
      },
      {
        tr: "Pazaryerlerinden sisteme yüz binlerce ürün, sipariş ve nitelik verisinin asenkron ve periyodik aktarım süreçlerini tasarlayıp geliştirdim.",
        en: "Designed and developed asynchronous and periodic data transfer processes from marketplaces to the system, handling hundreds of thousands of products, orders, and attribute updates.",
      },
      {
        tr: "Finansbank, İş Bankası, İyzico dahil 13 farklı ödeme sistemini ortak bir soyutlama altında Factory ve Strategy tasarım desenleriyle entegre ettim; MSTest ile birim testleri yazdım.",
        en: "Integrated 13 different payment systems including Finansbank, İş Bankası, and İyzico under a common abstraction using Factory and Strategy design patterns; wrote unit tests with MSTest.",
      },
      {
        tr: "Ürün, kategori ve kullanıcı bazlı esnek kampanyaların yönetimi için yönetim panelini ve indirim hesaplamalarını gerçekleştiren Discount Engine'i uçtan uca tasarlayıp geliştirdim.",
        en: "Designed and developed an end-to-end discount engine for managing flexible campaigns based on products, categories, and users.",
      },
      {
        tr: "Tüm servislerin MongoDB operasyonlarını standardize eden ortak bir Repository katmanı geliştirerek veri erişimini merkezi ve sürdürülebilir bir yapıya taşıdım.",
        en: "Developed a common Repository layer that standardizes MongoDB operations across all services, centralizing and maintaining data access in a sustainable structure.",
      },
      {
        tr: "Cloudflare API entegrasyonu ile yönetim paneli üzerinden domain ve DNS kaydı yönetim süreçlerini uçtan uca geliştirdim; domain onay durumlarının periyodik kontrolünü bir Windows Servisi aracılığıyla otomatikleştirerek sistem senkronizasyonunu sağladım.",
        en: "Developed end-to-end domain and DNS record management processes through the management panel with Cloudflare API integration; automated periodic checks of domain approval statuses via a Windows Service to ensure system synchronization.",
      },
      {
        tr: "Production ortamlarında performans, bakım ve teknik problemlerin çözüm süreçlerinde aktif rol aldım.",
        en: "Played an active role in performance, maintenance and technical problem-solving processes in production environments.",
      },
      {
        tr: "Ajans ve kullanıcı yönetim panellerinin geliştirilmesinde uçtan uca görev aldım.",
        en: "Took end-to-end responsibility for developing agency and user management panels.",
      },
    ],
    stack: [
      "C#",
      "ASP.NET Core",
      "MongoDB",
      "Azure DevOps | CI/CD",
      "Redis",
      "RabbitMQ",
      "JavaScript",
      "MSTest",
    ],
  },
  {
    company: "YCEO Bilişim",
    role: {
      tr: "Veritabanı Yönetimi Stajyeri",
      en: "Database Management Intern",
    },
    period: { tr: "Haziran 2015 — Ekim 2016", en: "June 2015 — October 2016" },
    summary: {
      tr: "Firmalara hazır e-ticaret altyapısı sunan SaaS tabanlı bir e-ticaret platformu.",
      en: "A SaaS-based e-commerce platform offering ready-made e-commerce infrastructure to companies.",
    },
    highlights: [
      {
        tr: "MongoDB Replica Set ve Sharding mimarilerini VMware üzerinde oluşturduğum sanal sunucular üzerinde kurarak test ettim ve prototip çalışmalar gerçekleştirdim.",
        en: "Set up and tested MongoDB Replica Set and Sharding architectures on virtual servers I created on VMware, and performed prototype work.",
      },
      {
        tr: "MongoDB indeksleme ve aggregation optimizasyonları üzerinde çalışarak veritabanı performans iyileştirmelerine katkı sağladım.",
        en: "Contributed to database performance improvements by working on MongoDB indexing and aggregation optimizations.",
      },
      {
        tr: "VMware ortamında Windows ve Linux tabanlı sanal sunucuların oluşturulması, işletim sistemi kurulumu, yapılandırılması ve bakım süreçlerinde görev aldım.",
        en: "Took part in creating Windows and Linux-based virtual servers in a VMware environment, OS installation, configuration and maintenance processes. ",
      },
    ],
    stack: [
      "Linux",
      "MongoDB",
      "C#",
      "VMware",
      "Replica Set",
      "Sharding",
      "Windows Server",
    ],
  },
];

export type Project = {
  name: string;
  description: LocalizedText;
  stack: string[];
  status: LocalizedText;
  repo?: string;
  demo?: string;
  site?: string;
};

export const projects: Project[] = [
  {
    name: "My Personal Website",
    description: {
      tr: "Tamamen LLM tabanlı araçlar kullanılarak geliştirilmiş, Next.js, TypeScript ve Tailwind CSS ile yazılmış kişisel web sitesi.",
      en: "A personal website built entirely with LLM-based tools, written with Next.js, TypeScript, and Tailwind CSS.",
    },
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    status: { tr: "Production", en: "Production" },
    site: "https://cokunlu.dev/",
  },
  {
    name: "Size Büyük İyilik İçin Haskell Öğrenin!",
    description: {
      tr: "Fonksiyonel programlama paradigmalarını keşfederken, programlama uzmanlığımı genişletmek amacıyla tamamen fonksiyonel bir dil olan Haskell'e daldım. Bu çaba, sadece fonksiyonel programlama anlayışımı derinleştirmekle kalmadı, aynı zamanda Haskell ile ilgilenen Türk geliştiriciler için değerli kaynaklar sağladı.",
      en: "While exploring functional programming paradigms, I delved into Haskell, a purely functional language, to broaden my programming expertise. This endeavor not only deepened my understanding of functional programming but also provided valuable resources for Turkish developers interested in Haskell.",
    },
    stack: ["Haskell"],
    status: { tr: "Açık Kaynak", en: "open source" },
    repo: "https://github.com/unalman/learn-you-a-haskell-tr",
  },
  {
    name: "MoonieJoy Crochet Blog",
    description: {
      tr: "Küçük ölçekli bir el işi blog platformu. Next.js, TypeScript ve Tailwind CSS kullanılarak geliştirildi. Yönetim paneli üzerinden Markdown destekli blog yazıları oluşturma, düzenleme ve yayınlama özellikleri sunar. Frontend geliştirme sürecinde LLM tabanlı araçlardan yararlanılmıştır.",
      en: "A small crochet blog built with Next.js, Tailwind CSS, and TypeScript; featuring Markdown-based content management and static site generation for SEO-friendly structure. The frontend is written by an LLM.",
    },
    stack: [
      "C#",
      "ASP.NET Core Web API",
      "SQLite",
      "Docker",
      "Cloudflare R2 Storage",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    status: { tr: "Production", en: "Production" },
    site: "https://www.mooniecraftjoy.com/",
  },
  {
    name: "Sipariş Yönetimi Mikroservisi",
    description: {
      tr: "Sipariş alma ve sonrasında ödeme, stok rezervasyonu ve mail süreçlerini yöneten bir mikroservis örneği. Event-Driven mimari ve CQRS tasarım desenlerini kullanır.",
      en: "A microservice example that manages order placement, payment processing, stock reservation, and email workflows. Utilizes Event-Driven Architecture and CQRS design patterns.",
    },
    stack: [
      "C#",
      "ASP.NET Core Web API",
      "PostgreSQL",
      "RabbitMQ",
      "Docker",
      "xUnit",
      "Testcontainers",
      "Microservices",
      "Event-Driven Architecture",
    ],
    status: { tr: "prototip", en: "prototype" },
    repo: "https://github.com/unalman/MessageQueueProject",
  },
];

export const principles = [
  {
    title: {
      tr: "Hata için tasarla",
      en: "Design for failure",
    } as LocalizedText,
    body: {
      tr: "Her bağımlılık eninde sonunda başarısız olur. Timeout'lar, retry'lar, idempotency ve graceful degradation tasarımın bir parçasıdır, sonradan düşünülecek şey değil.",
      en: "Every dependency fails eventually. Timeouts, retries, idempotency and graceful degradation are part of the design, not an afterthought.",
    } as LocalizedText,
  },
  {
    title: {
      tr: "Önce sıkıcı teknoloji",
      en: "Boring technology first",
    } as LocalizedText,
    body: {
      tr: "Kanıtlanmış, iyi anlaşılan araçlar güven kazanır. Yenilik bir maliyettir — sadece sıkıcı seçeneğin sağlayamadığı bir yetenek kazandırdığında öde.",
      en: "Proven, well-understood tools earn trust. Novelty is a cost — pay it only when it buys a capability the boring option can't.",
    } as LocalizedText,
  },
  {
    title: {
      tr: "Koddan önce kontratlar",
      en: "Contracts before code",
    } as LocalizedText,
    body: {
      tr: "Schema'lar ve API'ler ekipler arası anlaşmalardır. Versiyonla, review et ve asla sessizce bozma.",
      en: "Schemas and APIs are agreements between teams. Version them, review them, and never break them silently.",
    } as LocalizedText,
  },
  {
    title: {
      tr: "Her şeyi gözlemle",
      en: "Observe everything",
    } as LocalizedText,
    body: {
      tr: "Ölçülmeyen bir şey production'da gerçekten var olmaz. İlk günden yapılandırılmış loglar, metrikler ve trace'ler.",
      en: "If it isn't measured, it doesn't really exist in production. Structured logs, metrics and traces from day one.",
    } as LocalizedText,
  },
];

export const architectureDiagram = `            clients
               │
               ▼
        ┌─────────────┐
        │   edge / LB │
        └──────┬──────┘
               ▼
        ┌─────────────┐      ┌─────────────┐
        │ API service ├─────▶│ PostgreSQL  │
        └──────┬──────┘      └─────────────┘
               ▼
        ┌─────────────┐      ┌─────────────┐
        │    Kafka    ├─────▶│   workers   │
        └──────┬──────┘      └──────┬──────┘
                                    ▼
                             ┌─────────────┐
                             │ cache / S3  │
                             └─────────────┘`;

export const contact = {
  heading: {
    tr: "Birlikte güvenilir bir şey inşa edelim.",
    en: "Let's build something reliable.",
  } as LocalizedText,
  blurb: {
    tr: "Backend mühendisliği rolleri, sistem tasarımı çalışmaları ve ilginç işbirliklerine açığım. Bu bir eşleşme gibi geliyorsa, mesaj atmanız yeterli.",
    en: "I'm open to backend engineering roles, system design work and interesting collaborations. If that sounds like a match, feel free to reach out.",
  } as LocalizedText,
};
