import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  // State
  const navigate = useNavigate();

  // Behavior

  // Render
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Désolé, une erreur inatendue a eu lieu.</p>
      <button onClick={()=>{navigate("/")}}>
        Revenir sur la page de login
      </button>
    </div>
   
  );
}