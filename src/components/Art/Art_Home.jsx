import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Art_Home() {
  return (
    <div>
      <div className="flex mb-20">
        <div className="flex relative">
          <div className="">
            <Image
              src="/images/hero2.jpg
        "
              alt="Example Image"
              width={400}
              height={100}
              priority="false"
            />
          </div>
          <div className="local"></div>

          <h1 className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2  bg-clip-text text-transparent bg-gradient-to-r from-rose-50 via-orange-300 to-lime-500 text-[4rem] font-bold">
            <div>LILY`S MODERN</div>
            <div>
              <span className="text-lime-300">ART</span> GALLERY
            </div>
          </h1>
        </div>
        <div className="z-10 mt-[10rem] mr-9">
          <p className="font-sans font-light text-3xl text-gray-700 italic leading-tight">
            the arts in the collection of Lily`s <br /> Art Gallery all started
            from a <br /> spark of inspiration. Will these <br /> pieces
            inspire? Visit us and find out.
          </p>
          <button>
            <Link
              href="/login"
              className="rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              rel="noopener noreferrer"
            >
              click here
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
