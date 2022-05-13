const handleChange = function (e) {
  e.preventDefault();
  const { name, value } = e.target;
  this.setState((prevState) => ({ ...prevState, [name]: value }));
}

export { handleChange };