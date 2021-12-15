import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from "@storybook/angular";
import { KatexDirective, ExpressionComponent } from "@trailblazing/rich-text-ui";

export default {
  title: 'Trailblazing/Expression',
  component: ExpressionComponent,
  argTypes: {
    debug: {
      name: 'debug',
      description: 'Enable claiming message in case of errors',
    }
  },
  decorators: [
    moduleMetadata({
      declarations: [ExpressionComponent, KatexDirective]
    })
  ]
} as Meta;

const Template: Story<ExpressionComponent> = (args: ExpressionComponent) => ({
  props: args,
});

export const InlineExpression = Template.bind({});
InlineExpression.args = {
  options: { displayMode: false },
  content: '\\Delta = b^2 - 4ac'
};

export const NormalDisplay = Template.bind({});
NormalDisplay.args = {
  options: { displayMode: true },
  content: '\\Delta = b^2 - 4ac \\tag{2.2}'
};

export const LeftDisplay = Template.bind({});
LeftDisplay.args = {
  options: { displayMode: true, fleqn: true },
  content: '\\Delta = b^2 - 4ac \\tag{2.2}'
};

export const DisplayWithLeftTag = Template.bind({});
DisplayWithLeftTag.args = {
  options: { displayMode: true, leqno: true },
  content: '\\Delta = b^2 - 4ac \\tag{2.2}'
};

export const WithError = Template.bind({});
WithError.args = {
  options: { displayMode: false },
  content: '\\Error = b^2 - 4ac'
};

export const WithDebug = Template.bind({});
WithDebug.args = {
  options: { displayMode: false },
  content: '\\Error = b^2 - 4ac',
  debug: true,
};

