import QualityImage from '../images/star-world.png';
import ProfessionalismImage from '../images/grad-laptop.png';
import SpecialityImage from '../images/bees-n-flowers.png';

export const choose = [
  {
    id: 1,
    title: 'Quality',
    subTitle:
      'The Yandex search engine is the fourth ranked search engine in the world in terms of number of requests processed.',
    image: QualityImage,
    alt: 'globe with 5 stars',
  },
  {
    id: 2,
    title: 'Professionalism',
    subTitle:
      'Practicum by Yandex is one of the most popular online education services in Russia, allowing students to get a new profession or master a new skill.',
    image: ProfessionalismImage,
    alt: 'laptop and graduate cap',
  },
  {
    id: 3,
    title: 'Speciality',
    subTitle:
      'Our students are already working at Accenture, Tesla, Invitae. Our specialty is practical training for the real world.',
    image: SpecialityImage,
    alt: 'flowers',
  },
];

export default choose;
