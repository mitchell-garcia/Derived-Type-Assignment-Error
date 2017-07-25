import { MainModel } from './MainModel';

// The code below will throw this error:
// `The 'this' context of type 'typeof MainModel' is not assignable to method's 'this' of type '(new () => MainModel) & typeof Model'.`
const test = MainModel.findById(300);