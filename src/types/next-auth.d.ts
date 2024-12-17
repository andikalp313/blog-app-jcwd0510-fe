import { User } from "./User";

import { DefaultSession } from "next-auth";

// import {type Default}

interface Payload extends User {
  token: string;
}

declare module "next-auth" {
  interface Session {
    user: Payload;
  }
}
