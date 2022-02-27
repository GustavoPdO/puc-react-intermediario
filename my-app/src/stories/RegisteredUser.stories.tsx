import { Meta, Story } from "@storybook/react";
import { NoProfilePic } from "assets/NoProfilePic";
import RegisteredUser from "components/RegisteredUser";
import { RegisteredUserProps } from "Types";

const meta: Meta = {
  title: "RegisteredUser",
  component: RegisteredUser
}

export default meta;

const Template: Story<RegisteredUserProps> = (args) => <RegisteredUser {...args} />

export const Main = Template.bind({})
Main.args = {
  name: "User name",
  email: "user@email.com",
  avatar: NoProfilePic
}