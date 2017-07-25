import { BaseModel } from './BaseModel';
import { DataTypes, Model, Sequelize } from 'sequelize';

export class MainModel extends BaseModel {
    status: string;
}

export class AssociatedModel extends BaseModel {
    associatedModelAttribute: string;
}

export class AdditionalModel extends Model {
    ok: string;
}

MainModel.init({}, { sequelize: new Sequelize('lorem', 'ipsum', 'dolor', {}) });

// Typescript will throw an error here because hasMany's first parameter is looking for something
// that is `typeof Model`. Even though AssociatedModel extends Model, it says they are not assignable
MainModel.hasMany(AssociatedModel, {
    foreignKey: 'associatedModel',
    as: 'associated'
});

// Will also throw error `typeof Model is not assignable to AdditionalModel`,
// even though this class extends that very class
MainModel.hasOne(AdditionalModel, {});