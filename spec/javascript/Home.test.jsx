import React from "react";
import Home from "../../app/assets/javascripts/components/Home/Home";
import { shallow, render, mount, invoke } from "enzyme";
import ReactLoading from "react-loading";
import { Bar } from "react-chartjs-2";
jest.mock("axios");

describe("Home", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Home debug />);

    expect(component).toMatchSnapshot();
  });

  describe("<ReactLoading />", () => {
    it("should render loading spinner", () => {
      const container = render(<ReactLoading />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe("fetchData", () => {
  test("successfully data from an API", () => {
    const wrapper = mount(<Bar />);
    wrapper.invoke("handler")();
    expect(wrapper.text()).toBe("Hi Yusinto Ngadiman React Junkie!");
  });
});
