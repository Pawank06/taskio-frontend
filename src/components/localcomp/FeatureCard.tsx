import { ReactNode } from "react";


interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {

  

  return (
   

    <div className={`w-full  md:w-auto lg:w-full bg-[#EDFAFF] border mx-auto  rounded-lg`}>
      <div className="p-8 text-left">
        {icon}
        <div className="my-3">
          <h1 className="font-semibold">{title}</h1>
        </div>
        <p className="text-sm text-left">{description}</p>
      </div>
    </div>
     
  )
}



export default FeatureCard
