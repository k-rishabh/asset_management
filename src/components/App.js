import '../css/App.css';
import data from '../data/data.json';
import Navbar from './navbar';
import Chart from './doughnut';
import Table from './table';

const columns = [
  { label: "ID", accessor: "t_id", sortable: false },
  { label: "Date", accessor: "date", sortable: true },
  { label: "Account", accessor: "account", sortable: true },
  { label: "Description", accessor: "description", sortable: false },
  { label: "Amount", accessor: "amount", sortable: true },
  { label: "Category", accessor: "category", sortable: true },
  { label: "Tag", accessor: "tag", sortable: true },
];

const App = () => {
  return (
    <div className="table_container">
      <Navbar />
      <Chart data={data}/>
      <Table
        data={data}
        columns={columns}
      />
      <br />
    </div>
  );
};
 
export default App;
 