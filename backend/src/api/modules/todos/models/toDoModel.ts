import { model, Schema } from "mongoose";
import { IDBMongoToDo } from "../interfaces/IDBMongoToDo";
import { Priority } from "../types/Priority";

const ToDoSchema = new Schema<IDBMongoToDo>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      defaul: null,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    dueDate: {
      type: Date,
      default: null,
    },
    priority: {
      type: String,
      enum: Object.values(Priority),
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Duplicate the ID field.
ToDoSchema.virtual("id").get(function () {
  return this._id;
});

export const toDoModel = model("toDo", ToDoSchema);
