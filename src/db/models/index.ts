import { User, UserSchema } from "./user.model";
import { Zabbix, ZabbixSchema } from "./zabbix.model";
import { Novedad, NovedadSchema } from "./novedad.model";
import { Sequelize } from 'sequelize';

export function setupModels(sequelize:Sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Zabbix.init(ZabbixSchema, Zabbix.config(sequelize));
  Novedad.init(NovedadSchema, Novedad.config(sequelize))
}
