import { connect } from 'react-redux';
import { previewItem } from '../actions/list_actions';
import ListItems from '../components/list_items';

const mapStateToProps = state => ({
  listItems: state.list.items,
});

const mapDispatchToProps = dispatch => ({
  previewItem: (name) => {
    dispatch(previewItem(name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItems);
