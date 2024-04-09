import Image from "next/image";

export function Footer() {
  return (
    <>
    <footer className="bg-gray-50 h-60 flex justify-center items-center gap-7"> 
        <Image src="/fb-icon.svg" width={20} height={44} alt="" />
        <Image src="/twitter-icon.svg" width={46} height={44} alt="" />
        <Image src="/instagram-icon.svg" width={48} height={44} alt="" />
    </footer>
    </>
  );
}
