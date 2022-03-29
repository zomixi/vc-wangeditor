import { mount } from "@vue/test-utils";
import Component from "@/index.vue";

describe("Component", () => {
  it("is a Vue instance", () => {
    const wrapper = mount(Component);
    expect(wrapper.vm).toBeTruthy();
  });
});
