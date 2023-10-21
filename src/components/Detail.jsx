import PropTypes from "prop-types";
Detail.propTypes = {
  detail: PropTypes.shape({
    lname: PropTypes.string,
  }),
};

function Detail({ detail }) {
  return (
    <div>
      <h1>{detail.lname}</h1>
    </div>
  );
}

export default Detail;
