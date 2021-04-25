Counter

1. Setup HTML, CSS
2. Handle logic in file app.js
   Khởi tạo biến count = 0
   Lấy Element #value
   Lấy Nodelist btns

Duyệt qua Nodelist btns (forEach)với logic như sau:
Ở từng btn, gán method lắng nghe sự kiện click (addEventListener)
Xử lý khi có sự kiện click xảy ra 1 btn: ('click') thông qua object event (function(e))
Lấy danh sách class của btn đó (e.currentTarget.classList)
Nếu danh sách class trả về có chứa chuỗi "descrease" thì:
Giảm giá trị biến count xuống 1 đơn vị (count--)
Ngược lại, nếu danh sách class trả về có chứa chuỗi "increase" thì:
Tăng giá trị biến count xuống 1 đơn vị (count++)
Ngược lại, (nghĩa là reset) thì:
Gán count = 0
Gán giá trị biến count mới này vào Element #value (.textContent)
