import React from "react";
import axios from "axios";

const TableView = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:4000/view");
      setData(response.data.data);
    }
    fetchData();
  }, []);

  console.log(data);
  return (
    <div className="w-full">
      <h1 className="text-5xl font-semibold my-6 text-center">Submissions</h1>
      <div>
        <table className=" bg-red-100 p-2 w-full rounded">
          <thead>
            <th className="p-1 px-3 text-red-800 text-left">Name</th>
            <th className="p-1 px-3 text-red-800">Language</th>
            <th className="p-1 px-3 text-red-800">stdin</th>
            <th className="p-1 px-3 text-red-800">Date</th>
            <th className="p-1 px-3 text-red-800 text-left">Source</th>
          </thead>
          <tbody>
            {data?.map((item, index) => {
              return (
                <tr
                  key={index}
                  className="bg-red-50 border-b border-red-100 text-center"
                >
                  <td className="p-1 px-3 text-left">{item.username}</td>
                  <td className="p-1 px-3"><span>{item.language}</span></td>
                  <td className="p-1 px-3">
                    {item.stdin ? item.stdin : "Null"}
                  </td>
                  <td className="p-1 px-3">{ item.createdAt.slice(0 , 10) }</td>
                  <td className="p-1 px-3 font-mono text-left">
                    <pre className="bg-zinc-800 text-white p-1 rounded">
                     {
                      item.code.slice(0 , 100)
                     }
                    </pre>
                  </td>
                
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableView;
