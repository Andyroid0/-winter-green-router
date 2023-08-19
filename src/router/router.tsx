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
            const gated = Result.props.gated
            const authSafe = Result.props.authSafe

            const isUnrestricted = (!authSafe && !gated)

            const isAuthSafeOnly = (authSafe && !gated)

            const isGateSafeOnly = (!authSafe && gated)

            const isAuthSafeAndGated = (authSafe && gated)


            if ( isUnrestricted ) {
                return <Result<possibleRoutes>/>
            }
            else if ( isAuthSafeOnly ) {
                return isSignedIn ? <Result<possibleRoutes>/> : null // should return fallback instead of null
            }
            else if ( isAuthSafeAndGated ) {
                return isSignedIn && gated ? <Result<possibleRoutes>/> : null // should return errorBoundary instead of null
            }
            else if ( isGateSafeOnly ) {
                return gated ? <Result<possibleRoutes>/> : null // should return errorBoundary instead of null
            }
            else return null

            //return get the fallback component
            //also add a errorScreen
			// return <RouterContext.Provider value={{isGateOpen, isSignedIn, setScreen}}>
            //     {<Result<possibleRoutes>/>}
            // </RouterContext.Provider>
		}
	}
	return <></>
}

Router.Screens = Screens

export default Router


	// Any other restrictive props should be added here ( purchase gated etc )
	// if (!authSafe && !gated) return <>{component}</>
	// else if (authSafe && !gated) return <>{isSignedIn ? component : null}</>
	// else if (authSafe && gated)
	// 	return <>{isSignedIn && gated ? component : null}</>
	// else if (!authSafe && gated) return <>{gated ? component : null}</>
	// else return null
