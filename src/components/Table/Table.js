const Table = props =>
{
    return (
        <table >
            <thead>
            <tr>
                {props.columnArray.map((col, id) => (<th key={id}>{col}</th>))}
            </tr>
            </thead>
            <tbody>
            {props.values.map((val,id) =>(
                <tr key={id}>
                {val.map((value, i) => (
                    <td key={i}>{value}</td>
                ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default Table;