
    <air-card imageUrl="https://via.placeholder.com/150" isHighlighted="true">
      <!-- 自定义标题 -->
      <span slot="title">Custom Card Title</span>
      
      <!-- 自定义内容 -->
      <span slot="content">This is custom content for the card. You can replace it with any custom HTML.</span>
      
      <!-- 自定义底部 -->
      <div slot="footer">
        <air-button
        slot="footer"
          id="myButton"
          size="small"
          variant="solid"
          color="primary"
          loading="false"
          disabled="false"
        >
          Click Me
        </air-button>
      </div>
    </air-card>
    
    <air-card isHighlighted="false">
      <!-- 使用默认的插槽内容 -->
      <span slot="title">Another Card Title</span>
      <span slot="content">Here is another custom content for a different card.</span>
      
      <!-- 无底部插槽，使用默认内容 -->
    </air-card>
    
    <air-card isHighlighted="true">
      <span slot="title">
        <air-text type="heading" level="1" color="primary">Card Title</air-text>
      </span>
      <span slot="content">
        <air-text type="body" color="secondary">This is a description of the card content. It can be anything, such as a brief introduction or message.</air-text>
      </span>
      <div slot="footer">
        <air-button size="small" variant="solid" color="primary">Learn More</air-button>
      </div>
    </air-card>
    
    <air-card isHighlighted="false" imageUrl="https://via.placeholder.com/150">
      <span slot="title">
        <air-text type="heading" level="2" color="primary">Featured Card</air-text>
      </span>
      <span slot="content">
        <air-text type="body" color="tertiary">This card includes an image and some descriptive content. Click on it for more information.</air-text>
      </span>
      <div slot="footer">
        <air-button size="medium" variant="outline" color="primary">Learn More</air-button>
      </div>
    </air-card>
    
    <air-card isHighlighted="false" size="large">
      <span slot="content">
        <air-text type="fluid-heading" color="primary">Responsive Card Title</air-text>
      </span>
    </air-card>
    
    <air-card isHighlighted="false" size="small">
      <span slot="title">
        <air-text type="heading" level="3" color="primary">Terms and Conditions</air-text>
      </span>
      <span slot="content">
        <air-text type="legal" color="tertiary">Please read these terms and conditions carefully before using our service.</air-text>
      </span>
      <div slot="footer">
        <air-button size="small" variant="outline" color="secondary">I Agree</air-button>
      </div>
    </air-card>
    