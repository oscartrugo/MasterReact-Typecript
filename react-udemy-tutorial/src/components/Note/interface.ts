import React from "react";
import { NoteDetails } from "../../store/reducers/NotesReducer";

type DivButtonClick = (event: React.MouseEvent<HTMLDivElement>) => void;

export interface NoteProps {
    onClickNote(note: NoteDetails):void;
    onClickCloseButton:(note: NoteDetails) => DivButtonClick;
    className?: string;
    note: NoteDetails;
}