import { Document } from "mongoose";
import IDBToDo from "./IDBToDo";

export type IDBMongoToDo = IDBToDo & Document;
