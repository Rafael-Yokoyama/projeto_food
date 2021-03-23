import React, { useEffect, useState } from "react";
import axios from "axios";
import { CategoriesType, Meals } from "../../types/food";

const Foods = () => {
  const [category, setCategory] = useState<CategoriesType[]>();
  const [categoryName, setCategoryName] = useState<string>();
  const [meals, setMeals] = useState<Meals[]>();

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => setCategory(response.data.categories));
  }, []);

  useEffect(() => {
    if (categoryName !== undefined) {
      axios
        .get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
        )
        .then((response) => setMeals(response.data.meals));
    }
  }, [categoryName]);

  useEffect(() => {
    if (categoryName !== undefined) {
      axios
        .get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${categoryName}`
        )
        .then((response) => setMeals(response.data.meals));
    }
  }, [categoryName]);

  return (
    <div className="food-beer-list food-shop">
      <h1>Type of dishes</h1>
      <p>
        Select a category or type meal/ingredient name:
        <input
          type="text"
          placeholder="Type meal/ingredient name..."
          onChange={(event) => setCategoryName(event?.target.value)}
        />
      </p> 
   
      <ul>
        {category?.map((i: CategoriesType) => (
          <div key={i.idCategory} className="catalog">
            <li onClick={() => setCategoryName(i.strCategory)}>
              {i.strCategory}
            </li>
          </div>
        ))}
      </ul>
     

      <h2>
        Selected category: <strong>{categoryName}</strong>
      </h2>
      <div className="food-container">
        {meals?.map((i: Meals) => (
          <div className="food-item" key={i.idMeal}>
            <img src={i.strMealThumb} alt={i.strMeal} />
            <p>{i.strMeal}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foods;
