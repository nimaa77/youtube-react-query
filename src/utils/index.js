// dummy way to handle the form
// DON'T try this at Home, School or anywhere
const getFormValues = (callBack) => (event) => {
  event.preventDefault();
  const name = event.target.name.value;
  const amount = event.target.amount.value;
  const description = event.target.description.value;
  callBack({ name, amount, description });
};

export { getFormValues };
