import { TypicalPresenter } from "./service/app/web/typical/presenters/TypicalPresenter";
import { JPUserRepository } from "./service/app/infrastructure/JPUserRepository";
import { TypicalInteractor } from "./service/app/application/usecases/typical/interactors/TypicalInteractor";

const userRepository = new JPUserRepository();
export const outputBoundary = new TypicalPresenter();

export const inputBoundary = new TypicalInteractor(
  userRepository,
  outputBoundary
);
