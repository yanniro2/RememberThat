/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
// import bullet from "./Img/bullet.svg";
import close from "./Img/close.svg";
// import dots from "./Img/dots.svg";
import holdingPhone from "./Img/holding-phone.jpg";
import illustration from "./Img/illustration.svg";
import person1 from "./Img/person-1.jfif";
import menu from "./Img/menu.svg";
import person2 from "./Img/person-2.jfif";
import person3 from "./Img/person-3.jpg";
import video from "./Img/video.svg";

function App() {
  // const mobileBtn = document.getElementById("mobile-cta");
  // const nav = document.querySelector("nav");
  // const mobileBtnExit = document.getElementById("mobile-exit");

  // mobileBtn.addEventListener("click", () => {
  //   nav.classList.add("menu-btn");
  // });

  // mobileBtnExit.addEventListener("click", () => {
  //   nav.classList.remove("menu-btn");
  // });
  return (
    <div className="App">
      {/* <!--NAVIGATION BLOG START--> */}
      <div class="nav-bar">
        <div class="container">
          <a class="logo-nav" href="">
            Remember<span>That</span>
          </a>
          <img
            id="mobile-cta"
            class="mobile-menu"
            src={menu}
            alt="navigation"
          />
          <nav>
            <img
              id="mobile-exit"
              class="mobile-menu-exit"
              src={close}
              alt="close navigation"
            />
            <ul class="primary-nav">
              <li class="current">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
            </ul>

            <ul class="second-nav">
              <li>
                <a href="#">Contact</a>
              </li>
              <li class="go-premium-cta">
                <a href="#">Go Premium</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* <!--NAVIGATION BLOG END--> */}

      {/* <!--SECTION HERO BLOG START--> */}
      <section class="hero">
        <div class="container">
          <div class="left-col">
            <p class="sub-head">it's nitty &amp; gritty</p>
            <h1>a task app that doesn't stink</h1>

            <div class="hero-cta">
              <a href="#" class="primery-cta">
                Try for free
              </a>
              <a href="#" class="watch-video-cta">
                <img src={video} alt="Video Clip" />
                Watch a video
              </a>
            </div>
          </div>

          <img src={illustration} alt="Illustration" class="hero-img" />
        </div>
      </section>
      {/* <!--SECTION HERO BLOG END--> */}

      {/* <!--SECTION FEATURES BLOG START--> */}
      <section class="features-section">
        <div class="container">
          <ul>
            <li>unlimited tasks</li>
            <li>confetti Explosions upon task completions</li>
            <li>real time collaboration</li>
            <li>sms task reminder</li>
            <li>social media announcement</li>
            <li>other awesome features</li>
          </ul>
        </div>
        <img src={holdingPhone} alt="phone" />
      </section>
      {/* <!--SECTION FEATURES BLOG END--> */}

      {/* <!--SECTION TEST  BLOG START--> */}
      <section class="test-monials-section">
        <div class="container">
          <ul>
            {/* <!--PERSON 1--> */}
            <li>
              <img src={person1} alt="Person 1" />
              <blockquote>
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore"
              </blockquote>
              <cite> &mdash; Sergio de Paula</cite>
            </li>

            {/* <!--PERSON 2--> */}
            <li>
              <img src={person2} alt="Person 2" />
              <blockquote>
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore"
              </blockquote>
              <cite> &mdash; Craig McKay</cite>
            </li>

            {/* <!--PERSON 3--> */}
            <li>
              <img src={person3} alt="Person 3" />
              <blockquote>
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore"
              </blockquote>
              <cite> &mdash; Jane Doe</cite>
            </li>
          </ul>
        </div>
      </section>
      {/* <!--SECTION TEST  BLOG END--> */}

      {/* <!--SECTION CONTACT  BLOG START--> */}
      <section class="contact-section">
        <div class="container">
          <div class="contact-left">
            <h2>Contact</h2>
            <form action="#" method="post">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" />
              <label for="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
              ></textarea>

              <input type="submit" value="send message" class="send-message" />
            </form>
          </div>

          <div class="contact-left">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31465.03369795242!2d80.01091702588964!3d9.669999413076031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe53fd7be66aa5%3A0xc7da0d9203baf512!2sJaffna!5e0!3m2!1sen!2slk!4v1631203020561!5m2!1sen!2slk"
              width="600"
              height="450"
              // style="border:0"
              allowfullscreen=""
              loading="lazy"
              title="Lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* <!--JAVASCRIPT START-->
     <script>
            
     </script> */}
    </div>
  );
}

export default App;
