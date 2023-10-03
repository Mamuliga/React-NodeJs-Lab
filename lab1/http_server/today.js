module.exports.getDate = () => {
  let aestTime = new Date().toLocaleDateString("en-US", {
    timeZone: "Australia/Brisbane",
  });
  return new Date(aestTime);
};
