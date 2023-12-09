import closeIcon from "../../assets/close-icon.svg";
import './categoryTag.scss'

type CategoryTagType = {
  category: string;
};

const CategoryTag = ({ category }: CategoryTagType) => {
  return (
    <button
      type="button"
      className="category-tag"
      title="Remover categoria"
      aria-label="Remover categoria"
    >
      {category}
      <img src={closeIcon} alt="Close icon" />
    </button>
  );
};

export default CategoryTag;
