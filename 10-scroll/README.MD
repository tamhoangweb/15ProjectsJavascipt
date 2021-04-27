# 10 - Scroll Project

Giống như 1 Landing page:

Trên desktop

- Trượt xuống thì thanh menu sẽ fix ở top
- Bấm vào các nút trên thanh menu, sẽ scroll đến section tương ứng

Trên mobile:

- Thanh menu được thu nhỏ, và fix top
- Bấm vào hamburger menu > hiển thị menu lớn.
- Chức năng scroll tới section tương ứng.

Footer:

- Hiển thị năm theo năm của lịch
- Bấm vào nút back to top sẽ trượt lên trên top, và ẩn nút back to top

## Setup html css ban đầu

```html
<!-- header -->
header#home
<!-- navbar -->
nav#nav .nav-center .nav-header img.logo button.nav-toggle > i.fas.fa-bars
.links-container ul.links li > a.scroll-link|href='#home' li >
a.scroll-link|href='#about' li > a.scroll-link|href='#services' li >
a.scroll-link|href='#tours'
<!-- banner -->
.banner .container h1 p a.btn.btn-white.scroll-link|href='#tours'

<!-- section about -->
section.section#about .title h2|About<span>Us</span>
<!-- section services -->
section.section#services .title h2|services<span>Us</span>
<!-- section tours -->
section.section#tours .title h2|tours<span>Us</span>

<!-- Footer -->
footer.section p|copyright &copy; span.date

<!-- Back to Top -->
a.scroll-link.top-link|href='#home' i.fas.fa-arrow-up
```

### CSS giúp scroll mượt

```css
html {
  scroll-behavior: smooth;
}
```

## Logic javascript: app.js

### Các events, object, methods, properties và syntax sử dụng

```javascript
getElementById
querySelector

innerHTML
classList.add
classList.remove

getBoundingClientRect()
getBoudingClientRect().height => lấy chiều cao của element
element.style.height => gán chiều cao của element
element.offsetTop

window.addEventListener('scroll')
window.pageYOffset
window.scrollTo

e.preventDefault()
e.currentTarget.getAttribute('href')
new Date().getFullYear()

slice
```

### Lấy năm hiện tại render vào span.date

### Ẩn hiện menu khi bấm vào nút navToggle

Ẩn (mặc định của .links-container)

```css
height: 0;
```

Hiện (chiều cao của .links-container = chiều cao của .links)

```css
height: links.getBoundingClientRect() .height;
```

Logic:

Gán chức năng lắng nghe sự kiện click vào nút navToggle

Khi sự kiện click xảy ra:

- Nếu chiều cao của .links-container = 0 => Đang ẩn => gán chiều cao mới cho .links-container vừa bằng với chiều cao của các links bên trong .links

```javascript
linksContainer.style.height = `${links.getBoundingClientRect().height}px`;
```

- Ngược lại thì gán chiều cao của .links-container = 0 => Để ẩn menu.

### Fix top nav#nav khi scroll xuống dưới 1 đoạn > chiều cao của nav#nav

Dùng object window, lắng nghe sự kiện scroll của user.

```javascript
window.addEventListener("scroll");
```

Viết function xử lý sự kiện scroll:

Lấy chiều cao của scroll

Lấy chiều cao của navbar

```javascript
const scrollHeight = window.pageYOffset;
const navHeight = navbar.getBoundingClientRect().height;
```

So sánh chiều cao của scroll và của navbar:

- Nếu scrollHeight > navbarHeight:

```javascript
navbar.classList.add("fixed-navbar");
```

- Nếu scrollHeight <= navbarHeight:

```javascript
navbar.classList.remove("fixed-navbar");
```

### Khi scrollHeight > 500 px thì mới hiện Back to Top button, Ngược lại thì ẩn đi.

Lấy element topLinkBtn

Kiểm tra, trong sự kiện scroll của người dùng:

- Nếu scrollHeight > 500px: add thêm class .show-link
- Ngược lại: remove class .show-link

### Xử lý trường hợp thanh navbar fixed top làm che đi một phần section, khi nó được scroll-link đến.

Lấy danh sách scroll-links (là các thẻ a, khi bấm vào sẽ scroll tới section tương ứng)

Duyệt qua từng scroll-link, gắn sự kiện click, và xử lý sự kiện click như sau:

- Loại bỏ tính năng hyperlink mặc định của event click.

```javascript
e.preventDefault();
```

Lúc này, khi bấm vào thẻ a.scroll-link đều không scroll xuống section tương ứng.

- Dùng method scrollTo của object window, để scroll xuống section tương ứng. Vấn đề là scroll xuống bao nhiêu thì vừa đủ đúng vị trí của section cần hiển thị.

```javascript
window.scrollTo({
  left: 0,
  top: position,
});
```

- Cách tính position của section cần hiển thị:

1. Dựa vào object e, để lấy ra element cần scroll tới.

```javascript
const id = e.currentTarget.getAttribute("href").slice(1);
const element = document.getElementById(id);
```

2. Tính toán lại position
   Khoảng cách giữa element cần hiển thị và viền trên cùng của trình duyệt là

```javascript
let position = element.offsetTop;
```

Nhưng nếu cho scroll tới position này, thì không đúng vị trí, vì bị navbar che mất 1 đoạn. Nên position lúc này là:

```javascript
let position = element.offsetTop - navbarHeight;
```

Nếu navbar không có class fixed-nav, thì

```javascript
position = position - navbarHeight;
```

Nếu navbar có chiều cao > 82, thì

```javascript
position = position + linksContainerHeight;
```

3. Cho chiều cao của menu = 0 (Ẩn menu mở rộng, vì user đang muốn xem content của section được scroll tới chứ không cần xem menu mở rộng)
