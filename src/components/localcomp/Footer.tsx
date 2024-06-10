import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="w-full mx-auto lg:px-16">
            <div className="text-xs px-4 md:px-0 md:text-lg">
                Task.io is Built by <Link className="underline font-medium">Pawan</Link>. hosted on <Link className="underline font-medium">Vercel</Link>. the source code is available on <Link className="underline font-medium">GitHub</Link>.
            </div>
        </footer>
    )
}

export default Footer
