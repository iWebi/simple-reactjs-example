import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../App.css";
import logo from "../logo.svg";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <Button
              variant="contained"
              onClick={() => {
                navigate("/login");
              }}
            >
              Go To Login
            </Button>
          </p>
        </header>
      </div>
    </>
  );
}
