import "./productCard.scss";
import heartIcon from "../../assets/heart-icon.svg";

export type ProductType = {
  name: string;
  shortDescription: string;
  id: string;
  images: {
    alt: string;
    asset: {
      url: string;
    };
  }[];
  category: {
    _id: string;
    name: string;
  };
};

type ProductCardPropType = {
  product: ProductType;
};

const ProductCard = ({ product }: ProductCardPropType) => {
  return (
    <div className="product-card__container">
      <button
        className="product-card__favorite"
        aria-label="Botão favoritos"
        type="button"
      >
        <img src={heartIcon} alt="Heart icon" className="heart-icon" />
      </button>
      <figure className="product-card__image">
        <img
          src={product.images[0].asset.url}
          alt={product.images[0].alt}
        />
      </figure>
      <h3 className="product-card__title">
        {product.name}
      </h3>
    </div>
  );
};

export default ProductCard;
