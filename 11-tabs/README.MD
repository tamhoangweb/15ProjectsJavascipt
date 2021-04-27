# 11 - Tabs Project

3 tabs, thực ra là 3 buttons, có thêm attribute là data-id

3 nội dung hiển thị, thực ra đều nằm trong cùng 1 div cha. 

Mỗi div con sẽ có id trùng với attribute data-id của button tương ứng.

Logic hiệu ứng tabs:

Button nào có class active thì:
- màu nền button đó thay đổi (có cảm giác là đang active). những button khác thì css có cảm giác là đang inactive

Div con nào có class active thì:
- div chứa nội dung mô tả tương ứng button đó, được hiển thị. Những div khác thì ẩn đi.

## Setup html css ban đầu
### Các attributes được sử dụng 
```html
data-*
```
```html
section.section
   .title
   h2
   p

.about-center.section-center
   article.about-img > img
   article.about
      <!--- buttons --->
      .btn-container
         button.tab-btn.active|data-id="history"
         button.tab-btn|data-id="vision"
         button.tab-btn|data-id="goals"
      article.about-content
         <!--- single content --->
         .content.active#history
            h4|history
            p
         <!--- single content --->
         .content#vision
            h4|vision
            p
         <!--- single content --->
         .content#goals
            h4|goals
            p
```

## Logic javascript: app.js

### Các events, object, methods, properties và syntax sử dụng

```javascript
querySelector
querySelectorAll
getElementById

addEventListener('click', callback)

classList.remove
classList.add

forEach(callback)

e.target => trả về chính xác element được user click vào.
dataset.id => lấy giá trị của attribute data-id

```

### Lấy tất cả các Node cần sử dụng
```javascript
btns => danh sách các nút bấm
about => div cha chứa toàn bộ tabs (bao gồm nút bấm + div hiển thị nội dung)
articles => danh sách các div con, là nội dung hiển thị tương ứng với nút bấm.
```

### Gắn lắng nghe sự kiện click vào element about
Dùng object e, là tham số của callback khi 1 element lắng nghe sự kiện click, để lấy ra:

```javascript
const id = e.target.dataset.id;
```

Dựa vào id lấy được, mình sẽ biết được button nào cần được active, và div con nội dung nào cần được active. 
- Loại bỏ class active ở các btns khác.
- Thêm class active ở btn đang được mục tiêu.
- Loại bỏ class active ở tất cả articles.
- Thêm class active cho article đang có attribute id = id mục tiêu

```javascript
if(id){
   btns.forEach(btn => {
      btn.classList.remove('active');
      e.target.classList.add('active');
   })
   
   articles.forEach(article => {
      article.classList.remove('active');
   })
   document.getElementById(id).classList.add('active')
}
```
