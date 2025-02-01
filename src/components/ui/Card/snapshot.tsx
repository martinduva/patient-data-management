import { render } from "@testing-library/react";

import { Card } from "@/components/ui/Card";

it("renders card unchanged", () => {
  const { container } = render(<Card />);
  expect(container).toMatchSnapshot();
});
