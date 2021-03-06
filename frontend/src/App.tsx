import NavBar from "components/NavBar";
import Footer from "components/Footer";
import DataTable from "components/DataTable";
import BarChart from "components/BarChart";
import DonutChart from "components/DonutChart";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de vendas</h1>
        <div className="row px-3">
          <div className="col-6">
              <h2 className="text-center text-secondary">Taxa de sucesso (%)</h2>
              <BarChart />
          </div>
          <div className="col-6">
              <h2 className="text-center text-secondary">Participação nas vendas</h2>
              <DonutChart />
          </div>
        </div>
        <div className="col-12 py-3">
          <h2 className="text-primary">Total de vendas</h2>
          <DataTable />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
