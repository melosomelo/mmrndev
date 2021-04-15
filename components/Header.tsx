import Link from "next/link";

const Square: React.FC = () => {
  return <div className="square" />;
};

const Header: React.FC = () => {
  return (
    <header>
      <img src="/images/white-logo.svg" alt="My white logo" id="header-logo" />
      <img
        src="/images/hamburger.svg"
        alt="An hamburger icon for opening a sidedrawer"
        id="sidedrawer-hamburger"
      />

      <nav>
        <Link href="/">
          <a>home</a>
        </Link>
        <Square />
        <Link href="/about">
          <a>about me</a>
        </Link>
        <Square />
        <Link href="/portfolio">
          <a>portfolio</a>
        </Link>
        <Square />
        <Link href="/projects">
          <a>other projects</a>
        </Link>
        <Square />
        <Link href="/">
          <a>contact</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
