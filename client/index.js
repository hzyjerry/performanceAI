import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from '../common/store/configureStore'
import '../common/stubs/COURSES'

import getRoutes from '../common/routes/routes'

import { Route, Router, browserHistory } from 'react-router'

/*
const rootRoute = {
  childRoutes: [ {
    path: '/',
    component: require('../common/components/App'),
    childRoutes: [
      require('../common/routes/Calendar'),
      require('../common/routes/Course'),
      require('../common/routes/Grades'),
      require('../common/routes/Messages'),
      require('../common/routes/Profile'),
      require('../common/routes/Dashboard'),
      require('../common/routes/Memory'),
      require('../common/routes/Network'),
      require('../common/routes/Summary'),
      require('../common/routes/TPS'),
      require('../common/routes/Upload'),
      require('../common/routes/About')
    ]
  } ]
}
*/


const preloadedState = window.__PRELOADED_STATE__
const store = configureStore(preloadedState)
const rootElement = document.getElementById('wrapper')

/*
render(
  <Provider store={store}>
    <App/>
  </Provider>,
  rootElement
)
*/

const component = (
  <Router history={browserHistory}>
    {getRoutes(store)}
  </Router>
);


render(
  <Provider store={store} key="provider">
    {component}
  </Provider>, 
  rootElement)


/*render((
  <Dashboard/>
), document.getElementById('page-content'))
*/







// import { Route } from 'react-router'

// import App from './components/App'
// import Course from './routes/Course/components/Course'
// import AnnouncementsSidebar from './routes/Course/routes/Announcements/components/Sidebar'
// import Announcements from './routes/Course/routes/Announcements/components/Announcements'
// import Announcement from './routes/Course/routes/Announcements/routes/Announcement/components/Announcement'
// import AssignmentsSidebar from './routes/Course/routes/Assignments/components/Sidebar'
// import Assignments from './routes/Course/routes/Assignments/components/Assignments'
// import Assignment from './routes/Course/routes/Assignments/routes/Assignment/components/Assignment'
// import CourseGrades from './routes/Course/routes/Grades/components/Grades'
// import Calendar from './routes/Calendar/components/Calendar'
// import Grades from './routes/Grades/components/Grades'
// import Messages from './routes/Messages/components/Messages'

// render(
//   <Router>
//     <Route path="/" component={App}>
//       <Route path="calendar" component={Calendar} />
//       <Route path="course/:courseId" component={Course}>
//         <Route path="announcements" components={{
//           sidebar: AnnouncementsSidebar,
//           main: Announcements
//         }}>
//           <Route path=":announcementId" component={Announcement} />
//         </Route>
//         <Route path="assignments" components={{
//           sidebar: AssignmentsSidebar,
//           main: Assignments
//         }}>
//           <Route path=":assignmentId" component={Assignment} />
//         </Route>
//         <Route path="grades" component={CourseGrades} />
//       </Route>
//       <Route path="grades" component={Grades} />
//       <Route path="messages" component={Messages} />
//       <Route path="profile" component={Calendar} />
//     </Route>
//   </Router>,
//   document.getElementById('example')
// )