"use client"
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/navbar";
import {Link} from "@nextui-org/link";
import {Button} from "@nextui-org/button"
export default function NavigationBarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "نتيجة سنه اولي ",
    "نتيجة سنة تانية ",
  ];

  return (
    <Navbar isBordered onMenuOpenChange={setIsMenuOpen} className="navbarHome">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
        <Link color="foreground" className="font-bold text-inherit text-2xl" href="/">
            Natega OTU
        </Link>
          
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" className="font-mono  font-bold text-xl hover:text-sky-400" href="/firstIT">
            IT نتيجة اولي 
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link color="foreground" className="font-mono font-bold text-xl hover:text-red-400" href="/secondIT" aria-current="page">
          IT نتيجة ثانية 
          </Link>
        </NavbarItem>
      </NavbarContent>
      
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem  className="font-mono  font-bold" key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "primary" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
