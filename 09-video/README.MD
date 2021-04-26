# 09 - Video Project

Hiển thị Video mặc định playing
Có chức năng Play - Pause Video
Khi mạng chậm: hiển thị Loading trong thời gian đợi video load.

Nút Play - Pause thực ra là 1 nút, nhưng đặc biệt vì:

- Nửa bên trái ghi Play
- Nửa bên phải ghi Pause
- Phủ bên trên là 1 hình chữ nhật (.switch) che toàn bộ nút.
- Khi bấm vào chữ Play, thì hình chữ nhật này có thuộc tính left: 50% => hình chữ nhật còn vừa đủ để che chữ Play => tạo cảm giác là đã bật được nút Play
- Khi bấm vào chữ Pause, thì hình chữ nhật có thuộc tính left: 0 => hình chữ nhật sẽ còn vừa đủ để che chữ Pause => tạo cảm giác là đã bật được nút Pause

Chức năng pre loading khi mạng chậm:

- Thực chất là 1 tấm hình gif, mặc định nó được css cho hiển thị ngay khi user vào website
- Nhưng khi, website được load xong toàn bộ nội dung (bao gồm: content, css, js, image, video...) thì tấm hình gif này được ẩn đi.

## Setup html css ban đầu

```html
<!-- preloader -->
.preloader img
<!-- header and video -->
header ​video.video-container|muted autoplay loop source|type="video/mp4"
<!-- button video switch-->
button.switch-btn ​span:play span:pause ​span.switch​
```

## Logic javascript: app.js

### Các events, object, methods, properties và syntax sử dụng

```javascript
contains;

querySelector;

video.pause();
video.play();
window.addEventListener("load");
```

### Xử lý khi click vào nút button.switch-btn

Kiểm tra classList của .switch có contains class slide hay không:

- Nếu không => add class slide vào .switch + video.pause
- Nếu có => remove class slide khỏi classList của .switch + video.play

### Chức năng preloader

Dùng sự kiện load của object window. Nếu sự kiện load này thành công, nghĩa là website đã được load hết content từ image, video, css, js... Thì ẩn preloader.

```javascript
window.addEventListener("load", () => {
  preloader.classList.add("hide-preloader");
});
```
