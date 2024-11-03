'use client';
import { Link } from 'lucide-react';
import { navLinks, socialLinks } from '../utils/dataBase';
import Image from 'next/image';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {

   return (
    <>
    <footer className="mt-[3rem] flex flex-col justify-center items-center gap-6 md:gap-12 py-12 bg-[#f8f8f8]">
      <Image
        src="/logo.svg"
        alt="logo"
        // className="transition-transform duration-300 cursor-pointer hover:-rotate-6"
        width={150}
        height={50}
      />
      <p className="text-sm text-black/60">
        Copyright ©2024{' '}
        <span className="text-orange-400">Code geeks</span> All rights
        reserved. Inc.
      </p>
    </footer>
    </>
  );
}

export default Footer;
