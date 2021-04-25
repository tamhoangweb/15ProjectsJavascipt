# 06 - Modal project

Hiện Modal (popup), khi bấm vào button.modal-btn
Ẩn Modal khi bấm vào nút x trên Modal button.close-btn
Nguyên tắc ẩn hiện của Modal là do thuộc tính CSS:

- Ẩn (mặc định là ẩn)

```css
visibility: hidden
z-index: -10
```

- Hiện (.open-modal)

```css
visibility: visible
z-index: 10
```

Gán thuộc tính ẩn cho .modal-overlay
Gán thuộc tính hiện cho class .open-modal

Js sẽ xử lý sự kiện Click để add, hoặc remove class .open-modal, ra khỏi classList của .modal-overlay

## Setup html css ban đầu

```html
header.hero .banner h1 button.btn.modal-btn .modal-overlay .modal-container h3
button.close-btn > i.fas.fa-times
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
document.querySelector
modalBtn = .modal-btn
modal = .modal-overlay
closeBtn = .close-btn
```

### Xử lý sự kiện click lên nút modalBtn

Lấy danh sách classList của modal

add class open-modal vào classList của modal => Hiện menu.

### Xử lý sự kiện click lên nút closeBtn

remove class open-modal => Ẩn modal.
