import { Container, Nav, Navbar } from "react-bootstrap";
import { useEffect, useState } from "react";

import { ArrowRight } from "react-feather";
import Button from "./Button";
import render from "./render";
import styled from "styled-components";

const StyledNavbar = styled(Navbar)`
  transform: translateY(${(props) => (props.show ? "0" : "-100%")});
  transition: 0.5s transform cubic-bezier(0.075, 0.82, 0.165, 1);
`;

const StyledBrand = styled(Navbar.Brand)`
  color: ${({ theme }) => theme.colors.brand[900]};
  font-weight: 600;
`;

const StyledNavLink = styled(Nav.Item)`
  color: ${({ theme }) => theme.colors.brand[900]};
  cursor: pointer;
  font-weight: 500;
  margin-right: 2rem;
  margin-top: 0.25rem;
  opacity: 0.7;
  transition: 0.5s opacity cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    opacity: 1;
  }
`;

interface NavItemProps {
  label: string;
  href: string;
}

interface NavButtonProps {
  label: string;
  target: string;
}

interface NavbarProps {
  brand: string;
  links: NavItemProps[];
  actionButton: NavButtonProps;
}

const HNavbar = ({ brand, links, actionButton }: NavbarProps) => {
  const DELTA = 10;
  const [scrollY, setScrollY] = useState<number>(0);
  const [active, setActive] = useState<boolean>(true);

  const handleScroll = () => {
    let scrollCur = window.pageYOffset;
    if (scrollCur < 2 * DELTA) {
      setScrollY(scrollCur);
      setActive(true);
    } else if (scrollCur - scrollY > DELTA) {
      setScrollY(scrollCur);
      setActive(false);
    } else if (scrollY - scrollCur > DELTA) {
      setScrollY(scrollCur);
      setActive(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <StyledNavbar
      expand="lg"
      fixed="top"
      className="py-3"
      show={active ? 1 : 0}
    >
      <Container>
        <StyledBrand href="/">{render(brand)}</StyledBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {links.map((link: NavItemProps) => (
              <StyledNavLink key={link.href} href={link.href}>
                {link.label}
              </StyledNavLink>
            ))}
          </Nav>
          <div className="mt-lg-0 mt-3">
            <Button {...actionButton} isLink={true} rightIcon={ArrowRight} />
          </div>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};

export default HNavbar;
