import PropTypes from "prop-types";
import Detail from "../components/Detail";
DetailsPage.propTypes = {
  submittedData: PropTypes.array,
};

function DetailsPage({ submittedData }) {
  return (
    <div>
      {submittedData.map((detail, index) => (
        <Detail detail={detail} key={index} />
      ))}
    </div>
  );
}

export default DetailsPage;
