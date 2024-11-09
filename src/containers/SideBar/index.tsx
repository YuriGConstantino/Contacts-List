import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FilterCard from '../../components/Filters'
import { changeWord } from '../../store/reducers/filter'
import { RootReducer } from '../../store'
import * as S from './styles'
import * as enums from '../../ultils/enums/Contact'
import { Button, Field } from '../../styles'

type Props = {
  showFilters: boolean
}

const SideBar = ({ showFilters }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { word } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        {showFilters ? (
          <>
            <Field
              type="text"
              placeholder="Buscar"
              value={word}
              onChange={(e) => dispatch(changeWord(e.target.value))}
            />
            <S.Filters>
              <FilterCard
                $group={enums.$group.FAMILY}
                criterion="familia"
                label="Familia"
              />
              <FilterCard
                $group={enums.$group.FRIENDS}
                criterion="amigos"
                label="Amigos"
              />
              <FilterCard
                $group={enums.$group.WORK}
                criterion="trabalho"
                label="Trabalho"
              />
              <FilterCard
                $group={enums.$group.OTHERS}
                criterion="outros"
                label="Outros"
              />
              <FilterCard criterion="todos" label="Todas" />
            </S.Filters>
          </>
        ) : (
          <Button onClick={() => navigate('/')}>Voltar para os contados</Button>
        )}
      </div>
    </S.Aside>
  )
}

export default SideBar
