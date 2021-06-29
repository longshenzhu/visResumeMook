/**
 * @desc 判断是否属于外部连接
 * @param {string} url - 链接
 */
export function isHttpOrHttpsUrl(url: string): boolean {
    let regRule = /(http|https):\/\/([\w.]+\/?)\s*/;
    return regRule.test(url.toLowerCase());
}