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
        
        <Switch>
          <Route exact path='/' render={()=><TapList tapList={this.state.masterTapList} />} />
          <Route path='/newtap' render={()=><TapControl onTapCreation={this.handleAddingNewTapToList} />} />
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
