// menu urls are also used as key
const AppMenuKeys = {
    homeSubMenu:"home",
    dashBoard:"/home",
    studentSubMenu:"students",
    studentList:"/students",
    editStudent:"/students/editstudent",
    studentSelection: "/students/selections",
    courseSubMenu: "course",
    courseList:"/course",
    editCourse:"/course/editcourse",
    courseType: "/course/coursetype",
    teacherSubMenu:"manager",
    teacherList:"/teacher",
    managerSubMenu:"manager",
    managerList:"/manager",
    roleSubMenu:"role",
    roleList:"/role",
    settingSubMenu:"settings",
    settingPassword:"/settings",
};
// -?-
const PermittedMenus = {
    dashBoard:"-dashboard",
    studentList:"-student-list",
    studentEdit:"-student-edit",
    studentSelection:"-student-selection",
    courseList:"-course-list",
    courseEdit:"-course-edit",
    courseTypeList:"-course-type-list",
    teacherList:"-teacher-list",
    managerList:"-manager-list",
    roleList:"-role-list",
    password:"-password",
};

const PermittedMenuMapToMenuKey = {
    [PermittedMenus.dashBoard] : AppMenuKeys.dashBoard,
    [PermittedMenus.studentList] : AppMenuKeys.studentList,
    [PermittedMenus.studentSelection]: AppMenuKeys.studentSelection,
    [PermittedMenus.courseList]: AppMenuKeys.courseList,
    [PermittedMenus.courseEdit]: AppMenuKeys.courseEdit,
    [PermittedMenus.courseTypeList]: AppMenuKeys.courseTypeList,
    [PermittedMenus.teacherList]: AppMenuKeys.teacherList,
    [PermittedMenus.managerList]: AppMenuKeys.managerList,
    [PermittedMenus.roleList]:AppMenuKeys.roleList,
    [PermittedMenus.password]:AppMenuKeys.settingPassword
};
 const getHomeMenus = () =>{
     return [PermittedMenus.dashBoard];
 };

 const getStudentMenus = () =>{
     return [PermittedMenus.studentEdit, PermittedMenus.studentSelection, PermittedMenus.studentList];
 };

 const getCourseMenus = () =>{
    return [PermittedMenus.courseEdit, PermittedMenus.courseList, PermittedMenus.courseTypeList];
 };

 const getTeacherMenus = () => {
     return [PermittedMenus.teacherList];
 }

 const getManagerMenus = () =>{
     return [PermittedMenus.managerList];
 }
 const getRoleMenus =() =>{
     return [PermittedMenus.roleList];
 }
 const getSettingMenus =() =>{
     return [PermittedMenus.password];
 };
 const getMenuByKey = (key) =>{
     let menus = [];
     if(key ===AppMenuKeys.homeSubMenu){
         menus = getHomeMenus();
     } else if (key === AppMenuKeys.studentSubMenu) {
         menus = getStudentMenus();
     } else if (key === AppMenuKeys.courseSubMenu) {
         menus = getCourseMenus();
     } else if (key === AppMenuKeys.teacherSubMenu){
         menus = getTeacherMenus();
     } else if (key === AppMenuKeys.managerSubMenu){
         menus = getManagerMenus();
     }else if (key === AppMenuKeys.roleSubMenu){
         menus = getRoleMenus();
     } else if(key === AppMenuKeys.settingSubMenu){
         menus = getSettingMenus();
     }
     return menus;
 };

 const shouldSubMenuVisible = (subMenuKey, permittedMenus) =>{
     let menus = getMenuByKey(subMenuKey);
     let visible = menus.some ((item) => {
         return permittedMenus.includes(item);
     });
     return visible;
 };

 const convertPermittedMenuToMenuKeys = (permittedMenus) => {
     let menus = [];
     permittedMenus.forEach((item) => {
         const menu = PermittedMenuMapToMenuKey[item];
         menus.push(menu);
     })
     return menus;
 };

 const shouldMenItemVisible = (menuItemKey, permittedMenus) =>{
     let menus = convertPermittedMenuToMenuKeys(permittedMenus);
     let visible = menus.includes(menuItemKey);
     return visible;
 };

 export { AppMenuKeys, PermittedMenus, PermittedMenuMapToMenuKey, shouldSubMenuVisible, shouldMenItemVisible};