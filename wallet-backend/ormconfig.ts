
import { User } from 'entity/user.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'wallet',
  host: 'db_service',
  port: 5432,
  username: 'admin',
  password: 'admin',
  entities: [User],
  synchronize: true,
};

export default config;