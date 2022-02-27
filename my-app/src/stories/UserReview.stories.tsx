import { Meta, Story } from "@storybook/react"
import { NoProfilePic } from "assets/NoProfilePic";
import UserReview from "components/UserReview"
import { UserReviewProps } from "Types";

const meta: Meta = {
  title: "UserReview",
  component: UserReview
}

export default meta;

const Template: Story<UserReviewProps> = (args) => <UserReview {...args} />

export const Main = Template.bind({})
Main.args = {
  name: "User name",
  review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget maximus elit, vel fringilla diam. Maecenas ipsum nisi, feugiat eu ipsum eget, aliquam vestibulum nunc, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget maximus elit, vel fringilla diam. Maecenas ipsum nisi, feugiat eu ipsum eget, aliquam vestibulum nunc, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget maximus elit, vel fringilla diam. Maecenas ipsum nisi, feugiat eu ipsum eget, aliquam vestibulum nunc, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget maximus elit, vel fringilla diam. Maecenas ipsum nisi, feugiat eu ipsum eget, aliquam vestibulum nunc, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget maximus elit, vel fringilla diam. Maecenas ipsum nisi, feugiat eu ipsum eget, aliquam vestibulum nunc",
  avatar: NoProfilePic
}