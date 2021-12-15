export const usePrivilage = () => {
  const privilage = window.localStorage.getItem("privilage");
  const isStudentPrivilage = privilage === "student" ? true : false;
  const isTeacherPrivilage = privilage === "teacher" ? true : false;
  const isGuestPrivilage = privilage === "guest" ? true : false;
  const isAdminPrivilage = privilage === "admin" ? true : false;

  return {
    isAdminPrivilage,
    isGuestPrivilage,
    isStudentPrivilage,
    isTeacherPrivilage,
  };
};
