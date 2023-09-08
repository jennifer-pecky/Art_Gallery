import React from 'react';
import Image from 'next/image';
import Footer from '../Footers/Footer';

export default function Galley() {
  return (
    <>
      <div className="md:px-28 ">
        <div className="md:flex gap-14 exam">
          <div className="text-red-400 space-y-3">
            <h1 className="font-bold md:text-[4rem] text-[4rem] whitespace-nowrap leading-tight">
              YOUR DAY AT <br /> THE GALLERY
            </h1>
            <p className="font-serif font-medium md:text-2xl leading-tight LLL">
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
        <div className="md:flex gap-20 mb-9 xl:px-28">
          <div className="">
            <Image
              src="/images/78.jpg
        "
              alt="Example Image"
              width={500}
              height={500}
              priority="false"
              className="when"
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
              <div className="md:px-5 mt-4 space-y-3 p-5">
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
