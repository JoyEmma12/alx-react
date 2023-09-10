import react from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

describe("Footer Component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Footer />);
    except(wrapper.exists()).toBe(true);
  });

  it('renders text "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    except(wrapper.contains("Copyright")).toBe(true);
  });
});
