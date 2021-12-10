import "./productList.css";
import Product from "../product/Product";
import shine from '../../img/shine.png'
import Booking_project from '../../img/Booking_project.png'
import zoomcar from '../../img/zoomcar.png'


const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Project</h1>
        {/* <p className="pl-desc">
          Lama is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p> */}
      </div>
      {/* <div> <h1>Project</h1></div> */}
      <div className="pl-list">
        <Product img={zoomcar} title="Clone of Zoom car website" 
         link="https://github.com/vishnusankar95/zoomCarProj" 
        description="A web application to rent four-wheelers on a monthly and daily basis."
        tstack="HTML | CSS | Javascript"
        live="https://compassionate-curie-bac97b.netlify.app" />

        <Product img={shine} title="Clone of Shine website"  
        link="https://github.com/Somesh-Kumar-Yadav/Shine-Clone" 
        description="A web application to find and post a job on area basis."
        tstack="HTML | CSS | Javascript | React"
        live="https://shine-clone.herokuapp.com/" />

        <Product img={Booking_project} title="Clone of Booking.Com website" 
        link="https://github.com/Ramlala-Yadav-Git/Booking.com-clone" 
        description="Booking.com’s mission is to make it easier for everyone to experience the world."
        tstack="HTML | CSS | Javascript | React |MongoDb | ExpressJS | Node"
        live=" https://booking-com.netlify.app" />
      </div>
    </div>
  );
};

export default ProductList;
