import axios, { AxiosInstance } from "axios";
import { API_URL } from "./config";

export default class Api {
  private static _baseUrl: string = API_URL;
  private static _request: AxiosInstance = axios.create({
    baseURL: Api._baseUrl,
    timeout: 5000,
  });

  public static async episode(id: string, episode = "") {
    const result = await this._request.get(`episode/${id}/${episode}`);

    return result;
  }

  public static async releases() {
    const result = await this._request.get("releases");

    return result;
  }
}
