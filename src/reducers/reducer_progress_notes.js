import { FETCH_PROGRESS_NOTES } from '../actions/index';

  var INITIAL_STATE = { progress_notes: [] };

  //  we need this format for code to work

  var request = {};

   //   June 6, 2016   progress_notes layout
   // {
   //  _id: "57539bf93e0ca41a00d49323",
   //  description: "someProgressNote123",
   //  creatorId: "57539bf83e0ca41a00d4930f",
   //  patientId: "57539bf83e0ca41a00d49311",
   //  __v: 0,
   //  updatedDate: "2015-06-02T00:00:00.000Z",
   //  createdDate: "2015-06-02T00:00:00.000Z",
   //  tags: [ ]
   //  },


  request =
  [
    {id: '0',
     description: 'Previous progress note from a previous shift. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. ',
     updatedDate: 'May 23, 2016 11:00am',
     creatorId: 'Terry',
     photo: null,
     video: null,
     dirty: false
    },

    {id: '1',
     description: 'Previous progress note from a previous shift. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.',
     updatedDate: 'May 24, 2016 11:00am',
     creatorId: 'Phyliss',
     photo: null,
     video: null,
     dirty: false
    },

    {id: '2',
     description: 'Previous progress note from a previous shift. Est orci et, faucibus morbi. Lacus elit luctus itaque. Imperdiet est orci enim magna iaculis, ut eget id. Aliquet proin rutrum tempor praesent vel. Ipsum eu risus class vitae, fringilla lectus suspendisse vulputate lacus massa ac, odio mollis aliquet arcu mi orci eu. Id lobortis eget gravida wisi eget eu. Sodales molestie pariatur nec quis mauris sed, sodales ac ultricies mattis magna. Auctor scelerisque arcu mi. Nisl morbi sem turpis, wisi phasellus dui eu sagittis dui nostra.',
     updatedDate: 'May 24, 2016 11:00am',
     creatorId: 'Phyliss',
     photo: null,
     video: null,
     dirty: false
    }
  ];

  // request["notifications"] =
  // [
  //   {id: '0', description: 'Rose fell in the kitchen', date_created: 'May 23, 2016 11:00am', creatorId: 'Linda'},
  //   {id: '1', description: 'Rose did not like the soup at lunch', date_created: 'May 23, 2016 3:00pm', creatorId: 'Linda'}
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
    //         description: progressNote.description,
    //         createdDate: progressNote.createdDate,
    //         creatorId: 'Linda'
    //       }
    //     );
    // });

    // request["progress_notes"] = patientsProgressNotes;

    // return { progressnotes: request };

    // test whether action comes from actions/index.js addProgressNoteToGlobalState
    //     var request = { addprogressnote: true, progressNote: progressNote };

    var result = {};
    var tempArray = [];

    if (action.payload.addprogressnote) {

      // action.payload =  {
      //  addprogressnote: true,
      //  progressNote: progressNote
      // };
      var progressNote = action.payload.progressNote;

      var tempProgressNote = {
         id: progressNote._id,
         description: progressNote.description,
         updatedDate: progressNote.updatedDate,
         creatorId: progressNote.creatorId,
         patientId: progressNote.patientId,
         photo: null,
         video: null,
         dirty: true
      };

      tempArray = state.progress_notes.concat(action.payload.progressNote);
      result = { form: state.form, shift: request, progress_notes: tempArray };
    } else {

      tempArray = action.payload.data.map(function(progressNote){

        return {
           id: progressNote._id,
           description: progressNote.description,
           updatedDate: progressNote.updatedDate,
           creatorId: progressNote.creatorId,
           patientId: progressNote.patientId,
           photo: null,
           video: null,
           dirty: false
          };

      });

      result = { form: state.form, shift: request, progress_notes: tempArray };
    }

    return result;


  default:
    return state;
  }
}

