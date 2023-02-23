const initState = {}
export type InitialStateType = typeof initState

export const profileReducer = (state: InitialStateType = initState, action: ProfileActionTypes ): InitialStateType => {
	switch (action.type) {
	

		default:
			 return state
  }
}
type ProfileActionTypes = any