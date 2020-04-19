/* Github个人信息相关, 网站相关的信息在package.json, 还可继续设置 */
export const SITE_NAME = 'Ricky Blog'; // 网站标题
export const SITE_ADDRESS = ''; // 网站地址，可为空
export const SITE_MOTTO = '屁屁'; // 一句段子
export const OWNER = '"codefarmerricky"'; // 你github name
export const PROJECT = '"blog"'; // 你issue项目名
// because of github protect privacy, the token compile with a funciton to encrypted；
// 由于github安全保护规则，token不能暴露到仓库中，但又因为我们申请的token只是一个只读token，所以这里使用了简单函数进行了对称加解密绕开规则；
export const TOKEN = 'clÇnmjiefÇildjkdhogdikmq';
export const GITHUB_URL = 'https://codefarmerricky.github.io/blog/';
/* 博客展示相关 */
export const PAGE_SIZE = 10;
// change the picture url, change the color;
// eslint-disable-next-line max-len
export const GITHUB_FORK_IMG = 'https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67';
