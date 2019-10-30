import Sequelize from 'sequelize';
import contactsModel from './contacts';
import addressesModel from './addresses';
import config from '../config';

const sequelize = new Sequelize(
  config.database.database, // database
  config.database.username, // username
  config.database.password, // password
  {
    host: config.database.host,
    dialect: 'postgres',
  },
);

export default {
  Sequelize,
  sequelize,
  contacts: contactsModel(sequelize, Sequelize.DataTypes),
  addresses: addressesModel(sequelize, Sequelize.DataTypes)
}
