import Script from "next/script"

export default function Home() {
  return (
    <div>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js" />


      <div className="container">
        <video controls playsInline autoPlay loop>
          <source src="https://utfs.io/f/469030ec-3d24-4ebc-a897-50f132432a2f-d288e7.mp4" type="video/mp4" />
        </video>


        <div className="countdown">
          <div className="bloc-time date" data-init-value="2023-11-08">
            <span className="count-title">DAYS</span>
            <div className="figure date date-1">
              <span className="top">2</span>
              <span className="top-back">
                <span>2</span>
              </span>
              <span className="bottom">2</span>
              <span className="bottom-back">
                <span>2</span>
              </span>
            </div>
            <div className="figure date date-2">
              <span className="top">0</span>
              <span className="top-back">
                <span>0</span>
              </span>
              <span className="bottom">0</span>
              <span className="bottom-back">
                <span>0</span>
              </span>
            </div>
          </div>
          {/* End of date component */}
          <div className="bloc-time hours" data-init-value={24}>
            <span className="count-title">HOURS</span>
            <div className="figure hours hours-1">
              <span className="top">2</span>
              <span className="top-back">
                <span>2</span>
              </span>
              <span className="bottom">2</span>
              <span className="bottom-back">
                <span>2</span>
              </span>
            </div>
            <div className="figure hours hours-2">
              <span className="top">4</span>
              <span className="top-back">
                <span>4</span>
              </span>
              <span className="bottom">4</span>
              <span className="bottom-back">
                <span>4</span>
              </span>
            </div>
          </div>
          {/* <div className="bloc-time min" data-init-value={0}>
            <span className="count-title">Phút</span>
            <div className="figure min min-1">
              <span className="top">0</span>
              <span className="top-back">
                <span>0</span>
              </span>
              <span className="bottom">0</span>
              <span className="bottom-back">
                <span>0</span>
              </span>
            </div>
            <div className="figure min min-2">
              <span className="top">0</span>
              <span className="top-back">
                <span>0</span>
              </span>
              <span className="bottom">0</span>
              <span className="bottom-back">
                <span>0</span>
              </span>
            </div>
          </div> */}
          {/* <div className="bloc-time sec" data-init-value={0}>
            <span className="count-title">Giây</span>
            <div className="figure sec sec-1">
              <span className="top">0</span>
              <span className="top-back">
                <span>0</span>
              </span>
              <span className="bottom">0</span>
              <span className="bottom-back">
                <span>0</span>
              </span>
            </div>
            <div className="figure sec sec-2">
              <span className="top">0</span>
              <span className="top-back">
                <span>0</span>
              </span>
              <span className="bottom">0</span>
              <span className="bottom-back">
                <span>0</span>
              </span>
            </div>
          </div> */}
        </div>



      </div>
      <Script src="/main.js" />
    </div>
  )
}
