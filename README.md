# Wintergreen-router 🌲
 

A simple router from react and react-native.

NOTE: Right now it's equipped to handle screens. Path and Page handling to follow.

Twitter/X= @_andrewvalley

## Subscribe to my email list for updates on all of my products? [Click Here](https://www.adderst.one/subscribe "Subscribe")

-*There won't be a confirmation email*




Install: 
```
npm i winter-green-router
```

Usage:
```

const Example = () => {
    
    type possibleScreens = "signin" | "signup" | "dashboard" | "contact"
    const ScreenRouter = Router.Screens<possibleScreens>
    const Screen = Route.Screen<possibleScreens>
    const [path, setPath] = useState<possibleScreens>('signin')

    const SignIn = () => <div>SignIn</div>
    const Dashboard = () => <div>Dashboard</div>


    return <ScreenRouter
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
}
```