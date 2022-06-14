const getProperties = (object) => {
  const propertiesArray = Object.keys(object).filter(
    (property) =>
    property !== "_id" &&
      property !== "createdAt" &&
      property !== "updatedAt" &&
      property !== "__v"
  );
  return propertiesArray
};

export default getProperties
