# 04 - Navbar Responsive

Ẩn / Hiện danh sách menu, khi bấm vào icon Menu

## Setup html css ban đầu

```html
nav .nav-center .nav-header img.logo button.nav-toggle >i.fas.fa-bars ul.links >
li > a
```

## Logic javascript: app.js

### Các methods sử dụng

```javascript
classList - get ALL classes of element
contains - check specific class in classList
add - add class
remove - remove class
toggle - toggle class
```

### Xử lý sự kiện click lên nút .nav-toggle

Lấy danh sách classList của ul.links

Nếu trong danh sách đó chứa class show-links > remove class show-links => Ẩn menu.

Nếu trong danh sách đó không chứa class show-links > add class show-links => Hiện menu.

Hoặc, dùng method links.classList.toggle('show-links')
