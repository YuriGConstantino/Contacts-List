import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import * as enums from '../../ultils/enums/Contact'
import { Button } from '../../styles'

type $groupProps = {
  $group?: enums.$group
}

function BackGround$groupColor(props: $groupProps): string {
  if ('$group' in props) {
    if (props.$group === enums.$group.FAMILY) return variaveis.blue
    if (props.$group === enums.$group.FRIENDS) return variaveis.green
    if (props.$group === enums.$group.WORK) return variaveis.yellow
  }
  return variaveis.gray
}

export const Card = styled.div`
  background-color: #212121;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
`
export const Container = styled.div<$groupProps>`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 24px;
  background-color: ${(props) => BackGround$groupColor(props)};
  padding: 16px;
  border-radius: 16px 16px 0 0;
`
export const Name = styled.h3`
  color: #000;
  font-size: 18px;
  font-weight: bold;
`
export const ContactInfo = styled.li`
  font-size: 16px;
  line-height: 24px;
  display: block;
  margin: 16px;
`
export const ActionBar = styled.div`
  border-top: 1px solid rgba(139, 139, 139, 0.3);
  padding: 16px;
`
export const CancelRemoveButton = styled(Button)`
  background-color: ${variaveis.red};
`
