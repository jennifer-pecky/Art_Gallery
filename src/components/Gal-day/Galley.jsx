import React from 'react';
import Image from 'next/image';

export default function Galley() {
  return (
    <div className="lg:px-20 xl:px-20">
      <div
        className="lg:grid grid-cols-2 exam
       p-7"
      >
        <div
          className="text-red-400 space-y-5
        "
        >
          <h1 className="font-bold lg:text-[4rem] text-[5rem] whitespace-nowrap leading-tight">
            YOUR DAY AT <br /> THE GALLERY
          </h1>
          <p className="font-serif font-medium lg:text-2xl text-[2.3rem] whitespace-nowrap">
            Wander through our distinct <br /> collection and find new insights{' '}
            <br /> about our artists. Dive into the <br /> details of their
            creative process
          </p>
        </div>
        <div className="w-[100%] mere">
          <Image
            src="/images/fase.jpg
        "
            alt="Example Image"
            width={500}
            height={500}
            priority="false"
            className="wave"
          />
        </div>
      </div>
    </div>
  );
}
