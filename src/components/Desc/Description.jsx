import Link from 'next/link';
import React from 'react';
import Foots from '../Footers/Foots';

export default function Description() {
  return (
    <>
      <div className="bg-black p-16">
        <div className="text-white xl:px-36 p-10 lg:flex justify-around">
          <div>
            <h1 className="text-4xl">
              OUR <br /> LOCATION
            </h1>
            <button className="bg-[#d5966b] text-[#fff]  hover:from-pink-500 hover:to-yellow-500">
              <Link
                href="/"
                className="rounded-lg border border-transparent px-5"
                rel="noopener noreferrer"
              >
                BACK TO HOME
              </Link>
            </button>
          </div>
          <div className="space-y-3 font-sans stress">
            <h1 className="text-[#d5966b] font-bold">99 KING STREET</h1>
            <div className="leading-tight text-sm">
              Newport <br />
              Ri 02840 <br />
              Portharcourt
            </div>
            <p className="leading-normal text-sm">
              Our newly opened gallery is located near the Edward <br /> King
              House on 99 king Street. the Modern art Gallery is <br /> free to
              all visitor and open seven days a week from <br /> 6am to 9pm{' '}
            </p>
          </div>
        </div>
      </div>

      <Foots />
    </>
  );
}
