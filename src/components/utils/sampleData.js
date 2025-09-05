export default {
  profile: {
    fullname: 'Sylvan Prometheus',
    speciality: 'Software Developer',
    photo: '/1313942.png',
    bio: 'Chillout but determined, likes to get things done and crossing a task. Love nature, cats and dogs... And pigs too. Journey before destination',
  },
  links: [
    { id: 'address', label: 'Address', value: 'Tyre, South governate, Lebanon' },
    { id: 'phone', label: 'Phone', value: '(212)883223' },
    { id: 'email', label: 'Mail', value: 'sylvan@daydreaming.com' },
    { id: 'github', label: 'Github', value: 'sylvan.github.com' },
    { id: 'homepage', label: 'HomePage', value: 'www.daydreamer.com' },
  ],
  education: [{ // Initialize with default education as done in EducationEdit
    id: 'paradiso',
    university: 'American university of Beirut',
    speciality: 'Computer and communication Engineer',
    yearStart: '2001',
    yearFinish: '2005',
    description: 'Electrical systems, electronic circuits, fourier analyses, projects in power supply units'
  }, {
    id: 'liu',
    university: 'Lebanese International University',
    speciality: 'Computer Science',
    yearStart: '2006',
    yearFinish: '2009',
    description: 'Algorithms and data structures, knowledge base systems, A*, Djikstra problem-solving algorithm. Project in university registration system',
  }],
  experience: [{
    id: 'exp-1',
    job: 'Smart lb',
    role: 'Software developer',
    description: 'Software development on sharepoint using C# as main programming languages, duties included creating widgets that can be plugged and played directly into any sharepoint site',
    yearStart: '2009',
    yearFinish: '2011',
  },],
  skills: [{
    id: 'skill-1',
    skill: 'javascript',
  }, {
    id: 'skill2',
    skill: 'react',
  }, {
    id: 'skill-3',
    skill: 'vue'
  },{
      id: 'skill4',
      skill: 'css'
    },{
      id: 'skill5',
      skill: 'python'
    }],
  languages: [{
    id: 'lang-1',
    language: 'English',
  },
  {
    id: 'lang-2',
    language: 'French'
  },{
      id: 'lang3',
      language: 'Arabic'
    }],
}
