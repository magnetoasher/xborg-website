import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AppDispatch } from "../../store";
import { ScrollViewModel } from "../../viewmodels/ScrollViewModel";

export type SidebarType = {
  active: number;
  total: number;
};

export const Sidebar = ({ active, total }: SidebarType) => {
  const dispatch = useDispatch<AppDispatch>();
  const totalArray = Array.from(Array(total).keys());

  const scrollVM = new ScrollViewModel();

  useEffect(() => {
    // if (!siteLoaded) {
    //   Promise.all([dispatch(SeedActions.getSeed()), sleep(1000)])
    //     .finally(() => {
    //       dispatch(SiteActions.loadSite());
    //     })
    //     .catch(() => {
    //       toast.success(
    //         "Some data did not load properly. Please refresh the page"
    //       );
    //     });
    // }
  }, []);

  return (
    <div className="page-sidebar">
      <Link to="/">
        <svg
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="brand"
        >
          <path d="M9.38247 0V2.83234L6.73014 4.83048H2.65326L0 2.83234V0L4.69124 3.49281L9.38247 0Z" />
          <path d="M9.38247 9.99992V7.16758L6.73014 5.16943H2.65326L0 7.16758V9.99992L4.69124 6.50711L9.38247 9.99992Z" />
        </svg>
      </Link>

      <div className="scrollspy row column middle center">
        {totalArray.map((item: number) => (
          <div
            key={item}
            className="scrollspy-item-container row middle center"
            onClick={() => scrollVM.scrollToSpecifiedScreen(item)}
          >
            <div
              className={`scrollspy-item${active === item ? " active" : ""}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
