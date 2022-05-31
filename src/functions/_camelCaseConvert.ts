export default function _camelCaseConvert(obj:object):object {
  let newObj = {} as any;
  const entries = Object.entries(obj);
  entries.forEach(ent => {
    let [key, value] = ent;

    if (key.includes('_')) {
      key = key
        .split('_')
        .map((str, i) => {
          if (i === 0) return key.split('_')[0];
          return str[0].toUpperCase() + str.slice(1);
        })
        .join('');
    }

    newObj[key] = typeof value == 'object' && value !== null && !Array.isArray(value) ? _camelCaseConvert(value) : value;
  });

  return newObj;
}