/**
 *
 * @param {*} cookieNme 获取cookie
 *
 */
export const getCookie = (cookieNme) => {
    let value;
    let cookies = document.cookie.split(";");
    cookies.map((cookie) => {
        cookie = cookie.trim();
        if (cookie.indexOf(cookieNme) === 0) {
            [, value] = cookie.split("=");
        }
    });
    return value;
};