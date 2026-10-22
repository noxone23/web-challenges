import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navigation from ".";
import { expect, vi } from "vitest";

test("renders with two buttons 'Play' and 'History'", () => {
   
    render(<Navigation view="play" onChangeView={() => {}} />);

    const playButton = screen.getByText("Play")
    const historyButton = screen.getByText("History")

    expect(playButton).toBeInTheDocument();
    expect(historyButton).toBeInTheDocument();

});

test("calls the callback with the name of the view when a button is clicked", async () => {

    const user = userEvent.setup();
    const handleChangeView = vi.fn();

    render(<Navigation view="play" onChangeView={handleChangeView} />);

    const historyButton = screen.getByText("History");

    await user.click(historyButton);

    expect(handleChangeView).toHaveBeenCalledWith("history");


});
