export default {
  profile: {
    fullname: 'Eren Yaegar',
    speciality: 'Titan hunter',
    photo: null,
    bio: 'Seeking revenge and justice for my people',
  },
  links: [
    { id: 'address', label: 'Address', value: 'Paradis'}, 
    { id: 'phone', label: 'Phone', value: '(212)883223' },
    { id: 'email', label: 'Mail', value: 'Eren@wallsoldiers.com' },
    { id: 'github', label: 'Github', value: 'erenyaegar.github.com' },
    { id: 'homepage', label: 'HomePage', value: 'www.erenyaegar.com' },
  ],
  education: [{ // Initialize with default education as done in EducationEdit
    id: 'paradiso',
    university: 'Paradiso academy',
    speciality: 'Titan Hunter',
    yearStart: '2006',
    yearFinish: '2009',
    description: 'Hunt or be hunted, defend paradiso at all cost'
  },],
  experience: [{
    id: 'exp-1',
    job: 'Battle of the wall',
    role: 'Titan Killer',
    description: 'Destroyed the attacking titans, secured the city',
    yearStart: '2009',
    yearFinish: '2011',
  },],
  skills: [{
    id: 'skill-1',
    skill: 'Killing',
  },{
      id: 'skill-2',
      skill: 'Transform into titan'
    }],
  languages: [{
    id: 'lang-1',
    language: 'English',
  },
    {id: 'lang-2', 
      language: 'Japanese'}],
}
