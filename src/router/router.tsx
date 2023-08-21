import React, {
    FC,
    ReactElement,
    useEffect,
    useState } from 'react'

interface RouterProps<T> {
	children: ReactElement[] | undefined
    isSignedIn?: boolean
    isGated?: boolean
    ErrorView?: ReactElement
    Default?: ReactElement
    path: T
}

const Router = () => {}

const Screens = <T,>({ children, isGated, isSignedIn, ErrorView, Default, path }: RouterProps<T>) => {

    const [screen, setScreen] = useState<T|null>()

    useEffect( () => {
        if( screen !== path ) {
            setScreen(path)
        }
    }, [path])

    if( !children ) return <></>

	const len = children.length

	for (let i = 0; i < len; i++) {

		if (children[i].props.path === screen) {
            const Result = children[i] as ReactElement
            const gateSafe = Result.props.gateSafe
            const authSafe = Result.props.authSafe

            const isUnrestricted = (!authSafe && !gateSafe)

            const isAuthSafeOnly = (authSafe && !gateSafe)

            const isGateSafeOnly = (!authSafe && gateSafe)

            const isAuthSafeAndGated = (authSafe && gateSafe)

            const HandleErrorView = () => {

                if ( ErrorView === undefined ) {
                    return <></>
                }
                else return ErrorView
            }

            const HandleDefault = () => {

                if ( Default === undefined ) {
                    return <></>
                }
                else return Default
            }

            if ( isUnrestricted ) {
                return Result
            }
            else if ( isAuthSafeOnly ) {
                return isSignedIn ? Result : HandleDefault()
            }
            else if ( isAuthSafeAndGated ) {
                return isSignedIn && isGated ? Result : HandleErrorView()
            }
            else if ( isGateSafeOnly ) {
                return isGated ? Result : HandleErrorView()
            }
            else return <></>

		}
	}
	return <></>
}

Router.Screens = Screens

export default Router
