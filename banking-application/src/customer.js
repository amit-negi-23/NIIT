const category = require("./category");

var customerList = [];

const addCustomer = (CustomerId, CustomerName, CustomerAge, CustomerAddress, CustomerContactNumber, Category) => {
      let existedcustomer = customerList.find(customer => customer[0] == CustomerId);
      if (!existedcustomer) {
            customerList.push([CustomerId,CustomerName,CustomerAge,CustomerAddress, CustomerContactNumber,category.category(Category)]);
            return customerList.length;
      }
      else {
            return customerList.length;
      }
}

const updateCustomer = (CustomerId, CustomerName, CustomerAge, CustomerAddress, CustomerContactNumber, Category) => {
      // let existingCustomer = customerList.find(customer => customer.id == CustomerId);
      // if (true) {
      //       let update = customerList.filter(customer => customer.id == CustomerId)
      //       .map((customer) => {
      //             return {
      //                   id: CustomerId,
      //                   name: CustomerName,
      //                   age: CustomerAge,
      //                   address: CustomerAddress,
      //                   contact: CustomerContactNumber,
      //                   category: category.category(Category),

      //             }
      //       })
      //       customerList.push(update);
      // }

      for (let i = 0; i < customerList.length; i++) {
            if (customerList[i][0]==CustomerId) {
                  customerList[i][1]=CustomerName;
                  customerList[i][2]=CustomerAge;
                  customerList[i][3]=CustomerAddress;
                  customerList[i][4]= CustomerContactNumber;
                  customerList[i][5]=Category;
            }
            
           }
}

const getAllCustomers = () => {
      return customerList;
}

module.exports = { addCustomer, updateCustomer, getAllCustomers }