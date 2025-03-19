// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'jonibarreche', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['jonibarreche/parking-management-system', 'jonibarreche/PiVision', 'jonibarreche/tesla-stock-analysis', 'jonibarreche/email-sender', 'jonibarreche/WeatherPy', 'jonibarreche/music-catalog-manager', 'jonibarreche/SimpleBankApp', 'jonibarreche/JavaLearningExamples'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [],
    },
  },
  profile: {
    image: 'https://i.ibb.co/ZzvzCSYn/1727782932108.jpg', // Enlace directo a la imagen
    role: 'Software Engineer & Data Scientist',
    bio: 'Im a software engineer and data scientist with a passion for building scalable and efficient end-to-end systems. I have a strong interest in machine learning and artificial intelligence.',
  },
  seo: {
    title: 'Jon Ibarreche Arroyo',
    description: 'Jon Ibarreche Arroyo - Software Developer Portfolio',
    imageURL: '',
  },
  social: {
    linkedin: 'jonibarreche',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    leetcode: '',
    skype: '',
    telegram: '',
    website: 'https://jonibarreche.com',
    phone: '',
    email: 'jonibarretxe00@gmail.com',
  },
  resume: {
    fileUrl: '',
  },
  skills: [
    // Programming Languages
    'Python',
    'Java',
    'C++',
    'C',
    'R',
    'SQL',
    'HTML',    
    // Databases
    'MySQL',
    'MongoDB',
    
    // AI & Machine Learning
    'Machine Learning',
    'Deep Learning',
    'Artificial Intelligence',
    'Neural Networks',
    'TensorFlow',
    'Scikit-learn',
    'Large Language Models (LLMs)',
    'Hyperparameter Tuning',
    'Unsupervised Learning',
    
    // Data Science
    'Data Science',
    'Data Mining',
    'Big Data',
    'Data Structures',
    'Data Modeling',
    'Process Analysis',
    
    // DevOps & Tools
    'Git',
    'Docker'
  ],
  experiences: [
    {
      company: 'ALT-EDIC',
      position: 'Data Scientist',
      from: '2025',
      to: 'Present',
      companyLink: 'https://language-data-space.ec.europa.eu/related-initiatives/alt-edic_en',
      description: [
        'Building innovative Large Language Models with robust multilingual and multimodal capabilities for the European Language Data Space.',
        'Developing a specialized evaluation framework for ALT-EDIC that streamlines the testing and deployment of language models across multiple European languages.',
      ]
    },
    {
      company: 'University of Granada',
      position: 'Researcher',
      from: '2025',
      to: 'Present',
      companyLink: 'https://www.ugr.es/',
      description: [
        'Continuing research based on my Master\'s Thesis, which received a 9.9 grade with Honors distinction.',
        'Focused on advancing the methodologies and applications of Large Language Models developed during my Master\'s final project.',
      ]
    },
    {
      company: 'NTT DATA',
      position: 'Software Engineer',
      from: 'February 2023',
      to: 'September 2023',
      companyLink: 'https://www.nttdata.com/global/en/',
      description: [
        'Worked in the data analysis department of the company ',
        'Worked with NTT DATA\'s clients BBVA bank to improve the quality of the data of the company.',
      ]
    }
  ],
  certifications: [
    {
      name: 'Verified Certificate for Data Science: Machine Learning',
      body: 'HarvardX',
      year: '2025',
      link: 'https://courses.edx.org/certificates/75228d62993241f1b6e6f7b9915e61b3'
    },
    {
      name: 'Introduction to Large Language Models',
      body: 'Linkedin Learning',
      year: '2024',
      link: 'https://www.linkedin.com/learning/certificates/d29c6b6393ddd457faed70f7a10db35857ad2b9c04ec4d685b981f9f06cb6ff6'
    },
    {
      name: 'Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization',
      body: 'Coursera',
      year: '2023',
      link: 'https://www.coursera.org/account/accomplishments/certificate/7RKBK4GWEGRL'
    },
    {
      name: 'Structuring Machine Learning Projects',
      body: 'Coursera',
      year: '2023',
      link: 'https://www.coursera.org/account/accomplishments/certificate/LH29Z2JYDF6L',
    },
    {
      name: 'Neural Networks and Deep Learning',
      body: 'Coursera',
      year: '2023',
      link: 'https://www.coursera.org/account/accomplishments/certificate/VA7L9D4Q4WSA'
    },
    {
      name: 'Machine Learning with Python',
      body: 'IBM',
      year: '2023',
      link: 'https://courses.cognitiveclass.ai/certificates/09d4bc73782a4d3db91b8b13414df2fa'
    },
    {
      name: 'Deploying Scalable Machine Learning for Data Science',
      body: 'Linkedin Learning',
      year: '2023',
      link: 'https://www.linkedin.com/learning/certificates/375a695db3a1d19e6496630a9794baea9e93a4c857cf0ff096dfaa75dc8b97e6?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bh%2FOLUDJGTZSC8MSxVTH9GQ%3D%3D'
    },
    {
      name: 'Learn Python programming',
      body: 'Udemy',
      year: '2022',
      link: 'https://www.udemy.com/certificate/UC-1413310e-8af8-477e-9228-b5dd224ab0fc/'
    },
  ],
  awards: [
    {
      title: "Master's Thesis with Honors 9.9 - Data Science, University of Granada",
      year: '2024',
    },
  ],
  educations: [
    {
      institution: 'University of Granada · 9.9 Master\'s Thesis with Honors',
      degree: 'Master\'s Degree in Data Science and Computer Engineering',
      from: '2023',
      to: '2024',
    },
    {
      institution: 'University of Deusto',
      degree: 'Bachelor\'s Degree in Computer Engineering',
      from: '2018',
      to: '2023',
    },
  ],
  publications: [
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description: ''
    },
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description: ''
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  // googleAnalytics: {
  //   id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  // },
  // // Track visitor interaction and behavior. https://www.hotjar.com
  // hotjar: {
  //   id: '',
  //   snippetVersion: 6,
  // },
  themeConfig: {
    defaultTheme: 'dim',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  enablePWA: true,
};

export default CONFIG;
