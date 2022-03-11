import { AppNoteAction } from "../../containers/HomePage/interface";
import { NoteDetails } from "../../store/reducers/NotesReducer";

export interface ViewNoteModalProps {
    note: NoteDetails;
    onClickOutsideModalBody(): void;
    onEditNote(): void;
}
