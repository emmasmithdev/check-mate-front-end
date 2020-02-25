const CheckUser = (props) =>{
	if(!props.userList) {
		return (
			"Loading ..."
		)
	}

	const filterUsers = props.userList.filter(user => {
		return user.id === props.user
	})

  return(
		filterUsers[0].name
  )
}
export default CheckUser;
