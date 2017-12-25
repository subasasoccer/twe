//@flow
import SequelizeCockroach from 'sequelize-cockroachdb';
import type Sequelize from 'sequelize';

const db:Sequelize = new SequelizeCockroach('twe', 'twe', 'twe', {
  dialect: 'postgres',
  port: 26257,
  logging: true,
  ssl: true,
  dialectOptions: {
    ssl: true,
  }
});

export default db;