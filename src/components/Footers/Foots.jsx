import Link from 'next/link';
import React from 'react';

export default function Foots() {
  return (
    <div className="lg:px-20 bg-[#d5966b] text-black p-10">
      <div className="lg:flex gap-36 items-center p-8 lg:px-20 xl:px-32">
        <h1 className="font-sans text-[18px] font-medium">
          MODERN <br /> ART GALLERY
        </h1>

        <p className="font-sans leading-normal text-[13px] stress">
          The Modern Art Gallery is free for all visitors and open <br /> seven
          days a week from 8am to 9am. Find us at 99 <br /> Port Harcourt,
          Nigeria
        </p>

        <div className="flex space-x-7 stress">
          <Link href="/">
            <img
              src="/images/facebook.png"
              alt="Image"
              className="w-[20px] bg-white rounded-[10px]"
            />
          </Link>
          <Link href="/login">
            <img
              src="/images/instagram.png"
              alt="Image"
              className="w-[20px] bg-white rounded-[10px]"
            />
          </Link>
          <Link href="/login">
            <img
              src="/images/twitter.png"
              alt="Image"
              className="w-[20px] bg-white rounded-[10px]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
