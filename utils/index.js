import { toast } from "react-toastify";
import { instance } from "./axios";

export function throttle(fn, delay) {
	let makeCall = true;
	return function () {
		if (makeCall) {
			fn.apply(this, arguments);
			makeCall = false;
			setTimeout(() => {
				makeCall = true;
			}, delay);
		}
	};
}

export const validateEmail = (value) => {
	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	return emailPattern.test(value);
};

export const validEncodedString = (string) => {
	if (typeof string !== "string") {
		return false;
	}
	try {
		JSON.parse(string);
		return true;
	} catch (error) {
		return false;
	}
};

export const setBearer = (token) => {
	instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const removeBearer = () =>
	delete instance.defaults.headers.common["Authorization"];

export const asyncErrorHandler = (asyncFn, cb) => {
	return function (e) {
		return asyncFn.call(this, e).catch((error) => {
			console.log({ error });
			if (cb) cb();
		});
	};
};

export const showToast = (message, type = "success") => {
	toast(message, {
		position: "top-right",
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: false,
		type,
	});
};
