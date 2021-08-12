import DataAnalysis from '../images/data-analysis.png';
import WebDev from '../images/web-dev.png';
import DataScience from '../images/data-science.png';

const requests = [
  {
    id: 1,
    hashtag: '#programming',
    title: 'Web development',
    image: DataAnalysis,
    alt: 'website drawing',
    link: '/profession-hero/web-dev',
  },
  {
    id: 2,
    hashtag: '#analysis',
    title: 'Data analysis',
    image: WebDev,
    alt: 'snowglobe with math inside',
    link: '/profession-hero/data-analysis',
  },
  {
    id: 3,
    hashtag: '#analysis',
    title: 'Data science',
    image: DataScience,
    alt: "rubik's cube",
    link: '/profession-hero/data-science',
  },
];

export default requests;
