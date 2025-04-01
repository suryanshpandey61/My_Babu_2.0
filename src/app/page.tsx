import HeroSection from "@/components/herosection";
import Navbar from "@/components/navbar";
import Work from "@/components/works";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div  className={poppins.className} >
     <Navbar/>
     {/* <HeroSection/> */}
     <Work/>
    </div>
  );
}
