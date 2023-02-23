const initState = {}
export type InitialStateType = typeof initState

export const registrationReducer = (state: InitialStateType = initState, action: RegistrationActionTypes ): InitialStateType => {
	switch (action.type) {
	

		default:
			 return state
  }
}
type RegistrationActionTypes = any