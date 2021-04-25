# 04 - Sidebar Menu Responsive

Ẩn / Hiện danh sách menu, khi bấm vào icon Menu
Ẩn Menu khi bấm vào nút x trên Sidebar Menu
Nguyên tắc ẩn hiện của Sidebar Menu là do thuộc tính CSS:

```css
transform: translate(-100%) //Ẩn
transform: translate(0) // Hiện
```

Gán thuộc tính ẩn cho aside.sidebar
Gán thuộc tính hiện cho class .show-sidebar

Js sẽ xử lý sự kiện Click để add, hoặc remove class .show-sidebar

## Setup html css ban đầu

```html
button.sidebar-toggle i.fas.fa-bars aside.sidebar .sidebar-header img.logo
button.close-btn > i.fas.fa-times ul.links li > a ul.social-icons
```

## Logic javascript: app.js

### Các methods và properties sử dụng

```javascript
querySelector;
classList;
contains;
add;
remove;
toggle;
addEventListener;
```

### Lấy các element

```javascript
toggleBtn = .sidebar-toggle
closeBtn = .close-btn
sidebar = .sidebar
```

### Xử lý sự kiện click lên nút toggleBtn

Lấy danh sách classList của sidebar

Nếu trong danh sách đó chứa class show-sidebar > remove class show-sidebar => Ẩn menu.

Nếu trong danh sách đó không chứa class show-links > add class show-sidebar => Hiện menu.

Hoặc, dùng method sidebar.classList.toggle('show-sidebar')

### Xử lý sự kiện click lên nút closeBtn

remove class show-sidebar => Ẩn menu.
