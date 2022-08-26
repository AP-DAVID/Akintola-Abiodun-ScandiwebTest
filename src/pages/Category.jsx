import React, { Component } from "react";
import CategoryCard from "../components/shared/CategoryCard";
import Header from "../components/shared/Header";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { MiddleDiv, CardDiv } from "../components/styled/Category.styled";
import { getCategory } from "../redux/categorySlice";

const mapStateToProps = (state) => {
  const { category, loading } = state.category;
  return { category, loading };
};

export class Category extends Component {
  componentDidMount() {
    // get category name from the url
    const categoryName =
      this.props.match.url !== "/" ? this.props.match.url.substring(1) : "all";

    //get category using the category name from the dispatch method.
    (categoryName !== this.props.category.name || !this.props.category) &&
      this.props.dispatch(getCategory(categoryName));
  }

  componentDidUpdate(prevProps) {
    // compare changes in url
    if (prevProps.match.url !== this.props.match.url) {
      const categoryName =
        this.props.match.url !== "/"
          ? this.props.match.url.substring(1)
          : "all";
      this.props.dispatch(getCategory(categoryName));
    }
  }

  render() {
    const { category, loading } = this.props;

    return (
      <div>
        {/* Header for the landing page */}
        <Header pathway={this?.props?.match?.url} />
        {/* Middke section */}
        <MiddleDiv>{category?.name}</MiddleDiv>

        {/* The cards */}
        <CardDiv>
          {category?.products?.map((product) => (
            <>
              <CategoryCard key={product?.id} product={product} />
            </>
          ))}
        </CardDiv>
      </div>
    );
  }
}

export default connect(mapStateToProps)(withRouter(Category));
