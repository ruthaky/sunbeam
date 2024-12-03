import Link from "next/link";


export const MobileNavbar = () => {
    return <div>MobileNavbar</div>;
}

export const Navbar = () => {
    return <div className="flex flex-row  border justify-between p-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
    </div>;
}
