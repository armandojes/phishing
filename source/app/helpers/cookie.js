export const create_cookie = (name, value) => {
  var d = new Date(); d.setTime(d.getTime() + (7*24*60*60*1000));
  const expires = "expires="+d.toUTCString();
  document.cookie = `${name} = ${value};  ${expires}; path=/`;
  return true;
}

export const get_cookie = (name) => {
  return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + name.replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
}

export const delete_cookie = (name) => {
  document.cookie = `${name}=; max-age=1; path=/`;
}

export default {
  create_cookie,
  get_cookie,
  delete_cookie,
}
