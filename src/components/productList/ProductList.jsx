import "./productList.css";
import Product from "../product/Product";
import Vishnu_pro_pic from '../../img/Vishnu_pro_pic.jpg'

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
        <Product img={Vishnu_pro_pic} title="Clone of Zoom car website" 
         link="https://github.com/vishnusankar95/zoomCarProj" 
        description="A web application to rent four-wheelers on a monthly and daily basis." />

        <Product img={Vishnu_pro_pic} title="Clone of Shine website"  
        link="https://github.com/vishnusankar95/zoomCarProj" 
        description="A web application to find and post a job on area basis." />

        <Product img={Vishnu_pro_pic} title="Clone of Tripadvisor website" 
        link="https://github.com/vishnusankar95/zoomCarProj" 
        description="A web application to plan beautiful journey." />
      </div>
    </div>
  );
};

export default ProductList;
