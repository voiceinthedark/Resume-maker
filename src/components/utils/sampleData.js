export default {
  profile: {
    fullname: 'Jim Constanza',
    speciality: 'Software Developer',
    bio: 'Pertinent developer',
  },
  links: [
    { id: 'phone', label: 'Phone', value: '01-222222' },
    { id: 'email', label: 'Mail', value: 'jim@jimination.com' },
    { id: 'github', label: 'Github', value: 'jimination.github.com' },
    { id: 'homepage', label: 'HomePage', value: 'www.jimination.com' },
  ],
  education: [{ // Initialize with default education as done in EducationEdit
    id: 'liu',
    university: 'LIU',
    speciality: 'Computer Science',
    yearStart: '2006',
    yearFinish: '2009',
  },],
  experience: [{
    id: 'exp-1',
    job: 'Smartlb',
    role: 'Software Developer',
    description: 'A C# programmer working on microsoft',
    yearStart: '2009',
    yearFinish: '2011',
  },],
  skills: [{
    id: 'skill-1',
    skill: 'Gardening',
  },],
  languages: [{
    id: 'lang-1',
    language: 'English',
  },],
}
