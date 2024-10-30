import { useDispatch, useSelector } from 'react-redux'
import FilterCard from '../../components/Filters'
import { changeWord } from '../../store/reducers/filter'
import { RootReducer } from '../../store'
import * as S from './styles'
import * as enums from '../../ultils/enums/Contact'

const SideBar = () => {
  const dispatch = useDispatch()
  const { word } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        <S.Field
          type="text"
          placeholder="Buscar"
          value={word}
          onChange={(e) => dispatch(changeWord(e.target.value))}
        />
        <S.Filters>
          <FilterCard
            group={enums.Group.FAMILY}
            criterion="family"
            label="Familia"
            counter={1}
          />
          <FilterCard
            group={enums.Group.FRIENDS}
            criterion="friends"
            label="Amigos"
            counter={1}
          />
          <FilterCard
            group={enums.Group.WORK}
            criterion="work"
            label="Trabalho"
            counter={1}
          />
          <FilterCard
            group={enums.Group.OTHERS}
            criterion="others"
            label="Outros"
            counter={1}
          />
          <FilterCard criterion="all" label="Todas" counter={4} />
        </S.Filters>
      </div>
    </S.Aside>
  )
}

export default SideBar
