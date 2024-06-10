import Features from "@/components/localcomp/Features"
import Footer from "@/components/localcomp/Footer"
import Navbar from "@/components/localcomp/Navbar"
import { Button } from "@/components/ui/button"
import { Sparkles } from 'lucide-react'
import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <>
      <Navbar />

      <div className="mt-16">
        <div className="flex gap-2 items-center justify-center px-4 py-1 drop-shadow-md text-sm rounded-full border bg-[#FFF3F3] w-fit mx-auto">
          <Sparkles className="w-4 h-4" />
          <p>No.1 task management app</p>
        </div>
      </div>

      <div className="mt-12 md:mt-16 text-center">

        <h1 className="font-bold md:text-4xl lg:text-5xl">Conquer Your Day with {" "} <Link to="/" className="underline">Task.io</Link>  <br /> Your Ultimate Task Management Solution</h1>

        <p className="text-xs mt-2 md:mt-4 opacity-60 md:text-lg lg:text-xl">I'm building this web app for learning purpose. I want to <br /> learn and master CRUD operations.</p>

      </div>

      <div className="flex gap-2 justify-center items-center mt-6">
        <Button>
          Get Started
        </Button>
        <Button variant="outline">
          GitHub
        </Button>
      </div>

      <Features />

      <div className="mt-20 text-center ">
        <h1 className="font-bold md:text-4xl lg:text-5xl">Proudly Open Source</h1>
        <p className="text-xs mt-2 md:mt-4 px-4 md:px-0 opacity-60 md:text-lg lg:text-xl">Task.io is open source and powered by open source software. <br className="md:block hidden" /> The code is available on <Link to="/" className="underline font-medium opacity-90">GitHub</Link></p>
      </div>
      <div className="mt-20 mb-8 text-center lg:text-left py-6 border-t">
        <Footer />
      </div>



    </>
  )
}

export default HomePage
