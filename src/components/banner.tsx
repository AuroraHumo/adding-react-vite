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
          <button className="button chrome">Get it on Chrome</button>
          <button className="button firefox">Get it on Firefox</button>
        </div>
      </div>

      <div className="banner-image">
        <div className="shadow-box"></div>
        <img src="public/illustration-hero.svg" alt="Hero" className="hero" />
      </div>
    </div>
  );
}
export default Banner;