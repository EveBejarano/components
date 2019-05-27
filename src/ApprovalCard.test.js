import React from 'react';
import { shallow } from 'enzyme';
import ApprovalCard from './ApprovalCard';


describe('Approval card component', () => {
  
  it('Should render without errors', () => {
    const component = shallow(<ApprovalCard />);
    const wrapper = component.find(`[data-test='approvalCardComponent']`);
    expect(wrapper.length).toBe(1);
  });

  it('Should render two buttons', () => {
    const component = shallow(<ApprovalCard />);
    const btns = component.find(`[data-test='twoButtons']`);
    expect(btns.length).toBe(1);
  });
})