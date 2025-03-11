import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ServiceCard from "../ServiceCard";

const serviceCardMockObject = { 
    ServiceName: "ServiceName",
    ServiceDescription: "ServiceDescription",
    ServiceImage: {
        asset: {
        url: "url"
        }
    }
}
describe("Testing rendering of ui", () => {

  it("Renders Service Card Succesfully", () => {
    render(<ServiceCard service={serviceCardMockObject} index={2} />);
    expect(screen.getByTestId("service-card")).toBeInTheDocument();
  });

});
