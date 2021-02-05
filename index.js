function imageAutoUpload() {
  sheet.setRowHeights(1, 1000, 720);
  sheet.setColumnWidths(1, 1, 1200);
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const folder = DriveApp.getFolderById(FOLDER_ID);
  const files = folder.getFiles();
  let row = 1;
  while (files.hasNext()) {
    
    
    const file = files.next();
    const filename = file.getName();
    console.log(filename);
    const image = file.getBlob();
    
    sheet.insertImage(imageUrl, row, 1);
    row++;
  }
  return;
}
