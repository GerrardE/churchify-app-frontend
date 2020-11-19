import React from "react";
import Dashboard from "../components/templates/Dashboard";
import { CategoryView } from "../components";

const Category = (props) => {
  return (
    <Dashboard>
      <CategoryView {...props} />
    </Dashboard>
  );
};

export default Category;
