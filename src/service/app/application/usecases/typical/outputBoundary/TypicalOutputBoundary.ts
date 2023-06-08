import { TypicalOutputData } from "./TypicalOutputData";

export interface TypicalOutputBoundary {
  handle(outputDate: TypicalOutputData): void;
}
