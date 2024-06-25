import { HTTPRequestTypes } from "./types";

export interface GenerateRequestBody {
  uri: string;
  method: HTTPRequestTypes;
  body?: { [key: string]: any };
  queryParams?: { [key: string]: String };
}
