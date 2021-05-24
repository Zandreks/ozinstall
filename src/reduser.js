export default function (state, action) {
    switch (action.type) {
        case 'onchangeContacts':
            state.contacts = action.data

            return {
                ...state,
            }
        case 'onchangeCovid':
            state.covid = action.data

            return {
                ...state,
            }

        default:
            return state
    }
}
// case 'add':
//     return [
//         ...state,
//         {
//             id: Date.now(),
//             title: action.payload,
//             completed: false
//         }
//     ]

// case 'remove':
//     return state.filter(todo => todo.id !== action.payload)
