import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

// import { Button, Welcome } from '@storybook/react/demo';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

import { Button } from "../src/index";

storiesOf("Button", module)
  .add("simple text", () => (
    <Button title="Hello Button" onClick={action("clicked Hello Button")} />
  ))
  .add("Large text", () => (
    <Button title="Click me to save or create something amazing in javascript! Come on!" onClick={action("clicked large text button")} />
  ))
  .add("Yelling", () => (
    <Button title="CLICK ME!!!" onClick={action("clicked a yelling button")} />
  ));
