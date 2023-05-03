import React from 'react';
import Image from 'next/image';

export default function Art_Home() {
  return (
    <div>
      <div className="flex relative">
        <Image
          src="/images/hero2.jpg
        "
          alt="Example Image"
          width={400}
          height={100}
        />
        <Image
          src="/images/hero1.jpg
        "
          alt="Example Image"
          width={400}
          height={100}
        />
        <h1 className="absolute left-[4rem] text-[3.6rem] font-bold text-[#fff]">
          LILY`S MODERN <br /> ART GALLERY
        </h1>
      </div>
    </div>
  );
}
