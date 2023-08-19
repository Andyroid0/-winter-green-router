import React, {
    createContext,
    ReactElement,
    useState } from 'react'

interface RouterProps {
	children: ReactElement[]
    isSignedIn?: boolean
    isGated?: boolean
    routes: string[]
    ErrorView?: ReactElement
    Default?: ReactElement
}

export const RouterContext = createContext()

const Router = () => {}

const Screens = ({ children, routes, isGated, isSignedIn, ErrorView, Default }: RouterProps) => {

    const [screen, setScreen] = useState()

	const len = children.length
    const routeCollectionAsConst = [...routes] as const
    type possibleRoutes = typeof routeCollectionAsConst[number]

	for (let i = 0; i < len; i++) {

		if (children[i].props.path === screen) {
            const Result = children[i]
            const gateSafe = Result.props.gateSafe
            const authSafe = Result.props.authSafe

            const isUnrestricted = (!authSafe && !gateSafe)

            const isAuthSafeOnly = (authSafe && !gateSafe)

            const isGateSafeOnly = (!authSafe && gateSafe)

            const isAuthSafeAndGated = (authSafe && gateSafe)


            if ( isUnrestricted ) {
                return <Result<possibleRoutes>/>
            }
            else if ( isAuthSafeOnly ) {
                return isSignedIn ? <Result<possibleRoutes>/> : Default ?? null
            }
            else if ( isAuthSafeAndGated ) {
                return isSignedIn && isGated ? <Result<possibleRoutes>/> : ErrorView ?? null
            }
            else if ( isGateSafeOnly ) {
                return isGated ? <Result<possibleRoutes>/> : ErrorView ?? null
            }
            else return null

		}
	}
	return <></>
}

Router.Screens = Screens

export default Router
