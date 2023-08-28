module.exports = {
  title: `loafer-wock.github.io`, //이게 타이틀~
  description: `욱현이의 기술블로그`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://loafer-wock.github.io`,
  ogImage: `blog.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: 'G-MRY3HXFBW0', // Google Analytics Tracking ID
  author: {
    name: `정욱현`,
    bio: {
      role: ``,
      description: ['Cloud Engineer', 'Solutions Architect'],//['Cloud Engineer & Solutions Architect'],//['바보', '멍청이'],
      thumbnail: 'memoji_01.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/loafer-wock`,
      linkedIn: `https://www.linkedin.com/in/%EC%9A%B1%ED%98%84-%EC%A0%95-2284b0215`,
      email: `jtret2423@gmail.com`, 
    },
  },
  
  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      //{
      //  date: '2023.01 ~ ',
      //  activity: 'Megazone Cloud(Seoul, South Korea) / AWS Solutions Architect',
      //  links: {
      //    post: '/gatsby-starter-zoomkoding-introduction',
      //    github: 'https://github.com/loafer-wock/loafer-wock.github.io',
      //    demo: 'https://github.com/loafer-wock',
      //  },
      //},
      {
        date: '2018.10 ~ 2020.10',
        activity: 'Netmarble(Seoul, South Korea) | Security Solution Engineer',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        date: '2020.12 ~ 2022.12',
        activity: 'Cloudgram(Seoul, South Korea) | AWS Solutions Architect',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        date: '2023.01 ~ ',
        activity: 'Megazone Cloud(Seoul, South Korea) | AWS Solutions Architect',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // About의 Project 부분
      // ========================================================
      {
        title: '캐나다 엔터프라이즈 인프라 환경 마이그레이션 프로젝트',
        description:
          '북미 인프라 캐나다 서비스 마이그레이션', //123
        techStack: ['AWS Cloud', 'Migration'],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        title: '금융고객사 AI콜봇 인프라 구축',
        description:
          'AWS LandingZone 환경 인프라 구축', //123
        techStack: ['AWS Cloud', 'Docker', 'Landingzone'],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        title: '국내 엔터프라이즈 ERP AWS 마이그레이션 구축',
        description:
          'IDC환경에서 AWS Cloud 마이그레이션 구축', //123
        techStack: ['Terraform', 'AWS Cloud', 'Site to Site VPN'],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        title: '국내 방위산업체 클러스터 구축',
        description:
          'AWS EKS를 활용한 MSA환경 구축 및 대규모 IoT센터 데이터 처리 환경 구축', //123
        techStack: ['Terraform', 'AWS Cloud', 'AWS EKS for Kubernetes', 'Site to Site VPN'],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        title: '국내 교육관련 미디어 서비스 구축 프로젝트',
        description:
          '국내 교육업체 CDN 미디어 서비스 구축', //123
        techStack: ['Terraform', 'AWS Cloud', 'CI/CD', 'Lambda', 'CDN'],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        title: '경남교육청 주관 국제컨퍼런스 강연',
        description:
          'AWS Cloud9를 활용한 코딩교육 강연', //123
        techStack: ['AWS Cloud', 'Cloud9'],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
    ],
  },
};


