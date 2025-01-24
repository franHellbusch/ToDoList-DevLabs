import { Document } from "mongoose";
import IDBTask from "./IDBTask";

/**
 * Interface representing a Task document in MongoDB.
 * * Extends the IDBTask interface with Mongoose Document properties.
 */
export type IDBMongoTask = IDBTask & Document;
