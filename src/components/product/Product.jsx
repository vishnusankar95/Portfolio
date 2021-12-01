import "./product.css";


const Product = ({img,link,title,description,tstack}) => {
  console.log(link)
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      
      <div className="p-ti">
      <h2 className="p-headliner">{title}</h2> 
      </div>

      <div className="p-grider">
      <div className="p-imgfit">
        <a href={link} target="_blank" rel="noreferrer">
         <img src={img} alt="" className="p-img" /></a>
      </div>

      <div className="p-doh">
          <h4> <i>{description}</i> </h4>

           <h4 className="p-stack">Tech Stack: {tstack}</h4>
      </div>
       
      </div>
    </div>
  );
};

export default Product;
 