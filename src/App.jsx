import { useState, useEffect, Fragment } from "react";
import { read, utils } from "xlsx";
import Header from "./components/Header";
import Table from "./components/Table";
import Footer from "./components/Footer";
import CookieConsent from "react-cookie-consent";
import ZaIzrabotkata from "./components/ZaIzrabotkata";

function App() {
  const [sheets, setSheets] = useState([]);
  const file = `registar-visokoobrazovni-ustanovi-rsm.ods`;

  /* Fetch and update the state once */
  useEffect(() => {
    (async () => {
      const f = await fetch(`./ods/${file}`);
      const ab = await f.arrayBuffer();

      /* Parse */
      const wb = read(ab);

      setSheets(
        ...Object.keys(wb.Sheets).map((item, key) => {
          return utils.sheet_to_json(wb.Sheets[wb.SheetNames[key]], {
            blankrows: false,
          });
        })
      );
    })();
  }, [file]);

  return (
    <Fragment>
      <Header />
      <div className="container-fluid flex-fill">
        <div className="row my-3">
          <div className="col-xxxl-10 offset-xxxl-1">
            <Table tableData={sheets} />
          </div>
        </div>
      </div>
      <Footer />
      <ZaIzrabotkata />
      <CookieConsent
        location="bottom"
        buttonText="Во ред"
        cookieName={import.meta.env.VITE_APP_GA_ID}
        containerClasses="fixed-bottom alert alert-success hstack gap-2 justify-content-between m-4 shadow"
        contentClasses="hstack my-auto py-2"
        buttonClasses="btn btn-success text-nowrap"
        disableStyles={true}
      >
        Ова мрежно место користи т.н. колачиња за подобрување на корисничкото
        искуство.
      </CookieConsent>
    </Fragment>
  );
}

export default App;
