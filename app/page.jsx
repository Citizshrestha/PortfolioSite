import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";
import Photo from "@/components/Photo";
import Link from "next/link";

const Home = () => {
  return <section className="h-full">
    <div className="container h-full mx-auto">
       <div className="flex flex-col items-center justify-between px-10 xl:flex-row xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="order-2 text-center xl:text-left xl:order-none">
             <span className="text-xl text-text-primary-light dark:text-text-primary">Full-Stack Developer</span>
             <h3 className="mb-6 h1 text-text-primary-light dark:text-text-primary">
                Hello I'm <br/> <span className="text-accent">Citiz Shrestha</span>
             </h3>
             <p className="max-w-[700px] mb-9 text-text-secondary-light dark:text-text-secondary">
              I love bringing ideas to life through beautiful, seamless digital experiences built with the latest web technologies.
             </p>

             {/* btn and socials*/}
             <div className="flex flex-col items-center gap-8 xl:flex-row">

                <Link href="/assets/resume/ResumeFolder/resume.pdf" download="Citiz_Shrestha_Resume.pdf" target="_blank">
                  <Button variant="outline" size="lg" className="flex items-center gap-2 uppercase transition-all duration-300 border-accent text-accent hover:bg-accent hover:text-primary">
                     <span>Download Resume</span>
                     <FiDownload className = "text-xl"/>
                  </Button>
                </Link>
                <div className="mb-8 xl:mb-0">
                   <Social 
                   containerStyles="flex gap-6" 
                  iconStyles="w-9 h-9 border border-black dark:border-gray-600 rounded-full flex justify-center items-center text-base hover:transition-all duration-500"
                   />
                </div>
             </div>
          </div>

          {/* Photo */}
          <div className="order-1 mb-8 xl:order-none xl:mb-0">
             <Photo/>
          </div>
       </div>
    </div>
  </section>;
}

export default Home
