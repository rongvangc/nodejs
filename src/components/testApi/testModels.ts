import { Schema, model } from "mongoose";
import { TestApiType } from "src/utils/types";

// Create a Schema corresponding to the document interface.
const testApiSchema = new Schema<TestApiType>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  // And `Schema.Types.ObjectId` in the schema definition.
  organization: { type: Schema.Types.ObjectId, ref: "Organization" },
});

export const TestApiModel = model("TestApi", testApiSchema);
