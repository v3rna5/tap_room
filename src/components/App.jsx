import React from 'react';
import Header from './Header';
import TapList from './TapList';
import NewTapControl from './NewTapControl';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import Moment from 'moment';
import Admin from './Admin';
import PhotoComponent from './PhotoComponent';
import tapPhoto from '../assets/images/taproom.jpg'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTapList: [],
      selectedTap: null
    };
    this.handleAddingNewTapToList = this.handleAddingNewTapToList.bind(this);
    this.handleChangingSelectedTap = this.handleChangingSelectedTap.bind(this);
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTapElapsedWaitTime(),
    5000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateTapElapsedWaitTime() {
    let newMasterTapList = this.state.masterTapList.slice();
    newMasterTapList.forEach((tap) =>
      tap.formattedWaitTime = (tap.timeOpen).fromNow(true)
    );
    this.setState({masterTapList: newMasterTapList});
  }

  handleAddingNewTapToList(newTap){
    var newMasterTapList = this.state.masterTapList.slice();
    newTap.formattedWaitTime = (newTap.timeOpen).fromNow(true);
    newMasterTapList.push(newTap);
    this.setState({masterTapList: newMasterTapList});
  }

  handleChangingSelectedTap(tap){
    this.setState({selectedTap: tap});
  }

  render(){
    return (
      <div>
        <Header/>
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
          <Route exact path='/' render={()=><TapList tapList={this.state.masterTapList} />} />
          <Route path='/newtap' render={()=><NewTapControl onNewTapCreation={this.handleAddingNewTapToList} />} />
          <Route path='/admin' render={(props)=><Admin tapList={this.state.masterTapList} currentRouterPath={props.location.pathname}
            onTapSelection={this.handleChangingSelectedTap}
            selectedTap={this.state.selectedTap}/>} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
