import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from "@storybook/angular";
import { ExpressionComponent } from "../../projects/trailblazing/rich-text-ui/src/lib/expression/expression.component";
import { KatexDirective } from "../../projects/trailblazing/rich-text-ui/src/lib/directives/katex.directive";

export default {
  title: 'Trailblazing/Expression',
  component: ExpressionComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
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

export const Inline = Template.bind({});
Inline.args = {
  options: { displayMode: false },
  content: '\\Delta = b^2 - 4ac'
};

export const Display = Template.bind({});
Display.args = {
  options: { displayMode: true },
  content: '\\Delta = b^2 - 4ac \\tag{2.2}'
};

export const LeftDisplay = Template.bind({});
LeftDisplay.args = {
  options: { displayMode: true, fleqn: true },
  content: '\\Delta = b^2 - 4ac \\tag{2.2}'
};

export const LeftTag = Template.bind({});
LeftTag.args = {
  options: { displayMode: true, leqno: true },
  content: '\\Delta = b^2 - 4ac \\tag{2.2}'
};

export const Error = Template.bind({});
Error.args = {
  options: { displayMode: false },
  content: '\\Error = b^2 - 4ac'
};

export const Debuggable = Template.bind({});
Debuggable.args = {
  options: { displayMode: false },
  content: '\\Error = b^2 - 4ac',
  debug: true,
};

