import { Link } from "react-router-dom"
import { Button } from "../ui/button"


const Navbar = () => {
    return (
        <nav className="w-full">
            <div className="flex justify-between items-center p-4 lg:px-16">
                <div className="flex items-center gap-14 opacity-75">

                <Link to="/"  className="font-semibold text-2xl">
                    task.io
                </Link>
                <div className="md:flex md:gap-8 lg:gap-10 hidden">
                    <Link>
                        About
                    </Link>
                    <Link>
                        Features
                    </Link>
                    <Link>
                        Blog
                    </Link>
                    <Link>
                        Pricing
                    </Link>

                </div>
                </div>
                <div className="flex gap-2">
                    <Link to="/auth/login" >
                        <Button variant="link" >
                            Login
                        </Button>

                    </Link>

                    <Link to="/auth/register">

                        <Button>
                            Sign up
                        </Button>
                    </Link>
                </div>
            </div>

        </nav>
    )
}

export default Navbar
