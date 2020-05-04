import { nanoid } from "nanoid/non-secure";

export function getNanoid(): string {
  return nanoid()
}