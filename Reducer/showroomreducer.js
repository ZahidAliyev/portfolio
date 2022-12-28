
export const SHOWROOM_ACTIONS = {
    SHOWROOM_PROFILE: 'show Profile',
    SHOWROOM_ABOUT: 'show About',
    SHOWROOM_WORK: 'show Work',
    SHOWROOM_CONTENT_ISSAME: 'Content stays same',
    SHOWROOM_CONTENT_UPDATE: 'Content should change',
    SHOWROOM_UPDATES: 'Update Show Room',
}
export const initial_state = {
    showRoom: "Profile",
    shouldContentChange: false,
    roomUpdatingTriggered: false,
    workId: null,
  }

export function reducer(state, action) {
    switch (action.type) {
      case 'show Profile':
        return {...state, showRoom: "Profile"}
        break;
        case 'show About':
          return {...state, showRoom: "About"}
  
          break;
          case 'show Work':
            return {...state, showRoom: "Work", workId: action.payload.id}
            break;
            case 'Content stays same':
          return {...state, shouldContentChange: false}
            break;
            case 'Content should change':
              return {...state, shouldContentChange: true}
  
              break;
            case 'Update Show Room':
              return {...state, roomUpdatingTriggered: true}
  
              break;
      default:
        return state;
        break;
    }
  }
  
  export default reducer;