import Hero from '@/components/Hero'
import UpperSection from '@/components/section/UpperSection';
import React from 'react'

import img1 from '../assets/employee-3.avif';
import img2 from '../assets/employee-2.jpg';
import img3 from '../assets/employee-1.webp';
import MiddleSection from '@/components/section/MiddleSection';
import Contact from '@/components/contact/Contact';
import Howitworks from '@/components/Howitworks';




const HomePage = () => {
  const heroImages = [
    {
      src: img1,
      title: 'Innovative solutions',
      description: 'We are an innovative Voice, SMS & cloud communications solutions provider.'
    },
    {
      src: img2,
      title: 'All your virtual numbers needs covered',
      description: 'We offer coverage of International, local, national and toll-free virtual phone numbers. '
    },
    {
      src: img3,
      title: 'International team',
      description: 'We have an experienced management team of industry specialists working from Europe, the UK and Asia.'
    }
  ];

  return (
    <div className="App">
      <Hero images={heroImages} interval={3000} />
      <UpperSection/>
      <Howitworks/>
      <MiddleSection/>
      <Contact/>
    </div>
  );
};

export default HomePage;