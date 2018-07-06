import React from 'react';
import PhotoComponent from './PhotoComponent';
import tapPhoto from '../assets/images/tap_room2.jpg'
import Header from './Header';
import TapList from './TapList';
import Nav from './Nav'
import Error404 from './Error404';
import TapControl from './TapControl';
import { Switch, Route } from 'react-router-dom';
import Moment from 'moment';
import Admin from './Admin';
import { v4 } from 'uuid';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTapList: {},
      selectedTap: null
    };
    this.handleAddingNewTapToList = this.handleAddingNewTapToList.bind(this);
    this.handleChangingSelectedTap = this.handleChangingSelectedTap.bind(this);
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTapElapsedWaitTime(),
    60000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateTapElapsedWaitTime() {
    var newMasterTapList = Object.assign({}, this.state.masterTapList);
    Object.keys(newMasterTapList).forEach(tapId => {
      newMasterTapList[TapId].formattedWaitTime = (newMasterTapList[tapId].timeOpen).fromNow(true);
    });
    this.setState({masterTapList: newMasterTapList});
  }

  handleAddingNewTapToList(newTap){
    var newTapId = v4()
    var newMasterTapList = Object.assign({}, this.state.masterTapList, {
      [newTapId]: newTap
    });
    newMasterTapList[newTapId].formattedWaitTime = newMasterTapList[newTapId].timeOpen.fromNow(true);
    this.setState({masterTapList: newMasterTapList});
  }

  handleChangingSelectedTap(tapId){
    this.setState({selectedTap: tapId});
  }

  render(){
    console.log(this.state.masterTapList);
    return (

    <div>
    <Header/>
      <Nav/>

      <style global jsx >{`

  body {
    font-family: Helvetica;
  background-image: url(${tapPhoto});
color: white;
  }
  .box {
    border: none;
    display: block;
    border-bottom: 2px solid #fff;
    margin-bottom: 10px;
  }
  .box:hover {
    border-bottom: 2px solid #ccc;
    outline: 0;
  }
  a {
    color: #888;
    text-decoration: none;
  }
`}</style>

      <Switch>
        <Route exact path='/' component={TapList} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
