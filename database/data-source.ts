import { DataSource, DataSourceOptions } from 'typeorm'
import * as dotenv from 'dotenv'
import * as process from 'process'

dotenv.config()

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  entities: ['dist/**/*.entity.{js,ts}'],
  migrations: ['dist/database/migrations/*{.ts,.js}'],
}

const dataSource = new DataSource(dataSourceOptions)
export default dataSource
