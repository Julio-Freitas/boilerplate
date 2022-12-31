import { Story, Meta } from '@storybook/react';
import Main from '.';

import { Props } from './type';

export default {
  title: '',
  component: Main,
  argTypes: {}
} as Meta<Props>;

export const Basic: Story<Props> = (args) => <Main {...args} />;

Basic.storyName = '';
