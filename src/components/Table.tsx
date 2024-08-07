export default function Table() {
  return (
    <div className="overflow-x-auto card shadow-md">
      <table className="table">
        <thead className="bg-base-300 text-base-content">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Last Used</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-neutral">
            <th>1</th>
            <td>Lasso Guard</td>
            <td>12/01/2024</td>
            <td>
              <button className="btn btn-xs btn-secondary">More</button>
            </td>
          </tr>
          <tr className="hover:bg-neutral">
            <th>2</th>
            <td>Spider Guard</td>
            <td>12/02/2024</td>
            <td>
              <button className="btn btn-xs btn-secondary">More</button>
            </td>
          </tr>
          <tr className="hover:bg-neutral">
            <th>3</th>
            <td>Head and arm choke</td>
            <td>18/02/2024</td>
            <td>
              <button className="btn btn-xs btn-secondary">More</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
