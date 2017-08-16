import * as React from 'react';
import './App.css';
import { 
  OverlayTest,
  BadgeTest,
  BalloonTest,
  BreadcrumbTest,
  ButtonTest,
  CheckboxTest,
  DatePickerTest,
  DialogTest,
  DropdownTest,
  FeedbackTest,

  GridTest,
  SliderTest,
  UploadTest,
  SomeTest,
  FormTest,
  FieldTest,
 } from './components';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>千牛UI TEST</h2>
        </div>
        
        <div className="App-body">
          <div className="body-box">
            <FieldTest/>
            <BadgeTest/>
            <FeedbackTest/>
            <BalloonTest/>
            <BreadcrumbTest/>
            <DatePickerTest/>
            <CheckboxTest/>
            <DialogTest/>
            <DropdownTest/>
            <OverlayTest/>
            <GridTest/>
            <UploadTest/>
            <SliderTest/>
            <ButtonTest/>
            <SomeTest/>
            <FormTest/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
