import { Column, ForeignKey, Model, Table } from 'sequelize-typescript'
import User from './User'

@Table
class Vehicle extends Model {
  @ForeignKey(() => User)
  @Column
  year!: number

  @Column
  make!: string

  @Column
  model!: string
}

export default Vehicle
