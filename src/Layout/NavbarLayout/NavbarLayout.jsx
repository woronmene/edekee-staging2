import {Navbar} from "../../common/components"

// eslint-disable-next-line react/prop-types
function NavbarLayout({children}) {
    return (
        <>
            <Navbar/>
            {children}
        </>
    )
}

export default NavbarLayout;
