  <air-user-profile
    avatar-src="https://avatars.githubusercontent.com/u/146103794?v=4"
    user-name="Zhi"
    user-bio="前端开发者，热爱技术分享"
    editable="true"
  ></air-user-profile>

  <!-- Case 2: Read-Only User Profile -->
  <air-user-profile
    avatar-src="https://avatars.githubusercontent.com/u/146103794?v=4"
    user-name="John Doe"
    user-bio="Web Developer with a passion for open-source projects."
  >
  </air-user-profile>

  <!-- Case 3: Editable User Profile -->
  <air-user-profile
    avatar-src="https://avatars.githubusercontent.com/u/146103794?v=4"
    user-name="Jane Smith"
    user-bio="Product Manager, loves tech and coffee."
    editable
  >
  </air-user-profile>

  <!-- Case 4: User Without Bio -->
  <air-user-profile
    avatar-src="https://avatars.githubusercontent.com/u/146103794?v=4"
    user-name="Anonymous"
  >
  </air-user-profile>

  <!-- Case 5: Custom Slot Content -->
  <air-user-profile
    avatar-src="https://avatars.githubusercontent.com/u/146103794?v=4"
    user-name="Custom User"
  >
    <div slot="title" class="custom-title">
      🔥 Custom Title: Super User
    </div>
    <div slot="content" class="custom-content">
      This is a custom bio for a special user.
    </div>
  </air-user-profile>

  <!-- Case 6: Minimal Profile -->
  <air-user-profile
    avatar-src="https://avatars.githubusercontent.com/u/146103794?v=4"
    user-name="Minimal User"
    user-bio="Just another user with minimal info."
  >
  </air-user-profile>

  <!-- Case 7: Extended Profile with Stats -->
  <air-user-profile
    avatar-src="https://avatars.githubusercontent.com/u/146103794?v=4"
    user-name="Stats User"
    user-bio="UI/UX Designer with an eye for detail."
  >
    <div slot="content">
      <p>Bio: Passionate about design systems.</p>
      <div style="display: flex; justify-content: space-around;">
        <div>
          <strong>Followers:</strong> 1200
        </div>
        <div>
          <strong>Following:</strong> 180
        </div>
      </div>
    </div>
  </air-user-profile>