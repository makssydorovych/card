import React from 'react'
import SuperButton from '../common/SuperButton/SuperButton'
import SuperCheckbox from '../common/SuperCheckbox/SuperCheckbox'
import SuperEditableSpan from '../common/SuperEditableSpan/SuperEditableSpan'
import SuperRadio from '../common/SuperRadio/SuperRadio'
import SuperSelect from '../common/SuperSelect/SuperSelect'

export const Preview = () => {
  return (
	 <div>
		<SuperButton />
		<SuperCheckbox />
		<SuperEditableSpan />
		<SuperRadio />
		<SuperSelect />
	 </div>
  )
}
