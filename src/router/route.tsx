import React, { ReactElement } from 'react'

interface ScreenRouteProps<T> {
	path: T
	component: ReactElement
	authSafe?: boolean
	gated?: boolean
    fallback?: boolean
}


const Route = () => {}

const Screen = <T,>({
	component,
	path,
	authSafe = false,
	gated = false,
    fallback = false,
}: ScreenRouteProps<T>) => {

	// // Any other restrictive props should be added here ( purchase gated etc )
	// if (!authSafe && !gated) return <>{component}</>
	// else if (authSafe && !gated) return <>{isSignedIn ? component : null}</>
	// else if (authSafe && gated)
	// 	return <>{isSignedIn && gated ? component : null}</>
	// else if (!authSafe && gated) return <>{gated ? component : null}</>
	// else return null
	return component
}

Route.Screen = Screen

export default Route
