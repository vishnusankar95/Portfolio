import "./intro.css";
// import Me from "../../img/me.png";
// import bg_gif from "../../img/bg_gif.gif";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, I am</h2>
          <h1 className="i-name">Vishnu Sankar</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Full Stack web developer</div>
              
              <div className="i-title-item">Mern Stack web developer</div>
            </div>
          </div>
          {/* <p className="i-desc">
            update text here(Vishnu sankar)
          </p> */}
        </div>
      
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        {/* <img src={bg_gif} alt="" className="i-img" /> */}
      </div>
    </div>
  );
};

export default Intro;
