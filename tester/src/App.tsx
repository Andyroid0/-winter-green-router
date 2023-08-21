import React, {useState} from 'react';
import './App.css';
import {Router, Route} from '@andyroid0/wintergreen-router'

function App() {

    type possibleScreens = "signin" | "signup" | "dashboard" | "contact"
    const ScreenRouter = Router.Screens<possibleScreens>
    const Screen = Route.Screen<possibleScreens>
    const [path, setPath] = useState<possibleScreens>('signin')

    const SignIn = () => <div>SignIn</div>
    const Dashboard = () => <div>Dashboard</div>

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => setPath('dashboard')}>dashboard</button>
        <button onClick={() => setPath('signin')}>signin</button>

      </header>

      <ScreenRouter
        path={path}
      >
        <Screen
            path='signin'
            component={<SignIn/>}
        />
        <Screen
            path='dashboard'
            component={<Dashboard/>}
        />
      </ScreenRouter>
    </div>
  );
}

export default App;
