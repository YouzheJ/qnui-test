import * as React from 'react';
import { Icon, Loading, NumberPicker, Pagination, Progress } from 'qnui';

class SomeTest extends React.Component<any, any> {
  render() {
    return (
      <div className="Block">
        <div className="title">Icon 图标</div>

        <div className="content">
          {/* 基本 */}
          <div className="line">
            <Icon type="email"/>
            <div className="separator"/>
            <Icon type="success-filling" size="xxs"/>
            <div className="separator"/>
            <Icon type="success-filling" size="xs" style={{color: '#40f'}}/>
            <div className="separator"/>
            <Icon type="success-filling" size="small" style={{color: '#4f0'}}/>
            <div className="separator"/>
            <Icon type="success-filling" size="medium" style={{color: '#04f'}}/>
            <div className="separator"/>
            <Icon type="success-filling" size="large" style={{color: '#0f4'}}/>
            <div className="separator"/>
            <Icon type="success-filling" size="xl" style={{color: '#f04'}}/>
            <div className="separator"/>
            <Icon type="success-filling" size="xxl" style={{color: '#f40'}}/>
            <div className="separator"/>
          </div>

        <div className="title">Loading 加载状态</div>
        <div className="content">
          <div className="line">
            <div style={{display: 'inline-block'}}>
              <Loading color="#fa6" size="small"/>
            </div>
            <div className="separator h30"/>
            <div style={{display: 'inline-block'}}>
              <Loading color="#af6"/>
            </div>
            <div className="separator h30"/>
            <div style={{display: 'inline-block'}}>
              <Loading color="#6fa" size="large"/>
            </div>
          </div>
        </div>

        <div className="title">NumberPicker 数字输入框</div>
        <div className="content">
          <div className="line">
            <NumberPicker inputWidth={'60px'} defaultValue={2000} step={100}/>
            <div className="separator"/>
            <NumberPicker editable={false} type="inline" min={5} max={10} defaultValue={5} onChange={() => {}} onDisabled={() => {}} onCorrect={() => {}}/>
          </div>
        </div>

        <div className="title">Pagination 翻页器</div>
        <div className="content">
          <div className="line">
            <Pagination defaultCurrent={5} size="small"/>
          </div>
          <div className="line">
            <Pagination defaultCurrent={5} size="small" shape="arrow-only"/>
          </div>
          <div className="line">
            <Pagination defaultCurrent={5} size="small" shape="arrow-prev-only"/>
          </div>
          <div className="line">
            <Pagination defaultCurrent={5} size="small" type="simple" shape="no-border"/>
          </div>
          <div className="line">
            <Pagination defaultCurrent={5} size="small" type="mini"/>
          </div>
        </div>
        
        <div className="title">Progress 进度</div>
        <div className="content">
          <div className="line">
            <Progress percent={5} size="small"/>
          </div>
          <div className="line">
            <Progress percent={35} showInfo={false}/>
          </div>
          <div className="line">
            <Progress percent={65} size="large" state="error"/>
          </div>
          <div className="line">
            <Progress percent={66} shape="circle" suffix={`${66 / 10}折`}/>
          </div>
          <div className="line">
            <Progress percent={35} shape="circle" state="success"/>
          </div>
        </div>


          {/* 详情见文档 */}

        </div>
      </div>
    );
  }
}

export default SomeTest;