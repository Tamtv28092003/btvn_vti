// ========= users ============
const users = [
    { id: 1, name: "John Smith", email: "john.smith@example.com", age: 35, city: "New York" },
    { id: 2, name: "Emily Johnson", email: "emily.johnson@example.com", age: 28, city: "Los Angeles" },
    { id: 3, name: "Michael Brown", email: "michael.brown@example.com", age: 42, city: "Chicago" },
    { id: 4, name: "Emma Davis", email: "emma.davis@example.com", age: 31, city: "Houston" },
    { id: 5, name: "Sophia Wilson", email: "sophia.wilson@example.com", age: 25, city: "Phoenix" },
    { id: 6, name: "Daniel Martinez", email: "daniel.martinez@example.com", age: 40, city: "San Antonio" },
    { id: 7, name: "Olivia Anderson", email: "olivia.anderson@example.com", age: 29, city: "San Diego" },
    { id: 8, name: "Alexander Thomas", email: "alexander.thomas@example.com", age: 38, city: "Dallas" },
    { id: 9, name: "Ava Taylor", email: "ava.taylor@example.com", age: 33, city: "Philadelphia" },
    { id: 10, name: "William White", email: "william.white@example.com", age: 27, city: "San Francisco" },
    { id: 11, name: "Mia Harris", email: "mia.harris@example.com", age: 45, city: "Austin" },
    { id: 12, name: "James Martin", email: "james.martin@example.com", age: 26, city: "Seattle" },
    { id: 13, name: "Charlotte Garcia", email: "charlotte.garcia@example.com", age: 39, city: "Denver" },
    { id: 14, name: "Benjamin Rodriguez", email: "benjamin.rodriguez@example.com", age: 32, city: "Portland" },
    { id: 15, name: "Amelia Martinez", email: "amelia.martinez@example.com", age: 30, city: "Atlanta" },
    { id: 16, name: "Ethan Walker", email: "ethan.walker@example.com", age: 36, city: "Miami" },
    { id: 17, name: "Isabella King", email: "isabella.king@example.com", age: 24, city: "Detroit" },
    { id: 18, name: "Abigail Green", email: "abigail.green@example.com", age: 34, city: "Minneapolis" },
    { id: 19, name: "Liam Adams", email: "liam.adams@example.com", age: 41, city: "Tampa" },
    { id: 20, name: "Grace Scott", email: "grace.scott@example.com", age: 37, city: "Boston" }
];



// ======== orders ===========
const orders = [
    { id: 1, userId: 1, productId: 2, quantity: 2, date: "2024-02-21T08:00:00Z" },
    { id: 2, userId: 2, productId: 3, quantity: 1, date: "2024-02-20T10:30:00Z" },
    { id: 3, userId: 3, productId: 1, quantity: 3, date: "2024-02-19T15:45:00Z" },
    { id: 4, userId: 4, productId: 4, quantity: 2, date: "2024-02-18T12:15:00Z" },
    { id: 5, userId: 5, productId: 5, quantity: 1, date: "2024-02-17T09:20:00Z" },
    { id: 6, userId: 1, productId: 6, quantity: 2, date: "2024-02-16T14:30:00Z" },
    { id: 7, userId: 2, productId: 7, quantity: 1, date: "2024-02-15T11:45:00Z" },
    { id: 8, userId: 3, productId: 8, quantity: 3, date: "2024-02-14T10:00:00Z" },
    { id: 9, userId: 4, productId: 9, quantity: 2, date: "2024-02-13T13:20:00Z" },
    { id: 10, userId: 5, productId: 10, quantity: 1, date: "2024-02-12T09:00:00Z" },
    { id: 11, userId: 1, productId: 11, quantity: 3, date: "2024-02-11T16:15:00Z" },
    { id: 12, userId: 2, productId: 12, quantity: 1, date: "2024-02-10T14:30:00Z" },
    { id: 13, userId: 3, productId: 13, quantity: 2, date: "2024-02-09T11:45:00Z" },
    { id: 14, userId: 4, productId: 14, quantity: 1, date: "2024-02-08T10:00:00Z" },
    { id: 15, userId: 5, productId: 15, quantity: 3, date: "2024-02-07T13:20:00Z" },
    { id: 16, userId: 1, productId: 16, quantity: 2, date: "2024-02-06T09:00:00Z" },
    { id: 17, userId: 2, productId: 17, quantity: 1, date: "2024-02-05T16:15:00Z" },
    { id: 18, userId: 3, productId: 18, quantity: 3, date: "2024-02-04T14:30:00Z" },
    { id: 19, userId: 4, productId: 19, quantity: 2, date: "2024-02-03T11:45:00Z" },
    { id: 20, userId: 5, productId: 20, quantity: 1, date: "2024-02-02T10:00:00Z" }
];



