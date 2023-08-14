import React from "react";

interface NavbarProps {
    children: React.ReactNode,
    index_url?: string,
    className?: string,
}

interface NavbarItemProps {
    name: string,
    goto?: string,
}

const Navbar = ({children, index_url, className}: NavbarProps) => {
    return(
        <header className={className}>
            <nav>
                {children}
            </nav>
            <a href={index_url ? index_url : '/'} className="Logo">{"<MARKED CODE/>"}</a>
        </header>
    )
}

const NavbarItem = ({name, goto, ...props}: NavbarItemProps) => {
    return(
        <a href={goto ? goto : "/"} {...props}>{name}</a>
    )
}

export { Navbar, NavbarItem };