<div class="flex flex-wrap gap-3 items-center">
  <!-- 不同颜色 -->
  <air-tag>默认标签</air-tag>
  <air-tag color="blue">信息标签</air-tag>
  <air-tag color="green">成功标签</air-tag>
  <air-tag color="yellow">警告标签</air-tag>
  <air-tag color="red">错误标签</air-tag>
</div>

<div class="flex flex-wrap gap-3 items-center">
  <air-tag closable>可关闭标签</air-tag>
  <air-tag color="blue" closable>重要信息</air-tag>
  <air-tag color="red" closable size="sm">小号错误</air-tag>
</div>

<div class="flex flex-wrap gap-3 items-center">
  <air-tag color="green">
    <air-icon name="check" size="2xs" class="mr-1" />
    已验证
  </air-tag>

  <air-tag color="yellow" closable>
    <air-icon name="alert" size="2xs" class="mr-1" />
    待处理
  </air-tag>

  <air-tag color="blue" size="sm">
    <air-icon name="link" size="3xs" class="mr-1" />
    快捷入口
  </air-tag>
</div>

<div class="flex flex-wrap gap-3 items-center">
  <air-tag rounded="none">直角标签</air-tag>
  <air-tag rounded="full">圆形标签</air-tag>
  <air-tag color="blue" rounded="full" closable>
    <air-icon name="star" size="2xs" class="mr-1" />
    收藏
  </air-tag>
</div>
<air-button size="sm">按钮</air-button>   <!-- 高度32px -->
<air-tag size="sm">标签</air-tag>       <!-- 高度24px -->

<!-- 用例 1: 基础可关闭标签 -->
<air-tag closable>Default Tag</air-tag>

<!-- 用例 2: 小号红色标签 -->
<air-tag 
  color="red" 
  size="sm" 
  closable
>
  Error
</air-tag>

<!-- 用例 3: 圆形绿色标签 -->
<air-tag 
  color="green" 
  rounded="full" 
  closable
>
  <air-icon name="check" size="2xs" class="mr-1" />
  Verified
</air-tag>
