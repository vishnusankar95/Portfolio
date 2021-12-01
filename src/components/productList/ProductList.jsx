import "./productList.css";
import Product from "../product/Product";
import shine from '../../img/shine.png'
import tripadvisor from '../../img/tripadvisor.png'
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
        tstack="HTML | CSS | Javascript" />

        <Product img={shine} title="Clone of Shine website"  
        link="https://github.com/Somesh-Kumar-Yadav/Shine-Clone" 
        description="A web application to find and post a job on area basis."
        tstack="HTML | CSS | Javascript | React" />

        <Product img={tripadvisor} title="Clone of Tripadvisor website" 
        link="https://github.com/vishnusankar95/tripadvisor_clone" 
        description="A web application to plan beautiful journey."
        tstack="HTML | CSS | Javascript | React |MongoDb | ExpressJS | Node" />
      </div>
    </div>
  );
};

export default ProductList;
