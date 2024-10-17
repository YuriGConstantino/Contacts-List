import FilterCard from '../../components/Filters'
import * as S from './styles'

const SideBar = () => (
  <S.Aside>
    <div>
      <S.Field type="text" placeholder="Buscar" />
      <S.Filters>
        <FilterCard label="Familia" counter={1} />
        <FilterCard label="Amigos" counter={1} />
        <FilterCard label="Trabalho" counter={1} />
        <FilterCard label="Emergencia" counter={1} />
        <FilterCard label="Total" counter={4} active />
      </S.Filters>
    </div>
  </S.Aside>
)

export default SideBar
