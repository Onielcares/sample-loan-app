import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';
import { Gender } from '../enums/gender.enum';

interface UserAttributes {
  id: number;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  dob?: Date;
  gender?: Gender;
  nin?: string;
  phone?: string;
  address?: string;
  employerName?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public email!: string;
  public password!: string;
  public firstName?: string;
  public lastName?: string;
  public dob?: Date;
  public gender?: Gender;
  public nin?: string;
  public phone?: string;
  public address?: string;
  public employerName?: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  dob: DataTypes.DATEONLY,
  gender: DataTypes.ENUM(...Object.values(Gender)),
  nin: {
    type: DataTypes.STRING,
    unique: true,
    validate: {
      is: /^\d{11}$/, // Nigerian NIN format
    },
  },
  phone: DataTypes.STRING,
  address: DataTypes.STRING,
  employerName: DataTypes.STRING,
}, {
  sequelize,
  tableName: 'users',
});