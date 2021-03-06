import React from "react";
import { connect } from "redux";
import * as courseAction from "../../redux/actions/courseActions";
import PropTypes from "prop-types";

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      course: {
        title: ""
      }
    };
  }
  handleChange = event => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };
  handleSubmit = () => {
    event.preventDefault();
    this.props.dispatch(courseAction.createCourse)(this.state.course);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
      </form>
    );
  }
}
CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};
function mapStateToProps(state) {
  return {
    courses: state.course
  };
}

export default connect(mapStateToProps)(CoursesPage);
