import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Skill extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public desc: string

  @column()
  public dec: string
}
