import Button from "components/Button/Button";

export default {
  title: "Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: "Primary Button",
  color: "primary",
};
