import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from "@storybook/angular";
import { ExpressionComponent } from "../../projects/trailblazing/rich-text-ui/src/lib/expression/expression.component";
import { KatexDirective } from "../../projects/trailblazing/rich-text-ui/src/lib/directives/katex.directive";
import { ParagraphComponent } from "../../projects/trailblazing/rich-text-ui/src/lib/paragraph/paragraph.component";

export default {
  title: 'Trailblazing/Paragraph',
  component: ParagraphComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    moduleMetadata({
      declarations: [ParagraphComponent, ExpressionComponent, KatexDirective]
    })
  ]
} as Meta;

const Template: Story<ParagraphComponent> = (args: ParagraphComponent) => ({
  props: args,
});

export const WithInlineExpression = Template.bind({});
WithInlineExpression.args = {
  content: 'This is an inline expression: \\Delta = b^2 - 4ac'
};


