import Button from "components/Button";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Button>menu</Button>
          <Button>search</Button>
          {/* <h1 className="header__title">{title}</h1> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
