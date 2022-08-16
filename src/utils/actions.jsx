import states from "../states";

export const actions = {
  toggleLoader: () => {
    states.loading = !states.loading;
  },
};
