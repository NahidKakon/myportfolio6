

import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

export const navLinks = [
  //  {id: 'name.svg' }, 
  { id: 'home', label: 'Home' },
  { id: 'about-Me', label: 'About Me' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
//   { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

export const socialLinks = [
  {
    href: 'https://www.linkedin.com',
    icon: <FaLinkedin className="size-5" />,
    label: 'LinkedIn',
  },
  {
    href: 'https://www.facebook.com',
    icon: <FaFacebook className="size-5" />,
    label: 'Facebook',
  },
  {
    href: 'https://www.github.com',
    icon: <FaGithub className="size-5" />,
    label: 'GitHub',
  },
];

export const skills = [
  { name: 'Web development', value: 90 },
  { name: 'Front-end design', value: 85 },

  { name: 'Back-end design', value: 88 },
  { name: 'Special interest in sustainability (eg. social value, ESG) ', value: 70 },
  { name: 'AI focused project ', value: 70 },
];

export const projects = [
  {
    imgSrc: '/image1.gif',
    altText: 'E-commerce Website',
    title: 'E-commerce Website',
  },
  {
    imgSrc: '/key_skills.gif',
    altText: 'Portfolio Website',
    title: 'Portfolio Website',
  },
  {
    imgSrc: '/web/web-img-3.png',
    altText: 'Mobile App Design',
    title: 'Mobile App Design',
  },
  {
    imgSrc: '/web/web-img-4.png',
    altText: 'Corporate Website',
    title: 'Corporate Website',
  },
  {
    imgSrc: '/web/web-img-5.png',
    altText: 'Landing Page Design',
    title: 'Landing Page Design',
  },
  {
    imgSrc: '/web/web-img-6.png',
    altText: 'Social Media Dashboard',
    title: 'Social Media Dashboard',
  },
];

export const services = [
  {
    imgSrc: '/ui.svg',
    altText: 'UI/UX Design',
    title: 'UI/UX Design',
    description:
      'Creating intuitive and beautiful user interfaces that enhance user experiences and streamline interactions.',
  },
  {
    imgSrc: '/web.svg',
    altText: 'Web Design',
    title: 'Web Design',
    description:
      'Designing responsive and visually stunning websites that provide seamless navigation across all devices.',
  },
  {
    imgSrc: '/front.svg',
    altText: 'App Design',
    title: 'Front-end Development',
    description:
      'Developing functional and user friendly front-end for e-commerce, blogging, process flowchart and manymore.'},
  {
    imgSrc: '/back.svg',
    altText: 'Graphic Design',
    title: 'Back-end Development',
    description:
      'Building database, sign in functionality for secure use in e-commerce and others.',
  },
];

// export const testimonials = [
//   {
//     name: 'John Doe',
//     review:
//       'Working with you was an absolute pleasure. Your attention to detail and creativity made the process smooth and enjoyable. I am thrilled with the final product!',
//     imgSrc: '/profile/profile-1.jpg ',
//   },
//   {
//     name: 'Jane Smith',
//     review:
//       'The design exceeded my expectations! You understood my needs perfectly and delivered a stunning website that truly reflects my brand.',
//     imgSrc: '/profile/profile-2.jpg',
//   },
//   {
//     name: 'Michael Lee',
//     review:
//       'Your professionalism and dedication to the project were outstanding. I appreciate how you went above and beyond to make sure everything was perfect!',
//     imgSrc: '/profile/profile-3.jpg',
//   },
//   {
//     name: 'Emily Davis',
//     review:
//       'I was blown away by your ability to bring my vision to life. The end result is beautiful and exactly what I was hoping for. Thank you!',
//     imgSrc: '/profile/profile-4.jpg',
//   },
// ];
