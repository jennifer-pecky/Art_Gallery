import React from 'react';
import Image from 'next/image';
import Footer from '../Footers/Footer';

export default function Galley() {
  return (
    <>
      <div className="lg:px-20 ">
        <div className="lg:flex gap-14 exam  xl:px-28">
          <div className="text-red-400 space-y-5 mt-9">
            <h1 className="font-bold lg:text-[4rem] text-[4.5rem] whitespace-nowrap leading-tight">
              YOUR DAY AT <br /> THE GALLERY
            </h1>
            <p className="font-serif font-medium lg:text-2xl text-[2.1rem] whitespace-nowrap">
              Wander through our distinct <br /> collection and find new
              insights <br /> about our artists. Dive into the <br /> details of
              their creative process
            </p>
          </div>
          <div className="mere">
            <Image
              src="/images/fase.jpg
        "
              alt="Example Image"
              width={700}
              height={0}
              priority="false"
              className="wave"
            />
          </div>
        </div>
        <br />
        {/* Second layer */}
        <div className="flex gap-20 mb-4 xl:px-28">
          <div className="">
            <Image
              src="/images/78.jpg
        "
              alt="Example Image"
              width={500}
              height={500}
              priority="false"
              className=""
            />
          </div>
          <div className="space-y-6">
            <div className="">
              <Image
                src="/images/hero3.jpg
        "
                alt="Example Image"
                width={400}
                height={500}
                priority="false"
                className="wave"
              />
            </div>

            <div className="bg-[black] text-[#fff] p-4 w-[100%] h-[45%]">
              <div className="px-5 mt-4 space-y-3">
                {' '}
                <h1 className="text-[2rem] leading-tight font-bold">
                  COME & BE <br />
                  INSPIRED
                </h1>
                <p className="font-serif">
                  We`re excited to Welcome you to <br /> our gallery and see how
                  our <br /> collections infl uence you.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
