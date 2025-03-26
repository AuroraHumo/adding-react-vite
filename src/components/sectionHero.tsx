import Button from "./buttonComponent";

function Banner() {
  return (
    <div className="banner-container">
      <div className="banner-text">
        <h1>A Simple Bookmark Manager</h1>
        <p>
          A clean and simple interface to organize your favourite websites. Open a new browser tab
          and see your sites load instantly. Try it free.
        </p>
        <div className="button-group">
          <Button className='chrome'>Get it on Chrome</Button>
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
export default Banner;