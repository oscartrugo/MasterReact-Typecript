import React from 'react';
import { connect, MapDispatchToPropsFunction, MapStateToProps } from 'react-redux';
import { Button } from '../../components/Button';
import { ManageNoteModal } from '../../components/ManageNoteModal';
import { APP_NOTE_ACTIONS } from '../../components/ManageNoteModal/constant';
import { Note } from '../../components/Note';
import { PromptModal } from '../../components/PromptModal';
import { ViewNoteModal } from '../../components/ViewNoteModal';
import { NotesAction } from '../../store/actions/NotesAction';
import { NoteDetails } from '../../store/reducers/NotesReducer';
import { StoreStateType } from '../../store/rootReducer';
import { AppNoteAction, HomePageDispatchProps, HomePageOwnProps, HomePageProps, HomePageState, HomePageStateProps } from './interface';

class HomePage extends React.Component<HomePageProps, HomePageState> {
    constructor(props: HomePageProps) {
        super(props);

        this.state = {
            selectedNote: null,
            currentAppNoteAction: null,
        }
    }

    handleClickNote = (note: NoteDetails) => {
        this.setState({
            selectedNote: note,
            currentAppNoteAction: APP_NOTE_ACTIONS.VIEW_NOTE,
        });
    }

    handleClickCloseButton = (note: NoteDetails) => (event: React.MouseEvent<HTMLDivElement>) => {
        this.setState({
            selectedNote: note,
            currentAppNoteAction: APP_NOTE_ACTIONS.DELETE_NOTE,
        });

        event.preventDefault();
    }

    handleDeleteNote = () => {
        const { selectedNote } = this.state;

        selectedNote && this.props.deleteNote(selectedNote.id);

        this.setState({
            selectedNote: null,
            currentAppNoteAction: null,
        });
    }

    renderNotes = () => {
        const { notes } = this.props;

        return (
            <div>
                {notes.map((note, index) => {
                    const evenIndexClassName = index % 2 === 0 ? 'even' : 'odd';
                    return (
                        <Note
                            onClickNote={this.handleClickNote}
                            onClickCloseButton={this.handleClickCloseButton}
                            note={note}
                            className={evenIndexClassName}
                        />
                    )
                })}
            </div>
        )
    }

    handleEditNote = () => {
        this.setState({
            currentAppNoteAction: APP_NOTE_ACTIONS.EDIT_NOTE,
        });
    }

    handleAddNoteButtonClick = () => {
        this.setState({
            selectedNote: null,
            currentAppNoteAction: APP_NOTE_ACTIONS.ADD_NOTE,
        });
    }

    handleCloseModal = () => {
        this.setState({
            selectedNote: null,
            currentAppNoteAction: null,
        })
    }

    handleManageNote = (note: NoteDetails) => {
        this.handleCloseModal();

        this.props.manageNote(note);
    }

    render() {
        const { selectedNote, currentAppNoteAction } = this.state;

        let ModalComponent: React.ReactNode;

        switch (currentAppNoteAction) {
            case APP_NOTE_ACTIONS.VIEW_NOTE:
                ModalComponent = (
                    <ViewNoteModal
                        onEditNote={this.handleEditNote}
                        note={selectedNote as NoteDetails}
                        onClickOutsideModalBody={this.handleCloseModal}
                    />
                );
                break;
            case APP_NOTE_ACTIONS.ADD_NOTE:
            case APP_NOTE_ACTIONS.EDIT_NOTE:
                ModalComponent = (
                    <ManageNoteModal
                        currentAppNoteAction={currentAppNoteAction as AppNoteAction}
                        manageNote={this.handleManageNote}
                        onClickOutsideModalBody={this.handleCloseModal}
                        note={selectedNote}
                    />
                );
                break;
            case APP_NOTE_ACTIONS.DELETE_NOTE:
                ModalComponent = (
                    <PromptModal
                        onYesClick={this.handleDeleteNote}
                        onNoClick={this.handleCloseModal}
                        questionText={`Are you sure you want to delete "${selectedNote?.title}" note?`}
                    />
                );

                break;
            default:
                ModalComponent = null;

        }

        return (
            <div className="home-page">
                <h1>My Notes</h1>
                {this.renderNotes()}
                <br />
                <Button type="primary" onClick={this.handleAddNoteButtonClick}>Add Note</Button>
                {currentAppNoteAction && ModalComponent}
            </div>
        )
    }
}

const mapStateToProps: MapStateToProps<HomePageStateProps, HomePageOwnProps, StoreStateType> = ({ notes }) => {
    return {
        notes,
    };
}

const mapDispatchToProps: MapDispatchToPropsFunction<HomePageDispatchProps, HomePageOwnProps> = (dispatch) => {
    const { manageNote, deleteNote } = new NotesAction();

    return {
        manageNote: (note) => dispatch(manageNote(note)),
        deleteNote: (noteId) => dispatch(deleteNote(noteId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);