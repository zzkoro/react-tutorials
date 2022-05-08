import "./App.css"

function App() {
  const obj = {
    header: ["품목", "가격(원)", "수량(개)"],
    data: [
      { fruit: "사과", price: "10000원", ea: "5" },
      { fruit: "딸기", price: "10000원", ea: "10" },
    ]
  };
  return (
    <table>
      <thead>
        <tr>
          {
            obj.header.map((item) => {
              return <th>{item}</th>
            })
          }
        </tr>
      </thead>
      <tbody>
        {
          obj.data.map((item) => {
            return (
              <tr>
                <td>{item.fruit}</td>
                <td>{item.price}</td>
                <td>{item.ea}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  );
}

export default App;