import { AppNoteAction } from "../../containers/HomePage/interface";
import { NoteDetails } from "../../store/reducers/NotesReducer";

export interface ManageNoteModalProps {
    note: NoteDetails | null;
    onClickOutsideModalBody(): void;
    manageNote(note: NoteDetails): void;
    currentAppNoteAction: AppNoteAction;
}

export interface ManageNoteModalState {
    title: string;
    content: string;
}

export interface AppNoteActions {
    [key: string]: AppNoteAction;
}