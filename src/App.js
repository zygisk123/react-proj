import Papa from 'papaparse';
import { useState } from 'react';
import { Fragment } from 'react';
import Input from './components/Input/Input';
import Table from './components/Table/Table';

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
    });
  }

  return (
    <Fragment>
        <Input
          type="file"
          name='file'
          accept='.csv'
          onChange={fileHandler} />
        <Table columnArray={columnArray} values={values}/>
    </Fragment>
  );
}

export default App;
