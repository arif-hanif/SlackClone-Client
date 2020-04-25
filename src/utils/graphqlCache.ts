import cloneDeep from "lodash-es/cloneDeep";

const addToCache = (client, query, objectName, newData, queryDataKey) => {
  const data = cloneDeep(
    client.readQuery({
      query,
    })
  );
  data[objectName].push(newData.data[queryDataKey]);
  client.writeQuery({
    query,
    data,
  });
};

export { addToCache };
