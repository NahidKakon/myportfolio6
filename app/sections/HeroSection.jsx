"use client"

import Link from 'next/link';
import { socialLinks } from '../utils/dataBase';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import Button from '../components/Button';
import Image from 'next/image';
import Name from '../components/Name';
import Image_Component from '../components/Image Component';


function HeroSection() {
  const renderSocialIcons = () =>
    socialLinks.map(({ href, icon, label }) => (
      <Link
        key={label}
        href={href}
        aria-label={label}
        target="_blank"
        className="text-black transition hover:text-orange-500 duration-300"
      >
        {icon}
      </Link>
    ));

  const paraText = `I’m a passionate web developer and UI/UX designer with a focus on creating
          beautiful, intuitive, and user-friendly digital experiences.
          My works not only look great but also deliver seamless user interactions.`

  return (
    <section
    
      id="home"
      className="grid max-w-6xl gap-4 mx-auto my-6 md:my-12 md:grid-cols-2"
    >
      
      <div className="self-center  justify-self-center">
        <TextGenerateEffect
          className="text-base font-semibold md:text-xl"
          duration={2}
          filter={false}
          words="Hi, I am"
        />
<br/>

        <Name/>
      
      <br/>
        {/* <TextGenerateEffect
          className="text-base font-semibold text-orange-400 md:text-x7"
          duration={2}
          filter={false}
          words="Nahid Shakib"
          
        /> */}
        <TextGenerateEffect
          className="text-3xl font-extrabold md:text-4xl"
          duration={2}
          filter={false}
          words="UI & UX Designer"
        />
        <TextGenerateEffect
          className="ml-[1.0rem] md:ml-[1.5rem] mb-4 text-3xl font-extrabold md:text-4xl"
          duration={2}
          filter={false}
          words="Software developer | Front-end | Back-end"
        />
        <TextGenerateEffect
          className="mb-4 text-black/60"
          duration={1}
          filter={false}
          words={paraText}
        />
        <p className="mb-4 text-black/60"></p>
       
        <Button className="text-white bg-orange-400 hover:bg-orange-600 transform hover:rotate-y-180 transition-transform duration-5">
          Open for work
          
        </Button>

        <div className="flex items-center gap-4 mt-4 md:hidden" >
          {renderSocialIcons()}
        </div>
      </div>

      {/* <div className="transition-transform duration-300 cursor-pointer hover:-rotate-6">
        <Image
          src="/image1.gif"
          alt="my-image"
          height={500}
          width={500}
          quality={100}
          
        />

      </div> */}
        <Image_Component/>
      <div className="transition-transform duration-300 cursor-pointer hover:-rotate-6 transform=skewX(30)">
        <Image
          src="/img2.svg"
          alt="my-image"
          height={200}
          width={200}
          quality={100}
          
        />
       
      </div>


       {/* <div className="items-center hidden gap-4 md:flex">
          {renderSocialIcons()}
        </div>  */}
    </section>
  );
}

export default HeroSection;
