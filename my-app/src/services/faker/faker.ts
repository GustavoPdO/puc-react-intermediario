import { faker } from '@faker-js/faker';
import { UserReviewProps } from '../../Types';

export function getMockedAvatar() {
  return faker.image.avatar();
}

function getMockedName() {
  return `${faker.name.firstName()} ${faker.name.lastName()}`
}

function getMockedReview() {
  return faker.lorem.paragraph(10)
}

export function getReviewList(): Array<UserReviewProps> {
  const list = [];

  for(let i=0; i< 12; i++) {
    list.push({
      avatar: getMockedAvatar(),
      name: getMockedName(),
      review: getMockedReview()
    })
  }

  return list
}