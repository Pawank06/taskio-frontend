import Navbar from "@/components/localcomp/Navbar"

interface OutletProps {
  context?: unknown;
}
declare function Outlet(
  props: OutletProps
): React.ReactElement | null;

const AuthLayout = () => {

  return (
    <>
    <Navbar/>
     <Outlet/> 
    </>
  )
}

export default AuthLayout
