# Review slider

03

## Setup html css ban đầu

```html
main section.container .title > h2 + .underline article.review .img-container >
img#person-img h4#author p#job p#info .button-container button.prev-btn >
i.fas.fa-chevron-left button.next-btn > i.fas.fa-chevron-right button.random-btn
```

## Logic javascript: app.js

### Khai báo mảng ban đầu (local review data), gồm 4 object review.

```javascript
const reviews = [
  {
    id: number,
    name: string,
    job: string,
    img: string,
    text: string,
  },
];
```

### Lấy các phần tử cần gán giá trị mới

```javascript
document.getElementById;
#person - img;
#author;
#job;
#info;
```

### Lấy các nút bấm để lắng nghe sự kiện click

```javascript
document.querySelector.prev - btn.next - btn.random - btn;
```

### Tạo hàm gán giá trị hiển thị của các phần tử html đã lấy ở trên là giá trị của object trong mảng reviews

```javascript
function showReview()
   const item         = review[currentItem]
   img.src            = item.img
   author.textContent = item.name
   job.textContent    = item.job
   info.textContent   = item.text
```

### Dùng sự kiện DOMContentLoaded của object window để cài đặt item review có index = 0 sẽ hiển thị khi website được load mặc định.

```javascript
let currentItem = 0;

window.addEventListener("DOMContentLoaded");
```

Gọi hàm showReview truyền vào tham số currentItem = 0 để hiển thị ra trình duyệt

```javascript
showReview(currentItem);
```

### Xử lý sự kiện Click trên nút prev

### Xử lý sự kiện Click trên nút next

### Xử lý sự kiện Click trên nút random
