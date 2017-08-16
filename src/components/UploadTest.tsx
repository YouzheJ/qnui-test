import * as React from 'react';
import { Upload, Button } from 'qnui';

/* 
===============
注意：qnui@0.5.1 去除了Upload模块，需要自己实现， 0.5.0正常
===============
*/

interface UploadState {
  fileList: object[];
}

class UploadTest extends React.Component<any, UploadState> {
  state = {
    fileList: [{
      name: 'IMG.png',
      status: 'done',
      size: 10,
      downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
      fileURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
      imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg'
    }],
  }
  beforeUpload = (info: any) => {
    // console.log('before upload: ', info);
  }
  onChange = (info: any) => {
    console.log('onChange');
  }
  onSuccess = (res: any, file: any) => {
    console.log('success: ', 'http://localhost:4000/' + res.url)
    let url = 'http://localhost:4000/' + res.url;
    url = url.replace('\\','/');
    let obj = {
      uid: this.state.fileList.length,
      name: file.name,
      fileName: file.name,
      size: file.size,
      status: 'done',
      downloadURL: url,
      fileURL: url,
      imgURL: url,
    };
    let arr: object[] = this.state.fileList.concat();
    arr.push(obj);
    this.setState({fileList: arr});
  }
  onError = (err: any, res: any, file: any) => [
    console.log('file ' + file.name + ' upload is fail.')
  ]
  render() {
    return (
      <div className="Block">
        <div className="title">Upload 上传组件</div>

        <div className="content">
          {/* 基本 */}
          <div className="line">
            <Upload.Core
              listType="text"
              action="/music/upload"
              beforeUpload={this.beforeUpload}
              onChange={this.onChange}
              onSuccess={this.onSuccess}
              onError={this.onError}
              fileList={this.state.fileList}
            >
              <Button type="primary">上传文件</Button>
            </Upload.Core>
            <Upload.List
              listType="text-image"
              fileList={this.state.fileList}
            />
          </div>

          {/* 详情见文档 */}

        </div>
      </div>
    );
  }
}

export default UploadTest;