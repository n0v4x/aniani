import { FunctionComponent } from "react";

interface SectionProps {
  children: JSX.Element | JSX.Element[];
  title?: string;
  headerRender?: (title?: string) => JSX.Element;
}

const Section: FunctionComponent<SectionProps> = ({ title, children, headerRender }) => {
  return (
    <section className="section">
      <header className="section__header">
        <div className="container">
          <div className="section__header-inner">
            {headerRender ? (
              headerRender(title)
            ) : (
              <h2 className="section__header-title">{title}</h2>
            )}
          </div>
        </div>
      </header>
      <div className="section__content">
        <div className="container">
          <div className="section__inner">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default Section;
