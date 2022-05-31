import { PageContext } from "../../renderer/types";
import { usePageContext } from "../../renderer/usePageContext";

export default (pageContext: PageContext) => {
  const isUserAuthenticated = pageContext.initialStoreState;
  // pageContext does not show updated user
  console.log("logging route", pageContext);

  if (isUserAuthenticated) {
    // console.log('redirect to login', pageContext)
    return {
      // We use a high precedence to override all other routes. This means that unauthenticated
      // users always see the Login Page `login.page.js` (no matter the url). For example, if
      // the user is unauthenticated and goes to `/admin`, then he'll see the Login Page.
      precedence: 999,
    };
  } else {
    // If the user is authenticated then do not show the Login Page. For example, if the
    // user is authenticated and goes to `/admin`, then he'll see the Admin Page.
    return false;
  }
};
