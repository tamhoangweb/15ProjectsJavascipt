# 15 - Slider

2 nút bấm Prev, và Next

Nếu đến cuối slider, ẩn nút Next, chỉ còn nút Prev

Nếu đến đầu slider, ẩn nút Prev, chỉ còn nút Next

Điều này giúp user biết được đã xem hết slider chưa. 

## Setup html css ban đầu

```html
.slider-container
   <!-- single slide *4 -->
   .slide
      img.slide-img
      h1
      
.btn-container
    button.prevBtn | prev
    button.nextBtn | next
```

## Logic javascript: app.js
Có 1 div.container là khung chứa tất cả các slide con bên trong. (position:relative)

Các slide con bên trong, thực chất là được CSS để dàn thành 1 hàng ngang rất dài, tràn ra khỏi độ rộng của div.container

Nhưng phần nhìn thấy của user chỉ vừa đủ cho 1 slide.
```css
overflow: hidden; 
```
Bản chất của việc trượt slide qua lại, chính là thay đổi vị trí của các slide con theo chiều ngang. 
```css
transform: translateX(-100%); 
```
Như vậy, nhiệm vụ của nút Prev, và Next để điều khiển slider, chính là làm thay đổi giá trị % của thuộc tính CSS tranlateX

### Các events, object, methods, properties và syntax sử dụng

```javascript
querySelector
querySelectorAll

addEventListener
'click'

style // truy cập vào style của element
style.left
style.tranform

//syntax 
element.style.left = `${index * 100}%`
```

### Lấy tất cả các Node cần sử dụng
```javascript
slides     |.alert // danh sách các slide
nextBtn    |.nextBtn
prevBtn    |.prevBtn
```
### Duyệt qua mảng slides, và setup CSS cho từng slide.
```javascript
slides.forEach(function(slide, index){
    slide.style.left = `${index * 100}%`
})
```
### Tạo biến toàn cục counter = 0
Khi nút Next được bấm, thì:
- counter tăng lên 1
- gọi hàm carousel()

Khi nút Prev được bấm, thì:
- counter giảm xuống 1
- gọi hàm carousel()

### Viết hàm carousel:
Dịch chuyển vị trí của từng slide con 
```javascript
slides.forEach(function(slide){
    slide.style.transfrom = `translateX(-${counter * 100}%`
})
```

Ẩn / Hiện nút Prev và Next:
- Nếu counter vẫn còn nhỏ hơn số lượng slide thì:
+ Vẫn hiện nút Next
```javascript
nextBtn.style.display = "block"
```
- Nếu counter vượt quá số lượng slide thì:
+ Ẩn nút Next 
```javascript
nextBtn.style.display = "none"
```
- Nếu counter vẫn còn lớn hơn 1 thì:
+ Vẫn hiện nút Prev
```javascript
prevBtn.style.display = "block"
```
- Nếu counter nhỏ hơn 1 thì:
+ Ẩn nút Prev 
```javascript
prevBtn.style.display = "none"
```