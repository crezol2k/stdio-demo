import * as Icon from "react-bootstrap-icons";
import "../../components/Pagination/style.css";

const Pagination = () => {
  return (
    <div className="pagination">
      <div className="pagination-item">
        <Icon.ArrowLeft className="pagination-item__icon" />
      </div>
      <div className="pagination-item active">
        <span className="pagination-item-link">1</span>
      </div>
      <div className="pagination-item">
        <span className="pagination-item-link">2</span>
      </div>
      <div className="pagination-item">
        <span className="pagination-item-link">3</span>
      </div>
      <div className="pagination-item">
        <span className="pagination-item-link">4</span>
      </div>
      <div className="pagination-item">
        <span className="pagination-item-link">...</span>
      </div>
      <div className="pagination-item">
        <span className="pagination-item-link">15</span>
      </div>
      <div className="pagination-item">
        <Icon.ArrowRight className="pagination-item__icon" />
      </div>
    </div>
  );
};

export default Pagination;
