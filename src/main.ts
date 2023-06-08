import { inputBoundary, outputBoundary } from "./container";
import { UserId } from "./service/app/application/domain/models/User";

let name;

const userId = new UserId(1);
inputBoundary.handle(userId).then(() => {
  name = outputBoundary.viewModel?.result();
  document.querySelector<HTMLDivElement>("#app")!.innerHTML = ` <div>
      ${name}
    </div>
  `;
});
