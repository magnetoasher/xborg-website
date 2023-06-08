import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { sleep } from "../../helpers/time";
import { GlobalState } from "../../reducer";
import { SeedActions } from "../../redux/seed/actions";
import { SiteActions } from "../../redux/site/actions";
import { AppDispatch } from "../../store";

export const PageLoader = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [loading, setLoading] = useState<boolean>(true);

  const site = useSelector((state: GlobalState) => state.site);

  useEffect(() => {
    Promise.all([dispatch(SeedActions.getSeed()), sleep(1000)])
      .catch(() => {
        toast.success(
          "Some data did not load properly. Please refresh the page"
        );
      })
      .finally(() => {
        setLoading(false);

        setTimeout(() => {
          dispatch(SiteActions.loadSite());
        }, 400);
      });
  }, []);

  if (site.loaded) return null;

  return (
    <div
      className={`page-loader row middle center ${
        loading ? "is-loading" : "has-loaded"
      }`}
    >
      <svg
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="brand"
      >
        <path d="M9.38247 0V2.83234L6.73014 4.83048H2.65326L0 2.83234V0L4.69124 3.49281L9.38247 0Z" />
        <path d="M9.38247 9.99992V7.16758L6.73014 5.16943H2.65326L0 7.16758V9.99992L4.69124 6.50711L9.38247 9.99992Z" />
      </svg>
    </div>
  );
};
