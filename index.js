import { DireflowComponent } from 'direflow-component';
import App from './direflow-component/App';
import ToggleableInput from "./ToggleableInput/index";

const direflowComponent = new DireflowComponent();

const direflowProperties = {
  componentTitle: 'Toggleable Component',
  sampleList: [
    'Create with React',
    'Build as Web Component',
    'Use it anywhere!',
  ],
};

const direflowPlugins = [
  {
    name: 'font-loader',
    options: {
      google: {
        families: ['Advent Pro', 'Noto Sans JP'],
      },
    },
  },
];

direflowComponent.configure({
  name: 'toggleable-component',
  useShadow: true,
  properties: direflowProperties,
  plugins: direflowPlugins,
});


direflowComponent.create(App);




let toggleComponent = new DireflowComponent();

const toggleInputProps = {
  'editable': false,
  'type': "text",
  'value': '',
  'input-class': null,
  'div-class': null,
  'default-edit-mode': false,
  'css': ''
}

toggleComponent.configure({
  name: "toggle-input",
  useShadow: true,
  properties: toggleInputProps
});

toggleComponent.create(ToggleableInput);