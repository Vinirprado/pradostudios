import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Portuguese translations
const pt: Record<string, string> = {
  // Navigation
  'nav.about': 'SOBRE',
  'nav.services': 'SERVIÇOS',
  'nav.projects': 'PROJETOS',
  'nav.process': 'PROCESSO',
  'nav.contact': 'CONTATO',
  'nav.startProject': 'Começar meu projeto',

  // Hero Section
  'hero.title': 'Design fala quando palavras não são suficientes.',
  'hero.description': 'As marcas que mais crescem são aquelas que investem em design, especialmente na identidade visual.',
  'hero.cta': 'Como trabalhamos?',
  'hero.imageAlt': 'Showcase de design',
  'hero.viewImage': 'Ver imagem',

  // About Section
  'about.title': 'Sobre Mim',
  'about.p1': 'Sou Vinicius Ramos, designer especializado em criar identidades visuais completas que unem estratégia, estética e propósito.',
  'about.p2': 'Acredito que uma marca forte nasce do equilíbrio entre criatividade e clareza.',
  'about.p3': 'Minha missão é ajudar negócios e pessoas a se destacarem com autenticidade e solidez visual.',
  'about.imageAlt': 'Vinicius Ramos - Designer de Identidade Visual',

  // Services Section
  'services.title': 'Soluções que Ofereço',
  'services.description': 'Cada detalhe importa. Meu processo vai além do design: envolve pesquisa, estratégia e a criação de uma identidade que comunica a essência da sua marca de forma clara e memorável.',
  'services.service1.title': 'Identidade Visual Completa',
  'services.service1.description': 'Desenvolvimento completo da marca, desde o conceito até as aplicações finais.',
  'services.service2.title': 'Criação de Marca & Direção Criativa',
  'services.service2.description': 'Estratégia criativa e direcionamento visual para posicionar sua marca no mercado.',
  'services.service3.title': 'Manual de Marca e Aplicações',
  'services.service3.description': 'Guias detalhados para manter a consistência visual em todas as aplicações.',
  'services.service4.title': 'Consultoria Visual',
  'services.service4.description': 'Análise e orientação para melhorar a presença visual da sua marca.',

  // Process Section
  'process.title': 'Meu Processo Criativo',
  'process.description': 'Um processo claro, transparente e colaborativo, para que cada identidade seja única e funcional.',
  'process.step1.title': 'Descoberta & Pesquisa',
  'process.step1.description': 'Entendendo a essência e propósito da marca.',
  'process.step2.title': 'Estratégia Visual',
  'process.step2.description': 'Definindo caminhos estéticos e posicionamento.',
  'process.step3.title': 'Criação & Refinamento',
  'process.step3.description': 'Construindo a identidade com atenção a cada detalhe.',
  'process.step4.title': 'Entrega & Manual de Marca',
  'process.step4.description': 'Aplicações claras e guia para consistência visual.',

  // Contact Section
  'contact.title': 'Pronto para transformar sua marca em uma identidade inesquecível?',
  'contact.quote': 'Design fala quando palavras não são suficientes. Quem investe em design, economiza explicações.',
  'contact.cta': 'Começar meu projeto',
  'contact.tablet': 'Mesa digitalizadora',
  'contact.workspace': 'Workspace criativo',

  // Brands Section
  'brands.title': 'Marcas que confiaram no meu trabalho',
  'brands.cta': 'Começar meu projeto',

  // Portfolio Section
  'portfolio.title': 'Projetos',
  'portfolio.description': 'Algumas identidades que desenvolvi, cada uma com sua história e essência únicas.',
  'portfolio.viewProject': 'Ver projeto completo →',
  'portfolio.varanda.description': 'Identidade visual desenvolvida para cafeteria com intuito de trazer a apreciação real do café e do momento, trazendo sofisticação e proximidade.',
  'portfolio.apolocred.description': 'A Apolocred nasceu com a missão de tornar o acesso à consultoria financeira algo simples, estratégico e de qualidade.',
  'portfolio.brainstorm.description': 'Abandonamos os clichês e optamos por um visual mais limpo, moderno e inspirador. O objetivo era transmitir uma sensação de inovação e comprometimento com altos padrões no ambiente escolar.',
  'portfolio.aqua.description': 'A essência da marca trás o foco em pureza, revitalização e excelência natural. Os principais atributos estão enraizados em oferecer qualidade imaculada, promover o bem-estar e abraçar o que há de melhor na natureza.',

  // Portfolio Showcase Section
  'portfolioShowcase.title': 'Confira meu portfólio completo',
  'portfolioShowcase.description': 'Explore todos os meus projetos de design, branding e identidade visual. Cada trabalho conta uma história única de criatividade e estratégia.',
  'portfolioShowcase.cta': 'Ver no Behance',

  // Testimonials Section
  'testimonials.title': 'O que dizem sobre mim',
  'testimonials.description': 'A satisfação dos meus clientes é minha maior recompensa. Veja o que eles têm a dizer sobre nosso trabalho juntos.',
  'testimonials.drag': '← Arraste para ver mais depoimentos →',
  'testimonials.t1.content': 'O trabalho do Vinícius superou todas as minhas expectativas. A identidade visual criada para nossa empresa é simplesmente perfeita e representa exatamente o que queríamos comunicar.',
  'testimonials.t2.content': 'Profissional extremamente competente e criativo. Todo o processo foi conduzido com muito profissionalismo, desde o briefing até a entrega final. Recomendo muito!',
  'testimonials.t3.content': 'A atenção aos detalhes e o cuidado com cada elemento da marca foram impressionantes. O resultado foi uma identidade visual coesa e impactante que elevou nossa presença no mercado.',
  'testimonials.t4.content': 'Vinícius entendeu perfeitamente a essência do nosso negócio e transformou isso em uma identidade visual única. Nossos clientes adoraram a nova marca!',
  'testimonials.t5.content': 'A experiência de trabalhar com o Vinícius foi excepcional. Ele é dedicado, criativo e sempre disposto a ajustar até alcançar a perfeição. O resultado superou nossas expectativas!',
  'testimonials.t6.content': 'Profissionalismo e criatividade definem bem o trabalho dele. A nova identidade visual trouxe muito mais credibilidade para nosso negócio e atraiu novos clientes.',

  // Featured Works Carousel
  'workflow.badge': 'Workflow',
  'workflow.title1': 'Do plano',
  'workflow.title2': 'à execução',
  'workflow.title3': 'e entrega',
  'workflow.description': 'Trabalhamos com processos ágeis e bem definidos para garantir que cada projeto saia com qualidade, no prazo e sem complicação.',
  'workflow.step1.title': 'Alinhamento Estratégico',
  'workflow.step1.description': 'Começamos com uma conversa profunda para entender suas metas, desafios e objetivos. Com base nisso, construímos um briefing completo e organizamos todo o planejamento de forma clara, com prazos e entregas bem definidos desde o início.',
  'workflow.step2.title': 'Pesquisa & Conceito',
  'workflow.step2.description': 'Mergulhamos no universo da sua marca. Analisamos concorrentes, público-alvo e tendências do mercado. A partir disso, desenvolvemos conceitos criativos que traduzem a essência do seu negócio de forma única e autêntica.',
  'workflow.step3.title': 'Criação & Refinamento',
  'workflow.step3.description': 'Aqui a mágica acontece! Desenvolvemos as propostas visuais, explorando cores, formas e tipografias. Apresentamos as opções, coletamos seu feedback e refinamos até alcançar a identidade visual perfeita para sua marca.',
  'workflow.step4.title': 'Entrega Final & Suporte',
  'workflow.step4.description': 'Tudo aprovado? Você recebe os arquivos finais de forma organizada, em alta qualidade e prontos para uso. E o melhor: seguimos disponíveis para suporte, melhorias, implementações ou novos ciclos. O projeto finaliza, mas o acompanhamento continua.',
  'workflow.step': 'Etapa',

  // Footer
  'footer.rights': 'Todos os direitos reservados.',

  // 404
  'notFound.title': '404',
  'notFound.message': 'Ops! Página não encontrada',
  'notFound.link': 'Voltar para Home',
};

