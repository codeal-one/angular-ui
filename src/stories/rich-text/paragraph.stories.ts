import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from "@storybook/angular";
import { ExpressionComponent } from "../../../projects/trailblazing/rich-text-ui/src/lib/expression/expression.component";
import { KatexDirective } from "../../../projects/trailblazing/rich-text-ui/src/lib/directives/katex.directive";
import { ParagraphComponent } from "../../../projects/trailblazing/rich-text-ui/src/lib/paragraph/paragraph.component";

export default {
  title: '@Trailblazing/RichText/Paragraph',
  component: ParagraphComponent,
  argTypes: {
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
  content: 'This is an inline expression: $\\Delta = b^2 - 4ac$. It works!'
};

export const WithLeadingExpression = Template.bind({});
WithLeadingExpression.args = {
  content: '$\\Delta = b^2 - 4ac$ is leading the paragraph.'
};

export const WithEndingExpression = Template.bind({});
WithEndingExpression.args = {
  content: 'Let put the expression at the end $\\Delta = b^2 - 4ac$'
};

export const WithDisplayExpression = Template.bind({});
WithDisplayExpression.args = {
  content: 'This is an expression in display mode: $$\\Delta = b^2 - 4ac\\tag{2.2}$$ and more text here.'
};