// ========= products ==========
const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 999.99 },
    { id: 2, name: "Smartphone", category: "Electronics", price: 699.99 },
    { id: 3, name: "Headphones", category: "Electronics", price: 149.99 },
    { id: 4, name: "Running Shoes", category: "Sports", price: 89.99 },
    { id: 5, name: "Yoga Mat", category: "Sports", price: 29.99 },
    { id: 6, name: "Dumbbells", category: "Sports", price: 49.99 },
    { id: 7, name: "Coffee Maker", category: "Kitchen", price: 79.99 },
    { id: 8, name: "Blender", category: "Kitchen", price: 39.99 },
    { id: 9, name: "Toaster", category: "Kitchen", price: 29.99 },
    { id: 10, name: "Desk Lamp", category: "Home", price: 19.99 },
    { id: 11, name: "Throw Pillow", category: "Home", price: 14.99 },
    { id: 12, name: "Picture Frame", category: "Home", price: 24.99 },
    { id: 13, name: "Watch", category: "Accessories", price: 199.99 },
    { id: 14, name: "Sunglasses", category: "Accessories", price: 129.99 },
    { id: 15, name: "Wallet", category: "Accessories", price: 49.99 },
    { id: 16, name: "Backpack", category: "Bags", price: 79.99 },
    { id: 17, name: "Tote Bag", category: "Bags", price: 39.99 },
    { id: 18, name: "Messenger Bag", category: "Bags", price: 59.99 },
    { id: 19, name: "Gaming Mouse", category: "Gaming", price: 49.99 },
    { id: 20, name: "Gaming Keyboard", category: "Gaming", price: 69.99 }
];

// 1
const homeProducts = products.filter(product => product.category === 'Home');
console.log(homeProducts);

// 2
const productsOver50 = products.filter(product => product.price > 50); // Lọc các sản phẩm có giá trên 50
const sapXepProducts = productsOver50.sort((a, b) => b.price - a.price); // Sắp xếp từ cao xuống thấp
console.log(sapXepProducts);
 
// 3
const emmadavisUser = users.find(user => user.name === 'Emma Davis');
if (emmadavisUser) {
    const emmadavisUserId = emmadavisUser.id;
    const emmadavisOrders = orders.filter(order => order.userId === emmadavisUserId);
    console.log(emmadavisOrders);
} else {
    console.log("Không tìm thấy thông tin của Emma Davis trong danh sách người dùng.");
}

// 4
const emmaDavisUser = users.find(user => user.name === 'Emma Davis');
if (emmaDavisUser) {
    const emmaDavisUserId = emmaDavisUser.id;

    // Lọc danh sách đơn hàng của Emma Davis từ danh sách đơn hàng
    const emmaDavisOrders = orders.filter(order => order.userId === emmaDavisUserId);
    
    // Tính tổng tiền bill của Emma Davis
    const totalBill = emmaDavisOrders.reduce((total, order) => total + (products.find(product => product.id === order.productId).price * order.quantity), 0);

    console.log("Tổng tiền bill của Emma Davis là:", totalBill);
} else {
    console.log("Không tìm thấy thông tin của Emma Davis trong danh sách người dùng.");
}

// 5
// Tính tổng số tiền mà mỗi người dùng đã chi tiêu
const userSpending = {};

orders.forEach(order => {
    const userId = order.userId;
    const product = products.find(product => product.id === order.productId);
    const orderTotal = product.price * order.quantity;

    if (userSpending[userId]) {
        userSpending[userId] += orderTotal;
    } else {
        userSpending[userId] = orderTotal;
    }
});