// English translations
const en: Record<string, string> = {
  // Navigation
  'nav.about': 'ABOUT',
  'nav.services': 'SERVICES',
  'nav.projects': 'PROJECTS',
  'nav.process': 'PROCESS',
  'nav.contact': 'CONTACT',
  'nav.startProject': 'Start my project',

  // Hero Section
  'hero.title': 'Design speaks when words are not enough.',
  'hero.description': 'The fastest growing brands are those that invest in design, especially visual identity.',
  'hero.cta': 'How we work?',
  'hero.imageAlt': 'Design showcase',
  'hero.viewImage': 'View image',

  // About Section
  'about.title': 'About Me',
  'about.p1': "I'm Vinicius Ramos, a designer specialized in creating complete visual identities that combine strategy, aesthetics, and purpose.",
  'about.p2': 'I believe that a strong brand is born from the balance between creativity and clarity.',
  'about.p3': 'My mission is to help businesses and people stand out with authenticity and visual strength.',
  'about.imageAlt': 'Vinicius Ramos - Visual Identity Designer',

  // Services Section
  'services.title': 'Solutions I Offer',
  'services.description': "Every detail matters. My process goes beyond design: it involves research, strategy, and the creation of an identity that clearly and memorably communicates your brand's essence.",
  'services.service1.title': 'Complete Visual Identity',
  'services.service1.description': 'Complete brand development, from concept to final applications.',
  'services.service2.title': 'Brand Creation & Creative Direction',
  'services.service2.description': 'Creative strategy and visual direction to position your brand in the market.',
  'services.service3.title': 'Brand Manual and Applications',
  'services.service3.description': 'Detailed guides to maintain visual consistency across all applications.',
  'services.service4.title': 'Visual Consulting',
  'services.service4.description': "Analysis and guidance to improve your brand's visual presence.",

  // Process Section
  'process.title': 'My Creative Process',
  'process.description': 'A clear, transparent, and collaborative process, so that each identity is unique and functional.',
  'process.step1.title': 'Discovery & Research',
  'process.step1.description': "Understanding the brand's essence and purpose.",
  'process.step2.title': 'Visual Strategy',
  'process.step2.description': 'Defining aesthetic paths and positioning.',
  'process.step3.title': 'Creation & Refinement',
  'process.step3.description': 'Building the identity with attention to every detail.',
  'process.step4.title': 'Delivery & Brand Manual',
  'process.step4.description': 'Clear applications and guide for visual consistency.',

  // Contact Section
  'contact.title': 'Ready to transform your brand into an unforgettable identity?',
  'contact.quote': 'Design speaks when words are not enough. Those who invest in design save explanations.',
  'contact.cta': 'Start my project',
  'contact.tablet': 'Drawing tablet',
  'contact.workspace': 'Creative workspace',

  // Brands Section
  'brands.title': 'Brands that trusted my work',
  'brands.cta': 'Start my project',

  // Portfolio Section
  'portfolio.title': 'Projects',
  'portfolio.description': 'Some identities I developed, each with its unique story and essence.',
  'portfolio.viewProject': 'View full project →',
  'portfolio.varanda.description': 'Visual identity developed for a coffee shop with the aim of bringing the real appreciation of coffee and the moment, bringing sophistication and closeness.',
  'portfolio.apolocred.description': 'Apolocred was born with the mission of making access to financial consulting simple, strategic, and quality.',
  'portfolio.brainstorm.description': 'We abandoned clichés and opted for a cleaner, more modern and inspiring look. The goal was to convey a sense of innovation and commitment to high standards in the school environment.',
  'portfolio.aqua.description': 'The essence of the brand brings focus on purity, revitalization, and natural excellence. The main attributes are rooted in offering immaculate quality, promoting well-being, and embracing the best of nature.',

  // Portfolio Showcase Section
  'portfolioShowcase.title': 'Check out my complete portfolio',
  'portfolioShowcase.description': 'Explore all my design, branding, and visual identity projects. Each work tells a unique story of creativity and strategy.',
  'portfolioShowcase.cta': 'View on Behance',

  // Testimonials Section
  'testimonials.title': 'What they say about me',
  'testimonials.description': "My clients' satisfaction is my greatest reward. See what they have to say about our work together.",
  'testimonials.drag': '← Drag to see more testimonials →',
  'testimonials.t1.content': "Vinícius's work exceeded all my expectations. The visual identity created for our company is simply perfect and represents exactly what we wanted to communicate.",
  'testimonials.t2.content': 'Extremely competent and creative professional. The entire process was conducted with great professionalism, from the briefing to the final delivery. I highly recommend!',
  'testimonials.t3.content': 'The attention to detail and care with each brand element was impressive. The result was a cohesive and impactful visual identity that elevated our market presence.',
  'testimonials.t4.content': "Vinícius perfectly understood the essence of our business and transformed it into a unique visual identity. Our customers loved the new brand!",
  'testimonials.t5.content': 'The experience of working with Vinícius was exceptional. He is dedicated, creative, and always willing to adjust until reaching perfection. The result exceeded our expectations!',
  'testimonials.t6.content': 'Professionalism and creativity define his work well. The new visual identity brought much more credibility to our business and attracted new customers.',

  // Featured Works Carousel
  'workflow.badge': 'Workflow',
  'workflow.title1': 'From plan',
  'workflow.title2': 'to execution',
  'workflow.title3': 'and delivery',
  'workflow.description': 'We work with agile and well-defined processes to ensure that each project comes out with quality, on time, and without complications.',
  'workflow.step1.title': 'Strategic Alignment',
  'workflow.step1.description': 'We start with a deep conversation to understand your goals, challenges, and objectives. Based on this, we build a complete briefing and organize all planning clearly, with deadlines and deliveries well defined from the start.',
  'workflow.step2.title': 'Research & Concept',
  'workflow.step2.description': "We dive into your brand's universe. We analyze competitors, target audience, and market trends. From this, we develop creative concepts that translate the essence of your business in a unique and authentic way.",
  'workflow.step3.title': 'Creation & Refinement',
  'workflow.step3.description': "Here the magic happens! We develop visual proposals, exploring colors, shapes, and typography. We present the options, collect your feedback, and refine until we achieve the perfect visual identity for your brand.",
  'workflow.step4.title': 'Final Delivery & Support',
  'workflow.step4.description': 'Everything approved? You receive the final files in an organized manner, in high quality and ready to use. And the best part: we remain available for support, improvements, implementations, or new cycles. The project ends, but the follow-up continues.',
  'workflow.step': 'Step',

  // Footer
  'footer.rights': 'All rights reserved.',

  // 404
  'notFound.title': '404',
  'notFound.message': 'Oops! Page not found',
  'notFound.link': 'Return to Home',
};

const translations: Record<Language, Record<string, string>> = { pt, en };

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'pt';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
