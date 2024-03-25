import { Link, Link as ScrollLink } from "react-scroll";

interface InternalLinkProps {
  path: string;
  offset?: number;
}

const links = [
  { path: "home", name: "Home", offset: 0 },
  { path: "menu", name: "Menu", offset: 0 },
  { path: "about", name: "About", offset: -0 },
  { path: "contact", name: "Contact", offset: 0 },
];

const Nav = ({
  containerStyles,
  linkStyles,
}: {
  containerStyles: string;
  linkStyles: string;
}) => {
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.path}
          spy={true}
          smooth={true}
          offset={link.offset}
          duration={500}
          className={`${linkStyles}`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
