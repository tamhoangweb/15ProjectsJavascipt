# 13 - Lorem Ipsum Project | FORM

## Setup html css ban đầu

```html
section.section-center
   h3
   form.lorem-form
      label:for="amount"
      input#amount:type='number' name='amount' placeholder='5'
      button.btn:type='submit'|generate
   article.lorem-text
```

## Logic javascript: app.js

### Các events, object, methods, properties và syntax sử dụng

```javascript
getElementById
querySelector
querySelectorAll

form.addEventListener('submit',callback)

array.slice(start, end)

```
### Cho sẵn 1 mảng text có 9 phần tử string
```javascript
const text = ["", ""]
```
### Lấy tất cả các Node cần sử dụng
```javascript
form |.lorem-form
amount | #amount // là input number
result | .lorem-text //render kết quả
```

### Xử lý sự kiện submit của form
Tránh trường hợp bấm vào nút submit, thì form gửi data lên server.
```javascript
form.addEventListener('submit',(e) => {
  e.preventDefault();
}
```

Lấy giá trị người dùng nhập vào ô input, chuyển nó sang dạng số nguyên
```javascript
value = parseInt(amount.value);
```

Kiểm tra các trường hợp số nhập vào ô input:

Nếu không phải là số hoặc < 0 hoặc > 9 (là độ dài tối đa của mảng text):
- Hiển thị kết quả là 1 đoạn text ngẫu nhiên 

Ngược lại (số nhập vào hợp lệ)
- Tạo mảng mới bằng cách cắt số lượng phần tử từ mảng text.
- Dùng method map để biến đổi mảng mới thành html.
- render html vào result.