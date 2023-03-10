function validateStates({
  flag,
  setValid,
  valid,
  index,
  key,
  callbackFunction,
}: any) {
  if (flag.length != 0) {
    if(!valid[`${index}`])
    {
        valid[`${index}`]={};
    }
    valid[`${index}`][`${key}`] = true;
    setValid(valid);
    callbackFunction(flag);
  } else {

    valid[`${index}`] && valid[`${index}`][`${key}`] && delete valid[`${index}`][`${key}`];//check if error at current index already exists if yes then delete previously stored value
    if (valid?.[`${index}`] && Object.keys(valid?.[`${index}`])?.length === 0) {
      delete valid[`${index}`];
    }
    setValid(valid);
  }
}
export { validateStates };
//valid state is storing errorenous fields