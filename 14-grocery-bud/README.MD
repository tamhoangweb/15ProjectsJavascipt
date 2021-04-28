# 14 - Cửa hàng tạp hóa | LOCAL STORAGE API

Thêm item vào danh sách.

Xóa item khỏi danh sách.

Clear tất cả item.

Sửa item.

Refesh trang vẫn còn danh sách.

## Setup html css ban đầu

```html
section.section-center
   <!-- form -->
   form.grocery-form
      p.alert
      h3
      .form-control
         input#grocery:type='text' name='amount' placeholder='e.g eggs'
         button.submit-btn:type='submit'|submit
    <!-- list -->
    .grocery-container
       .grocery-list
          article.grocery-item 
             <!-- html mockup -->
             p.title
             .btn-container
                button.edit-btn>i.fas.fa-edit
                button.delete-btn>i.fas.fa-trash
              <!-- hết html mockup -->
       button.clear-btn
```

## Logic javascript: app.js

Khi mới vào website lần đầu, danh sách là rỗng, nên mặc định là ẩn danh sách (trong đó có nút Clear tất cả item).

Khi nào có ít nhất 1 item, thì sẽ hiện container bằng cách add thêm class 'show-container'

### Các events, object, methods, properties và syntax sử dụng

```javascript
getElementById
querySelector
querySelectorAll
parentElement 
children
previousElementSibling

textContent
classList.add

createAttribute
attr.value
setAttributeNode

appendChild
removeChild

form.addEventListener('submit',callback)
value

new Date().getTime().toString()
window.addEventListener('DOMContentLoaded', callback)
e.currentTarget

array.filter 
array.map

`alert-${action}` // syntax
{id, value}       //ES6
//localStorage API
setItem(key, value) //value là string
getItem(key)
removeItem(key)

JSON.stringify // chuyển mảng thành string
JSON.parse(value) // lấy được mảng
```

### Lấy tất cả các Node cần sử dụng
```javascript
alert     |.alert // thẻ p hiển thị thông báo
form      | .grocery-form
grocery   | #grocery  // là input text
submitBtn | .submit-btn 
container | .grocery-container // div cha chứa tất cả list
list      | .grocery-list // từng item con
clearBtn  | .clear-btn
```

### Cài đặt thông số để biết element nào được bấm nút edit
Khai báo biến global
```javascript
editElement;
editFlag = false; // Có đang ở trạng thái edit hay không
editID = '';
```

### Tạo hàm hiển thị alert
Nhận 2 tham số:
- text: là đoạn chữ hiển thị trên thông báo
- action: là 1 phần của class CSS, nhằm tạo cảm giác là cảnh báo, hoặc thành công
```javascript
function displayAlert(text, action){
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
}
```
Ẩn thông báo sau khi hiển thị được 2 giây 
```javascript
setTimeout(()=>{
   alert.textContent = "";
   alert.classList.remove(`alert-${action}`);
}, 2000)
```
### Tạo hàm xử lý hành động thêm item: function addItem(e)

Tránh trường hợp bấm vào nút submit, thì form gửi data lên server.
```javascript
  e.preventDefault();
}
```

Lấy giá trị nhập vào từ input 
```javascript
  const value = grocery.value;
}
```

Dùng thời gian ms của giây phút hiện tại để tạo biến id có giá trị độc nhất, để gán cho từng item khi thêm vào danh sách. 
```javascript
  const id = new Date().getTime().toString();
}
```

#### Xử lý các tình huống của giá trị nhập vào từ ô input
1. Giá trị khác rỗng, và không có item nào đó đang được chỉnh sửa => tiến hành thêm item vào danh sách 
```javascript
if (value && !editFlag){
   
}
```
2. Giá trị khác rỗng, và có item nào đó đang được chỉnh sửa => submit dạng edit 
```javascript
if (value && editFlag){
   editElement.innerHTML = value;
   displayAlert('value changed', 'success') // hiển thị thông báo đã edit thành công
   editLocalStorage(editId, value)
   setBackToDefaul() // reset các thông số lại trạng thái bình thường.
}
```

3. Giá trị rỗng => dùng hàm hiển thị alert để cảnh báo cho người dùng
```javascript
displayAlert("please enter value", "danger");
```
##### Cách thêm item vào danh sách (hiển thị ở html)

Gọi hàm createListItem()

Hiển thị thông báo alert thành công cho user 
```javascript
displayAlert('item added to the list', 'success')
```
Hiển thị container (ban đầu mặc định là ẩn) 
```javascript
container.classList.add('show-container')
```
Gọi hàm addToLocalStorage(id,value) để lưu item vào localStorage

Gọi hàm setBackToDefault() để reset lại các giá trị bao gồm:
```javascript
grocery.value = '' //reset input rỗng
editFlag = false 
editID = ''
submitBtn.textContent = "submit"
```

##### Cách thêm item vào danh sách (lưu ở localStorage)
Tạo hàm addToLocalStorage(id,value) chịu trách nhiệm add item vào danh sách ở localStorage

### Cách xóa toàn bộ items
#### 1. Lấy toàn bộ items 
```javascript
const items = document.querySelectorAll('.grocery-item');
```
#### 2. Xóa items ở html 
Nếu danh sách item > 0 phần tử thì:
Duyệt qua từng phần tử và removeChild khỏi list 
```javascript
list.removeChild(item)
```
Ẩn container
```javascript
container.classList.remove('show-container')
```
#### 3. Hiển thị thông báo xóa thành công
```javascript
displayAlert('empty list', 'danger')
```
#### 4. Xóa items ra khỏi localStorage
```javascript
displayAlert('empty list', 'danger')
```
#### 5. Reset lại các thông số 
```javascript
setBackToDefault()
```

