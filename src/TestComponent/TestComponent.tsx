import React from "react";

import { TestComponentProps } from "./TestComponent.types";

import "./TestComponent.scss";

const TestComponent: React.FC<TestComponentProps> = ({ theme }) => (
  <div
    data-testid="test-component"
    className={`test-component test-component-${theme}`}
  >
    <h1 className="heading">I'm the test component</h1>
    <h1 className="fs-sm">Made with love by Harvey</h1>
  </div>
);

export default TestComponent;
