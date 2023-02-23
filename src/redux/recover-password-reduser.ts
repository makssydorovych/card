const initState = {}
export type InitialStateType = typeof initState

export const recoverPasswordReducer = (state: InitialStateType = initState, action: RecoverPasswordActionTypes ): InitialStateType => {
	switch (action.type) {
	

		default:
			 return state
  }
}
type RecoverPasswordActionTypes = any