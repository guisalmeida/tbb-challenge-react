import { useContext } from "react";
import { SearchContext, ProductType } from "../../contexts/searchContext";

import heartIcon from "../../assets/heart-icon.svg";
import "./productCard.scss";

type ProductCardPropType = {
  product: ProductType;
};

const ProductCard = ({ product }: ProductCardPropType) => {
  const { setFavorite } = useContext(SearchContext);

  const handleFavorite = () => {
    const isFavorite = Boolean(product.favorite);
    setFavorite(!isFavorite, product.id);
  };

  return (
    <div className="product-card__container">
      <button
        className={`product-card__favorite ${
          product?.favorite ? "active" : ""
        }`}
        aria-label="Botão favoritos"
        type="button"
        onClick={handleFavorite}
      >
        <img src={heartIcon} alt="Heart icon" className="heart-icon" />
      </button>
      <figure className="product-card__image">
        <img src={product.images[0].asset.url} alt={product.images[0].alt} />
      </figure>
      <h3 className="product-card__title">{product.name}</h3>
    </div>
  );
};

export default ProductCard;
