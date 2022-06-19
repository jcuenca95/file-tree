export function getExtensionFromFileName(fileName:string) {
    const fileNameSplitted = fileName.split('.');
    return fileNameSplitted[fileNameSplitted.length - 1];
}