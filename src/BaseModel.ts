import { Model } from 'sequelize';

export abstract class BaseModel extends Model {
    id?: number;
    createdAt?: Date;
    updatedAt?: Date;
}