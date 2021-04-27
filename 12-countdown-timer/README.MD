# 12 - Countdown Timer Project


## Setup html css ban đầu

```html
section.section-center
   article.gift-img > img
   <!--- info --->
   article.gift-info
      h3
      h4.giveaway
         Giveaway Ends On Friday, 7 May 2021 11:30am
      p
      .deadline
         <!-- days-->
         div.deadline-format
            div
               h4.days
               span
         div.deadline-format
            div
               h4.hours
               span
         div.deadline-format
            div
               h4.mins
               span
         div.deadline-format
            div
               h4.secs
               span
```

## Logic javascript: app.js

### Các events, object, methods, properties và syntax sử dụng

```javascript
querySelector
querySelectorAll

new Date()
getFullYear()
getMonth()
getHours()
getMinutes()
getDate()
getDay()
getTime()

Math.floor()

`giveaway ends on ${year}` //syntax

```
### Cho sẵn 2 mảng months, và weekdays
```javascript
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
```
### Lấy tất cả các Node cần sử dụng
```javascript
giveaway |.giveaway // thẻ h4 chứa ngày tháng năm kết thúc event.
dealine | .deadline // div cha chứa toàn bộ ô ngay tháng năm còn lại
items | .dealine-format h4 // danh sách các ô con bên trong
```

### Dùng object Date để tạo ra ngày kết thúc sự kiện trong tương lai

```javascript
let futureDate = new Date(2021, 5, 24, 11, 30, 0); // nghĩa là 11:30:00 ngày 24 tháng 6 năm 2021
```
- Lấy ra thứ, ngày, tháng, năm, và giờ của futureDate để render ra html của giveaway
```javascript
const year = futureDate.getFullYear();
const hours = futureDate.getHours(); 
const minutes = futureDate.getMinutes();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`
```

### Tính số ngày còn lại
1. Chuyển futureDate sang dạng ms 
```javascript
const futureTime = futureDate.getTime();
``` 
2. Tạo hàm getRemainingTime để tính số ngày còn lại:

Chuyển ngày hôm nay sang dạng ms

Tính số ms từ ngày hôm nay đến ngày deadline 
```javascript
const today = new Date().getTime();
const t = futureTime - today;
``` 
Chuyển số ms thành dạng ngày - tháng - năm - giờ - phút - giây
- Số ms của 1 ngày:
```javascript
const oneDay = 24 * 60 * 60 * 1000
``` 
- Số ms của 1 giờ:
```javascript
const oneHour = 60 * 60 * 1000
``` 
- Số ms của 1 phút:
```javascript
 const oneMinute = 60 * 1000
``` 
- Số ngày còn lại:
```javascript
 let days = Math.floor( t / oneDay)
``` 
- Số giờ còn lại:
```javascript
 let hours = Math.floor(( t % oneDay)/ oneHour)
``` 
- Số phút còn lại:
```javascript
 let minutes = Math.floor(( t % oneHour)/ oneMinute)
``` 
- Số giây còn lại:
```javascript
 let seconds = Math.floor(( t % oneMinute)/ 1000)
``` 

### Tạo mảng chứa các item: số ngày - giờ - phút - giây còn lại 
```javascript
 const values = [days, hours, minutes, seconds]
``` 
format lại các item bên trong values, những item nào có giá trị < 10, thì thêm vào số 0 phía trước.
```javascript
function format(item){
  if(item < 10) {
     return (item=`0${item}`);
  }
  return item; 
}
``` 
### render html items, với dữ liệu lấy từ mảng values.
```javascript
items.forEach((item, index)=> {
   item.innerHTML = format(values[index]);
})
``` 

### Tính năng Countdown: cập nhật hiển thị con số theo thời gian
```javascript
let countdown = setInterval(getRemainingTime, 1000)
``` 

### Xử lý tình huống, quá hạn deadline, thì sẽ hiển thị thông báo thay vì hiển thị countdown.
Nếu t < 0 thì:
- clearInterval countdown
- render HTML vào element deadline
```html
`<h4 class='expired'> Sory, this giveaway has expired </h4> 
```

### Ngày hết hạn luôn là ngày cách ngày hiện tại là 10 ngày, vào lúc 11h30phut
Tạo ra ngày hôm nay 

Lấy năm của ngày hôm nay

Lấy tháng của ngày hôm nay 

Lấy ngày của ngày hôm nay

Gán các giá trị của ngày hôm nay vào biến futureDate
```javascript
const tempDate = new Date();
let moreDays = 10;
tempDate.setDate(tempDate.getDate() + moreDays);

let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const futureDate = new Date(tempYear, tempMonth, tempDay, 11, 30, 0)
```