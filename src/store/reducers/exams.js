import { ADD_EXAM, UPDATE_EXAM, DELETE_EXAM, TOGGLE_EXAM, EDIT_EXAM, RESET_EDIT_EXAM } from '../../constants/index'

const INITIAL_STATE = {
    exams: [{ id: 0, text: 'Add new exams!', completed: false }],
    editedExam: { exam: { id: null, text: null, completed: null } }
}

const exams = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_EXAM:
            return { ...state, exams: [...state.exams, { id: action.id, text: action.text, completed: false }] }
        case TOGGLE_EXAM:
            return {
                ...state, exams: state.exams.map(exam =>
                    (exam.id === action.id)
                        ? {...exam, completed: !exam.completed}
                        : exam
                )
            }
        case UPDATE_EXAM:
            return {
                ...state, exams: state.exams.map(exam =>
                    (exam.id === action.id)
                        ? {...exam, text: action.text}
                        : exam
                )
            }
        case DELETE_EXAM:
            return {
                ...state, exams: state.exams.filter(exam =>
                    (exam.id !== action.id)
                )
            }
        case EDIT_EXAM:
            return {
                ...state, editedExam: { exam: action.exam }
            }
        case RESET_EDIT_EXAM:
            return {
                ...state, editedExam: { exam: { id: null, text: null, completed: null } }
            }
        default:
            return state
    }
}

export default exams