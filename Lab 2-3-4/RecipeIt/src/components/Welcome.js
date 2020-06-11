import React from "react";
import style from "../assets/css/masthead.module.css";

const Welcome = () => {
  return (
    <div className={style.masthead}>
      <div data-testid="welcome" className={style.heading}>
        Welcome To "RecipeIt"
        <div className={style.heading2}>It's Nice To Meet You!</div>
        <div className={style.text}>
          This app will help you to find breathtaking and succulent dishes
          recipes.<br></br> If you are on diet, we will provide you with calorie
          counter. Just type the name of a meal or a component c:<br></br> For
          more dish info click 'Edamam Database' on navigation bar)
        </div>
        <div className={style.heading}>Bon Appétit!</div>
      </div>
    </div>
  );
};

export default Welcome;
