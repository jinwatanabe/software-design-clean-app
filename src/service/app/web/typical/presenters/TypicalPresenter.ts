import { TypicalOutputData } from "../../../application/usecases/typical/outputBoundary/TypicalOutputData";
import { TypicalOutputBoundary } from "../../../application/usecases/typical/outputBoundary/TypicalOutputBoundary";
import { TypicalResponseModel } from "../../../../view/models/typical/TypicalResponseModel";

export class TypicalPresenter implements TypicalOutputBoundary {
  public viewModel: TypicalResponseModel | undefined;

  handle(outputData: TypicalOutputData): void {
    this.viewModel = new TypicalResponseModel(outputData.name);
  }
}
