import './App.css';
import Papa from 'papaparse';
import { useState } from 'react';
import { Fragment } from 'react';

function App() {

  const [data, setData] = useState([]);
  const [columnArray, setColumnArray] = useState([]);
  const [values, setValues] = useState([]);

  const fileHandler = (event) =>
  {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function(result) {
        const columnArray = [];
        const valuesArray = [];

        result.data.map((data) => {
          columnArray.push(Object.keys(data));
          valuesArray.push(Object.values(data));
        })
        setData(result.data);
        setColumnArray(columnArray[0]);
        setValues(valuesArray);
      }
    }
      );
  }

  return (
    <Fragment>
      <div className="App">
        <input
          type="file"
          name='file'
          accept='.csv'
          onChange={fileHandler}
          style={{}}>
          
        </input>
      </div>
      <div>
        <table >
          <thead>
            <tr>
              {columnArray.map((col, id) => (<th key={id}>{col}</th>))}
            </tr>
          </thead>
          <tbody>
            {values.map((values,id) =>(
              <tr key={id}>
                {values.map((value, i) => (
                  <td key={i}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}

export default App;
