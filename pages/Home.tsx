import React from "react";
import Code from "../components/Code";
import { useIntl } from "react-intl";

export default function Home() {
  const LazyMovies = React.lazy(() => import("./../components/Movies"));
  const intl = useIntl();
  return (
    <div>
      {intl.formatMessage({
        id: "app_name",
        defaultMessage: "app_name",
      })}
      <React.Suspense fallback={<p>I'm lazy loaded...</p>}>
        <LazyMovies />
      </React.Suspense>
    </div>
  );
}
