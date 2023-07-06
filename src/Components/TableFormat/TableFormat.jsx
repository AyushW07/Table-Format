import React, { useState } from "react";

function TableFormat() {
  const [input, setInput] = useState("");
  const [table, setTable] = useState([]);

  const handleOnChange = (e) => {
    const number = e.target.value;
    setInput(number);

    if (number) {
      format(number);
    } else {
      setTable([]);
    }
  };

  const format = (number) => {
    const data = [];
    for (let i = 0; i < number; i++) {
      const row = [];
      for (let j = 0; j < number; j++) {
        row.push("");
      }
      data.push(row);
    }
    setTable(data);
  };

  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={handleOnChange}
        style={{ marginTop: "2rem" }}
      />
      <table
        style={{
          borderCollapse: "collapse",
          marginLeft: "43rem",
          marginTop: "5rem",
        }}
      >
        <tbody>
          {table.map((row, index) => (
            <tr key={index}>
              {row.map((cell, columnIndex) => (
                <td
                  key={columnIndex}
                  style={{ border: "1px solid black", padding: "15px" }}
                ></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableFormat;
