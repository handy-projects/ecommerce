import keyMirror from "react/lib/keyMirror";

const Actions = keyMirror({

  LOAD_FEATURED_PHOTOS_SUCCESS: null,
  LOAD_PHOTO_SUCCESS: null,
  LOAD_INTL_SERVER: null,

  // fluxible-router actions
  NAVIGATE_START: null,
  NAVIGATE_SUCCESS: null,
  NAVIGATE_FAILURE: null

});


export default Actions;
