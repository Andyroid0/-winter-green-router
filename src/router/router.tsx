import React, {
    createContext,
    ReactElement,
    useState } from 'react'

interface RouterProps {
	children: ReactElement[] | ReactElement | undefined
    isSignedIn?: boolean
    isGated?: boolean
    ErrorView?: ReactElement
    Default?: ReactElement
}

export const RouterContext = createContext()

export const Router = () => {}

const Screens = ({ children, isGated, isSignedIn, ErrorView, Default }: RouterProps) => {

    const [screen, setScreen] = useState()

	const len = children.length

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
                return <Result/>
            }
            else if ( isAuthSafeOnly ) {
                return isSignedIn ? <Result/> : Default ?? null
            }
            else if ( isAuthSafeAndGated ) {
                return isSignedIn && isGated ? <Result/> : ErrorView ?? null
            }
            else if ( isGateSafeOnly ) {
                return isGated ? <Result/> : ErrorView ?? null
            }
            else return null

		}
	}
	return <></>
}

Router.Screens = Screens
