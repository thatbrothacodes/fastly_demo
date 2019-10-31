import React from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router';
import { Theme, withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import Container from '@material-ui/core/Container';

import Router from './components/Router';
import NavList from './components/NavList';
import { getContacts, getContactsSearch } from './contacts/actions';

const drawerWidth = 240;

const styles = (theme: Theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  searchBox: {
    margin: theme.spacing(1)
  },
  searchBoxInput: {
    backgroundColor: theme.palette.common.white
  },
  toolbar: theme.mixins.toolbar
});

interface IComponentPropTypes extends RouteComponentProps {
  classes: any,
  contacts: Record<number, any>,
  count: number,
  getContacts: (page?: number) => void,
  getContactsSearch: (name: string, page?: number) => void
};

class App extends React.Component<IComponentPropTypes, any> {

  constructor(props: any) {
    super(props);

    this.state = {
      page: 1,
      search: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.onMoreClickHandler = this.onMoreClickHandler.bind(this);
    this.onClearTextHandler = this.onClearTextHandler.bind(this);
  }

  componentDidMount() {
    this.props.getContacts();
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;

    this.setState({ search: searchValue });

    if(searchValue.length >= 3) {
      this.props.getContactsSearch(searchValue);
      this.setState({ page: 1 });
    } else if(searchValue.length === 0) {
      this.props.getContacts();
      this.setState({ page: 1 });
    }
  };

  onMoreClickHandler = () => {
    this.props.getContacts(this.state.page + 1);

    this.setState((state: any) => {
      return {
        page: state.page + 1
      }
    })
  }

  onClearTextHandler = (event: React.MouseEvent<HTMLInputElement>) => {
    this.props.getContacts();
    this.setState({ page: 1, search: "" });
    this.props.history.push('/');
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={this.props.classes.appBar}>
          <Toolbar>
            <Container maxWidth="sm">
              <TextField
                className={this.props.classes.searchBox}
                id="input-with-icon-textfield"
                variant="outlined"
                placeholder="Search..."
                onChange={this.handleChange}
                value={this.state.search}
                fullWidth
                InputProps={{
                  className: this.props.classes.searchBoxInput,
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment onClick={this.onClearTextHandler} position="end">
                      <CloseIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Container>
          </Toolbar>
        </AppBar>
          <Drawer
          className={this.props.classes.drawer}
          variant="permanent"
          classes={{
            paper: this.props.classes.drawerPaper,
          }}
        >
          <div className={this.props.classes.toolbar} />
          <NavList
            onMoreClick={this.onMoreClickHandler}
            items={this.props.contacts} 
            count={this.props.count} />
        </Drawer>
        <main className={this.props.classes.content}>
          <div className={this.props.classes.toolbar} />
          <Router />
        </main> 
      </div>
    );
  }
};

const mapStateToProps = (state: any) => ({
    contacts: state.contacts.items,
    count: state.contacts.count
});

export default connect(mapStateToProps, { getContacts, getContactsSearch })(withStyles(styles)(withRouter(App)));
