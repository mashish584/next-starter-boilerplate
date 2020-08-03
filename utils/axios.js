import axios from "axios";
import { showToast } from ".";

const instance = axios.create({
	baseURL: "https://api-dev.yintro.me/v1/",
});

const _instance = axios.create({
	baseURL: "https://api-dev.yintro.me/v1/",
});

instance.interceptors.request.use(
	function (config) {
		// Do something before request is sent
		return config;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	},
);

instance.interceptors.response.use(
	function (response) {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		const data = response.data;

		if (data.status === "success") {
			return data;
		} else {
			if (data.message instanceof Array) {
				showToast(data.message[0], "error");
			} else {
				showToast(data.message, "error");
			}
			return data;
		}
	},
	function (error) {
		const {
			status,
			data: { message },
		} = error.response;
		console.log({ status, message });
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		if (status === 401) {
			showToast(message, "error");
		}
		return Promise.reject(error);
	},
);

export { instance, _instance };
