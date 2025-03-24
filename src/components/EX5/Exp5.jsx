import { useRef } from "react";
import ResponsiveAppBar from "./Appbar";

export default function Ex5() {
  const loginRef = useRef(null);

  function Mover() {
    if (loginRef.current) loginRef.current.className = "mover-login";
  }

  function Mleave() {
    if (loginRef.current) loginRef.current.className = "login-form";
  }

  return (
    <>
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          .parent {
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: #f4f4f4;
            padding-top: 60px;
          }

          .login-form, .mover-login {
            width: 300px;
            padding: 15px;
            background: #fff;
            border-radius: 10px;
            box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.1);
            transition: 0.3s;
          }

          .mover-login {
            border: 2px solid red;
            box-shadow: 2px 2px 7px yellow, -2px -2px 7px yellowgreen;
          }

          table {
            width: 100%;
          }

          td {
            padding: 8px;
          }

          button {
            width: 100%;
            padding: 10px;
            background: yellowgreen;
            border: none;
            color: #fff;
            font-weight: bold;
            cursor: pointer;
            border-radius: 5px;
          }

          button:hover {
            background: darkgreen;
          }
        `}
      </style>

      <ResponsiveAppBar />

      <div className="parent">
        <div
          className="login-form"
          onMouseOver={Mover}
          onMouseLeave={Mleave}
          ref={loginRef}
        >
          <table>
            <tbody>
              <tr>
                <td colSpan={2} style={{ background: "yellowgreen", textAlign: "center" }}>
                  <strong>Login Page</strong>
                </td>
              </tr>
              <tr>
                <td>Name:</td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td>Password:</td>
                <td><input type="password" /></td>
              </tr>
              <tr>
                <td>Role:</td>
                <td>
                  <select>
                    <option>Admin</option>
                    <option>User</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td colSpan={2}><button>Login</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
