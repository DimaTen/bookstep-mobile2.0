import { useAuth } from '../contexts/AuthContext';
import HomeSignedIn from '../HomeSignedIn';
import Books from './Books';
import Profile from './Profile';
import AudioPlayer from './Player/AudioPlayer';
import { Route, Switch } from 'react-router-dom';
import HomeNotSignedIn from '../HomeNotSignedIn';
import ReadyToUseBookstep from '../ReadyToUseBookstep';
import Popup from './Popup';
import Login from './Login';
import { useState } from 'react';
import ReadMoreMobyD from './ReadMoreMobyD';
import Signup from './Signup';

export default function MainContent() {
  const { currentUser } = useAuth();
  const [buttonPopup, setButtonPopup] = useState(false);

  if (currentUser) {
    return (
      <>
        <Route path="/AudioPlayer" exact component={AudioPlayer} />
        <Route path="/Profile" exact component={Profile} />
        <Route path="/Books" exact component={Books} />
        <Route
          path="/ReadyToUseBookstep"
          exact
          component={ReadyToUseBookstep}
        />
        <Route path="/ReadMoreMobyD" exact component={ReadMoreMobyD} />
        <Route path="/" exact component={HomeSignedIn} />
      </>
    );
  } else {
    return (
      <Switch>
        <Route path="/AudioPlayer" exact component={AudioPlayer} />
        <Route path="/ReadMoreMobyD" exact component={ReadMoreMobyD} />
        <Route path="/Books" exact component={Books} />
        <Route exact path="/" component={HomeNotSignedIn} />

        {!currentUser && (
          <Popup trigger={true}>
            <Login setTrigger={setButtonPopup} />
          </Popup>
        )}
        <Route to="/" component={notAuthorized} />
      </Switch>
    );
  }
}

export function notAuthorized() {
  return <div>Logga in för att se detta</div>;
}
