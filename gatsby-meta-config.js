module.exports = {
  title: `loafer-wock.github.io`, //이게 타이틀~
  description: `욱현의 기술블로그`,
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
      //{
      //  title: '개발 블로그 테마 개발',
      //  description:
      //    '개발 블로그를 운영하는 기간이 조금씩 늘어나고 점점 많은 생각과 경험이 블로그에 쌓아가면서 제 이야기를 담고 있는 블로그를 직접 만들어보고 싶게 되었습니다. 그동안 여러 개발 블로그를 보면서 좋았던 부분과 불편했던 부분들을 바탕으로 레퍼런스를 참고하여 직접 블로그 테마를 만들게 되었습니다.',
      //  techStack: ['gatsby', 'react'],
      //  thumbnailUrl: 'blog.png',
      //  links: {
      //    post: '/gatsby-starter-zoomkoding-introduction',
      //    github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
      //    demo: 'https://www.zoomkoding.com',
      //  },
      //},
    ],
  },
};
