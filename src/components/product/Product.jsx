import "./product.css";


const Product = ({img,link,title,description}) => {
  console.log(link)
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <h4>{title}</h4>
      <a href={link} target="_blank" rel="noreferrer">
      <img src={img} alt="" className="p-img" /></a>
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Product;
