export function DateFormat(str = '') {
  return str.includes('T') ? str.replace(/T.*/, '') : str;
}

const FixOffeset = 7;

// 解密
export function unCompileParam(code = '') {
  let c = String.fromCharCode(code.charCodeAt(0) - FixOffeset - code.length);
  for (let i = 1; i < code.length; i += 1) {
    c += String.fromCharCode(code.charCodeAt(i) - c.charCodeAt(i - 1));
  }
  return c;
}

// 加密, 拷贝函数到chrome调试窗口，加密你的token
export function compileParam(code = '') {
  let c = String.fromCharCode(code.charCodeAt(0) + FixOffeset + code.length);
  for (let i = 1; i < code.length; i += 1) {
    c += String.fromCharCode(code.charCodeAt(i) + code.charCodeAt(i - 1));
  }
  return c; // 增加特殊字符编码，防止'/', '&', '='等字符造成的影响
}
