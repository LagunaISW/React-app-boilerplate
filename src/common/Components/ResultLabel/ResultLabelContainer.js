import { connect } from 'react-redux';
import ResultLabel from './ResultLabel';

const mapStateToProps = (state) => {
  return {
    result: state.result
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultLabel);