// Sắp xếp danh sách chi tiêu từ cao xuống thấp
const sortedUserSpending = Object.entries(userSpending).sort((a, b) => b[1] - a[1]);

// Lấy top 3 người dùng chi tiêu mạnh nhất
const top3Users = sortedUserSpending.slice(0, 3);

// Hiển thị top 3 người dùng chi tiêu mạnh nhất
console.log("Top 3 người dùng chi tiêu mạnh nhất:");
top3Users.forEach(([userId, spending], index) => {
    const user = users.find(user => user.id === parseInt(userId));
    console.log(`${index + 1}. ${user.name} - Số tiền chi tiêu: ${spending}`);
});

// 6
// Tìm userId của Emily Johnson và Emma Davis từ danh sách người dùng
const emilyJohnsonUser = users.find(user => user.name === 'Emily Johnson');
const emmaDavisUser = users.find(user => user.name === 'Emma Davis');

if (emilyJohnsonUser && emmaDavisUser) {
    const emilyJohnsonUserId = emilyJohnsonUser.id;
    const emmaDavisUserId = emmaDavisUser.id;

    // Tính tổng tiền bill của Emily Johnson
    const emilyJohnsonTotalBill = orders.reduce((total, order) => {
        if (order.userId === emilyJohnsonUserId) {
            const product = products.find(product => product.id === order.productId);
            total += product.price * order.quantity;
        }
        return total;
    }, 0);

    // Tính tổng tiền bill của Emma Davis
    const emmaDavisTotalBill = orders.reduce((total, order) => {
        if (order.userId === emmaDavisUserId) {
            const product = products.find(product => product.id === order.productId);
            total += product.price * order.quantity;
        }
        return total;
    }, 0);

    // So sánh tổng tiền bill của Emily Johnson và Emma Davis
    if (emilyJohnsonTotalBill > emmaDavisTotalBill) {
        console.log("Emily Johnson đã chi tiêu nhiều hơn Emma Davis.");
    } else if (emilyJohnsonTotalBill < emmaDavisTotalBill) {
        console.log("Emma Davis đã chi tiêu nhiều hơn Emily Johnson.");
    } else {
        console.log("Emily Johnson và Emma Davis đã chi tiêu cùng số tiền.");
    }
} else {
    console.log("Không tìm thấy thông tin của Emily Johnson hoặc Emma Davis trong danh sách người dùng.");
}


// 7
// Kiểm tra xem tất cả người dùng có hóa đơn tổng cộng lớn hơn 400 không
const allUsersHaveBillOver400 = users.every(user => {
    // Tính tổng tiền bill của người dùng
    const userTotalBill = orders.reduce((total, order) => {
        if (order.userId === user.id) {
            const product = products.find(product => product.id === order.productId);
            total += product.price * order.quantity;
        }
        return total;
    }, 0);
    
    return userTotalBill > 400;
});

if (allUsersHaveBillOver400) {
    console.log("Tất cả người dùng có hóa đơn tổng cộng lớn hơn 400.");
} else {
    console.log("Không phải tất cả người dùng đều có hóa đơn tổng cộng lớn hơn 400.");
}


// 8
// Tạo một đối tượng để lưu trữ số lượng mỗi sản phẩm đã mua
const productQuantity = {};

// Đếm số lượng mỗi sản phẩm được mua từ danh sách đơn hàng
orders.forEach(order => {
    const productId = order.productId;
    if (productQuantity[productId]) {
        productQuantity[productId] += order.quantity;
    } else {
        productQuantity[productId] = order.quantity;
    }
});

// Sắp xếp các sản phẩm theo số lượng đã mua
const sortedProducts = Object.entries(productQuantity).sort((a, b) => b[1] - a[1]);

// Lấy top 3 sản phẩm được mua nhiều nhất
const top3Products = sortedProducts.slice(0, 3);

// Hiển thị top 3 sản phẩm được mua nhiều nhất
console.log("Top 3 sản phẩm được mua nhiều nhất:");
top3Products.forEach(([productId, quantity], index) => {
    const product = products.find(product => product.id === parseInt(productId));
    console.log(`${index + 1}. ${product.name} - Số lượng đã mua: ${quantity}`);
});
