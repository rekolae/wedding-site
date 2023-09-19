import { UsersResponse } from "./pocketbase-types";

// Used to get expanded data
export type ExpandWithRespondents = {
  respondents: UsersResponse[];
};
