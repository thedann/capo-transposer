import { render, screen } from "@testing-library/react";
import CapoSelector from "../Components/CapoSelector";
import ApplicationContextProvider, { AppContext } from "../Context/Context";
import { Chord } from "../Helpers/Chords";
import userEvent from "@testing-library/user-event";

describe("CapoSelector", () => {
  it("should render correctly", async () => {
    const capoFret = 0;
    const updateCapo = jest.fn();
    const currentChord = Chord.C;
    const updateCurrentChord = jest.fn();

    expect(1).toEqual(1);
    render(
      <AppContext.Provider
        value={{ capoFret, updateCapo, currentChord, updateCurrentChord }}
      >
        <CapoSelector />
      </AppContext.Provider>
    );

    expect(screen.getAllByRole("listitem")).toHaveLength(7);
    await userEvent.click(screen.getAllByRole("listitem")[5]);

    expect(updateCapo).toHaveBeenCalledWith(5);
  });
});
