import React from 'react';
import HourlyRow from '../HourlyRow/HourlyRow';
import TenDayRow from '../TenDayRow/TenDayRow';
import colorCondition from '../../../utils/colorCondition';
import { getRandomKey } from '../../../utils/helperFunctions';
import './DetailList.css';

const DetailList = ({ data, tabName, handler, getDay, selectedDay, selectedMonth }) => {
  if (!data.sevenHourData) {
    return <section className="DetailList" />;
  }

  const accentColor = colorCondition[data.condition].accentColor;
  const sevenHourData = data.sevenHourData.map(hour =>
    <HourlyRow
      key={getRandomKey()}
      hourData={hour}
      data={data}
    />);
  const tenDayData = data.tenDayData.map(hour =>
    <TenDayRow
      key={getRandomKey()}
      getDay={getDay}
      dayData={hour}
      data={data}
    />);
  const twentyFourData = data.twentyFourData
    .filter(e => e.day === selectedDay)
    .map(hour =>
      <HourlyRow
        key={getRandomKey()}
        hourData={hour}
        data={data}
      />);

  let borderColor = { borderColor: accentColor };

  if (data.currentHour >= data.sunSetTime || data.currentHour <= data.sunRiseTime) {
    borderColor = { borderColor: '#7438B8' };
  }

  let hourlyTab;
  let tenDayTab;
  let twentyFourTab;
  let tabs;
  let dataView;

  switch (tabName) {
    case 'Hourly':
      hourlyTab = <a key="tab-1" style={borderColor} onClick={handler} className="tab tab-active">Hourly</a>;
      tenDayTab = <a key="tab-2" onClick={handler} className="tab">10 Day</a>;
      twentyFourTab = <a key="tab-3" className="tab">{selectedMonth} {selectedDay}</a>;
      dataView = sevenHourData;
      tabs = [hourlyTab, tenDayTab];
      break;
    case '10 Day':
      hourlyTab = <a key="tab-1" onClick={handler} className="tab">Hourly</a>;
      tenDayTab = <a key="tab-2" style={borderColor} onClick={handler} className="tab tab-active">10 Day</a>;
      dataView = tenDayData;
      tabs = [hourlyTab, tenDayTab];
      break;
    case '24 Hourly':
      hourlyTab = <a key="tab-1" onClick={handler} className="tab">Hourly</a>;
      tenDayTab = <a key="tab-2" onClick={handler} className="tab">10 Day</a>;
      twentyFourTab = <a key="tab-3" style={borderColor} className="tab tab-active">{selectedMonth} {selectedDay}</a>;
      dataView = twentyFourData;
      tabs = [hourlyTab, tenDayTab, twentyFourTab];
      break;
    default:
  }

  return (
    <section className="DetailList">
      <nav className="list-tabs">
        {tabs}
      </nav>
      <section className="list">
        {dataView}
      </section>
    </section>
  );
};

export default DetailList;
