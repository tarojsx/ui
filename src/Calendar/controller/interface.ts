import { CommonEventFunction } from '@tarojs/components'

import Calendar from '../types'

export interface Props {
  generateDate: Calendar.DateArg

  minDate?: Calendar.DateArg

  maxDate?: Calendar.DateArg

  hideArrow: boolean

  monthFormat: string

  onPreMonth: () => void

  onNextMonth: () => void

  onSelectDate: CommonEventFunction
}

export interface State {}
