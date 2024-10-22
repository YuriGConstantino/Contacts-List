import * as enums from '../ultils/enums/Contact'

class Contact {
  title: string
  phoneNumber: string
  email: string
  group: enums.Group
  id: number

  constructor(
    title: string,
    phoneNumber: string,
    email: string,
    group: enums.Group,
    id: number
  ) {
    this.title = title
    this.phoneNumber = phoneNumber
    this.email = email
    this.group = group
    this.id = id
  }
}

export default Contact
