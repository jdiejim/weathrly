import React from 'react';
import { mount } from 'enzyme';
import cityData from './cityDataMock';

import HourlyRow from '../lib/Weathrly/components/HourlyRow/HourlyRow';

describe('HourlyRow Component', () => {
  it('should render the correct data to the page that was passed in as props', () => {
    const data = cityData;
    const hourData = cityData.sevenHourData[0];
    const HourlyRowComp = mount(<HourlyRow key={1} hourData={hourData} data={data} />);

    expect(HourlyRowComp.contains(<p className="time">4:00 PM</p>)).toEqual(true);
    expect(HourlyRowComp.contains(<p className="condition">Clear</p>)).toEqual(true);
    expect(HourlyRowComp.find('.hourly-icon').prop('src')).toEqual('./lib/assets/weather-icons/grey/clear.svg');
    expect(HourlyRowComp.find('.hourly-temp').prop('children')).toEqual('104°');
  });

  it('should render night accent color correclty depending on sunset time', () => {
    const data = cityData;
    const hourData = cityData.sevenHourData[0];

    data.currentHour = 11; // 11:00am
    let HourlyRowComp = mount(<HourlyRow key={1} hourData={hourData} data={data} />);

    expect(HourlyRowComp.find('.hourly-temp').prop('style').color).toEqual('#E86868');

    data.currentHour = 20; // 8:00pm
    HourlyRowComp = mount(<HourlyRow key={1} hourData={hourData} data={data} />);
    
    expect(HourlyRowComp.find('.hourly-temp').prop('style').color).toEqual('#A332D6');
  });
});
