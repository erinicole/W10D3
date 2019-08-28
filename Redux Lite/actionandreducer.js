
// action and reducer one about lunch
const lunchAction = {
  type: 'change lunch',
  newLunch: 'apple'
}

const lunchReducer = ( oldLunch = null, action) =>{
  if(action.type === 'change lunch') {
    return action.newLunch;
  } else {
    return oldLunch;
  }
};

// action and reducer one about sleep
const sleepyAction = {
  type: 'change sleep',
  newSleep: 'true'
}

const lunchReducer = (oldSleep = null, action) =>{
  if (action.type === 'change sleep') {
    return action.newSleep;
  } else {
    return oldSleep;
  }
};

// action and reducer one about study

const studyAction = {
  type: 'change study',
  newStudy: 'always'
}

const studyReducer = (oldStudy = null, action) =>{
  if (action.type === 'change study') {
    return action.newStudy;
  } else {
    return oldStudy;
  }
};