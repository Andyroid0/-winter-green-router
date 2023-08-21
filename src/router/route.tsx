import React, { ReactElement } from 'react'
interface ScreenRouteProps<T> {
	path: T
	component: ReactElement
	authSafe?: boolean
	gateSafe?: boolean
    fallback?: boolean
    parent?: ReactElement
}


const Route = () => {}

const Screen = <T,>({
	component,
	path,
	authSafe = false,
	gateSafe = false,
    fallback = false,
}: ScreenRouteProps<T>) => {

	return component
}

Route.Screen = Screen

export default Route
