module.exports = {
  title: `loafer-wock.github.io`, //이게 타이틀~
  description: `욱현이의 기술블로그`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://loafer-wock.github.io`,
  ogImage: `/memoji_wock.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: 'G-D6JTHH3ZM6', // Google Analytics Tracking ID
  author: {
    name: `정욱현`,
    bio: {
      role: ``,
      description: ['Cloud Engineer', 'Solutions Architect'],//['Cloud Engineer & Solutions Architect'],//['바보', '멍청이'],
      thumbnail: 'memoji_wock.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/loafer-wock`, // `https://github.com/zoomKoding`,
      linkedIn: `https://www.linkedin.com/in/%EC%9A%B1%ED%98%84-%EC%A0%95-2284b0215`, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `jtret2423@gmail.com`, // `zoomkoding@gmail.com`,
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
        title: '프로젝트',
        description:
          'AWS EKS를 활용한 뭐시깽이',
        techStack: ['AWS Cloud1', 'Kubernetes'],
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
