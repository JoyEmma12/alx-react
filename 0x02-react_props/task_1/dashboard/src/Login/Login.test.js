import react from "react";
import { shallow } from "enzyme";
import Login from "./Login";

describe("Login Component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Login />);
    except(wrapper.exists()).toBe(true);
  });

  it("renders input and label tags", () => {
    const wrapper = shallow(<Login />);
    except(wrapper.find("input")).toHaveLength(2);
    except(wrapper.find("label")).toHaveLength(2);
  });
});
