import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>contentfull CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            sapiente ab reprehenderit architecto minus officiis. Ad cupiditate
            minus minima impedit aut quos at architecto dolore?
          </p>
        </div>
        <div className='img-container'>
          <img src={heroImg} alt='woman and the browser' className='img' />
        </div>
      </div>
    </section>
  );
};
export default Hero;
