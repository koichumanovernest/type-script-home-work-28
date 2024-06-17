import { useSelector } from "react-redux";
import Todo from "./Todo";
import { Todo as TypeTodo,   } from "../store/todoSlice";
import { RootState } from "../store/store";

const TodoList = () => {
	const { todos } = useSelector((state: RootState) => state.todo);
	return (
		<div>
			{todos?.map((todo:TypeTodo) => (
				<Todo key={todo.id} {...todo} />
			))}
		</div>
	);
};

export default TodoList;
