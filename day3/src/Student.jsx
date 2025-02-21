// proptypes = a mechanism that ensures that the passed value is 
// of the correct type.
// age: PropTypes.number

//  defaultProps = default values for props in case they are not 
//  passed from the parent component 
//  name: "Guest"

import PropTypes from "prop-types";

function Student({ name = "Guest", age = 0, isStudent = false }) {
  return (
    <div className="student">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? "True" : "False"}</p>
    </div>
  );
}

// Prop Type Validation (Still Works in React 19)
Student.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

export default Student;