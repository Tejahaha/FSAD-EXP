import axios from "axios";
import { useState, useEffect } from "react";

export default function User() {
  const [result, setResult] = useState("Nothing");

  useEffect(() => {
    if (result === "Nothing") {
      axios.get("https://reqres.in/api/users").then((res) => {
        setResult(res.data.data);
        console.log(res.data.data);
      });
    }
  }, [result]);

  if (result === "Nothing") {
    return <div style={{ color: "white", fontSize: "18px" }}>Data is fetching</div>;
  }

  return (
    <div style={{ color: "white", fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h2 style={{ textAlign: "center", color: "white" }}>2300033461</h2>
      <br />
      <table border={1} style={{ width: "100%", borderCollapse: "collapse", color: "white" }}>
        <thead>
          <tr style={{ fontWeight: "bold", backgroundColor: "#f2f2f2", color: "black", textAlign: "center" }}>
            <td>ID</td>
            <td>EMAIL</td>
            <td>FIRST NAME</td>
            <td>LAST NAME</td>
            <td>IMAGE</td>
          </tr>
        </thead>
        <tbody>
          {result.map((element) => (
            <tr key={element.id} style={{ textAlign: "center", color: "white" }}>
              <td>{element.id}</td>
              <td>{element.email}</td>
              <td>{element.first_name}</td>
              <td>{element.last_name}</td>
              <td>
                <img src={element.avatar} alt="error" width={75} height={75} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
