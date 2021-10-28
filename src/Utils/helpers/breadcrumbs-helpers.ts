import IPathnamesProperties from '../../Types/IPathnamesProperties';

export function createPathnamesArray(fullPathname: string): string[] {
  return fullPathname.split('/').filter((p) => p);
}

export function checkIfPageIsProfile(fullPathname: string): boolean {
  const pathnames: string[] = createPathnamesArray(fullPathname);
  const containsId: boolean = !isNaN(+pathnames[1]);
  return (pathnames[0] === ('students') || pathnames[0] === ('teachers'))
    && pathnames.length === 2 && containsId;
}

export function createBreadcrumpsForUserName (path: string, fullName: string): IPathnamesProperties {
  if (!fullName) return {
    path,
    title: 'Користувач не знайден',
    icon: null
  };
  return {
    path,
    title: fullName,
    icon: null
  };
}