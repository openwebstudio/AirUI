<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Icon Display Example</title>

    <!-- Include Material Icons -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

    <!-- Include Font Awesome -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />

    <!-- Include Boxicons -->
    <link href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css" rel="stylesheet" />

    <!-- Include Iconfont (阿里巴巴图标库) -->
    <link rel="stylesheet" href="https://at.alicdn.com/t/font_2480194_2mrtx2ol85n.css">

    <!-- Include IconPark (腾讯图标库) -->
    <link rel="stylesheet" href="https://unpkg.com/@icon-park/react@1.0.5/style.css">
  </head>

  <body>
    <div class="container">
      <h3>Material Icons</h3>
      <div>
        <go-icon icon-set="material-icons" name="favorite" size="3rem" color="red"></go-icon>
        <go-icon icon-set="material-icons" name="home" size="3rem" color="blue"></go-icon>
      </div>

      <h3>Font Awesome</h3>
      <div>
        <go-icon icon-set="fas" name="heart" size="3rem" color="green"></go-icon>
        <go-icon icon-set="fas" name="home" size="3rem" color="purple"></go-icon>
      </div>

      <h3>Boxicons</h3>
      <div>
        <go-icon icon-set="bx" name="bell" size="3rem" color="orange"></go-icon>
        <go-icon icon-set="bxs" name="star" size="3rem" color="purple"></go-icon>
      </div>

      <h3>Iconfont (阿里巴巴)</h3>
      <div>
        <go-icon icon-set="iconfont" name="home" size="3rem" color="pink"></go-icon>
        <go-icon icon-set="iconfont" name="bell" size="3rem" color="brown"></go-icon>
      </div>

      <h3>IconPark (腾讯)</h3>
      <div>
        <go-icon icon-set="iconpark" name="home" size="3rem" color="blue"></go-icon>
        <go-icon icon-set="iconpark" name="heart" size="3rem" color="orange"></go-icon>
      </div>
    </div>
  </body>
</html>
