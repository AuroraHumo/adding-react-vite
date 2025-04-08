import Button from "./buttonComponent";

function SectionHero() {
  return (
    <div className="container">
      <div className="text-left">
        <h1>A Simple Bookmark Manager</h1>
        <p>
          A clean and simple interface to organize your favourite websites. Open a new browser tab
          and see your sites load instantly. Try it free.
        </p>
        <div className="button-group">
          <Button className='button-blue'>Get it on Chrome</Button>
          <Button className='firefox'>Get it on Firefox</Button>

        </div>
      </div>

      <div className="banner-image">
        <div className="shadow-box"></div>
        <img src="src\assets\illustration-hero.svg" alt="Hero" className="hero" />
      </div>
    </div>
  );
}
export default SectionHero;