import { connect } from 'react-redux';
import Start from '../components/Game/Start';

// Action Creators
import { loadStory } from '../actions/game';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  loadStory: () => {
    dispatch(loadStory());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Start);
