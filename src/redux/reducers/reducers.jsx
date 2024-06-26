const initialState = {
  forms: {}
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FORM': {
      const { formId, name } = action.payload;
      return {
        ...state,
        forms: {
          ...state.forms,
          [formId]: {
            id: formId,
            name: name,
            fields: []
          }
        }
      };
    }
    case 'REMOVE_FORM': {
      const { formId } = action.payload;
      const copyForms = { ...state.forms };
      delete copyForms[formId];
      return {
        ...state,
        forms: copyForms
      };
    }
    case 'ADD_FIELD': {
      const { formId, fieldName, placeholder, inputType, options } = action.payload;
      const currentForm = state.forms[formId];
      const newField = { fieldName, placeholder, inputType, options };
      const updatedFields = [...currentForm.fields, newField];
      return {
        ...state,
        forms: {
          ...state.forms,
          [formId]: {
            ...currentForm,
            fields: updatedFields
          }
        }
      };
    }
    case 'REMOVE_FIELD': {
      const { formId, index } = action.payload;
      return {
        ...state,
        forms: {
          ...state.forms,
          [formId]: {
            ...state.forms[formId],
            fields: state.forms[formId].fields.filter((_, i) => i !== index)
          }
        }
      };
    }
    case 'UPDATE_FIELD': {
      const { formId, index, fieldName, placeholder, inputType, options } = action.payload;
      const currentForm = state.forms[formId];
      const updatedFields = currentForm.fields.map((field, i) =>
        i === index ? { fieldName, placeholder, inputType, options } : field
      );
      return {
        ...state,
        forms: {
          ...state.forms,
          [formId]: {
            ...currentForm,
            fields: updatedFields
          }
        }
      };
    }
    default:
      return state;
  }
};

export default formReducer;
