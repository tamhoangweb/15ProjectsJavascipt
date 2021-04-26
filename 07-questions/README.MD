# 07 - Questions project

Khi bấm vào dấu + trên 1 tiêu đề question:

- Hiện question text của question đó (là .question-text)
- Ẩn các question text của các question khác
- Ẩn dấu + (là span.plus-icon)
- Hiện dấu - (là span.minus-icon)

Nguyên tắc ẩn hiện của Question là do thuộc tính CSS:

- Ẩn (mặc định là ẩn)

```css
display: none ​;
```

Khi element Cha có class là .show-text thì:

element con (bao gồm question-text, và minus-icon) sẽ hiện.

element con (plus-icon) sẽ ẩn

- Hiện (.show-text .question-text)

```css
display: block;
```

- Hiện (.show-text .minus-icon)

```css
display: inline;
```

- Ẩn (.show-text .plus-icon)

```css
display: none;
```

Js sẽ xử lý sự kiện Click:

- Để hiện question text, thì add class .show-text vào element article.question
- Để ẩn question text, thì remove class .show-text của element article.question

## Setup html css ban đầu

```html
section.questions ​.title ​h2 ​.section-center ​<!-- Single question * 3 -->
​article.question ​.question-title ​p ​button.btn.question-btn ​span.plus-icon >
i.far.fa-plus-square ​span.minus-icon > i.far.fa-minus-square ​.question-text ​p
```

## Logic javascript: app.js

### Các methods và properties sử dụng

```javascript
querySelectorAll
querySelector -- Không những dùng ở document, mà còn dùng được ở các element cha khác để chỉ tìm ra các element con của đúng element cha đó.
addEventListener
object event
e.currentTarget
parentElement
classList.toggle
forEach
```

### Cách số 1: Traversing the dom (Xuất phát từ .question-btn là element con)

Lấy danh sách toàn bộ các button có class .question-btn

Duyệt qua từng nút với logic:

- Khi có sự kiện Click xảy ra, nhờ object event sẽ truy ngược tìm ra được element Cha chứa nút được Click là .question-title.
- Truy ngược 1 cấp element Cha nữa, sẽ xác định được chính xác .question chứa nút Click.
- Toggle class .show-text vào element .question
- Và xóa class .show-text ở các question khác.

### Cách số 2: Xuất phát từ element .question là element cha

Lấy danh sách toàn bộ các .question (3 câu hỏi)

Duyệt qua từng question với logic:

- Lấy ra nút .question-btn (là con của question)
- Khi có sự kiện Click vào nút .question-btn thì toggle class .show-text của question element.
- Và xóa class .show-text ở các question khác.
