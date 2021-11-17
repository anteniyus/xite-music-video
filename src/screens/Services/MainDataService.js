import RestAPI from "../../rest/ResiAPI";
import { getMainDataURL } from "../../rest/URLs";

const api = new RestAPI();

export const getMainData = () =>
  api.SendRequest("get", getMainDataURL(), {}).then((response) => response);
