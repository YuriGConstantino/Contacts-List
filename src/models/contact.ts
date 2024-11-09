import * as enums from '../ultils/enums/Contact'
class Contact {
  name: string
  phoneNumber: string
  email: string
  $group: enums.$group
  id: number
  image: string
  constructor(
    name: string,
    phoneNumber: string,
    email: string,
    $group: enums.$group,
    id: number,
    image: string
  ) {
    this.name = name
    this.phoneNumber = phoneNumber
    this.email = email
    this.$group = $group
    this.id = id
    this.image = image
  }
}
export default Contact
