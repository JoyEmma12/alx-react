import react from "react";
import { shallow } from "enzyme";
import Notifications from "../Notifications";
import Header from "../Header";
import Login from "../Login";
import Footer from "../Footer";

describe("App Component", () => {
  it("contains the Notifications component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Notifications />)).toBe(true);
  });

  it("contains the Header component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Header />)).toBe(true);
  });

  it("contains the Login component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Login />)).toBe(true);
  });

  it("contains the Footer component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Footer />)).toBe(true);
  });
});
