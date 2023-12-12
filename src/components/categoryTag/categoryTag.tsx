import { useContext } from "react";
import closeIcon from "../../assets/close-icon.svg";
import "./categoryTag.scss";
import { CategoryType, SearchContext } from "../../contexts/searchContext";

type CategoryTagType = {
  category: CategoryType;
};

const CategoryTag = ({ category }: CategoryTagType) => {
  const { setCategoryChecked } = useContext(SearchContext);

  return (
    <button
      type="button"
      className="category-tag"
      title="Remover categoria"
      aria-label="Remover categoria"
      onClick={() => setCategoryChecked(false, category._id)}
    >
      {category.name}
      <img src={closeIcon} alt="Close icon" />
    </button>
  );
};

export default CategoryTag;
