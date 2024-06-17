import { Box, Button, TextField, styled } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, deleteAll } from "../store/todoSlice/todoSlice";
import { Todo } from "../store/todoSlice";


const TodoForm = () => {
	const dispatch = useDispatch();
	const [title, setTitle] = useState<string>("");
	const [description, setDescription] = useState<string>("");

	const changeTitle = (e: ChangeEvent<HTMLInputElement>) =>
		setTitle(e.target.value);

	const changeDescription = (e: ChangeEvent<HTMLInputElement>) =>
		setDescription(e.target.value);

	const handleAddTodo = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const newTodo: Todo = {
			id: Math.random(),
			title,
			data:  description , // Assuming data contains description
		};
		dispatch(addTodo(newTodo));

		setTitle("");
		setDescription("");
	};

	const handleDeleteAll = () => {
		dispatch(deleteAll());
	};

	return (
		<FormContainers>
			<FormContainer  onSubmit={handleAddTodo}>
				<InputContent
					color="success"
					variant="standard"
					label="Title"
					value={title}
					onChange={changeTitle}
				/>
				<InputContent
					type="date"
					color="success"
					variant="standard"
					value={description}
					onChange={changeDescription}
				/>
				<FormButton variant="contained" type="submit">
					create ☆
				</FormButton>
				<FormButton variant="outlined" onClick={handleDeleteAll}>
					Delete All ☆
				</FormButton>
			</FormContainer>
		</FormContainers>
	);
};

export default TodoForm;

const FormContainers = styled(Box)(() => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	width: "100%",
}));


const FormContainer = styled("form")(() => ({
	border: "1px solid",
	padding: "2rem",
	display: "flex",
	justifyContent: "center",
	flexDirection: "column",
	alignItems: "center",
	gap: "0.9rem",
	width: "23rem",
	boxShadow: "10px 10px 20px #babecc, -10px -10px 20px #ffffff",
}));

const InputContent = styled(TextField)(() => ({
	color: "white",
	width: "100%",
	border: "none",
	borderBottom: "1px solid white",
}));

const FormButton = styled(Button)(() => ({
	width: "100%",
}));