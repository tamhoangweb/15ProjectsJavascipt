# 08 - Menu Foods Project

Cho 1 mảng menu, bao gồm các objects, mỗi object là 1 món ăn bao gồm các thuộc tính:

```javascript
id, title, category, price, image, desc;
```

Dựa vào category => render html là danh sách các nút bấm

Mặc định, khi user vào website, toàn bộ món ăn sẽ được hiển thị.

Khi bấm vào nút có category nào, thì sẽ render html chỉ có các món ăn tương ứng với category đó.

## Setup html css ban đầu

Dữ liệu hiển thị ban đầu là để mockup, dữ liệu hiển thị thật sẽ lấy từ trong mảng khai báo ở file .js

```html
section.menu ​.title ​h2 ​.underline
<!-- Danh sách nút filter-->
.btn-container ​button.filter-btn|data-id="all"
​button.filter-btn|data-id="breakfast" ​button.filter-btn|data-id="lunch"
​button.filter-btn|data-id="shakes"
<!-- Menu -->
​ .section-center
<!-- Single item -->
​article.menu-item ​img.photo .item-info header h4 (tên món) h4.price (giá món
ăn) p.item-text ​
```

## Logic javascript: app.js

### Các object, methods, properties và syntax sử dụng

```javascript
map
join
filter
reduce
includes
push

querySelector
querySelectorAll

window
DOMContendLoaded
addEventListener
e.currentTarget
dataset => lấy ra giá trị của attribute data-*

` ` => tạo string từ string và code javascript
${ } => dùng bên trong ` `
```

### Viết hàm chịu trách nhiệm render html các món ăn dựa vào tham số truyền vào là mảng menu bất kỳ (function displayMenuItems(menuItem))

- Lấy element html chứa menu bên trong

```javascript
sectionCenter = document.querySelector(".section-center");
```

- Dùng method map, return string có định dạng giống html, join string với ký tự rỗng '' => có được html chứa danh sách món ăn

```javascript
let displayMenu = menu.map((menuItem) => {
  return ` html - menu`;
});
displayMenu = displayMenu.join("");
```

- Gán html chứa danh sách món ăn vào sectionCenter.

```javascript
sectionCenter.innerHTML = displayMenu;
```

### Viết hàm displayBtn để render các nút bấm theo category của mảng menu

B1: phải lấy được các category của mảng menu, với điều kiện không trùng lặp.

- Dùng method reduce, với giá trị khởi tạo là mảng có 1 phần từ là string all ['all']
- Khi duyệt qua mảng bằng method reduce, kiểm tra nếu object có category trùng với category trong danh sách mảng categories, thì không push phần từ category đó vào mảng, ngược lại thì push vào.
- Kết quả thu được mảng categories gồm các category của các object trong mảng menu, mà không trùng nhau.

B2: chuyển mảng categories lấy được sang html với mockup đã viết ở file html

B3: render mảng categories vào btn-container.innerHTML

B4: Xử lý sự kiện Click vào các nút Filter (phải viết trong hàm này để tránh trường hợp, NodeList Filter button là giá trị rỗng khi mới truy cập vào website). Tóm lại, phải render rồi, thì mới querySelector được

Lấy danh sách các nút Filter

```javascript
const filterBtns = document.querySelectorAll(".filter-btn");
```

Gắn lắng nghe sự kiện click cho từng nút
Khi sự kiện Click xảy ra thì:

- Lấy dataset theo từ khóa đã đặt ở file html

```javascript
const category = e.currentTager.dataset.id;
```

- Dùng method filter cho mảng menu, lọc ra 1 mảng khác bao gồm các object có category = với category của dataset ở trên

```javascript
menu.filter((menuItem) => {
  if (menuItem.category === category) return menuItem;
});
```

- Nếu bấm vào nút all, thì hiển thị tất cả món trong menu.

### Hiển thị toàn bộ món ăn và các nút Filter ngay khi website được truy cập

Cho object window lắng nghe sự kiện DOMContendLoaded

```javascript
window.addEventListener("DOMContendLoaded");
```

Khi sự kiện DOMContendLoaded xảy ra:

- Gọi hàm displayMenuItems(menu) render html là danh sách tất cả các món ăn
- Gọi hàm displayBtn để render categories html button
