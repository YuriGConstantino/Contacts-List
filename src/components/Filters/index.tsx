import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from '../../store/reducers/filter'

import * as S from './styles'
import * as enums from '../../ultils/enums/Contact'
import { RootReducer } from '../../store'

export type Props = {
  counter: number
  label: string
  criterion: 'family' | 'friends' | 'work' | 'others' | 'all'
  group?: enums.Group
}

const FilterCard = ({ counter, label, criterion, group }: Props) => {
  const dispatch = useDispatch()
  const { filter } = useSelector((state: RootReducer) => state)

  const checkActive = () => {
    const sameCriterion = filter.criterion === criterion
    const sameGroup = filter.group === group

    return sameCriterion && sameGroup
  }

  const handleFilterChange = () => {
    dispatch(
      changeFilter({
        criterion,
        group
      })
    )
  }

  const active = checkActive()

  return (
    <S.Card active={active} onClick={handleFilterChange}>
      <S.Counter>{counter}</S.Counter>
      <S.Label>{label}</S.Label>
    </S.Card>
  )
}

export default FilterCard
