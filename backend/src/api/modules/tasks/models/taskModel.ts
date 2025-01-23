import { model, Schema } from "mongoose";
import { IDBMongoTask } from "../interfaces/IDBMongoTask";
import { Priority } from "../types/Priority";

const TaskSchema = new Schema<IDBMongoTask>(
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
      required: true,
    },
    priority: {
      type: String,
      enum: Object.values(Priority),
      required: true,
    },
    userId: {
      type: String,
      required: true,
      index: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Duplicate the ID field.
TaskSchema.virtual("id").get(function () {
  return this._id;
});

export const taskModel = model("task", TaskSchema);
