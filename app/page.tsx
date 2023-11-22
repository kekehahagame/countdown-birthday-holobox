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
        <video autoPlay muted loop>
          <source src="https://utfs.io/f/241afb95-cbe8-403b-850c-aaaecba42ca4-vdm58q.mp4" type="video/mp4" />
        </video>

        <div className="clock">

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


        </div>

      </div>
      <Script src="/main2.js" />
    </div>
  )
}
