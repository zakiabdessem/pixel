import React from "react";
import Image from "next/image";
function Footer() {
  return (
    <footer className="w-full bg-[#ECB176] h-64 relative bottom-0">
      <div className="flex flex-col justify-start items-start text-white p-16 pb-0">
        <h1>Contact Us</h1>
        <div>
          <div className="flex justify-center items-center">
            <Image src="/whats-app.svg" alt="" width={24} height={24} />

            <div className="flex flex-col justify-start items-start m-2">
              <h1>Call us</h1>
              <p>+213 0673161517</p>
            </div>
          </div>
          <a
            target="_blanc"
            href="https://www.instagram.com/_sul._tana/"
            className="flex justify-start items-center">
            <Image src="/instagram.svg" alt="" width={24} height={24} />

            <div className="flex flex-col justify-start items-start m-2">
              <h1>Instagram</h1>
            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-white">
        <p>© 2021 Sultana. All rights reserved</p>
        <a target="_blanc" href="https://linktr.ee/zakabd">Developed by Zak</a>
      </div>
    </footer>
  );
}

export default Footer;
