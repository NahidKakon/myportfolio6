"use client"

import Link from 'next/link';
import { socialLinks } from '../utils/dataBase';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import Button from '../components/Button';
import Image from 'next/image';


function ContactSection() {
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
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto my-[3rem] md:my-[6rem]"
    >
      {' '}
      <h2 className="mb-4 text-3xl font-bold text-center lg:mb-8">
        Lets Design Together
      </h2>
      <p className="mb-4 lg:mb-8 text-center mx-auto max-w-[36rem] text-black/60">
        {' '}
        I&apos;m here to bring your concepts to life. Let&apos;s
        create something amazing together!
      </p>
      <div className="flex flex-col items-center justify-center gap-6 mt-6 md:flex-row">
        <input
          placeholder="nahidshakib@outlook.com"
          type="text"
          className="px-4 py-2 border border-gray-400 rounded-lg"
        />
        <Button className="text-white bg-orange-400 hover:bg-orange-600">
          {' '}
          Contact Me
        </Button>
      {/* </div>
      <div className="items-center hidden gap-4 md:flex"> */}
          {/* {renderSocialIcons()}*/}
         </div> 
         <h2 className="mb-4 text-3xl font-bold text-center lg:mb-8">
      
    
         <div className="items-center hidden gap-4 md:flex">
          {renderSocialIcons()}
        </div> 
        </h2>
    </section>
  );
}

export default ContactSection;
