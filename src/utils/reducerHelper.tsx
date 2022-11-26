export const Status = 'SUCCESS' | 'REQUEST' | 'ERROR';
export function handleFetch(
  state: any,
  status: string,
  payload: { errors: any; data: any; pagination: any; }
  // many = true
) {
  const { errors, data, pagination } = payload;
  let newStatus = {};

  if (status === 'REQUEST') {
    newStatus = {
      success: false,
      processing: true,
      processed: false,
      errors: null
    };
  } else if (status === 'SUCCESS') {
    newStatus = {
      processing: false,
      processed: true,
      success: true,
      data: data || payload,
      pagination
    };
  } else {
    newStatus = {
      processing: false,
      processed: true,
      success: false,
      errors
    };
  }

  // if (key) {
  //   return {
  //     ...state,
  //     [key]: {
  //       ...state[key],
  //       ...newStatus,
  //     },
  //   };
  // }

  return {
    ...state,
    ...newStatus
  };
}

export function extractStatus(type: string) {
  let status = type.split('_').pop();

  if (status !== 'ERROR' && status !== 'SUCCESS') {
    status = 'REQUEST';
  }

  return status;
}

/**
 * This creates a success, request and error action for the specified action name
 * This makes creating action types a lot easier and less repetitive.
 * @param name The name of the action
 */
export function createActionType(name: any) {
  return {
    request: `${name}_REQUEST`,
    success: `${name}_SUCCESS`,
    error: `${name}_ERROR`
  };
}
