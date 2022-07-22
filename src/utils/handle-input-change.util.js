const handleChange = function (e) {
  e.preventDefault();
  const { name, value } = e.target;
  // console.log(value);
  this.setState((prevState) => ({ ...prevState, [name]: value }));
}

export { handleChange };