export function getFormData(el: any) {
  const formData = new FormData(el);
  const data = Array.from(formData.entries()).reduce((p: any, c) => {
    const [key, value] = c;
    p[key] = value;
    return p;
  }, {});
  return data;
}
