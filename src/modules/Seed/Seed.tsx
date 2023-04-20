import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Images } from "../../assets/imgs/Images";
import {
  ButtonPrimary,
  Layout,
  RadioInput,
  SliderInput,
  TextInput,
  LineGraph,
  CountUpAnimation,
  ObserverContainer,
  Pagination,
} from "../../components";
import {
  formatNumberToK,
  roundToNearest10,
  updateInput,
} from "../../helpers/inputs";
import { timeDifference } from "../../helpers/time";
import { GlobalState } from "../../reducer";
import { SEED_UTM_TYPE } from "../../redux/seed/types";
import { AppDispatch } from "../../store";
import { SeedViewModel } from "../../viewmodels/SeedViewModel";
import { Helmet } from "react-helmet";

export type SeedFormType = {
  name: string;
  email: string;
  isPrometheusOwner: boolean;
  capital: number;
  how: string;
  timestamp?: string;
  utm: SEED_UTM_TYPE;
};

export type SeedPageProps = {
  setNavbarBtn: (val: null) => void;
};

export const Seed = ({ setNavbarBtn }: SeedPageProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const location = useLocation();
  const h4ref = useRef(null);

  const vm = new SeedViewModel(dispatch);

  const seedData = useSelector((state: GlobalState) => state.seed.data) || [];
  const seedSummary = useSelector((state: GlobalState) => state.seed.summary);

  const [form, setForm] = useState<SeedFormType>({
    name: "",
    email: "",
    isPrometheusOwner: false,
    capital: 100,
    how: "",
    utm: vm.handleUTM(location),
  });

  const [errors, setErrors] = useState<any>({});
  const [chartView, setChartView] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    setNavbarBtn(null);
  }, []);

  const itemsperpage = 10;
  const itemsfrom = page * itemsperpage + 1;
  let itemsto = (page + 1) * itemsperpage;

  if (itemsto > seedData.length) itemsto = seedData.length;

  const slicedPage = seedData
    .sort(function (x, y) {
      return x.timestamp - y.timestamp;
    })
    .reverse()
    .slice(itemsfrom - 1, itemsto);

  return (
    <Layout
      transparentNavbar={false}
      components={[
        <div className="seed">
          <Helmet>
            <meta property="og:image" content={Images.OGIndex.OGIndexSeed} />
          </Helmet>
          <div className="container container-l">
            <div className="logo-icon">
              <img src={Images.logofull} alt="" />
            </div>
            <h1 className="vista-xl">Seed Round</h1>
            <h4 ref={h4ref} className="vista-heading">
              Invest in the future of XBorg
            </h4>
            <p className="lexend-body-xs1">
              XBorg is building the leading gaming protocol for players, fans
              and esports teams. With over 10,000 users onboarded, the largest
              web3 esports league ever created and a partnership with one of
              Europe's biggest esports teams, XBorg is still accelerating its
              growth and is raising capital to do so. Invest alongside the best
              VCs in the space, at the same valuation, and come build the future
              with us.
            </p>
            <div className="row numbers">
              <div className="col">
                <div className="value">
                  {seedSummary?.totalCapital
                    ? `$${formatNumberToK(seedSummary.totalCapital, 2)}`
                    : `$0`}
                </div>
                <div className="label lexend-body-m">Total soft commitment</div>
              </div>
              <div className="col">
                {seedSummary?.nbSubmissions && (
                  <CountUpAnimation
                    className="value"
                    number={seedSummary?.nbSubmissions}
                  />
                )}
                <div className="label lexend-body-m">Total submissions</div>
              </div>
            </div>

            <div className="form">
              <div className="form-label lexend-heading-l">
                What’s your <span>name?</span>
              </div>
              <TextInput
                id="name"
                onChange={updateInput("name", form, setForm, errors, setErrors)}
                value={form.name}
                error={errors.name}
                placeholder="Enter full name here"
              />

              <div className="form-label lexend-heading-l">
                What’s your <span>email address?</span>
              </div>

              <TextInput
                id="email"
                onChange={updateInput(
                  "email",
                  form,
                  setForm,
                  errors,
                  setErrors
                )}
                placeholder="email@example.com"
                value={form.email}
                error={errors.email}
              />

              <div className="form-label lexend-heading-l">
                Do you own a <span>Prometheus NFT?</span>
              </div>
              <p className="lexend-body-xs1">
                Note that only Prometheus holders will have a guaranteed
                allocation in the seed round. To purchase a Prometheus NFT,
                please{" "}
                <a
                  href="https://opensea.io/collection/xborg-prometheus"
                  target="_blank"
                >
                  click here
                </a>
                .
              </p>
              <div className="radios-container row middle">
                <RadioInput
                  id="prometheus-yes"
                  value={form.isPrometheusOwner}
                  onChange={() => setForm({ ...form, isPrometheusOwner: true })}
                  label="Yes"
                />
                <RadioInput
                  id="prometheus-no"
                  value={!form.isPrometheusOwner}
                  onChange={() =>
                    setForm({ ...form, isPrometheusOwner: false })
                  }
                  label="No"
                />
              </div>

              <div className="form-label lexend-heading-l">
                What <span>capital</span> do you intend to <span>commit?</span>
              </div>
              <p className="lexend-body-xs1">
                By adopting this approach, we can create an optimal allocation
                mechanism. It is important to note, however, that this is not a
                definitive commitment or an indication thereof.
              </p>

              <div className="slider-container lexend-body-xs1">
                <SliderInput
                  min={0}
                  max={150}
                  defaultValue={form.capital}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      capital: roundToNearest10(vm.scaleSlider(e)),
                    })
                  }
                />
                <div className="row between labels">
                  <div className="slide-label">{"<$100"}</div>
                  <div className="slide-label">$250</div>
                  <div className="slide-label">$500</div>
                  <div className="slide-label">$1000</div>
                  <div className="slide-label">$2500</div>
                  <div className="slide-label">$5000</div>
                  <div className="slide-label">$+10000</div>
                </div>
              </div>

              <div className="form-label lexend-heading-l">
                How did you hear about us?
              </div>

              <TextInput
                id="how"
                onChange={updateInput("how", form, setForm, errors, setErrors)}
                placeholder="Enter info here"
                value={form.how}
                error={errors.how}
              />

              <div className="footer row end bottom">
                <ButtonPrimary
                  label="Send"
                  onClick={(e) => {
                    e.preventDefault();
                    vm.sendSeed(form, setForm, setErrors, navigate);
                  }}
                />
              </div>

              <div className="row">
                <div
                  className={`switch-view lexend-heading-m row ${
                    chartView ? "active" : "inactive"
                  }`}
                >
                  <Link
                    to="/"
                    onClick={(e) => {
                      e.preventDefault();
                      setChartView(true);
                    }}
                  >
                    Analytics
                  </Link>
                  <Link
                    to="/"
                    onClick={(e) => {
                      e.preventDefault();
                      setChartView(false);
                    }}
                  >
                    All Submissions
                  </Link>
                </div>
              </div>
              {chartView ? (
                <LineGraph data={seedSummary?.summary} />
              ) : (
                <ObserverContainer className="submissions">
                  {slicedPage.map((item, index) => (
                    <div
                      className="single-submission row middle between"
                      key={index}
                      style={{
                        transitionDelay: index * 50 + "ms",
                      }}
                    >
                      <div className="submission-title lexend-body-s">
                        Anonymous user is <span>interested</span> in a $
                        <b>{item.capital}</b> allocation
                      </div>

                      <div className="time lexend-body-xs2">
                        {timeDifference(
                          new Date(),
                          new Date(item.timestamp * 1000)
                        )}
                      </div>
                    </div>
                  ))}
                  <div className="submissions-bottom row between middle">
                    <div className="items lexend-body-s">
                      {itemsfrom}-{itemsto} of {seedData.length} Items
                    </div>
                    <Pagination
                      current={page}
                      pageCount={seedData.length / itemsperpage}
                      onPageChange={(e) => setPage(e.selected)}
                    />
                  </div>
                </ObserverContainer>
              )}
            </div>
          </div>
        </div>,
      ]}
    />
  );
};
