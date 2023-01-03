import { CategoriesContainer, CategoryContainer } from "./Category.style";

const Category = () => {
  return (
    <CategoriesContainer>
      <h3>Choose a Category</h3>
      <h1>Recipe Categories</h1>
      <CategoryContainer>
        {/*{tags.frequents.map((tag, index) => (*/}
        {/*  <Tag*/}
        {/*    key={index}*/}
        {/*    name={tag}*/}
        {/*    big={true}*/}
        {/*    onClick={() => filterByTag(tag)}*/}
        {/*  />*/}
        {/*))}*/}
      </CategoryContainer>
      <CategoryContainer>
        {/*{tags.others.map((tag, index) => (*/}
        {/*  <Tag*/}
        {/*    key={index}*/}
        {/*    name={tag}*/}
        {/*    big={false}*/}
        {/*    onClick={() => filterByTag(tag)}*/}
        {/*  />*/}
        {/*))}*/}
      </CategoryContainer>
    </CategoriesContainer>
  );
};

export default Category;
