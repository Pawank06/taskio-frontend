import { RiDatabase2Fill, RiNodejsFill, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import FeatureCard from "./FeatureCard"
import { ReactNode } from "react";
import { SiExpress, SiMongodb } from "react-icons/si";


export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
}

const Features = () => {
  const features: Feature[] = [
    {
      id: 1,
      title: "React 18",
      description: "Server and Client Components. Use hooks for state management.",
      icon: <RiReactjsFill className="w-14 h-14" />,

    },
    {
      id: 2,
      title: "Components",
      description: "UI components built using Radix UI and styled with Tailwind CSS.",
      icon: <RiTailwindCssFill className="w-14 h-14" />,

    },
    {
      id: 3,
      title: "Node.js",
      description: "Build scalable network applications using event-driven architecture.",
      icon: <RiNodejsFill className="w-14 h-14" />,

    },
    {
      id: 4,
      title: "Express.js",
      description: "Fast, unopinionated, minimalist web framework for Node.js.",
      icon: <SiExpress className="w-12 h-14" />,

    },
    {
      id: 5,
      title: "MongoDB",
      description: "Document-oriented NoSQL database for high volume data storage.",
      icon: <SiMongodb className="w-14 h-14" />,

    },
    {
      id: 6,
      title: "CRUD Operations",
      description: "Create, Read, Update, and Delete tasks efficiently.",
      icon: <RiDatabase2Fill className="w-14 h-14" />,

    },

    // Add more features as needed
  ];
  return (
    <div className="text-center mt-24 ">
      <h1 className="font-semibold text-xl md:text-4xl lg:7xl">Features</h1>
      <p className="text-xs mt-2 px-4 md:mt-4 opacity-60 md:text-lg lg:text-xl mb-6">This project is an experiment aimed at implementing CRUD operations, enriched <br className="lg:block hidden" /> with features like  authentication, subscriptions, and API routes, all within the MERN stack.
      </p>
      <div className="grid gap-4 md:grid-cols-3 mx-4 lg:max-w-[62rem] lg:mx-auto">
        {
          features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}

            />
          ))
        }

      </div>
      <p className="text-xs  px-2 md:mt-4 opacity-60 md:text-lg lg:text-xl mt-6">
      In the future, I'll be adding AI integration and a drag-and-drop feature to enhance the app's functionality
      </p>
    </div>
  )
}

export default Features
