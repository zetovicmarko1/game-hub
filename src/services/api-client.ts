import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params: {
        key: "ae86eb7f5a11441d9aa5acd500455aa6"
    }
})