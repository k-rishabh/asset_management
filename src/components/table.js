import TableBody from "./tableBody";
import TableHead from "./tableHead";
import { useSortableTable } from "./sortable";

const Table = ({ data, columns }) => {
  const [tableData, handleSorting] = useSortableTable(data, columns);

  return (
    <>
      <table className="table">
        <TableHead {...{ columns, handleSorting }} />
        <TableBody {...{ columns, tableData }} />
      </table>
    </>
  );
};

export default Table;