import Script from "next/script"

export default function Home() {
  return (
    <div>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js" />


      <div className="container">
        <video controls playsInline autoPlay loop>
          <source src="https://utfs.io/f/7f479a7c-058f-40fc-90b3-ec3cb9192f0f-1n7s14.mp4" type="video/mp4" />
        </video>


        <div className="countdown">
          <span className="day-remain">60</span>
        </div>


      </div>
      <Script src="/main.js" />
    </div>
  )
}
