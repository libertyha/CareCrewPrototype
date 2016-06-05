import { FETCH_PROGRESS_NOTES } from '../actions/index';

  var INITIAL_STATE = { progress_notes: [] };

  //  we need this format for code to work

  var request = {};


  request["progress_notes"] =
  [
    {id: '0',
     note_body: 'Previous progress note from a previous shift. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. ',
     updatedDate: 'May 23, 2016 11:00am',
     owner: 'Terry',
     photo: null,
     video: null
    },

    {id: '1',
     note_body: 'Previous progress note from a previous shift. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.',
     updatedDate: 'May 24, 2016 11:00am',
     owner: 'Phyliss',
     photo: null,
     video: null
    }
  ];

  // request["notifications"] =
  // [
  //   {id: '0', description: 'Rose fell in the kitchen', date_created: 'May 23, 2016 11:00am', owner: 'Linda'},
  //   {id: '1', description: 'Rose did not like the soup at lunch', date_created: 'May 23, 2016 3:00pm', owner: 'Linda'}
  // ];

export default function(state = INITIAL_STATE, action) {


  switch(action.type) {
  case FETCH_PROGRESS_NOTES:

    // return { ...state, all: action.payload };
    console.log("inside reducer_progress_notes");

    // var patientsProgressNotes = [];
    // patientsProgressNotes = action.payload.data.map(function(progressNote) {
    //     return (
    //       { id: progressNote._id,
    //         progressNote: progressNote.progressNote,
    //         createdDate: progressNote.createdDate,
    //         owner: 'Linda'
    //       }
    //     );
    // });

    // request["progress_notes"] = patientsProgressNotes;

    // return { progressnotes: request };
    return { form: state.form, shift: request, progressnotes: request };


  default:
    return state;
  }
}

