import routes, { RouteType } from "../../Shared/route-config";
import { STUDENT_PROFILE_PAGE_ROUTE } from "../../Constant/routes-constants";

export function createPathnamesArray(fullPathname: string): string[] {
  return fullPathname.split("/").filter((p) => p);
}

export function checkIfPageIsProfile(fullPathname: string): boolean {
  const pathnames: string[] = createPathnamesArray(fullPathname);
  const containsId: boolean = !isNaN(+pathnames[1]);
  return (
    (pathnames[0] === "students" || pathnames[0] === "teachers") &&
    pathnames.length === 2 &&
    containsId
  );
}

export function createBreadcrumpsForUserName(
  shortPath: string,
  fullName: string
): RouteType | undefined {
  let route = routes.find(
    (route) => route.fullPath === STUDENT_PROFILE_PAGE_ROUTE
  );
  if (!route) return;
  if (!fullName)
    return {
      ...route,
      title: "Користувач не знайден",
    };
  return {
    ...route,
    title: fullName,
  };
}
