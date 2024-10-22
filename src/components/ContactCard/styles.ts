import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import * as enums from '../../ultils/enums/Contact'

type GroupProps = {
  group?: enums.Group
}

function BackGroundGroupColor(props: GroupProps): string {
  if ('group' in props) {
    if (props.group === enums.Group.FAMILY) return variaveis.blue
    if (props.group === enums.Group.FRIENDS) return variaveis.green
    if (props.group === enums.Group.WORK) return variaveis.yellow
  }
  return variaveis.white
}

export const Card = styled.div`
  background-color: #212121;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 32px;
  border-radius: 16px;
`
export const Container = styled.div<GroupProps>`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 24px;
  background-color: ${(props) => BackGroundGroupColor(props)};
  padding: 16px;
`
export const Avatar = styled.img`
  border-radius: 100%;
  width: 80px;
`
export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
`
export const ContactInfo = styled.li`
  color: #8b8b8b;
  font-size: 16px;
  line-height: 24px;
  display: block;
  margin: 16px;
`
export const ActionBar = styled.div`
  border-top: 1px solid rgba(139, 139, 139, 0.3);
  padding: 16px;
`
export const Button = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  margin-right: 8px;
  border-radius: 8px;
`
export const SalveButton = styled(Button)`
  background-color: ${variaveis.green};
`
export const CancelRemoveButton = styled(Button)`
  background-color: ${variaveis.red};
`
