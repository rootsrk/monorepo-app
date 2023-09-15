import type { StoryObj } from '@storybook/react';

import { ReviewCard } from './ReviewCard';

export default {
  component: ReviewCard,
  argTypes: {
    rating: {
      control: {
        type: 'range',
        min: 0,
        max: 5,
        step: 0.1,
      },
    },
    reviewCount: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
  },
};

type Story = StoryObj;

export const Default: Story = {
  args: {
    rating: 4.5,
    reviewCount: 100,
  },
};
