import { SignOutButton } from '@clerk/nextjs'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from '@nextui-org/react'
import { link } from 'fs'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className='h-[10dvh]'>
        <Navbar position="static">
      <NavbarBrand>
        <p className="font-bold text-inherit bg-blue-500 rounded-md p-2">COMMUTE TRACKER</p>
      </NavbarBrand>
      {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent> */}
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
        </NavbarItem>
        <NavbarItem>
          <Button  color="primary" href="/signin" variant="solid">
            <SignOutButton />
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    </div>
  )
}
