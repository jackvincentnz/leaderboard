// src/components/timer/Timer.test.tsx

import * as React from 'react';
import * as enzyme from 'enzyme';
import Timer from '../Timer';

it('renders the correct text when created', () => {
  const timer = enzyme.shallow(<Timer/>);
  expect(timer.find(".time-display").text()).toEqual('0ms')
});