import logo from '../images/practicum-logo.png';

const messages = [
  {
    id: 1,
    owner: 'practicum',
    message:
      'Practicum by Yandex is a kind of boot camp. Our goal is to help ambitious and passionate people to master it and find their first job. At the same time, the level of our training allows graduates to carry out high-quality real projects of companies under the review of experienced mentors.',
    direction: 'row',
    backgroundColor: 'orange',
    text: 'white',
    borderRadius: '14px 14px 14px 0px',
    backgroundImage: logo,
    displayLogo: 'inline-block',
  },
  {
    id: 2,
    owner: 'user',
    message: 'Who will solve the problems? How much does it cost?',
    direction: 'row-reverse',
    backgroundColor: 'white',
    text: 'black',
    borderRadius: '14px 14px 0px 14px',
    backgroundImage: logo,
    displayLogo: 'none',
  },
  {
    id: 3,
    owner: 'practicum',
    message:
      'It is a win-win situation: we take real tasks from real companies and give them to graduates of Data Science and Data Analytics courses. The results of these tasks will be repeatedly checked by curators and returned to the customer as ordered for free.',
    direction: 'row',
    backgroundColor: 'orange',
    text: 'white',
    borderRadius: '14px 14px 14px 0px',
    backgroundImage: logo,
    displayLogo: 'block',
  },
  {
    id: 4,
    owner: 'user',
    message: 'Why is it free?',
    direction: 'row-reverse',
    backgroundColor: 'white',
    text: 'black',
    borderRadius: '14px 14px 0px 14px',
    backgroundImage: logo,
    displayLogo: 'none',
  },
  {
    id: 5,
    owner: 'practicum',
    message:
      'Because Practicum has students who are eager to gain real life experience, find them interesting and useful, and are ready to take on your tasks',
    direction: 'row',
    backgroundColor: 'orange',
    text: 'white',
    borderRadius: '14px 14px 14px 0px',
    backgroundImage: logo,
    displayLogo: 'block',
  },
  {
    id: 6,
    owner: 'user',
    message: "Wow! I'm ready to start!",
    direction: 'row-reverse',
    backgroundColor: 'white',
    text: 'black',
    borderRadius: '14px 14px 0px 14px',
    backgroundImage: logo,
    displayLogo: 'none',
  },
];

export default messages;
