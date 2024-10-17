import * as S from './styles'

const Task = () => (
  <S.Card>
    <S.Title>Tarefa</S.Title>
    <S.Tag>Trabalho</S.Tag>
    <S.Description />
    <S.ActionBar>
      <S.Button>Editar</S.Button>
      <S.Button>Remover</S.Button>
    </S.ActionBar>
  </S.Card>
)

export default Task