### Tạo hàm deleteItem(e)
#### 1. Tìm ra đúng element cần xóa
Từ object e truy cập vào currentTarget, từ đó lấy  ra được element cần delete 
```javascript
const element = e.currentTarget.parentElement.parentElement;
const id = element.dataset.id
```
Xóa element ra khỏi list 
```javascript
list.removeChild(element)
```
#### 2. Kiểm tra nếu sau khi xóa list không còn item nào, thì ẩn luôn container  
```javascript
if(list.children.length === 0) {
   container.classList.remove('show-container')
}
```
#### 3. Hiển thị thông báo xóa thành công item, và Reset lại các thông số
```javascript
displayAlert('item removed', 'danger')
setBackToDefault()
```
#### 4. Xóa item khỏi localStorage
Gọi hàm 
```javascript
removeFromLocalStorage(id)
```

### Tạo hàm editItem(e)
#### 1. Từ object e lấy ra được element cần edit
```javascript
const element = e.currentTarget.parentElement.parentElement;
const id = element.dataset.id
```
#### 2. Từ object e lấy ra được element chứa tên món đồ cần edit
```javascript
const editElement = e.currentTarget.parentElement.previousElementSibling;
```
#### 3. lấy tên món đồ cho vào ô input
```javascript
grocery.value = editElement.innerHTML;
```
#### 4. Cài đặt các thông số cho biết đang edit element
```javascript
editFlag = true
editID = element.dataset.id
submitBtn.textContent = 'edit'
```
#### 5. Tiếp tục code cho hàm addItem, ở trường hợp số 2 về giá trị của ô input

### Tạo hàm addToLocalStorage(id, value)
#### 1. Tạo object grocery
```javascript
const grocery = {id, value} //ES6
```
#### 2. Nếu trong localStorage có key là "list" có giá trị, thì lấy giá trị đó (parse về kiểu mảng). Ngược lại, không có giá trị, thì khởi tạo items = [] (mảng rỗng)
```javascript
let items = getLocalStorage()
```
#### 3. Push grocery mới vào mảng items
```javascript
items.push('grocery')
```
#### 4. setItem của localStorage với key là 'list', và value là mảng items được chuyển thành chuỗi.
```javascript
localStorage.setItem('list', JSON.stringify(items))
```
#### 5. Vậy là add item vào localStorage đã xong. Chuyển thao tác lấy value trong local Storage sang 1 hàm khác. 
```javascript
function getLocalStorage(){
   return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list') : []
}
```
### Tạo hàm removeFromLocalStorage(id)
#### 1. Lấy value trong localStorage 
```javascript
let items = getLocalStorage()
```
#### 2. Dùng method filter, giữ lại những item nào có id khác với id ở tham số truyền vào 
```javascript
items.filter(item => {
   if(item.id !== id) {
       return item
   }
})
```
#### 3. set lại key và value cho localStorage 
```javascript
localStorage.setItem('list', JSON.stringify(items))
```

### Tạo hàm editLocalStorage(id, value)
#### 1. Lấy value của localStorage
```javascript
let items = getLocalStorage()
```
#### 2. Dùng method map cho mảng item.
Nếu item.id === id tham số, thì biến đổi item.value = value tham số.
```javascript
items.map(item => {
    if(item.id === id) {
        item.value = value
        }
     return item
})
```
#### 3. set lại key và value cho localStorage 
```javascript
localStorage.setItem('list', JSON.stringify(items))
```

### Khi website vừa được truy cập, sẽ lấy data trong localStorage để hiển thị 
#### 1. Gán lắng nghe sự kiện DOMContentLoaded cho objec window.
```javascript
window.addEventListener('DOMContentLoaded', setupItems)
```

### Viết hàm setupItems()
#### 1. Lấy value của localStorage
```javascript
let items = getLocalStorage()
```
#### 2. Nếu items có phần tử thì: 
Dùng method forEach duyệt qua mảng items

Đối với mỗi phần tử trong mảng, sẽ gọi hàm createListItem(item.id, item.value)

Thêm class show-container vào container


### Viết hàm createListItem(id, value)
Tạo ra element mới là thẻ 'article'
```javascript
const element = document.createElement('article')
```
Thêm class 'grocery-item' vào element
```javascript
element.classList.add('grocery-item')
```
Tạo ra attribute mới 'data-id' có giá trị là id
```javascript
const attr = document.createAttribute('data-id')
attr.value = id
```
set Attribute mới này cho element 'article' vừa tạo
```javascript
element.setAttributeNode(attr)
```
Render HTML cho element mới này theo đúng cấu trúc html mockup.
```javascript
element.innerHTML = `p.title ${value}
   .btn-container
   button.edit-btn>i.fas.fa-edit
   button.delete-btn>i.fas.fa-trash`
```
Gắn toàn bộ element này vào grocery-list
```javascript
list.appendChild(element)
```

### Xử lý sự kiện Click vào nút Edit và nút Delete item 
#### Lưu ý: nút Delete và Edit chỉ có sau khi đã thêm item. Do đó, để lấy được 2 nút này, cần phải lấy sau khi đã thêm item. 
```javascript
deleteBtn | .delete-btn
editBtn   | .edit-btn
```
Gắn lắng nghe sự kiện Click vào nút deleteBtn.

Gọi hàm deleteItem

Gắn lắng nghe sự kiện Click vào nút editBtn

Gọi hàm editItem

### Xử lý sự kiện submit form

### Xử lý sự kiện click vào nút Clear items
