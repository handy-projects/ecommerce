
import InitActions from "./pages/InitActions";

import features from "./constants/features";

import HomePage from "./pages/HomePage";
import PhotoPage from "./pages/PhotoPage";
import FeaturedPage from "./pages/FeaturedPage";

import ProductListPage from "./pages/ProductListPage";

import LoadingPage from "./pages/LoadingPage";

export default {

  home: {
    path: "/",
    method: "get",
    handler: HomePage
  },

  loader: {
    path: "/loading",
    method: "get",
    handler: LoadingPage
  },

  featured: {
    path: `/featured/:feature(${features.join("|")})`,
    method: "get",
    handler: FeaturedPage,
    action: InitActions.featuredPage
  },

  photo: {
    path: "/photo/:id",
    method: "get",
    handler: PhotoPage,
    action: InitActions.photoPage
  },

  products: {
    path: `/products`,
    method: "get",
    handler: ProductListPage,
    action: InitActions.productListPage
  },

  // This route doesn't point to any handler.
  // I made it just as example for showing an action responding with an error
  bad: {
    path: "/bad",
    method: "get",
    action: InitActions.badPage
  }

};
