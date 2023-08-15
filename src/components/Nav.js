import Link from 'next/link'

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
const Nav = () => {
    return <Navbar>
        <NavbarBrand>
            {/* <p className="font-bold text-inherit">Demo</p> */}
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
                <Link href={'/'}>
                    Home
                </Link>
            </NavbarItem>
            <NavbarItem>
                <Link href={'/doublecolorball'}>DoubleColorBall</Link>
            </NavbarItem>
        </NavbarContent>
        {/* <NavbarContent justify="end">
      <NavbarItem className="hidden lg:flex">
        <Link href="#">Login</Link>
      </NavbarItem>
      <NavbarItem>
        <Button as={Link} color="primary" href="#" variant="flat">
          Sign Up
        </Button>
      </NavbarItem>
    </NavbarContent> */}
    </Navbar>
}



export default Nav