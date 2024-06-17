import { Box, Button, TextField, Typography, styled } from "@mui/material";
import { Todo as TypeTodo } from "./../store/todoSlice/index.d";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../store/todoSlice/todoSlice";
import { ChangeEvent, useState } from "react";

const Todo = (props: TypeTodo) => {
	const { title, id, data } = props;
	const dispatch = useDispatch();
	const [openEdit, setOpenEdit] = useState<boolean>(false);
	const [edit, setEdit] = useState<string>(title);
	const [description, setDescription] = useState<string>(data);

	const handleDelete = () => {
		dispatch(deleteTodo(id));
	};

	const handleOpenEdit = () => setOpenEdit((prev) => !prev);
	const handleEditTodo = (e: ChangeEvent<HTMLInputElement>) =>
		setEdit(e.target.value);
	const handleEditDescription = (e: ChangeEvent<HTMLInputElement>) =>
		setDescription(e.target.value);

	const handleSaveTodo = () => {
		const newEdit: TypeTodo = {
			id,
			title: edit,
			data:  description ,
		};
		dispatch(editTodo(newEdit));
		setOpenEdit(false);

	};

	return (
		<MuiContainer>
			<MuiContent>
				{openEdit ? (
					<Box>
						<TextField type="text" value={edit} onChange={handleEditTodo} />
						<TextField
							type="date"
							value={description}
							onChange={handleEditDescription}
						/>
						<Button variant="outlined" onClick={handleSaveTodo}>
							Save
						</Button>
						<Button variant="outlined" onClick={handleOpenEdit}>
							Cancel
						</Button>
					</Box>
				) : (
					<>
						<Typography>{title}</Typography>
						<Typography>{data}</Typography>
						<Button variant="outlined" onClick={handleDelete}>
							Delete
						</Button>
						<Button variant="outlined" onClick={handleOpenEdit}>
							Edit
						</Button>
					</>
				)}
			</MuiContent>
		</MuiContainer>
	);
};

export default Todo;

const MuiContainer = styled(Box)(() => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	padding: "10px",
	margin: "10px",
	borderRadius: "10px",
	
}));

const MuiContent = styled(Box)(() => ({
	display: "flex",
	justifyContent: "space-between",

	width: "26rem",
	alignItems: "center",
	padding: "10px",
	margin: "0px",
	borderRadius: "10px",
	border: "1px solid black",
	boxShadow: "10px 10px 20px #babecc, -10px -10px 20px #ffffff",
}));
