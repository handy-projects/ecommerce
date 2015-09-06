import { getProducts } from "../utils/APIUtils";

//import { get } from "../utils/InMemUtils";

// Fetchr service to load photos for the given feature.

export default {
  name: "products",

  read(req, resource, { feature, imageSize=4 }, config, done) {
    const query = {
      feature: feature,
      "image_size": imageSize
    };
    const options = {
      locale: req.locale
    };
    getProducts(done);
  }

};
