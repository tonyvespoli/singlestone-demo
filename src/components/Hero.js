import FadeInSection from "./FadeIn";

const Hero = () => (
  <div className="hero-image">
    <div className="content-container">
      <div className="content">
        <FadeInSection>
          <h1>New Games &amp; Accessories</h1>
          <span>Monthly Packages.</span>
          <span>Excitement Delivered Daily.</span>
          <p>
            What's the best way to shop for the latest video games and
            peripherals? How about never shopping at all? You'll get new stuff
            on your doorstep - every month.
          </p>
          <button>Get Started</button>
        </FadeInSection>
      </div>
    </div>
  </div>
);

export default Hero;
