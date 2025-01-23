import { Document } from "mongoose";
import IDBTask from "./IDBTask";

export type IDBMongoTask = IDBTask & Document;
