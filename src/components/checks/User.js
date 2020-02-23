const User = (props) =>{
	if(!props.user || !props.userList) {
		return (
			"Loading ..."
		)
	}
	const getUser = props.userList.filter(user => user.id === props.user);
  return(
			getUser[0].name
  )
}
export default User;
