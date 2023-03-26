import { Column, HasMany, Model, Table } from 'sequelize-typescript'
import Vehicle from './Vehicle'

@Table
class User extends Model {
  @Column
  firstName!: string

  @Column
  lastName!: string

  @Column
  dob!: string

  @Column
  addressStreet!: string

  @Column
  addressCity!: string

  @Column
  addressState!: string

  @Column
  addressPostal!: string

  @HasMany(() => Vehicle)
  vehicles!: Vehicle[]

  @Column
  quotePrice!: number
}

export default User
