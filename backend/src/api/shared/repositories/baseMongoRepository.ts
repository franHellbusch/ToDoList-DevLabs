import { Document, Model, RootFilterQuery, UpdateQuery } from "mongoose";

export class BaseMongoRepository<T extends Document> {
  constructor(private readonly model: Model<T>) {}

  getAll = async (params: RootFilterQuery<T> = {}) => {
    return await this.model.find(params);
  };

  getById = async (id: string) => {
    return await this.model.findById(id);
  };

  getBy = async (filter: RootFilterQuery<T> = {}) => {
    return await this.model.findOne(filter);
  };

  create = async (object: unknown) => {
    const data = new this.model(object);
    return await data.save();
  };

  updateById = async (id: string, object: UpdateQuery<T>) => {
    const data = await this.model.findByIdAndUpdate(id, object, {
      new: true,
      upsert: true,
    });

    return data;
  };

  deleteById = async (id: string) => {
    await this.model.findByIdAndDelete(id);
  };
}
