import { GenerateRequestBody } from "@/interface/interface";
import { myEnv } from "../tempenv";
import axios from "axios";

export const generateRequest = async ({
  uri,
  method,
  body,
  queryParams,
}: GenerateRequestBody) => {
  console.log({
    method,
    url: myEnv.API_URL + uri,
    data: body || queryParams,
  });
  try {
    const response = await axios({
      method,
      url: myEnv.API_URL + uri,
      data: body || queryParams,
    });
    return response;
  } catch (error) {
    console.log(error);
    throw new Error(error as string);
  }
};
