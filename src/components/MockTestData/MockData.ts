import Experience from '../complex/Experience'

export const mockUserDetails = {
  name: 'John Doe',
  AboutmeHeading: 'Passionate Frontend Developer',
  skillSet: [
    {
      name: 'React',
      excellency: 90,
      image: {
        asset: {
          url: 'https://example.com/profile.jpg'
        }
      },
      index: 1
    },
    {
      name: 'Node.js',
      excellency: 80,
      image: {
        asset: {
          url: 'https://example.com/profile.jpg'
        }
      },
      index: 2
    }
  ],
  Project: [
    {
      ProjectName: 'TrendMart',
      ProjectDescription:
        'Trendmart is an ecommerce website that has a variety of products for sale.',
      ProjectUrl: 'https://trend-mart-app.vercel.app/',
      index: 1,
      skills: ['React', 'Typescript'],
      ProjectImage: {
        asset: {
          url: 'https://example.com/profile.jpg'
        }
      }
    }
  ],
  AboutmeDescription:
    'I specialize in crafting interactive and visually appealing user experiences. With a strong foundation in React, TypeScript, and Tailwind CSS, I build high-performance applications that bring ideas to life.',
  AboutmeCheckmark: [
    {
      Text: '5+ Years of Experience',
      BackgroundColorInTailwind: 'bg-blue-500'
    },
    {
      Text: '100+ Completed Projects',
      BackgroundColorInTailwind: 'bg-green-500'
    },
    {
      Text: 'Trusted by Clients Worldwide',
      BackgroundColorInTailwind: 'bg-yellow-500'
    }
  ],
  completedProjects: 120,
  yearsExperience: 5,
  websiteLaunched: 50,
  satisfiedCustomers: 200,
  description: 'A passionate software developer.',
  NameAcronym: 'JD',
  detailedDescription: [
    'I have been developing web applications for over 5 years.',
    'I specialize in JavaScript and React, but also have experience with Node.js and Express.',
    'I enjoy learning new technologies and improving my skills.'
  ],
  location: 'New York, USA',
  availability: true,
  githubLink: 'https://github.com/johndoe',
  linkedinLink: 'https://linkedin.com/in/johndoe',
  profileImage: {
    asset: {
      url: 'https://example.com/profile.jpg'
    }
  },
  cvDocument: {
    asset: {
      url: 'https://example.com/johndoe_cv.pdf'
    }
  },
  FooterText: 'Lorem ipsum ',
  work: [
    {
      name: 'TrendMart',
      description:
        'Trendmart is an ecommerce website that has a variety of products for sale.',
      ProjectUrl: 'https://trend-mart-app.vercel.app/',
      skills: ['React', 'Typescript'],
      _rawProjectImage: {
        asset: {
          _ref: 'image-ef42e743baa29d3d7cd3b2242557bc7ddd3f2625-1916x854-png'
        }
      }
    }
  ],
  Shortdescription: 'Lorem',
  reviews: [
    {
      name: 'John Doe',
      description: 'Hello world',
      background: 'Freelancer'
    }
  ],
  Serivces: [
    {
      ServiceName: 'Web Development',
      ServiceDescription:
        'Building responsive and high-performance web applications.',
      ServiceImage: {
        asset: {
          url: 'https://example.com/profile.jpg'
        }
      }
    },
    {
      ServiceName: 'UI/UX Design',
      ServiceDescription:
        'Designing visually appealing and user-friendly interfaces.',
      ServiceImage: {
        asset: {
          url: 'https://example.com/profile.jpg'
        }
      }
    }
  ],
  Experience: [
    {
      CompanyName: 'Creative Dev Studio',
      PositionName: 'Software Engineer',
      date: '2024-01-01',
      points: [
        'Led a team to deliver high-quality software solutions, ensuring scalable architecture and maintainable code. Focused on modernizing legacy systems with Node.js and microservices.'
      ],
      icon: {
        asset: {
          url: 'https://example.com/profile.jpg'
        }
      },
      index: 1
    }
  ]
}
