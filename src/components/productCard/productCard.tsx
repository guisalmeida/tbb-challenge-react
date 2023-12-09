import "./productCard.scss";
import heartIcon from "../../assets/heart-icon.svg";

const productCard = () => {
  return (
    <div className="product-card__container">
      <button className="product-card__favorite" aria-label="Botão favoritos" type="button">
        <img src={heartIcon} alt="Heart icon" className="heart-icon" />
      </button>
      <figure className="product-card__image">
        <img
          src="https://cdn.sanity.io/images/27438tds/rexona-staging-ar/2d63d02809567b152afc3d57b091797f3b62c05c-5000x5000.tif?w=386&h=386&q=80&auto=format"
          alt="Envase de desodorante Rexona Men Antitranspirante Roll On Invisible 50ml"
        />
      </figure>
      <h3 className="product-card__title">
        Rexona Men Antitranspirante Roll On Invisible 50ml
      </h3>
    </div>
  );
};

export default productCard;
