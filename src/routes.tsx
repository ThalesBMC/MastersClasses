import React from "react"
import {BrowserRouter, Route} from "react-router-dom"
import Landing from "./pages/landing-page"
import TeacherList from "./pages/teacherlist"
import TeacherForm from "./pages/teacherform/teacherform"

function Routes(){
    return(
       <BrowserRouter>
        <Route exact path="/" component={Landing}/>
        <Route  path="/study" component={TeacherList}/>
        <Route  path="/give-classes" component={TeacherForm}/>
       </BrowserRouter>
    )
}
export default Routes