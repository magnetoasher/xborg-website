import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Images } from "../../assets/imgs/Images";
import {
  ButtonPrimary,
  Layout,
  RadioInput,
  SliderInput,
  TextInput,
  LineGraph,
} from "../../components";
import { Pagination } from "../../components/Pagination";
import { updateInput } from "../../helpers/inputs";
import { timeDifference } from "../../helpers/time";
import { GlobalState } from "../../reducer";
import { SeedActions } from "../../redux/seed/actions";
import { AppDispatch } from "../../store";
import { ScrollViewModel } from "../../viewmodels/ScrollViewModel";
import { SeedViewModel } from "../../viewmodels/SeedViewModel";

export type SeedFormType = {
  name: string;
  email: string;
  isPrometheusOwner: boolean;
  capital: number;
  how: string;
};

export const Seed = () => {
  const dispatch = useDispatch<AppDispatch>();

  const seedData = useSelector((state: GlobalState) => state.seed.data) || [];
  const seedSummary = useSelector((state: GlobalState) => state.seed.summary);

  const [form, setForm] = useState<SeedFormType>({
    name: "",
    email: "",
    isPrometheusOwner: true,
    capital: 0,
    how: "",
  });
  const [errors, setErrors] = useState<any>({});
  const [chartView, setChartView] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);

  const vm = new SeedViewModel(dispatch);

  useEffect(() => {
    const scrollVM = new ScrollViewModel();
    scrollVM.removeCustomScrolling();
    dispatch(SeedActions.getSeed());
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
      className="seed-layout"
      overrideScroll={false}
      components={[
        <div className="seed">
          <div className="register-for-seed">
            Register for the upcoming seed round.
          </div>
          <div className="container container-l">
            <div className="logo-icon">
              <img src={Images.logofull} alt="" />
            </div>
            <h1 className="title">Seed Round</h1>
            <h4>Investment Opportunity</h4>
            <p>
              XBorg is a modular and composable gaming credential and
              application network. XBorg is a spin-off from SwissBorg, a crypto
              wealth app with 700'000 verified users. Only investors that submit
              this form will have access to pertinent due diligence documents
              and investor decks.
            </p>
            <div className="row numbers">
              <div className="col">
                <div className="value">$250K</div>
                <div className="label">Total soft commitment</div>
              </div>
              <div className="col">
                <div className="value">100</div>
                <div className="label">Total submissions</div>
              </div>
            </div>

            <div className="form">
              <div className="form-label">
                What’s your <span>name?</span>
              </div>
              <TextInput
                id="name"
                onChange={updateInput("name", form, setForm, errors, setErrors)}
                value={form.name}
                error={errors.name}
                placeholder="Enter full name here"
              />

              <div className="form-label">
                What’s your <span>name?</span>
              </div>
              <div className="sublabel">
                Relevant documents will be shared via email.
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

              <div className="form-label">
                Do you own a <span>Prometheus NFT?</span>
              </div>
              <p>
                Note that only Prometheus holders will have a guaranteed
                allocation in the seed round. To purchase a Prometheus NFT,
                please <a href="">click here</a>.
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

              <div className="form-label">
                What <span>capital</span> do you intend to <span>commit?</span>
              </div>
              <p>
                By adopting this approach, we can create an optimal allocation
                mechanism. It is important to note, however, that this is not a
                definitive commitment or an indication thereof.
              </p>

              <div className="slider-container">
                <SliderInput
                  min={1}
                  max={1200}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      capital: vm.getSlideValue(e),
                    })
                  }
                />
                <div className="row between labels">
                  <div className="slide-label">{"<$500"}</div>
                  <div className="slide-label">$1000</div>
                  <div className="slide-label">$2000</div>
                  <div className="slide-label">$5000</div>
                  <div className="slide-label">$10000</div>
                  <div className="slide-label">$20000</div>
                  <div className="slide-label">$+50000</div>
                </div>
              </div>

              <div className="form-label">How did you hear about us?</div>
              <div className="sublabel">
                Relevant documents will be shared via email.
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
                    vm.sendSeed(form, setForm, setErrors);
                  }}
                />
              </div>

              <div className="row">
                <div
                  className={`switch-view row ${
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
                <div className="submissions">
                  {slicedPage.map((item) => (
                    <div
                      className="single-submission row middle between"
                      key={item.timestamp}
                    >
                      <div className="submission-title">
                        Anonymous user is <span>interested</span> in a $
                        <b>1’000</b> allocation
                      </div>

                      <div className="time">
                        {timeDifference(
                          new Date(),
                          new Date(item.timestamp * 1000)
                        )}
                      </div>
                    </div>
                  ))}
                  <div className="submissions-bottom row between middle">
                    <div className="items">
                      {itemsfrom}-{itemsto} of {seedData.length} Items
                    </div>
                    <Pagination
                      current={page}
                      pageCount={seedData.length / itemsperpage}
                      onPageChange={(e) => setPage(e.selected)}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>,
      ]}
    />
  );
};
