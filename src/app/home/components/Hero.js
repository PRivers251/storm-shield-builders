import '../styles/homePage.css'

export default function Hero(){
    return (
        <section className="heroSection">
          <div className="heroBGOverlay"></div>
          <div className="titleContainer">
          <h1 className="text-6xl font-bold text-white">Storm Shield Builders LLC</h1>
          <h1 className="heroSubtitle">Your Trusted Local Roofing Experts </h1>
          </div>
          <div className="heroCTAButtonContainer">
            <a href="tel:+12513917034" className="heroCTAButton">Call Today</a>
            </div>
        </section>
    )
}