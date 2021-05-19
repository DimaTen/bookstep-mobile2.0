import { useAuth } from '../contexts/AuthContext';
import HomeSignedIn from '../HomeSignedIn';
import Books from './Books';
import Profile from './Profile';
import AudioPlayer from './Player/AudioPlayer';
import { Route, Switch } from 'react-router-dom';
import HomeNotSignedIn from '../HomeNotSignedIn';
import ReadyToUseBookstep from '../ReadyToUseBookstep';

export default function MainContent() {
  const { currentUser } = useAuth();

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
        <Route path="/" exact component={HomeSignedIn} />
      </>
    );
  } else {
    return (
      <Switch>
        <Route exact path="/" component={HomeNotSignedIn} />
        <Route to="/" component={notAuthorized} />
      </Switch>
    );
  }
}

export function notAuthorized() {
  return <div>Logga in för att se detta</div>;
}
