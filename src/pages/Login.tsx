import HomeIcon from "@mui/icons-material/Home";
import { Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";

export default function Login() {
  const navigate = useNavigate();
  return (
    <Box alignItems={"right"} width="100%" bgcolor={"azure"} minHeight={"100vh"}>
      <IconButton
        onClick={() => {
          navigate("/");
        }}
      >
        <HomeIcon />
      </IconButton>

      <LoginForm />
    </Box>
  );
}
