export async function asyncMap(array: any[], asyncCallback: (item: any) => any) {
  const promises = array.map(async (item) => {
    return asyncCallback(item);
  });
  const results = await Promise.all(promises);
  return results;
}