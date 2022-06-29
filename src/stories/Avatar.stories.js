import Avatar from "components/Avatar";

export default {
  title: "Avatar",
  component: Avatar,
};

const Template = (args) => <Avatar {...args} />;

export const Avatar = Template.bind({});

Avatar.args = {
  src: {},
  alt: "Image",
  classname: "",
  size: "sm",
};
