
import { Story, Meta } from '@storybook/angular/types-6-0';
import { OneIconComponent } from './one-icon.component';

export default {
  title: 'One-Ui/Basics/Icon',
  component: OneIconComponent,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    ngOnChanges: { table: { disable: true } },
    classes: { table: { disable: true } },
  }
} as Meta;

const IconStoryTemplate: Story<OneIconComponent> = (args: OneIconComponent) => ({
  props: {
    ...args,
    classes: ['fa', `fa-${args.faIcon}`]
  }
});

export const HomeIcon = IconStoryTemplate.bind({});
HomeIcon.args = {
  faIcon: 'home'
};

export const CloseIcon = IconStoryTemplate.bind({});
CloseIcon.args = {
  faIcon: 'close',
};

export const BarsIcon = IconStoryTemplate.bind({});
BarsIcon.args = {
  faIcon: 'bars',
};

export const TrashIcon = IconStoryTemplate.bind({});
TrashIcon.args = {
  faIcon: 'trash',
};
