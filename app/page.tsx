import Script from "next/script"

export default function Home() {
  return (
    <div>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js" />

      {/* <div >
        <image href="/image/bg.jpg" width="100%" height="100%" id="background" />
      </div> */}
      <div className="container">
        <video playsInline autoPlay muted loop>
          <source src="https://utfs.io/f/92262b69-8bcc-4c67-a7c9-23f72f923d30-i274jl.mp4" type="video/mp4" />
        </video>

        <div className="clock">
          {/* <div className='title'>
            <span>BIRTHDAY 10YEAR</span>
          </div> */}
          <p>coming soon</p>
          <div className="digit days">
            <div className="segment" />
            <div className="segment" />
            <div className="segment" />
            <div className="segment" />
            <div className="segment" />
            <div className="segment" />
            <div className="segment" />
          </div>
          <div className="digit days">
            <div className="segment" />
            <div className="segment" />
            <div className="segment" />
            <div className="segment" />
            <div className="segment" />
            <div className="segment" />
            <div className="segment" />
          </div>
          <p className="timeRefDays timedescription">days</p>
          <div className="separator" />
          <div className="digit hours">
            <div className="segment" />
            <div className="segment" />
            <div className="segment" />
            <div className="segment" />
            <div className="segment" />
            <div className="segment" />
            <div className="segment" />
          </div>
          <div className="digit hours">
            <div className="segment" />
            <div className="segment" />
            <div className="segment" />
            <div className="segment" />
            <div className="segment" />
            <div className="segment" />
            <div className="segment" />
          </div>
          <p className="timeRefHours timedescription">hours</p>
          <div className="separator" />
          <div className="digit minutes">
            <div className="segment" />
            <div className="segment" />
            <div className="segment" />
            <div className="segment" />
            <div className="segment" />
            <div className="segment" />
            <div className="segment" />
          </div>
          <div className="digit minutes">
            <div className="segment" />
            <div className="segment" />
            <div className="segment" />
            <div className="segment" />
            <div className="segment" />
            <div className="segment" />
            <div className="segment" />
          </div>
          <p className="timeRefMinutes timedescription">minutes</p>

        </div>

      </div>
      <Script src="/main2.js" />
    </div>
  )
}
