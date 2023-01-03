import React from "react";
import "../styles/UpdatePage.css";
import Header from "../layout/Header";
import { useState, useEffect } from "react";
import reactDom from "react-dom";
import { hydrate } from "react-dom";
// import SideBar from "../layout/SideBar";

const UpdatePage = ()  => {

    var fuoye = {
        science : {
            biochemistry : {
                level_100 : {
                    first: ["BCH 101", "BCH 103", "BCH 105", "BCH 107", "BCH 109","BCH 311"],
                    second: ["BCH 102", "BCH 104", "BCH 106", "BCH 108", "BCH 110"]
                },
                level_200 : {
                    first: ["BCH 201", "BCH 203", "BCH 205", "BCH 207", "BCH 209"],
                    second: ["BCH 202", "BCH 204", "BCH 206", "BCH 208", "BCH 210"]
                },
                level_300 : {
                    first: ["BCH 301", "BCH 303", "BCH 305", "BCH 307", "BCH 309"],
                    second: ["BCH 302", "BCH 304", "BCH 306", "BCH 308", "BCH 310"]
                },
                level_400 : {
                    first: ["BCH 401", "BCH 403", "BCH 405", "BCH 407", "BCH 409"],
                    second: ["BCH 402", "BCH 404", "BCH 406", "BCH 408", "BCH 410","BCH 412"]
                }
            },
            microbiology : {
                level_100 : {
                    first: ["MCB 101", "MCB 103", "MCB 105", "MCB 107", "MCB 109","GEO 111"],
                    second: ["MCB 102", "MCB 104", "MCB 106", "MCB 108", "MCB 110"]
                },
                level_200 : {
                    first: ["MCB 201", "MCB 203", "MCB 205", "MCB 207", "MCB 209"],
                    second: ["MCB 202", "MCB 204", "MCB 206", "MCB 208", "MCB 210"]
                },
                level_300 : {
                    first: ["MCB 301", "MCB 303", "MCB 305", "MCB 307", "MCB 309"],
                    second: ["MCB 302", "MCB 304", "MCB 306", "MCB 308", "MCB 310"]
                },
                level_400 : {
                    first: ["MCB 401", "MCB 403", "MCB 405", "MCB 407", "MCB 409"],
                    second: ["MCB 402", "MCB 404", "MCB 406", "MCB 408", "MCB 410"]
                }
            },
            geology : {
                level_100 : {
                    first: ["GEO 101", "GEO 103", "GEO 105", "GEO 107", "GEO 109","GEO 111"],
                    second: ["GEO 102", "GEO 104", "GEO 106", "GEO 108", "GEO 110"]
                },
                level_200 : {
                    first: ["GEO 201", "GEO 203", "GEO 205", "GEO 207", "GEO 209"],
                    second: ["GEO 202", "GEO 204", "GEO 206", "GEO 208", "GEO 210"]
                },
                level_300 : {
                    first: ["GEO 301", "GEO 303", "GEO 305", "GEO 307", "GEO 309"],
                    second: ["GEO 302", "GEO 304", "GEO 306", "GEO 308", "GEO 310"]
                },
                level_400 : {
                    first: ["GEO 401", "GEO 403", "GEO 405", "GEO 407", "GEO 409"],
                    second: ["GEO 402", "GEO 404", "GEO 406", "GEO 408", "GEO 410"]
                }
            }
        },
        art : {
            tma : {
                level_100 : {
                    first: ["TMA 101", "TMA 103", "TMA 105", "TMA 107", "TMA 109","TMA 311"],
                    second: ["TMA 102", "TMA 104", "TMA 106", "TMA 108", "TMA 110"]
                },
                level_200 : {
                    first: ["TMA 201", "TMA 203", "TMA 205", "TMA 207", "TMA 209"],
                    second: ["TMA 202", "TMA 204", "TMA 206", "TMA 208", "TMA 210"]
                },
                level_300 : {
                    first: ["TMA 301", "TMA 303", "TMA 305", "TMA 307", "TMA 309"],
                    second: ["TMA 302", "TMA 304", "TMA 306", "TMA 308", "TMA 310"]
                },
                level_400 : {
                    first: ["TMA 401", "TMA 403", "TMA 405", "TMA 407", "TMA 409"],
                    second: ["TMA 402", "TMA 404", "TMA 406", "TMA 408", "TMA 410","TMA 412"]
                }
            },
            linguistic : {
                level_100 : {
                    first: ["LIN 101", "LIN 103", "LIN 105", "LIN 107", "LIN 109","ELS 111"],
                    second: ["LIN 102", "LIN 104", "LIN 106", "LIN 108", "LIN 110"]
                },
                level_200 : {
                    first: ["LIN 201", "LIN 203", "LIN 205", "LIN 207", "LIN 209"],
                    second: ["LIN 202", "LIN 204", "LIN 206", "LIN 208", "LIN 210"]
                },
                level_300 : {
                    first: ["LIN 301", "LIN 303", "LIN 305", "LIN 307", "LIN 309"],
                    second: ["LIN 302", "LIN 304", "LIN 306", "LIN 308", "LIN 310"]
                },
                level_400 : {
                    first: ["LIN 401", "LIN 403", "LIN 405", "LIN 407", "LIN 409"],
                    second: ["LIN 402", "LIN 404", "LIN 406", "LIN 408", "LIN 410"]
                }
            },
            els : {
                level_100 : {
                    first: ["ELS 101", "ELS 103", "ELS 105", "ELS 107", "ELS 109","ELS 111"],
                    second: ["ELS 102", "ELS 104", "ELS 106", "ELS 108", "ELS 110"]
                },
                level_200 : {
                    first: ["ELS 201", "ELS 203", "ELS 205", "ELS 207", "ELS 209"],
                    second: ["ELS 202", "ELS 204", "ELS 206", "ELS 208", "ELS 210"]
                },
                level_300 : {
                    first: ["ELS 301", "ELS 303", "ELS 305", "ELS 307", "ELS 309"],
                    second: ["ELS 302", "ELS 304", "ELS 306", "ELS 308", "ELS 310"]
                },
                level_400 : {
                    first: ["ELS 401", "ELS 403", "ELS 405", "ELS 407", "ELS 409"],
                    second: ["ELS 402", "ELS 404", "ELS 406", "ELS 408", "ELS 410"]
                }
            }
        }
    }

    var [name, setName] = useState('');
    var [dept, setDept] = useState('');

    

         {/* <select name="Department" id="update_dept_input" className="update_dept_input update_select_all" 
         onChange={ e => setName(e.target.value)}>
                             <option value="biochemistry">Biochemistry</option>
                             <option value="microbiology">Micro Biology</option>
                             <option value="geology">Geology</option>
                         </select> */}


    
   
    

    console.log(fuoye.science.biochemistry.level_100.first);

    useEffect( () => {
        document.title = `Name of course is ${name}`
    })

    var hey = () => {
        setDept(place())
    } 

    // function go() {
    //     setDept(place());
    // }

    function place() {
        var okay = document.getElementById("update_faculty_input").value;
        var whole = fuoye[okay]
        console.log(whole);

        const optionDept1 = React.createElement('option', {value: whole[0]}, whole[0]);
        const optionDept2 = React.createElement('option', {value: "microbiology"}, 'Microbiology');
        const optionDept3 = React.createElement('option', {value: "geology"}, 'Geology');
        
        const selectDept = React.createElement('select', {
            name: "Department",
            id: "update_dept_input",
            className: "update_dept_input update_select_all"
        }, [optionDept1, optionDept2, optionDept3]);

        return selectDept;
    
    }

    // function placeDept(faculty) {
    //     var select = document.createElement('select');
    //     select.setAttribute('name', "Department");
    //     select.setAttribute('id', "update_dept_input");
    //     select.setAttribute('class', "update_dept_input update_select_all");
    //     select.setAttribute('onchange', "checkAll()");
    //     for (var i = 0; i < Object.keys(faculty).length; i++) {
    //         var option = document.createElement('option');
    //         var text = Object.keys(faculty);
    //         option.setAttribute('value', Object.keys(faculty)[i]);
    //         option.textContent = text[i].toUpperCase();
    //          select.append(option);
    
    //     }
    //     return select
    // }


  return (
    <div className="">
        <Header />

        <main className="container">

          <div className="main_hero">

            <h1 className="update_form_header">Update</h1>

            <form action="#" id="update_form" className="update_form">

              <div className="">

                  <label className="update_picture update_all">Profile Pic</label>
                  <input type="file" className="update_picture_input" />
                  
              </div>

                    <div>
                        <label className="update_firstname update_all">First Name:</label>
                         <input type="text" className="update_firstname_input update_input_all" id="update_firstname_input" />
                    </div>
                    <div>
                        <label className="update_lastname update_all">Last Name:</label>
                         <input type="text" className="update_lastname_input update_input_all" id="update_lastname_input" />
                    </div>
                    <div>
                        <label className="update_email update_all">Email:</label>
                         <input type="email" className="update_email_input update_input_all" id="update_email_input" />
                    </div>
                    <div>
                        <label className="update_dob update_all">Date Of Birth:</label>
                         <input type="date" className="update_dob_input update_input_all" id="update_dob_input" />
                    </div>
                    <div>
                        <label className="update-phone update_all">Phone no.</label>
                        <input type="phone" className="update_phone_input update_input_all" />
                    </div>
                    <div>
                        <label className="update_mat_no update_all">Mat No:</label>
                         <input type="text" placeholder="sss/ssss/ssss" className="update_mat_no_input update_input_all" id="update_mat_no_input" />
                    </div>

                    <div>
                        <label className="update_faculty update_all">Faculty:</label>
                         <select name="Faculty" id="update_faculty_input" className="update_faculty_input update_select_all"  onChange={hey}  >
                             {/* <option value=""></option> */}
                             <option value="science">science</option>
                             <option value="art">Art</option>
                         </select>
                    </div>
                    <div id="departmentWrapper">
                        <label className="update_dept update_all">Department:</label>
                         {/* <select name="Department" id="update_dept_input" className="update_dept_input update_select_all" onChange={ e => setName(e.target.value)}>
                             <option value="biochemistry">Biochemistry</option>
                             <option value="microbiology">Micro Biology</option>
                             <option value="geology">Geology</option>
                         </select> */}
                         {dept}
                    </div>
                    <div>
                        <label className="update_level update_all">Level:</label>
                         <select name="Level" id="update_level_input" className="update_level_input update_select_all">
                             <option value="100">100 Level</option>
                             <option value="200">200 Level</option>
                             <option value="300">300 Level</option>
                             <option value="400">400 Level</option>
                         </select>
                    </div>
                    <div>
                        <label className="update_semester update_all">Semester:</label>
                         <select name="semester" id="update_semester_input" className="update_semester_input update_select_all" onchange="checkAll()">
                             <option value="first">First Semester</option>
                             <option value="second">Second Semester</option>
                         </select>
                    </div>
                    <div className="course_selection course_section" id="course_selection"> <span>Course Selection</span>
                        <div className="course_100 course_list_section" id="course_100">
                            <h2 className="course_headers">100L Course</h2>
                            {/* <!-- <div>
                                <label for="" class="400_course_check each_course"><input type="checkbox" value="BCH 401">BCH 401</label>
                                <label for="" class="400_course_check each_course"><input type="checkbox" value="BCH 401">BCH 402</label>
                                <label for="" class="400_course_check each_course"><input type="checkbox" value="BCH 401">BCH 403</label>
                                <label for="" class="400_course_check each_course"><input type="checkbox" value="BCH 401">BCH 404</label>
                                <label for="" class="400_course_check each_course"><input type="checkbox" value="BCH 401">BCH 405</label>
                            </div> --> */}
                            <div>{name}</div>
                        </div>
                        <div className="course_200 course_list_section" id="course_200">
                            <h2 className="course_headers">200L Course</h2>
                            {/* <!-- <div>
                                <label for="" class="400_course_check each_course"><input type="checkbox" value="BCH 401">BCH 401</label>
                                <label for="" class="400_course_check each_course"><input type="checkbox" value="BCH 401">BCH 402</label>
                                <label for="" class="400_course_check each_course"><input type="checkbox" value="BCH 401">BCH 403</label>
                                <label for="" class="400_course_check each_course"><input type="checkbox" value="BCH 401">BCH 404</label>
                                <label for="" class="400_course_check each_course"><input type="checkbox" value="BCH 401">BCH 405</label>
                            </div> --> */}
                        </div>
                        <div className="300_course course_list_section" id="course_300">
                            <h2 className="course_headers">300L Course</h2>
                            {/* <!-- <div>
                                <label for="" class="400_course_check each_course">BCH 401<input type="checkbox" value="BCH 401"></label>
                                <label for="" class="400_course_check each_course">BCH 402<input type="checkbox" value="BCH 401"></label>
                                <label for="" class="400_course_check each_course">BCH 403<input type="checkbox" value="BCH 401"></label>
                                <label for="" class="400_course_check each_course">BCH 404<input type="checkbox" value="BCH 401"></label>
                                <label for="" class="400_course_check each_course">BCH 405<input type="checkbox" value="BCH 401"></label>
                            </div> --> */}
                        </div>
                        <div className="400_course course_list_section" id="course_400">
                            <h2 className="course_headers">400L Course</h2>
                            {/* <!-- <div>
                                <label for="" class="400_course_check each_course">BCH 401<input type="checkbox" value="BCH 401"></label>
                                <label for="" class="400_course_check each_course">BCH 402<input type="checkbox" value="BCH 401"></label>
                                <label for="" class="400_course_check each_course">BCH 403<input type="checkbox" value="BCH 401"></label>
                                <label for="" class="400_course_check each_course">BCH 404<input type="checkbox" value="BCH 401"></label>
                                <label for="" class="400_course_check each_course">BCH 405<input type="checkbox" value="BCH 401"></label>
                            </div> --> */}
                        </div>
                    </div>
                    <input type="submit" value="Update" className="update_button" id="update_button" />
                

            </form>

          </div>

        </main>

        <footer>
            <p class="footer">&copy 2021 Che. All Rights Reserved.</p>
        </footer>
          
    </div>
  );
}

export default UpdatePage;