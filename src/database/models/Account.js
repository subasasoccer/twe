// @flow
import Sequelize from 'sequelize';
import db from 'database/db';

const Account = db.define('accounts', {
  id: { type: Sequelize.INTEGER, primaryKey: true },
  blance: { type: Sequelize.INTEGER }
});

Account.sync();
// example: 
// Account.sync({force: true}).then(() => Account.bulkCreate([
//       { id: 1, blance: 1000 },
//       { id: 2, blance: 1000 },
// ]));

export default Account;