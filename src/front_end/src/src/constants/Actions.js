import keyMirror from "react/lib/keyMirror";

const Actions = keyMirror({

  // fluxible-router actions
  NAVIGATE_START: null,
  NAVIGATE_SUCCESS: null,
  NAVIGATE_FAILURE: null,

  // custom actions
  LOAD_FEATURED_PHOTOS_SUCCESS: null,
  LOAD_PHOTO_SUCCESS: null,
  LOAD_INTL_SERVER: null,

  LOAD_PRODUCT_LIST_SUCCESS: null

});


export default Actions;
