import { Story, Meta } from '@storybook/react/types-6-0';

import { Main } from '.';
import { MainProps } from './types';

export default {
  title: 'Main',
  component: Main,
  argTypes: {
    title: {
      description: 'title component storie',
      defaultValue: 'Title Default'
    },
    description: {
      description: 'description the component storie',
      defaultValue: 'description of Default'
    }
  }
} as Meta<MainProps>;

export const Basic: Story<MainProps> = (args) => <Main {...args} />;

Basic.storyName = 'Main';
