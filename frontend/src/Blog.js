import axios from 'axios';
const baseUrl = "http://localhost:4000";
let data = {
    test1: { username: "test1", password: "testone", accountn0: 1001, balance: 5000, },
    test2: { username: "test2", password: "testtwo", accountn0: 1002, balance: 5000, },
    test3: { username: "test3", password: "testthree", accountn0: 1003, balance: 7000, },
    test4: { username: "test4", password: "testfour", accountn0: 1004, balance: 55000, },
}
let newData = localStorage.getItem("data");
if (newData) {
    data = JSON.parse(newData);
}
class Blog {
    static currentUser = "";

    static getUser() {
        return localStorage.getItem("currentUser");
    }
    static saveData() {
        localStorage.setItem("data", JSON.stringify(data));
    }
    static getDetails() {
        return data;
    }
    static addUser(username, password, accountn0) {
        data[username] = { username, password, accountn0, balance: 0, };
        Blog.saveData();
    }
    // static getUser(){
    //     return data[Taxi.currentUser];
    // }
    static setCurrentUser(usname) {
        localStorage.setItem("currentUser", usname);

    }
    static login(username, password) {

        return axios.post(baseUrl + "/users/login", {
            username,
            password
        }, { withCredentials: true })
    }
    static registration(username, password, confirmPassword, accountn0) {
        return axios.post(baseUrl + "/users/register", {
            username,
            password,
            confirmPassword,
            accountn0
        }, { withCredentials: true })
    }
    static addblog(title, price) {
        return axios.post(baseUrl + "/blogs/addblog", {
            title,
            price
        }, { withCredentials: true })
    }
    static addNewblog(title, description, imagePath, image) {
        return axios.post(baseUrl + "/blogs/addNewblog", {
            title,
            description,
            imagePath,
            image
        }, { withCredentials: true })
    }

    static getAllBlogs() {
        // alert("inside frontend controller")
        return axios.post(baseUrl + "/blogs/getAllBlogs", { withCredentials: true })
    }


    static home(username, amount) {
        return axios.post(baseUrl + "/users/home", {
            username,
            amount
        }, { withCredentials: true })
    }


}

export default Blog;