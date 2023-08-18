import React, { 
    createContext,
    ReactElement, 
    useState } from 'react'

interface RouterProps {
	children: ReactElement[]
    isSignedIn?: boolean
    isGateOpen?: boolean
    routes: string[]
}

export const RouterContext = createContext()

const Router = () => {}

const Screens = ({ children, routes, isGateOpen, isSignedIn }: RouterProps) => {

    const [screen, setScreen] = useState()

	const len = children.length
    const routeCollectionAsConst = [...routes] as const
    type possibleRoutes = typeof routeCollectionAsConst[number]

	for (let i = 0; i < len; i++) {
		if (children[i].props.path === screen) {
            const Result = children[i]

            if(Result.props.gated)
            if(Result.props.authSafe)
            //return get the fallback component
            //also add a errorScreen
			return <RouterContext.Provider value={{isGateOpen, isSignedIn, setScreen}}>
                {<Result<possibleRoutes>/>}
            </RouterContext.Provider>
		}
	}
	return <></>
}

Router.Screens = Screens

export default Router
