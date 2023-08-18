import { ReactElement } from 'react'
import { ScreenPath } from '../../types/type/ScreenPath'
import { SubAppPath } from '../../types/type/SubAppPath'
import useAppStateStore from '../../context/useAppStateStore'
import { shallow } from 'zustand/shallow'
import { Text } from 'react-native'

interface RouteProps {
	path: ScreenPath | SubAppPath
	component: ReactElement
	authSafe?: boolean
	proPlan?: boolean
}

interface ScreenRouteProps {
	path: ScreenPath
	component: ReactElement
	authSafe?: boolean
	proPlan?: boolean
}

interface SubAppRouteProps {
	path: SubAppPath
	component: ReactElement
	authSafe?: boolean
	proPlan?: boolean
}
const Route = () => {

}

const Screen = ({
	component,
	path,
	authSafe = false,
	proPlan = false,
}: ScreenRouteProps) => {
	const { signedIn } = useAppStateStore(
		state => ({
			signedIn: state.signedIn,
		}),
		shallow
	)

	// Any other restrictive props should be added here ( purchase gated etc )
	if (!authSafe && !proPlan) return <>{component}</>
	else if (authSafe && !proPlan) return <>{signedIn ? component : null}</>
	else if (authSafe && proPlan)
		return <>{signedIn && proPlan ? component : null}</>
	else if (!authSafe && proPlan) return <>{proPlan ? component : null}</>
	else return <Text>Something went wrong.</Text>
}

const SubApp = ({
	component,
	path,
	authSafe = false,
	proPlan = false,
}: SubAppRouteProps) => {
	const { signedIn } = useAppStateStore(
		state => ({
			signedIn: state.signedIn,
		}),
		shallow
	)

	// Any other restrictive props should be added here ( purchase gated etc )
	if (!authSafe && !proPlan) return <>{component}</>
	else if (authSafe && !proPlan) return <>{signedIn ? component : null}</>
	else if (authSafe && proPlan)
		return <>{signedIn && proPlan ? component : null}</>
	else if (!authSafe && proPlan) return <>{proPlan ? component : null}</>
	else return <Text>Something went wrong.</Text>
}

Route.Screen = Screen
Route.SubApp = SubApp

export default Route