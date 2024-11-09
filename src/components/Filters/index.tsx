import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from '../../store/reducers/filter'

import * as S from './styles'
import * as enums from '../../ultils/enums/Contact'
import { RootReducer } from '../../store'

export type Props = {
  label: string
  criterion: 'outros' | 'familia' | 'amigos' | 'trabalho' | 'todos'
  $group?: enums.$group
}

const FilterCard = ({ label, criterion, $group }: Props) => {
  const dispatch = useDispatch()
  const filter = useSelector((state: RootReducer) => state.filter)
  const contact = useSelector((state: RootReducer) => state.contact)

  const checkActive = () => {
    const sameCriterion = filter.criterion === criterion
    const same$group = filter.$group === $group

    return sameCriterion && same$group
  }

  const couterContact = () => {
    if (criterion === 'todos') return contact.itens.length
    if (criterion === criterion) {
      return contact.itens.filter((item) => item.$group === $group).length
    }
  }

  const handleFilterChange = () => {
    dispatch(
      changeFilter({
        criterion,
        $group
      })
    )
  }

  const active = checkActive()
  const counter = couterContact()

  return (
    <S.Card $active={active} onClick={handleFilterChange}>
      <S.Counter>{counter}</S.Counter>
      <S.Label>{label}</S.Label>
    </S.Card>
  )
}

export default FilterCard
