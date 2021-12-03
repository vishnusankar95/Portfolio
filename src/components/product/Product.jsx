import "./product.css";
import github from '../../img/github.png'
import liveview from '../../img/liveview.png'


const Product = ({img,link,title,description,tstack,live}) => {
  console.log(link)
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>


      <div className="p-grider">
      <div className="p-imgfit">
        <a href={link} target="_blank" rel="noreferrer">
         <img src={img} alt="" className="p-img" /></a>
      </div>

      <div className="p-doh">
      <h2 className="p-headliner">{title}</h2> 
          <h4 className="p-subheadliner"> {description} </h4>
    
           <h4 className="p-stack">Tech Stack: {tstack}</h4>

           <div>
             <a href={link} target="_blank" rel="noreferrer">  <img src={github} alt="" className="p-git_img" /></a>
             <a href={live} target="_blank" rel="noreferrer">  <img src={liveview} alt="" className="p-git_img" /></a>
             </div>
      </div>
       
      </div>
    </div>
  );
};

export default Product;
 