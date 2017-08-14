import * as React from 'react';
import { Breadcrumb } from 'qnui';

/**
  .next-breadcrumb {
      height: auto;
    }
 */

class BreadcrumbTest extends React.Component<any, any> {
  render() {
    return (
      <div className="Block">
        <div className="title">Breadcrumb 面包屑</div>

        <div className="content">
          {/* 基本 */}
          <div className="line">
            <p>link 节点：</p>
              <Breadcrumb>
                  <Breadcrumb.Item link="javascript:void(0);">Home</Breadcrumb.Item>
                  <Breadcrumb.Item link="javascript:void(0);">All Categories</Breadcrumb.Item>
                  <Breadcrumb.Item link="javascript:void(0);">Women’s Clothing</Breadcrumb.Item>
                  <Breadcrumb.Item link="javascript:void(0);">Blouses & Shirts</Breadcrumb.Item>
                  <Breadcrumb.Item link="javascript:void(0);">T-shirts</Breadcrumb.Item>
              </Breadcrumb>
          </div>

          <div className="line">
              <p>文本节点：</p>
              <Breadcrumb>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>All Categories</Breadcrumb.Item>
                  <Breadcrumb.Item>Women’s Clothing</Breadcrumb.Item>
                  <Breadcrumb.Item>Blouses & Shirts</Breadcrumb.Item>
                  <Breadcrumb.Item>T-shirts</Breadcrumb.Item>
              </Breadcrumb>
            </div>

          <div className="line">
              <p>关键字文本以及数量文本：</p>
              <Breadcrumb>
                  <Breadcrumb.Item link="javascript:void(0);">Home</Breadcrumb.Item>
                  <Breadcrumb.Item link="javascript:void(0);">All Categories</Breadcrumb.Item>
                  <Breadcrumb.Item link="javascript:void(0);">Women’s Clothing</Breadcrumb.Item>
                  <Breadcrumb.Item link="javascript:void(0);">Blouses & Shirts</Breadcrumb.Item>
                  <Breadcrumb.Item>
                      <Breadcrumb.Keyword>T-shirts&nbsp;</Breadcrumb.Keyword>
                      <Breadcrumb.Number>78,999</Breadcrumb.Number> Results
                  </Breadcrumb.Item>
              </Breadcrumb>
          </div>

          {/* 显示省略 */}
          <div className="line">
              <p>显示省略：</p>
            <Breadcrumb maxNode={5}>
              <Breadcrumb.Item link="javascript:void(0);">Home 1</Breadcrumb.Item>
              <Breadcrumb.Item link="javascript:void(0);">Whatever 2</Breadcrumb.Item>
              <Breadcrumb.Item link="javascript:void(0);">All Categories 3</Breadcrumb.Item>
              <Breadcrumb.Item link="javascript:void(0);">Women’s Clothing 4</Breadcrumb.Item>
              <Breadcrumb.Item link="javascript:void(0);">Blouses & Shirts 5</Breadcrumb.Item>
              <Breadcrumb.Item link="javascript:void(0);">T-shirts 6</Breadcrumb.Item>
          </Breadcrumb>
          </div>

          {/* 分隔符 */}
          <div className="line">
            <Breadcrumb separator="/">
              <Breadcrumb.Item link="javascript:void(0);">Home</Breadcrumb.Item>
              <Breadcrumb.Item link="javascript:void(0);">All Categories</Breadcrumb.Item>
              <Breadcrumb.Item link="javascript:void(0);">Women’s Clothing</Breadcrumb.Item>
              <Breadcrumb.Item link="javascript:void(0);">Blouses & Shirts</Breadcrumb.Item>
              <Breadcrumb.Item link="javascript:void(0);">T-shirts</Breadcrumb.Item>
            </Breadcrumb>
          </div>

        </div>
      </div>
    );
  }
}

export default BreadcrumbTest;