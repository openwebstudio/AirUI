import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'air-user-profile',
  styleUrl: 'user-profile.scss',
  shadow: true,
})
export class UserProfile {
  @Prop() avatarSrc: string; // 用户头像 URL
  @Prop() userName: string; // 用户名
  @Prop() userBio: string; // 用户简介
  @Prop() editable: boolean = false; // 是否允许编辑

  render() {
    return (
      <div class="user-profile card">
        {/* 用户头像 */}
        <div class="card-image">
          <air-avatar
            size="large"
            name={this.userName}
            src={this.avatarSrc}
            shape="circle"
            class="user-profile-avatar"
          ></air-avatar>
        </div>

        {/* 卡片主体内容 */}
        <div class="card-body">
          <div class="user-info">
            <slot name="title">
              <air-text class="card-title">{this.userName}</air-text>
            </slot>
            <slot name="content">
              <air-text class="card-content">
                {this.userBio || '用户还没有填写简介。'}
              </air-text>
            </slot>
          </div>
        </div>

        {/* 可编辑表单 */}
        {this.editable && (
          <div class="user-actions card-footer">
            <air-input
              label="用户名"
              placeholder="请输入用户名"
              value={this.userName}
              name="user-name"
            ></air-input>
            <air-input
              label="简介"
              placeholder="请输入用户简介"
              value={this.userBio}
              name="user-bio"
              type="text"
            ></air-input>
            <div class="button-wrapper">
              <air-button state="primary">保存</air-button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
