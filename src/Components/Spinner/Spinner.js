import img from "./Portal.png";
import imgLoading from "./loading.png";
import "./Spinner.css";
function Load() {
  return (
    <div className="loading-container">
      <div className="loading-title">
        <h2>¡Cargando!</h2>
      </div>
      <div className="loading-img">
        <img src={imgLoading} alt="loadingIcon"></img>
      </div>
      <img src={img} width="100%" alt="cargando"></img>
    </div>
  );
}
export default Load;
